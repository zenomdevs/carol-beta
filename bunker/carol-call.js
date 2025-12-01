const { 'default': makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore, PHONENUMBER_MCC } = require('@whiskeysockets/baileys');

const { fs, readline, LoggerB, P, Boom, axios, util, moment, time, date, getBuffer, banner2, banner3, colors, getGroupAdmins, mess, getRandom, NodeCache, getName, nescessario, setting, extractDDD, extractStateFromNumber, extractStateFromDDD } = require('../configs/imports/consts.js');
var { supre } = require('./funcoes/functions.js');
var { prefix, ownerName } = require('../configs/settings.json');
var { fundo1, fundo2 } = require("../configs/links_img.json");
const { API_URL, API_URL2, API_URL3, API_KEY_CAROL, API_KEY_BRONXYS, API_KEY_NEX } = require('../configs/links_apis.json');
const isButtons = nescessario.botoes

function DLT_FL(file) {try { fs.unlinkSync(file) } catch (error) {}}

var qrcode = "./bunker/database/qr-code";
const usePairingCode = process.argv.includes('sim');

if(!usePairingCode && !fs.existsSync(`${qrcode}/creds.json`)) console.log(colors.blue("- Aviso: Se você não estiver outro aparelho em mãos para realizar a leitura do qr-code, você usar a 2° opção seria ela ( sh start.sh sim ), sem os parenteses e você conectará com código de emparelhamento.\n") + "–");
const useMobile = process.argv.includes('--mobile');

function collectNumbers(inputString) {
return inputString.replace(/\D/g, '');
}

const originalConsoleInfo = console.info;

console.info = function () {
const message = util.format(...arguments);
const forbiddenStrings = ["Closing session: SessionEntry", "Removing old closed session: SessionEntry {", "Another forbidden string", "Closing stale open session for new outgoing prekey bundle"];
if (forbiddenStrings.some(msg => message.includes(msg))) {
return;
}
originalConsoleInfo.apply(console, arguments);
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

const msgRetryCounterCache = new NodeCache();

async function startConnect() {

const { state, saveCreds } = await useMultiFileAuthState(qrcode);
const { version, isLatest } = await fetchLatestBaileysVersion();

async function getMessage(key) {
if (store) {
try {
const msg = await store.loadMessage(key.remoteJid, key.id);
return msg?.message || undefined;
} catch (error) {
console.error("Erro ao carregar a mensagem:", error);
return undefined;
};
};
return Promise.resolve({});
};

const carol = makeWASocket({
logger: P({ level: "fatal" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ['Ubuntu', 'Edge', '110.0.1587.56'],
markOnlineOnConnect: false,
defaultQueryTimeoutMs: 0,
syncFullHistory: false,
generateHighQualityLinkPreview: false,
msgRetryCounterCache: new NodeCache()
});

if(usePairingCode && !carol.authState.creds.registered) {
const phoneNumber = await question(`${colors.blue("- Exemplo do número para realizar a conexão do bot: +55 65 9999-9999. Coloque do jeito que está no WhatsApp!")}\n–\n${colors.blue("• Insira no parâmetro abaixo o número de telefone que você deseja conectar o bot no WhatsApp:\n")}`)
let numerosColetados = collectNumbers(phoneNumber);
const code = await carol.requestPairingCode(numerosColetados, "CAROLYNE")
console.log(`${colors.blue("• Código para conectar o bot e desfrutar de suas imensas funcionalidades:")} ${colors.white(code)}\n–\n${colors.blue("• Tutorial: Entre no WhatsApp que será o bot e vá em aparelhos conectado, e clique em “Conectar um aparelho”, e lá na parte inferior, clique em “Conectar com número de telefone” e digite o código gerado acima...")}`)
}
if(useMobile && !carol.authState.creds.registered) {
const { registration } = carol.authState.creds || {registration: {}}
if(!registration.phoneNumber) {
registration.phoneNumber = await question(`${colors.blue("Por favor, insira o seu número abaixo! Obs: Digite do jeito que está no WhatsApp senhor(a), não faça nenhuma modificação, pode ocorrer algum erro na conexão...\n")}`)
}

const libPhonenumber = await require("libphonenumber-js")
const phoneNumber = libPhonenumber.parsePhoneNumber(registration.phoneNumber)
if(!phoneNumber?.isValid()) {
throw new Error('Número de telefone inválido: ' + registration.phoneNumber)
}
registration.phoneNumber = phoneNumber.format('E.164')
registration.phoneNumberCountryCode = phoneNumber.countryCallingCode
registration.phoneNumberNationalNumber = phoneNumber.nationalNumber
const mcc = PHONENUMBER_MCC[phoneNumber.countryCallingCode]
if(!mcc) {
throw new Error(`Não foi possível encontrar MCC para o número de telefone: ${registration.phoneNumber}. Especifique o MCC manualmente!`)
}
registration.phoneNumberMobileCountryCode = mcc
async function enterCode() {
try {
const code = await question('Digite o código único:\n')
const response = await carol.register(code.replace(/["']/g, '').trim().toLowerCase())
console.log('Seu número de telefone foi registrado com sucesso.')
console.log(response)
rl.close()
} catch(error) {
console.error('Falha ao registrar seu número de telefone. Por favor, tente novamente.\n', error)
await askForOTP()
}
}

async function askForOTP() {
let code = await question('Como você gostaria de receber o código único para registro? "sms" ou "voz"\n')
code = code.replace(/["']/g, '').trim().toLowerCase()
if(code !== 'sms' && code !== 'voice') {
return await askForOTP()
}
registration.method = code
try {
await carol.requestRegistrationCode(registration)
await enterCode()
} catch(error) {
console.error('Falha ao solicitar o código de registro. Por favor, tente novamente.\n', error)
await askForOTP()
}
}
askForOTP()
}

carol.ev.process(async(events) => {
if(events["group-participants.update"]){
try {
var naga2 = events["group-participants.update"];
const part = naga2.participants[0];
const jid = part.phoneNumber ? part.phoneNumber : part.id; 
const numeroParticipante = jid.split("@")[0];
if(!fs.existsSync(`./bunker/database/grupos/activation_gp/${naga2.id}.json`)) return
var jsonGp = JSON.parse(fs.readFileSync(`./bunker/database/grupos/activation_gp/${naga2.id}.json`));
try { var grpmdt = await carol.groupMetadata(naga2.id) } catch (e) { return }
const isGroup2 = grpmdt.id.endsWith('@g.us');
try {
var GroupMetadata_ = isGroup2 ? await carol.groupMetadata(naga2.id): ""} catch (e) {return}
const membros_ = isGroup2 ? GroupMetadata_.participants : '';
const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';
if(naga2.action == 'add'){
num = jid;
if(nescessario.listanegraG.includes(num)){
carol.sendMessage(GroupMetadata_.id,{text: mess.blackList(GroupMetadata_, naga2), mentions: [jid]});
carol.groupParticipantsUpdate(GroupMetadata_.id, [jid], 'remove');
return;
}}
if(naga2.action == 'remove'){
num = jid;
}
if(naga2.action == 'add' && jsonGp[0].listanegra.includes(jid)){
await carol.sendMessage(GroupMetadata_.id,{text: mess.blackList(GroupMetadata_, naga2), mentions: [jid]});
carol.groupParticipantsUpdate(GroupMetadata_.id, [jid], 'remove');
}
if(jsonGp[0].antifake && naga2.action === 'add' && !numeroParticipante.startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await carol.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
carol.groupParticipantsUpdate(GroupMetadata_.id, [jid], 'remove');
}, 1000);
}
if(jsonGp[0].ANTI_DDD.active && naga2.action == 'add' && jsonGp[0].ANTI_DDD.listaProibidos.includes(extractDDD(numeroParticipante))) {
carol.sendMessage(GroupMetadata_.id,{text: mess.forbiddenStateFromDDD(numeroParticipante, extractStateFromDDD, extractDDD), mentions: [jid]});
setTimeout(async() => {
carol.groupParticipantsUpdate(GroupMetadata_.id, [jid], 'remove');
}, 1000);
}
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
try {
var mdata_2 = isGroup2 ? await carol.groupMetadata(naga2.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !numeroParticipante.startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true) { 
if(naga2.action === 'add') {
if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+numeroParticipante)
.replace('#numerobot#', carol.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
.replace('#estado#', extractStateFromNumber(numeroParticipante))
} else {
 teks = welcome(numeroParticipante, mdata_2.subject);
}
let ppimg;
try {
 ppimg = await carol.profilePictureUrl(jid, "image");
} catch (e) {
 ppimg = 'https://neon-apis.shop/98f05e.jpg'
}
var shortpc = `${encodeURIComponent(ppimg)}`;
carol.sendMessage(mdata_2.id, {image: {url: `https://neon-apis.shop/canvas/welcome2?fundo=${fundo1}&foto=${shortpc}&titulo=Bem-vindo(a)!&descricao=${mess.phrasesWelcome(mdata_2, getName, numeroParticipante, encodeURIComponent)}`},
mentions: [jid], caption: teks});
}
if (naga2.action === 'remove') {
if (isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@' + numeroParticipante)
.replace('#numerobot#', carol.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
.replace('#estado#', extractStateFromNumber(numeroParticipante));
} else {
 teks = mess.phrasesLeft(getName, numeroParticipante, encodeURIComponent);
}
let ppimg;
try {
 ppimg = await carol.profilePictureUrl(jid, "image");
} catch (e) {
 ppimg = 'https://neon-apis.shop/98f05e.jpg';
}
const shortpc = `${encodeURIComponent(ppimg)}`;
carol.sendMessage(mdata_2.id, {image: {url: `https://neon-apis.shop/canvas/welcome2?fundo=${fundo1}&foto=${shortpc}&titulo=Goodbye!&descricao=${mess.phrasesLeft(getName, numeroParticipante, encodeURIComponent)}`}, mentions: [jid], caption: teks});
}
};

if(jsonGp[0].wellcome[1].bemvindo2 == true){
if(naga2.action === 'add') {
if(isWelcomed2) {
teks = jsonGp[0].wellcome[1].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+numeroParticipante)
.replace('#numerobot#', carol.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
.replace('#estado#', extractStateFromNumber(numeroParticipante))
} else {teks = welcome2(numeroParticipante, mdata_2.subject)}
carol.sendMessage(mdata_2.id, {text: teks, mentions: naga2.participants})
};
}
} catch (e) {
console.log(e)
}
};

if(events["connection.update"]) {
const update = events["connection.update"]; 
var { connection, lastDisconnect } = update
const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode

switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 401) {
console.log(colors.blue(mess.ErrorBaileys_401()));
} else if(shouldReconnect == 408) {
console.log(colors.blue(mess.ErrorBaileys_408()));
} else if(shouldReconnect == 411) {
console.log(colors.blue(mess.ErrorBaileys_411()));
} else if(shouldReconnect == 428) {
console.log(colors.blue(mess.ErrorBaileys_428()));
} else if(shouldReconnect == 440) {
console.log(colors.gray(mess.ErrorBaileys_440()));
} else if(shouldReconnect == 500) {
console.log(colors.gray(mess.ErrorBaileys_500()));
} else if(shouldReconnect == 503) {
console.log(colors.gray("Ocorreu um erro desconhecido! Error: 503."));
} else if(shouldReconnect == 515) {
console.log(colors.gray(mess.ErrorBaileys_515()));
} else {
console.log(`${colors.red("[CONNECTION CLOSED]")} Conexão fechada por motivo do erro: ${lastDisconnect?.error}`)
}
startConnect();
}
break;

case 'connecting':
console.log(colors.cyan(`[ CAROL V1 ] CONECTADA - ${date} ${time}`))
break;

case 'open':
global.startTime = Math.floor(Date.now() / 1000);
console.log(banner3.string);
console.log(banner2.string);
console.log(`${colors.cyan("〔 CAROL CONECTADA COM SUCESSO.. 〕")}`);
await carol.sendPresenceUpdate("available");
await carol.updateProfileStatus(`[ CAROL V1 ONLINE ${time} - ${date} ]`)
break;
}}


if(events["messages.upsert"]) {
var upsert = events["messages.upsert"];
/////////////////////////////////
const startcarol = require('../carol.js');
startcarol(upsert, carol);
}


if(events["creds.update"]) {
await saveCreds();
}
})
};

startConnect();