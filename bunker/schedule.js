const { fs, colors, time: oldTime, date: oldDate } = require('../configs/imports/consts.js');

// --- Configurações e Constantes ---
process.env.TZ = 'America/Sao_Paulo'; // Garante o fuso horário correto.

const LOG_PREFIX = colors.cyan('[ANNA-SCHEDULER]');
const ERROR_PREFIX = colors.red('[ANNA-SCHEDULER-ERROR]');
const CACHE_DURATION_MS = 30 * 60 * 1000; // 30 minutos
const SCHEDULE_DIR = './bunker/database/grupos/schedule';
const CHECK_INTERVAL_MS = 60 * 1000; // 1 minuto

// --- Cache de Grupos ---
let cachedGroups = null;
let lastCacheTime = 0;

/**
 * Retorna data e hora formatadas para logs. Corrige o bug de data/hora estática.
 * @returns {{date: string, time: string}}
 */
function getFormattedDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('pt-BR');
    const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    return { date, time };
}

/**
 * Atualiza o estado de um grupo (aberto/fechado) e notifica no chat.
 * @param {object} anna - A instância do cliente Baileys.
 * @param {string} groupId - O ID do grupo a ser modificado.
 * @param {'aberto' | 'fechado'} targetState - O estado desejado.
 * @returns {Promise<boolean>} - Retorna true em caso de sucesso.
 */
async function updateGroupState(anna, groupId, targetState) {
    const { time } = getFormattedDateTime();
    const action = targetState === 'aberto' ? 'not_announcement' : 'announcement';
    const message = targetState === 'aberto'
        ? `🔓 Grupo aberto às ${time}! Todos podem enviar mensagens.`
        : `🔒 Grupo fechado às ${time}! Apenas administradores podem enviar mensagens.`;

    try {
        await anna.groupSettingUpdate(groupId, action);
        await anna.sendMessage(groupId, { text: message });
        console.log(`${LOG_PREFIX} Grupo ${groupId} foi definido como: ${targetState.toUpperCase()}`);
        return true;
    } catch (error) {
        console.error(`${ERROR_PREFIX} Falha ao mudar estado do grupo ${groupId} para ${targetState}: ${error.message}`);
        return false;
    }
}

/**
 * Busca a lista de grupos em que o bot participa, com cache e retentativas para rate-limit.
 * @param {object} anna - A instância do cliente Baileys.
 * @param {number} retries - Número de tentativas.
 * @param {number} delayMs - Atraso inicial para retentativa.
 * @returns {Promise<object>} - O objeto de grupos.
 */
async function getGroupsWithRetry(anna, retries = 3, delayMs = 5000) {
    if (cachedGroups && Date.now() - lastCacheTime < CACHE_DURATION_MS) {
        console.log(`${LOG_PREFIX} Utilizando cache de grupos.`);
        return cachedGroups;
    }

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const grupos = await anna.groupFetchAllParticipating();
            cachedGroups = grupos;
            lastCacheTime = Date.now();
            console.log(`${LOG_PREFIX} Cache de grupos atualizado.`);
            return grupos;
        } catch (error) {
            const isRateLimit = error.message.includes('rate-overlimit');
            if (isRateLimit && attempt < retries) {
                console.log(colors.yellow(`${LOG_PREFIX} Rate-limit atingido. Tentando novamente em ${delayMs / 1000}s...`));
                await new Promise(resolve => setTimeout(resolve, delayMs));
                delayMs *= 2; // Backoff exponencial
            } else {
                throw new Error(`Falha ao obter grupos após ${attempt} tentativas: ${error.message}`);
            }
        }
    }
}

/**
 * Determina o estado esperado (aberto/fechado) de um grupo com base no horário atual.
 * @param {{abrir: string, fechar: string}} schedule - Objeto com horários de abertura/fechamento.
 * @param {Date} now - A data/hora atual.
 * @returns {'aberto' | 'fechado'} - O estado esperado.
 */
function getExpectedState(schedule, now) {
    const timeToDate = (timeStr) => {
        const [hour, minute] = timeStr.split(':').map(Number);
        return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
    };

    const openTime = timeToDate(schedule.abrir);
    const closeTime = timeToDate(schedule.fechar);

    // Se o horário de fechar for menor que o de abrir (ex: abre 22:00, fecha 08:00)
    if (closeTime < openTime) {
        // Se a hora atual está entre 00:00 e a hora de fechar OU entre a hora de abrir e 23:59
        return (now >= openTime || now < closeTime) ? 'aberto' : 'fechado';
    }

    // Horários no mesmo dia (ex: abre 08:00, fecha 22:00)
    return (now >= openTime && now < closeTime) ? 'aberto' : 'fechado';
}

/**
 * Processa o agendamento para um único grupo, verificando e corrigindo seu estado se necessário.
 * @param {object} anna - A instância do cliente Baileys.
 * @param {string} groupId - O ID do grupo.
 */
async function processGroupSchedule(anna, groupId) {
    const scheduleFile = `${SCHEDULE_DIR}/${groupId}.json`;
    let scheduleConfig = { abrir: '08:00', fechar: '22:00', ativo: false, ultimoEstado: '' };

    try {
        if (fs.existsSync(scheduleFile)) {
            scheduleConfig = JSON.parse(fs.readFileSync(scheduleFile, 'utf-8'));
        } else {
            fs.writeFileSync(scheduleFile, JSON.stringify(scheduleConfig, null, 2));
        }
    } catch (error) {
        console.error(`${ERROR_PREFIX} Erro ao ler/escrever ${scheduleFile}: ${error.message}`);
        return; // Pula para o próximo grupo em caso de erro no arquivo
    }

    if (!scheduleConfig.ativo) return;

    const expectedState = getExpectedState(scheduleConfig, new Date());
    
    // Ação é necessária apenas se o estado esperado for diferente do estado atual
    if (expectedState !== scheduleConfig.ultimoEstado) {
        console.log(`${LOG_PREFIX} Correção de estado para o grupo ${groupId}. Esperado: ${expectedState}, Atual: ${scheduleConfig.ultimoEstado}`);
        const success = await updateGroupState(anna, groupId, expectedState);
        if (success) {
            scheduleConfig.ultimoEstado = expectedState;
            fs.writeFileSync(scheduleFile, JSON.stringify(scheduleConfig, null, 2));
        }
    }
}

/**
 * Função principal que varre todos os grupos e verifica seus agendamentos.
 * @param {object} anna - A instância do cliente Baileys.
 */
async function checkSchedules(anna) {
    const { date, time } = getFormattedDateTime();
    if (!anna.user || !anna.ws.isOpen) {
        console.log(colors.yellow(`${LOG_PREFIX} Conexão inativa, verificação pausada às ${date} ${time}.`));
        return;
    }

    console.log(`${LOG_PREFIX} Verificando agendamentos às ${date} ${time}.`);

    try {
        const grupos = await getGroupsWithRetry(anna);
        for (const groupId of Object.keys(grupos)) {
            await processGroupSchedule(anna, groupId);
        }
    } catch (error) {
        console.error(`${ERROR_PREFIX} Erro crítico na verificação de agendamentos: ${error.message}`);
    }
}

/**
 * Inicia e gerencia o loop de verificação, alinhando com o início do minuto.
 * @param {object} anna - A instância do cliente Baileys.
 */
function startScheduleWatcher(anna) {
    // Garante que o diretório de agendamentos exista
    try {
        if (!fs.existsSync(SCHEDULE_DIR)) {
            fs.mkdirSync(SCHEDULE_DIR, { recursive: true });
            console.log(`${LOG_PREFIX} Diretório de agendamentos criado em ${SCHEDULE_DIR}`);
        }
    } catch (error) {
        console.error(`${ERROR_PREFIX} Falha ao criar diretório ${SCHEDULE_DIR}: ${error.message}`);
        return;
    }

    let intervalId = null;

    const startLoop = () => {
        // Alinha a primeira execução com o início do próximo minuto
        const now = new Date();
        const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

        console.log(`${LOG_PREFIX} Próxima verificação de agendamento em ${Math.round(msUntilNextMinute / 1000)} segundos.`);

        setTimeout(() => {
            checkSchedules(anna); // Primeira execução
            intervalId = setInterval(() => checkSchedules(anna), CHECK_INTERVAL_MS); // Loop subsequente
        }, msUntilNextMinute);
    };

    const stopLoop = () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    };

    // Gerenciador de conexão
    anna.ev.on('connection.update', ({ connection }) => {
        if (connection === 'open') {
            console.log(`${LOG_PREFIX} Conexão estabelecida. Iniciando/Reiniciando watcher de agendamentos.`);
            stopLoop();
            startLoop();
        } else if (connection === 'close') {
            console.log(colors.yellow(`${LOG_PREFIX} Conexão perdida. Watcher de agendamentos pausado.`));
            stopLoop();
        }
    });

    const { date, time } = getFormattedDateTime();
    console.log(`${LOG_PREFIX} Módulo de agendamento iniciado às ${date} ${time} (TZ: ${process.env.TZ}).`);
}

module.exports = {
    iniciarAgendamento: startScheduleWatcher, // Nome antigo mantido para retrocompatibilidade
    startScheduleWatcher,
    checkSchedules, // Exportado para possível chamada manual/teste
};