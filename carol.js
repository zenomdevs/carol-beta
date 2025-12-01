const { downloadContentFromMessage, downloadMediaMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, logger, makeInMemoryStore, getContentType, INativeFlowMessage, prepareWAMessageMedia, jidNormalizedUser } = require("@whiskeysockets/baileys");
const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, fetch, getBase64, createExif, writeExifImg, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, garticArchives, whatMusicAr, enigmaArchive, quizFutebol, getpc, supre, wait, getExtension, generateMessageID, vyroEngine, getGroupAdmins, getMembros, emoji, sendPoll, getRandom, banner2, banner3, temporizador, chyt, kyun, TimeCount, simih, botoff, colors, os, arcloud, addFilter, isFiltered, ytdl, psycatgames, MultiDownload, obeso, countDays, timeDate, Limit_CMD, capitalizeFirstLetter, shuffle, pushnames, formatNumber, formatNumberDecimal, awaitMessage, listCommands, extractMetadata, extractDDD, extractStateFromNumber, extractStateFromDDD } = require("./configs/imports/consts.js");
const { linguagem, mess, getInfo, destrava, destrava2, tabela, namoro1, namoro2, tools, advices, ban, nescessario, setting, logoslink, ftmenu, vip, rgtake, muted, countMessage, sotoy, daily, comandos, limitefll, antispam, anotar, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, packname, getName, chaves, grupos, aluguel } = require("./configs/imports/consts.js");
const { botoes, antipv, antipv2, antipv3, visualizarmsg, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, msgantipv1, msgantipv2, API_KEY_INVERTEXTO } = require("./configs/nescessario.json");

// NORMALIZAR O LID //
function normalize(jid) {
if (!jid) return null;
let id = jid.replace(/:.*(?=@)/, ''); 
if (id.endsWith('@lid')) {
id = id.replace('@lid', '@s.whatsapp.net');
} else if (!id.endsWith('@s.whatsapp.net')) {
id += '@s.whatsapp.net';
}
return id;
};

function inputToJid(text) {
const onlyNumber = text.replace(/\D/g, "");
return onlyNumber ? `${onlyNumber}@s.whatsapp.net` : null;
}

const PLAY_CACHE_PATH = "./bunker/playcache.json";

function loadPlayCache() {
try {
return JSON.parse(fs.readFileSync(PLAY_CACHE_PATH));
} catch {
return {};
}
};

function savePlayCache(cache) {
fs.writeFileSync(PLAY_CACHE_PATH, JSON.stringify(cache, null, 2));
};

function isExpired(timestamp) {
return (Date.now() - timestamp) > 3 * 60 * 1000; // 3 min
};

const caminhoAutoDown = './bunker/autodown.json';
if (!fs.existsSync(caminhoAutoDown)) fs.writeFileSync(caminhoAutoDown, JSON.stringify([]));
function jaProcessou(id) {
const data = JSON.parse(fs.readFileSync(caminhoAutoDown));
return data.includes(id);
}
function marcarComoProcessado(id) {
const data = JSON.parse(fs.readFileSync(caminhoAutoDown));
data.push(id);
fs.writeFileSync(caminhoAutoDown, JSON.stringify(data));
setTimeout(() => {
const novo = JSON.parse(fs.readFileSync(caminhoAutoDown)).filter(x => x !== id);
fs.writeFileSync(caminhoAutoDown, JSON.stringify(novo));
}, 5000);
};
const { NomeDoBot, ownerName, prefix, newsletterJid, newsletterName } = require("./configs/settings.json");
const CarolPlay = require("./bunker/src/scraper-play.js");
const { API_URL, API_URL2, API_URL3, API_KEY_CAROL, API_KEY_BRONXYS, API_KEY_NEX } = require("./configs/links_apis.json");
const { audio_menu, bom_dia, boa_tarde, boa_noite, corno, qviado } = require("./configs/media/audios.json");
const { sendRouletteButton, sendListB, sendListIOS, sendRoulette, sendPayment, GenerateQRpix, sendButton } = require(`./bunker/funcoes/botoes.js`);
const { criarPagamentoPix, verificarPix, ACCESS_TOKEN } = require("./bunker/src/pix.js");
const { v4: uuidv4 } = require("uuid");
const { iniciarAgendamento } = require("./bunker/schedule.js");
const Api = require("./configs/req_bronxys.js");
var reqapi = new Api("zenomx");
const yts = require("yt-search");
const revealmsg = JSON.parse(fs.readFileSync("./bunker/revealmsg.json"));
const FormData = require("form-data");
const { fundo1, fundo2, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, deathcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkfiel, rnkinfiel, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau, suruba, minado_bomb, thumbnail, imgsigma, imgbeta, imgbaiano, imgbaiana, imgcarioca, imglouco, imglouca, imgsafada, imgsafado, imgmacaco, imgmacaca, imgputa, rnksigma, rnkbeta, rnkbaiano, rnkbaiana, rnkcarioca, rnklouco, rnklouca, rnksafada, rnksafado, rnkmacaco, rnkmacaca, rnkputa } = require("./configs/links_img.json");
const II = "```";
const path = require("path");

// Adicione esta linha junto com os outros requires no início do arquivo
const { sendVideoAsSticker, sendImageAsSticker } = require(
path.join(__dirname, "bunker", "sticker", "rename.js")
);
const { sendVideoAsSticker2, sendImageAsSticker2 } = require(
path.join(__dirname, "bunker", "sticker", "rename2.js")
);
//====================≠≠===============\\
function lerJSON(caminho) {
return fs.existsSync(caminho) ? JSON.parse(fs.readFileSync(caminho)) : {};
}
function salvarJSON(caminho, dados) {
fs.writeFileSync(caminho, JSON.stringify(dados, null, 2));
}

//====================≠≠===============\\
const { Sticker } = require("./bunker/sticker/rename/sticker.js");

async function renameContextSticker(pack, author, info, carol, from, selo) {
try {
const quoted = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage;
if (!quoted) return console.log("❌ Nenhum sticker citado.");
const buffer = await getFileBuffer(quoted, "sticker");
if (!buffer || buffer.length === 0) return console.log("❌ Sticker inválido ou vazio.");
// Garante diretório temporário
const stickerDir = path.join(__dirname, "bunker", "sticker", "rename", "tmp");
if (!fs.existsSync(stickerDir)) fs.mkdirSync(stickerDir, { recursive: true });
// Salva arquivo temporário
const tempFile = path.join(stickerDir, `sticker_${Date.now()}.webp`);
fs.writeFileSync(tempFile, buffer);
// Cria sticker com metadados
const st = new Sticker({ webp: true });
st.addFile(tempFile);
st.options.metadata = { pack, author, emojis: ["🤠", "🥶", "😻"] };
const result = await st.start();
if (!result?.[0]?.value || !fs.existsSync(result[0].value)) {
console.log("❌ Falha ao gerar figurinha renomeada.");
return;
}
const stickerPath = result[0].value;
await carol.sendMessage(from, {sticker: fs.readFileSync(stickerPath)}, {quoted: selo});
[tempFile, stickerPath].forEach(file => {
if (fs.existsSync(file)) fs.unlinkSync(file);
});
} catch (e) {
console.error("❌ Erro no renameContextSticker:", e);
}
};

var clear_dono_ofc = setting.ownerNumber;
process.on("uncaughtException", function (err) {
console.error(new Date().toUTCString() + " uncaughtException:", err.message);
console.error(err.stack);
});

const getallcases = () => {
const file = fs.readFileSync("carol.js").toString();
const findindex = file.match(/case\s+['"](.+?)['"]/g);
const cstt = [];
if (!findindex) return cstt;
for (const i of findindex) {
const match = i.match(/case\s+['"](.+?)['"]/);
if (match) cstt.push(match[1]);
}
return cstt;
};

const allCases = getallcases();
const getSimilarity = require(`./bunker/src/similaridade.js`);

const rmLetras = (txt) => {
return txt
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "");
};

const similarityCmd = (txt) => {
getsmlrt = getSimilarity(allCases, txt);
if (rmLetras(getsmlrt.nome).includes(`nao encontrado`))
return [{ comando: getsmlrt.nome, porcentagem: getsmlrt.porcentagem }];
return [
{
comando: prefix + getsmlrt.nome,
porcentagem: Number(getsmlrt.porcentagem).toFixed(1),
},
];
};
// ABAIXO: INÍCIO DE CONEXÃO

async function startcarol(upsert, carol) {
async function startFunctionCarol() {

for (const info of upsert?.messages || []) {
if (!info.message) continue;
const msgTimestamp = info.messageTimestamp || (info.message?.messageTimestamp) || Math.floor(Date.now() / 1000);
if (global.startTime && msgTimestamp < global.startTime) {
continue;
};

const from = info.key.remoteJid;
const isGroup = from.endsWith("@g.us");
const isStatus = from.endsWith("@broadcast");

const VRF_JSON_GRUPO = fs.existsSync(`./bunker/database/grupos/activation_gp/${from}.json`) ? true : false;

if (VRF_JSON_GRUPO) {
var jsonGp = JSON.parse(fs.readFileSync(`./bunker/database/grupos/activation_gp/${from}.json`));
}

if (VRF_JSON_GRUPO && jsonGp[0].x9 && info.messageStubType) {
switch (info.messageStubType) {
case 29:
await delay(1000);
await carol.sendMessage(info.key.remoteJid, {
text: `*@${info.messageStubParameters[0].split("@")[0]}* foi promovido(a) ao cargo de adminstrador do grupo por: *@${info.participant.split("@")[0]}*.`,
contextInfo: {
forwardingScore: 50000,
isForwarded: false,
mentionedJid: [
info.messageStubParameters[0],
info.participant,
],
remoteJid: info.key.remoteJid,
},
});
break;

case 30:
await delay(1000);
await carol.sendMessage(info.key.remoteJid, {
text: `*@${info.messageStubParameters[0].split("@")[0]}* foi rebaixado(a) à membro comum por: *@${info.participant.split("@")[0]}*.`,
contextInfo: {
forwardingScore: 50000,
isForwarded: false,
mentionedJid: [
info.messageStubParameters[0],
info.participant,
],
remoteJid: info.key.remoteJid,
},
});
break;
}
}

if (!info.message) return;
if (upsert.type == "append") return;
const baileys = require("@whiskeysockets/baileys");
let baileysVersion = 'desconhecida';
try {
const pkgPath = require.resolve('@whiskeysockets/baileys/package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
baileysVersion = pkg.version;
} catch {
baileysVersion = 'desconhecida';
}
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : "";

if (visualizarmsg) {
await carol.readMessages([info.key]);
} else {
if (from == "status@broadcast") return;
}

global.prefix;
global.blocked;

//==============(BODY)================\\

var body =
info.message?.conversation ||
info.message?.viewOnceMessageV2?.message?.imageMessage?.caption ||
info.message?.viewOnceMessageV2?.message?.videoMessage?.caption ||
info.message?.imageMessage?.caption ||
info.message?.videoMessage?.caption ||
info.message?.extendedTextMessage?.text ||
info.message?.viewOnceMessage?.message?.videoMessage?.caption ||
info.message?.viewOnceMessage?.message?.imageMessage?.caption ||
info.message?.documentWithCaptionMessage?.message?.documentMessage
?.caption ||
info.message?.buttonsMessage?.imageMessage?.caption ||
info.message?.buttonsResponseMessage?.selectedButtonId ||
info.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
info.message?.templateButtonReplyMessage?.selectedId ||
info?.text ||
info.message?.editedMessage?.message?.protocolMessage?.editedMessage
?.extendedTextMessage?.text ||
info.message?.editedMessage?.message?.protocolMessage?.editedMessage
?.imageMessage?.caption ||
info.message?.conversation ||
info.message?.viewOnceMessageV2?.message?.imageMessage?.caption ||
info.message?.viewOnceMessageV2?.message?.videoMessage?.caption ||
info.message?.imageMessage?.caption ||
info.message?.videoMessage?.caption ||
info.message?.extendedTextMessage?.text ||
info.message?.viewOnceMessage?.message?.videoMessage?.caption ||
info.message?.viewOnceMessage?.message?.imageMessage?.caption ||
info.message?.documentWithCaptionMessage?.message?.documentMessage
?.caption ||
info.message?.buttonsMessage?.imageMessage?.caption ||
info.message?.buttonsResponseMessage?.selectedButtonId ||
info.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
info.message?.templateButtonReplyMessage?.selectedId ||
JSON.parse(
info.message?.interactiveResponseMessage?.nativeFlowResponseMessage
?.paramsJson || "{}"
)?.id ||
info?.text ||
"";

var Procurar_String =
info.message?.conversation ||
info.message?.viewOnceMessageV2?.message?.imageMessage?.caption ||
info.message?.viewOnceMessageV2?.message?.videoMessage?.caption ||
info.message?.imageMessage?.caption ||
info.message?.videoMessage?.caption ||
info.message?.extendedTextMessage?.text ||
info.message?.viewOnceMessage?.message?.videoMessage?.caption ||
info.message?.viewOnceMessage?.message?.imageMessage?.caption ||
info.message?.documentWithCaptionMessage?.message?.documentMessage
?.caption ||
info.message?.buttonsMessage?.imageMessage?.caption ||
"";

const args = body.trim().split(/ +/).slice(1);

const budy2 = body
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "");

if (isGroup &&
fs.existsSync(
`./bunker/database/grupos/activation_gp/${from}.json`
) &&
jsonGp[0].multiprefix
) {
var prefix =
jsonGp[0]?.prefixos[
jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))
] || jsonGp[0].prefixos[0];
}

if (isGroup && fs.existsSync(`./bunker/database/grupos/activation_gp/${from}.json`) && !jsonGp[0].multiprefix) {
var prefix = setting.prefix;
} else if (!isGroup) {
var prefix = setting.prefix;
}

const isCmd = body.trim().startsWith(prefix);
const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase() : null;
const q_2 = budy2.trim().split(/ +/).slice(1).join(" ");
const q = args.join(" ");
const budy = type === "conversation" ? info.message?.conversation : type === "extendedTextMessage" ? info.message?.extendedTextMessage?.text : "";
const budy3 = budy.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const PR_String = Procurar_String.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");

//======================================\\

try {
var groupMetadata = isGroup ? await carol.groupMetadata(from) : "";
} catch {
return;
}

const groupName = isGroup ? groupMetadata.subject : "";

let senderRaw = info?.key?.participantAlt || info?.key?.remoteJidAlt || carol?.user?.id;

const sender = normalize(senderRaw);

const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const arg = body.substring(body.indexOf(" ") + 1);

const botNumber =
(await carol.user.id.split(":")[0]) + "@s.whatsapp.net";
const argss = body.split(/ +/g);
const testat = body;
const ants = body;
const groupDesc = isGroup ? groupMetadata.desc : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const getDonoKey = (cmd) => {
return `numero_${cmd}`;
};

const nmrdn = setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const isnit = nit.includes(sender) || nmrdn.includes(sender);
const issupre = supre.includes(sender);
const ischyt = chyt.includes(sender);
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
const somembros = isGroup ? getMembros(groupMembers) : "";

// FUNÇÃO DE GRUPOS

const dirGroup = `./bunker/database/grupos/activation_gp/${from}.json`;
const nescj = "./configs/nescessario.json";

if (isGroup && !fs.existsSync(dirGroup)) {
var data = [
{
name: groupName,
groupId: from,
x9: false,
antiimg: false,
antivideo: false,
antiaudio: false,
antisticker: false,
antidoc: false,
antictt: false,
antiloc: false,
antilinkgp: false,
antilinkhard: false,
antilinkeasy: false,
antifake: false,
antiporn: false,
Odelete: false,
antispam: false,
antinotas: false,
anticatalogo: false,
visuUnica: false,
registrarFIGUS: false,
soadm: false,
listanegra: [],
advertir: [],
prefixos: [`${setting.prefix}`],
advertir2: [],
legenda_estrangeiro: "0",
legenda_documento: "0",
legenda_video: "0",
legenda_imagem: "0",
multiprefix: false,
ausentes: [],
ANTI_DDD: {
active: false,
listaProibidos: [],
},
antipalavrao: {
active: false,
palavras: [],
},
limitec: {
active: false,
quantidade: null,
},
wellcome: [
{
bemvindo1: false,
legendabv: "O membro #numerodele#, acabou de chegar ao grupo #nomedogp#! ficamos muito felizes por ter voce conosco. para garantir a melhor experiencia, pedimos que leia a descricao do grupo e se familiarize com as regras.",
legendasaiu: "O membro #numerodele#, acabou de deixar o grupo #nomedogp#. agradecemos a participacao, lembramos a importancia de manter a ordem e o respeito. por isso, leia a descricao e garanta que esta seguindo as regras."
},
{
bemvindo2: false,
legendabv: "O membro #numerodele#, acabou de chegar ao grupo #nomedogp#! ficamos muito felizes por ter voce conosco. para garantir a melhor experiencia, pedimos que leia a descricao do grupo e se familiarize com as regras.",
legendasaiu: "O membro #numerodele#, acabou de deixar o grupo #nomedogp#. agradecemos a participacao, lembramos a importancia de manter a ordem e o respeito. por isso, leia a descricao e garanta que esta seguindo as regras."
},
],
simi1: false,
autosticker: false,
autoresposta: false,
jogos: false,
level: false,
bangp: false
},
];
fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + "\n");
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined;
var DFNMULTIP = `./bunker/database/func/prefixo/multip_${from}.json`;

function setGp(index) {
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + "\n");
}

function setNes(index) {
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + "\n");
}

//=====(ADMS/DONO/ETC..CONST)=======\\

const adivinha = info.key.id.length > 21 ? "Android" : info.key.id.substring(0, 2) == "3A" ? "iPhone" : "WhatsApp Web";
const quoted = info.quoted ? info.quoted : info;
const isBot = info.key.fromMe ? true : false;
const dono = normalize(setting.ownerNumber + "@s.whatsapp.net");
const SoDono = sender === dono;
const isVip = vip.map((i) => i.id).includes(sender) || SoDono;
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
const isGroupAdmins = groupAdmins.includes(sender) || false || SoDono;
const isListaBrancaG = nescessario.listabrancaG.includes(sender);
const isBanned = ban.includes(sender);
const isVisualizar = nescessario.visualizarmsg;
const isVerificado = nescessario.verificado;
const isWelcomePrivate = nescessario.welcomepv;
const isAudioMenu = nescessario.menu_audio;
const isAntiPv = nescessario.antipv;
const isAntiPv2 = nescessario.antipv2;
const isAntiPv3 = nescessario.antipv3;
const isBotoff = nescessario.botoff;
const listanegraG = nescessario.listanegraG;
const listabrancaG = nescessario.listabrancaG;
const isAnticall = nescessario.anticall;
const TOKEN_GPT = nescessario.TOKEN_GPT;
const isCmdVip = nescessario.cmd_vip;
const isBlockCmdG = nescessario.blockCmdG;
const isCargo = SoDono ? "Mestre." : isGroupAdmins ? "Admin." : "Comum.";
const isChVip = isVip ? "✓" : "✕";

//============(FUNÇÕES)============\\

const isAntiImg = isGroup ? dataGp[0].antiimg : undefined;
const isLimitCmd = isGroup ? dataGp[0]?.Limitar_CMD : undefined;
const isAntiVid = isGroup ? dataGp[0].antivideo : undefined;
const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined;
const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined;
const Antidoc = isGroup ? dataGp[0].antidoc : undefined;
const isAntiCtt = isGroup ? dataGp[0].antictt : undefined;
const Antiloc = isGroup ? dataGp[0].antiloc : undefined;
const isAntiDDD = isGroup ? dataGp[0].ANTI_DDD.active : undefined;
const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined;
const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined;
const isAntiLinkEasy = isGroup ? dataGp[0].antilinkeasy : undefined;
const isAntiPorn = isGroup ? dataGp[0].antiporn : undefined;
const isAntifake = isGroup ? dataGp[0].antifake : undefined;
const IS_DELETE = nescessario.Odelete;
const So_Adm = isGroup ? dataGp[0].soadm : undefined;
const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined;
const ADVT = isGroup ? dataGp[0].advertir : undefined;
const ADVT2 = isGroup ? dataGp[0].advertir2 : undefined;
const isx9 = isGroup ? dataGp[0].x9 : undefined;
const isMultiP = isGroup ? dataGp[0].multiprefix : undefined;
const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined;
const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined;
const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined;
const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined;
const isSimi = isGroup ? dataGp[0].simi1 : undefined;
const isAutofigu = isGroup ? dataGp[0].autosticker : undefined;
const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined;
const isModobn = isGroup ? dataGp[0].jogos : undefined;
const isAutodown = isGroup ? dataGp[0].autodown : undefined || true;
const isBanchat = isGroup ? dataGp[0].bangp : undefined;
const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined;
const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined;
const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined;
const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined;
const isModoAluguel = nescessario.modo_aluguel;

//============(VERIFICADOS)============\\

const SeloMeta = {"key": {"participant": "13135550002@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {"contactMessage": {
"displayName": "Carolyne", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Carolyne;;;\nFN:Carolyne\nitem1.TEL;waid=13135550002:13135550002\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

if (!isVerificado) { var selo = SeloMeta } else { var selo = info }

// FUNÇÃO TOTAL COMANDOS

const infocases = async () => {
try {
const data = await fs.readFile('./carol.js', 'utf8');
let regex = /case\s+['"]([^'"]+)['"]\s*:/g;
let match;
let caseNames = [];
while ((match = regex.exec(data)) !== null) {
caseNames.push(match[1]);
}
let totalCount = caseNames.length;
return totalCount;
} catch (err) {
console.error('Erro ao ler o arquivo:', err);
return 0;
}
};

const totalcmds = await infocases();

//FUNÇÃO GLOBAL DE ENVIAR TEXTO

async function reply(texto) {
await carol.sendPresenceUpdate("composing", from);
await delay(200);
carol.sendMessage(from, {text: texto, contextInfo: {
forwardingScore: 1,
isForwarded: false,
forwardedNewsletterMessageInfo: {
"newsletterJid": newsletterJid,
serverMessageId: '',
"newsletterName": newsletterName
},
externalAdReply: {
title: `BOT NAME: ${NomeDoBot}`,
body: `NEW VERSION: 1.0 BETA`,
previewType: "PHOTO",
thumbnailUrl: "https://files.catbox.moe/7s27lz.jpeg",
thumbnail: Buffer,
sourceUrl: "https://neon-apis.online"}},}, {quoted: selo});
};

//FUNÇÃO GLOBAL DO MENU IMAGEM

const menusPath = "./configs/lib/menus.json";
const xmlPath = "./configs/media/menu.xml";
const xmlBuffer = fs.readFileSync(xmlPath);
const ImagemPath = path.join(__dirname, "configs", "media", "logomenu.jpeg"); 
const ThumbBuffer = fs.readFileSync(ImagemPath); 

function saveMenuConfig(data) {
fs.writeFileSync(menusPath, JSON.stringify(data, null, 2));
}

async function enviarMenu(from, caption, react) {
try {
reagir(from, react);

let buttons = [
{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "「 💔 」𝐓𝐎𝐃𝐀𝐒 𝐎𝐏𝐂「 💔 」",
sections: [
{
title: `${NomeDoBot}`,
highlight_label: "💔",
rows: [
{
title: "「 🌐 」𝐌𝐞𝐧𝐮 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐨「 🌐 」",
description: "𝖳𝗈𝖽𝗈𝗌 𝗈𝗌 𝖼𝗈𝗆𝖺𝗇𝖽𝗈𝗌 𝖽𝗂𝗌𝗉𝗈𝗇𝗂𝗏𝖾𝗂𝗌.",
id: `${prefix}menu1`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💔",
rows: [
{
title: "️「 🔐 」𝐌𝐞𝐧𝐮 𝐃𝐨 𝐂𝐫𝐢𝐚𝐝𝐨𝐫「 🔐 」",
description: "𝖢𝗈𝗆𝖺𝗇𝖽𝗈𝗌 𝗋𝖾𝗌𝗍𝗋𝗂𝗍𝗈𝗌 𝖺𝗈 𝖽𝗈𝗇𝗈.",
id: `${prefix}menu3`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💔",
rows: [
{
title: "「 ⚙️ 」𝐌𝐞𝐧𝐮 𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫「 ⚙️ 」",
description: "𝖦𝖾𝗋𝖾𝗇𝖼𝗂𝖺𝗆𝖾𝗇𝗍𝗈 𝖾 𝗆𝗈𝖽𝖾𝗋𝖺𝖼𝖺𝗈.",
id: `${prefix}menu2`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💔",
rows: [
{
title: "「 🧾 」𝐌𝐞𝐧𝐮 𝐅𝐫𝐚𝐬𝐞𝐬「 🧾 」",
description: "𝖢𝗈𝗆𝖺𝗇𝖽𝗈𝗌 𝖽𝖾 𝖿𝗋𝖺𝗌𝖾𝗌 𝖼𝗎𝗋𝗍𝖺𝗌.",
id: `${prefix}menu9`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💔",
rows: [
{
title: "「 😈 」𝐌𝐞𝐧𝐮 𝐇𝐞𝐧𝐭𝐚𝐢 𝐋𝐨𝐥𝐢𝐬「 😈 」",
description: "𝖢𝗈𝗆𝖺𝗇𝖽𝗈𝗌 𝗁𝖾𝗇𝗍𝖺𝗂 𝗂𝗆𝖺𝗀𝖾𝗇𝗌.",
id: `${prefix}menu8`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💔",
rows: [
{
title: "「 🎨 」𝐌𝐞𝐧𝐮 𝐋𝐨𝐠𝐨𝐬 𝐈𝐦𝐚𝐠𝐞𝐧𝐬「 🎨 」",
description: "𝖨𝗆𝖺𝗀𝖾𝗇𝗌 𝗉𝖺𝗋𝖺 𝗉𝖾𝗋𝖿𝗂𝗅 𝗈𝗎 𝗐𝖺𝗅𝗅𝗉𝖺𝗉𝖾𝗋.",
id: `${prefix}menu5`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💔",
rows: [
{
title: "「 🤡 」𝐌𝐞𝐧𝐮 𝐃𝐞 𝐁𝐫𝐢𝐧𝐜𝐚𝐝𝐞𝐢𝐫𝐚「 🤡 」",
description: "𝖢𝗈𝗆𝖺𝗇𝖽𝗈𝗌 𝖽𝖾 𝗓𝗈𝖾𝗂𝗋𝖺 𝗉𝖺𝗌𝗌𝖺-𝗍𝖾𝗆𝗉𝗈.",
id: `${prefix}menu4`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💔",
rows: [
{
title: "「 💽 」𝐌𝐞𝐧𝐮 𝐀𝐥𝐭𝐞𝐫𝐚𝐝𝐨𝐫𝐞𝐬「 💽 」",
description: "𝖢𝗈𝗆𝖺𝗇𝖽𝗈𝗌 𝖽𝖾 𝗆𝗎𝗌𝗂𝖼𝖺𝗌 𝖾 𝗆𝖺𝗂𝗌.",
id: `${prefix}menu6`,
disabled: false
}
]
},
{
title: `${NomeDoBot}`,
highlight_label: "💔",
rows: [
{
title: "「 🧝🏻‍♀️ 」𝐌𝐞𝐧𝐮 𝐄𝐟𝐞𝐢𝐭𝐨𝐬「 🧝🏻‍♀️ 」",
description: "𝖠𝖽𝗂𝖼𝗂𝗈𝗇𝖺𝗋 𝖾𝖿𝖾𝗂𝗍𝗈𝗌 𝖺 𝗂𝗆𝖺𝗀𝖾𝗇𝗌.",
id: `${prefix}menu7`,
disabled: false
}
]
}
]
}),
messageParamsJson: ""
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"「 ❤️ 」𝐍𝐄𝐎𝐍 𝐀𝐏𝐈𝐒「 ❤️ 」\",\"url\":\"https://neon-apis.online\",\"merchant_url\":\"https://neon-apis.online\"}"
}
];
const card = {
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia(
{ image: ThumbBuffer },
{ upload: carol.waUploadToServer }
)),
hasMediaAttachment: true,
title: caption,
}),
nativeFlowMessage: {
buttons,
messageParamsJson: ""
}
};
const msg = generateWAMessageFromContent(from, {
interactiveMessage: {
contextInfo: {
participant: sender,
quotedMessage: info?.message
},
carouselMessage: {
cards: [card],
messageVersion: 1
}
}
}, {});
await carol.relayMessage(from, msg.message, {});
} catch (e) {
console.log("erro enviarMenu:", e);
reply("❌ Falha ao enviar menu");
}
};

// RAW MENC JID
const menc_jids_raw = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
const menc_prt = normalize(info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0]) || info.message?.extendedTextMessage?.contextInfo?.participant || null;
const menc_jid = inputToJid(args.join(" "));
const numDigitado = inputToJid(q);

// NORMALIZAÇOES
const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid;
const q_includes_at = String(q || "").includes("@");
const mrc_ou_numero = numDigitado || menc_prt;
const menc_os2 = q.includes("@") ? (Array.isArray(menc_jid2) && menc_jid2.length > 0 ? menc_jid2[0] : null) : menc_prt;
const marc_tds = menc_jid || numDigitado || menc_prt;
const menc_prt_nmr = numDigitado || menc_prt;
const sender_ou_n = q.includes("@") ? menc_jid2?.[0] : (menc_prt || sender);

// UNIFICAR TARGET (OPCIONAL)
const target = menc_jid || menc_jid2?.[0] || numDigitado || menc_prt || sender;

///////////////////////////////////

var isUrl = (url) => {
if (linkfy.find(url)[0]) return true;
return false;
};

//
const time2 = moment().tz("America/Sao_Paulo").format("HH:mm:ss");

if (time2 > "00:00:00" && time2 < "05:00:00") {
var tempo = "Boa noite";
var tempo2 = "𝐁𝐨𝐚 𝐧𝐨𝐢𝐭𝐞";
}
if (time2 > "05:00:00" && time2 < "12:00:00") {
var tempo = "Bom dia";
var tempo2 = "𝐁𝐨𝐦 𝐝𝐢𝐚";
}
if (time2 > "12:00:00" && time2 < "18:00:00") {
var tempo = "Boa tarde";
var tempo2 = "𝐁𝐨𝐚 𝐭𝐚𝐫𝐝𝐞";
}
if (time2 > "18:00:00") {
var tempo = "Boa noite";
var tempo2 = "𝐁𝐨𝐚 𝐧𝐨𝐢𝐭𝐞";
}

if (!isCmd && info.key.fromMe) return;

const replays = (texto) => {
carol.sendMessage(from, {
text: texto,
contextInfo: {
forwardingScore: 100000,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363404498386813@newsletter",
newsletterName: "CAROL V1 BETA",
},
},
mentions: [menc_os2],
mentions: [sender],
});
};

async function sendUrlText( id, textCaption, title, desc, imageUrl, linkAcess, quotedThis ) {
await carol.sendMessage(id, {text: textCaption, contextInfo: { externalAdReply: {title: title, body: desc, thumbnail: await getBuffer(imageUrl), mediaType: 1, sourceUrl: linkAcess}},}, {quoted: quotedThis});
}

async function replyWithNewsletter( text, options = {}, quotedThis = info ) {
await carol.sendMessage(from, {text: text, contextInfo: options}, {quoted: quotedThis}).catch(async (error) => {
await carol.sendMessage(from, {text: "Ocorreu um erro ao encaminhar a mensagem pré-definida na função."}, {quoted: selo});
});
};

async function replyWithReaction(text, options = {}, quotedThis = info ) {
await carol.sendMessage(from, options);
await carol.sendMessage(from, {text: text}, {quoted: quotedThis}).catch(async (error) => {
await carol.sendMessage(from, {text: "Ocorreu um erro ao encaminhar a mensagem pré-definida na função."}, {quoted: selo});
});
};

const sendSticker = async (ChatID, FileN, quotedThis) => {
await carol.sendMessage(ChatID, {sticker: {url: FileN}}, {quoted: selo}).catch(async (error) => {
await carol.sendMessage(from, {text: "Ocorreu um erro ao enviar o sticker."}, {quoted: selo});
});
};

const sendImage = async (ChatID, FileN) => {
await carol.sendMessage(ChatID, {image: {url: FileN}}, {quoted: selo}).catch(async (error) => {
await carol.sendMessage(from, {text: "Ocorreu um erro ao enviar a imagem."}, {quoted: selo});
});
};

const sendText = async (ChatID, texto) => {
await carol.sendMessage(ChatID, {text: texto}).catch(async (error) => {
await carol.sendMessage(from,{text: "Ocorreu um erro ao encaminhar o texto pré-definido na função."}, {quoted: selo});
});
};

const sendMentions = async (local, teks) => {
memberr = [];
vy = teks.includes("\n") ? teks.split("\n") : [teks];
for (vz of vy) {
for (zn of vz.split(" ")) {
if (zn.includes("@"))
memberr.push(parseInt(zn.split("@")[1]) + "@s.whatsapp.net");
}
}
await carol.sendMessage(local, {text: teks.trim(), mentions: [memberr]}, {quoted: selo}).catch(async (e) => {
await carol.sendMessage(from, {text: "Ocorreu um erro ao encaminhar a mensagem pré-definida na função."}, {quoted: selo});
});
};

const mentions = async (teks = "", mb, id) => {
id == null || id == undefined || id == false
? await carol.sendMessage(from, { text: teks.trim(), mentions: mb })
: await carol.sendMessage(from, {text: teks.trim(), mentions: [mb]}, {quoted: selo});
};

const mention = async (teks = "", ms = selo) => {
memberr = [];
vy = teks.includes("\n") ? teks.split("\n") : [teks];
for (vz of vy) {
for (zn of vz.split(" ")) {
if (zn.includes("@"))
memberr.push(parseInt(zn.split("@")[1]) + "@s.whatsapp.net");
}
}
await carol.sendMessage(from, {text: teks.trim(), mentions: [memberr]},{quoted: ms}).catch(async (e) => {
await carol.sendMessage(from, {text: "Ocorreu um erro ao encaminhar a mensagem pré-definida na função."}, {quoted: selo});
});
};

const mentionSemQuoted = async (teks) => {
memberr = [];
vy = teks.includes("\n") ? teks.split("\n") : [teks];
for (vz of vy) {
for (zn of vz.split(" ")) {
if (zn.includes("@"))
memberr.push(parseInt(zn.split("@")[1]) + "@s.whatsapp.net");
}
}
await carol.sendMessage(from, {text: teks.trim(), mentions: memberr}).catch(async (e) => {
await carol.sendMessage(from, {text: "Ocorreu um erro ao encaminhar a mensagem pré-definida na função."}, {quoted: selo});
});
};

const mencionarIMG = async (teks = "", FileN, thisQuoted = info) => {
memberr = [];
vy = teks.includes("\n") ? teks.split("\n") : [teks];
for (vz of vy) {
for (zn of vz.split(" ")) {
if (zn.includes("@"))
memberr.push(parseInt(zn.split("@")[1]) + "@s.whatsapp.net");
}
}
await carol.sendMessage(from, {image: {url: FileN}, caption: teks.trim(), mentions: memberr}, {quoted: thisQuoted}).catch(async (error) => {
await carol.sendMessage(from, {text: "Ocorreu um erro ao encaminhar a imagem e o texto pré-definidos na função."}, {quoted: selo});
});
};

const reagir = async (idgp, emj) => {
carol.sendMessage(idgp, { react: { text: emj, key: info.key } });
};

const verificarN = async (sla) => {
const [result] = await carol.onWhatsApp(sla);
if (result == undefined) {
reply("Este usuário não é existente no WhatsApp");
} else {
reply(
`${sla} Número inserido é existente no WhatsApp com o id: ${result.jid}`
);
}
};

const permuteFigPackName = (secondtxt, usu = sender) => {
if (JSON.stringify(vip).includes(usu)) {
if (isJsonIncludes(figname, usu)) {
let AXB = figname.map((i) => i.id).indexOf(usu);
if (isJsonIncludes(figname[AXB].fig, "pack")) {
let BCX = figname[AXB].fig.map((i) => i.mod).indexOf("pack");
return figname[AXB].fig[BCX].pack;
} else return secondtxt;
} else return secondtxt;
} else return secondtxt;
};

const permuteFigAuthorName = (secondtxt, usu = sender) => {
if (JSON.stringify(vip).includes(usu)) {
if (isJsonIncludes(figname, usu)) {
AB = figname.map((i) => i.id).indexOf(usu);
if (isJsonIncludes(figname[AB].fig, "author")) {
BC = figname[AB].fig.map((i) => i.mod).indexOf("author");
return figname[AB].fig[BC].author;
} else return secondtxt;
} else return secondtxt;
} else return secondtxt;
};

if (isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async () => {
if (
budy.includes(`${prefix}sticker`) ||
budy.includes(`${prefix}s`) ||
budy.includes(`${prefix}stk`) ||
budy.includes(`${prefix}st`) ||
budy.includes(`${prefix}fsticker`) ||
budy.includes(`${prefix}f`) ||
budy.includes(`${prefix}fstiker`)
)
return;
if (type == "imageMessage") {
var pack = `🤖 BOT: ${NomeDoBot}\n`;
var author2 = `\n👑 OWNER: ${pushname}\n\nTenha coragem de sonhar.`;
owgi = await getFileBuffer(info.message.imageMessage, "image");
let encmediaa = await sendImageAsSticker2(carol, from, owgi, selo, {packname: pack, author: author2});
DLT_FL(encmediaa);
}
if (type == "videoMessage") {
if (isMedia && info.message.videoMessage.seconds < 10) {
var pack = `🤖 BOT: ${NomeDoBot}\n`;
var author2 = `\n👑 OWNER: ${pushname}\n\nTenha coragem de sonhar.`;
owgi = await getFileBuffer(info.message.videoMessage, "video");
let encmedia = await sendVideoAsSticker2(carol, from, owgi, selo, {packname: pack, author: author2});
DLT_FL(encmedia);
}
}
}, 1000);
}
autofiguf().catch((error) => {
console.log(error);
});
}

var nmrdnofc1 =
clear_dono_ofc.replace(new RegExp("[()+-/ +/]", "gi"), "") +
"@s.whatsapp.net";

if (isGroup &&
fs.existsSync(`./bunker/database/func/afk/afk-@${nmrdnofc1}.json`)
) {
if (budy.indexOf(`@${nmrdnofc1}`) >= 0) {
const tabelin = JSON.parse(
fs.readFileSync(
`./bunker/database/func/afk/afk-@${nmrdnofc1}.json`
)
);
await carol.sendMessage(from, {text: mess.absenceRecordOwner(ownerName, tabelin)}, {quoted: selo});
}
}

if (isGroup &&
dataGp[0].ausentes?.length > 0 &&
menc_jid2?.length > 0 &&
JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)
) {
blue = [];
for (i of menc_jid2) {
if (groupAdmins.indexOf(String(i)) != -1)
blue.push(groupAdmins.indexOf(String(i)));
}
if (blue.length == 0) return;
big = [];
for (i of blue) {
big.push(groupAdmins[i]);
}
blr = [];
for (i = 0; i < big.length; i++) {
blr.push(
dataGp[0].ausentes[
dataGp[0].ausentes.map((i) => i.id).indexOf(big[i])
]
);
}
for (i of blr) {
var blak = i;
}
await mention(mess.absenceRecordAdmin(blak));
}

if (isBotGroupAdmins && isGroupAdmins && body === "apaga") {
if (!menc_prt) return;
await carol.sendMessage(from, {
delete: {
remoteJid: from,
fromMe: false,
id: info.message.extendedTextMessage.contextInfo.stanzaId,
participant: menc_prt,
},
});
}

if (!isVip && nescessario.cmd_vip.includes(command))
return reply(mess.onlyVipUser());

//========================================\\

//BAN GRUPO & BOT OFF
if (isGroup && isCmd && isBanchat && !SoDono) return;
if (isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return;
if (isBotoff && !SoDono) return;

//=======================================\\

const sendStickerFromUrl = async (to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri)
.pipe(fs.createWriteStream(filename))
.on("close", callback);
});
};
download(url, "./bunker/sticker" + names + ".png", async function () {
let filess = "./bunker/sticker" + names + ".png";
let asw = "./bunker/sticker" + names + ".webp";
exec(
`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`,
async (err) => {
let media = fs.readFileSync(asw);
await carol
.sendMessage(
to,
{sticker: media},
{
sendEphemeral: true,
contextInfo: { forwardingScore: 50, isForwarded: false },
quoted: selo,
}
)
.catch(async (error) => {
return reply(mess.error());
});
DLT_FL(filess);
DLT_FL(asw);
}
);
});
} catch {
return reply(mess.error());
}
};

//=========(isQuoted/consts)=============\\

const isImage = type == "imageMessage";
const isVideo = type == "videoMessage";
const isVisuU2 = type == "viewOnceMessageV2";
const isAudio = type == "audioMessage";
const isSticker = type == "stickerMessage";
const isContact = type == "contactMessage";
const isLocation = type == "locationMessage";
const isProduct = type == "productMessage";
const isMedia =
type === "imageMessage" ||
type === "videoMessage" ||
type === "audioMessage" ||
type == "viewOnceMessage" ||
type == "viewOnceMessageV2";
typeMessage = body.substr(0, 50).replace(/\n/g, "");
if (isImage) typeMessage = "Image";
else if (isVideo) typeMessage = "Video";
else if (isAudio) typeMessage = "Audio";
else if (isSticker) typeMessage = "Sticker";
else if (isContact) typeMessage = "Contact";
else if (isLocation) typeMessage = "Location";
else if (isProduct) typeMessage = "Product";

const isQuotedMsg =
type === "extendedTextMessage" && content.includes("conversation");
const isQuotedMsg2 =
type === "extendedTextMessage" && content.includes("text");
const isQuotedImage =
type === "extendedTextMessage" && content.includes("imageMessage");
const isQuotedVisuU =
type === "extendedTextMessage" && content.includes("viewOnceMessage");
const isQuotedVisuU2 =
type === "extendedTextMessage" &&
content.includes("viewOnceMessageV2");
const isQuotedVideo =
type === "extendedTextMessage" && content.includes("videoMessage");
const isQuotedDocument =
type === "extendedTextMessage" && content.includes("documentMessage");
const isQuotedDocW =
type === "extendedTextMessage" &&
content.includes("documentWithCaptionMessage");
const isQuotedAudio =
type === "extendedTextMessage" && content.includes("audioMessage");
const isQuotedSticker =
type === "extendedTextMessage" && content.includes("stickerMessage");
const isQuotedContact =
type === "extendedTextMessage" && content.includes("contactMessage");
const isQuotedLocation =
type === "extendedTextMessage" && content.includes("locationMessage");
const isQuotedProduct =
type === "extendedTextMessage" && content.includes("productMessage");

// ANTI DDD - LISTA COMPLETA DE DDDs EXISTENTES NO BRASIL!
const arrayDDDs = [
11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33,
34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55,
61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82,
83, 84, 85, 86, 87, 88, 89, 91, 93, 94, 95, 96, 97, 98, 99,
];

//==========(REGISTRO)=============\\

if (isGroup) {
const checar = getComandos(from);
if (checar === undefined) addComandosId(from);
}
if (isGroup &&
isCmd &&
!SoDono &&
!isnit &&
getComandoBlock(from).includes(command))
return reply("O comando foi bloqueado, entre em contato com a administração.");
///BLOCK CMD GLOBAL///
if (isBlockCmdG.includes(command) && !SoDono)
return reply("Olá, o comando está bloqueado para *uso global*, ou seja, todos os usuários estão impossibilitados de usar ele.\n–\n• Entre em contato com meu proprietário para saber o motivo.");
const dattofc = moment.tz("America/Sao_Paulo").format("DD/MM/YYYY");
const hourofc = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
const MessageType =
type == "audioMessage"
? "Áudio"
: type == "stickerMessage"
? "Figurinha"
: type == "imageMessage"
? "Imagem"
: type == "videoMessage"
? "Vídeo"
: type == "documentMessage"
? "Documento"
: type == "contactMessage"
? "Contato"
: type == "locationMessage"
? "Localização"
: info.message?.reactionMessage?.text
? `Reação '${info.message.reactionMessage.text}'`
: "Texto";
if (!isGroup && isCmd)
console.log(`\n╭════════════════════════════════╮
┇ 🐹 ${colors.bgCyan("NEW CAROL BETA WHATSAPP")} 🐹
┇ ${colors.magenta("Tipo De Mensagem:")} ${colors.cyan(MessageType)}
┇ ${colors.magenta("Nome Do Usuário:")} ${colors.blue(pushname)}
┇ ${colors.magenta("Número Do Usuário:")} ${colors.yellow(sender.split("@")[0])}
┇ ${colors.magenta("Horário Atual:")} ${colors.red(hourofc)}
╰════════════════════════════════╯`);
if (!isGroup && !isCmd && !info.key.fromMe)
console.log(`\n╭════════════════════════════════╮
┇ 🐹 ${colors.bgCyan("NEW CAROL BETA WHATSAPP")} 🐹
┇ ${colors.magenta("Tipo De Mensagem:")} ${colors.cyan(MessageType)},
┇ ${colors.magenta("Nome Do Usuário:")} ${colors.blue(pushname)},
┇ ${colors.magenta("Número Do Usuário:")} ${colors.yellow(sender.split("@")[0])},
┇ ${colors.magenta("Horário Atual:")} ${colors.red(hourofc)},
╰════════════════════════════════╯`);
if (!isCmd && isGroup && !info.key.fromMe)
console.log(`\n╭════════════════════════════════╮
┇ 🐹 ${colors.bgCyan("NEW CAROL BETA WHATSAPP")} 🐹
┇ ${colors.magenta("Tipo De Mensagem:")} ${colors.cyan(MessageType)},
┇ ${colors.magenta("Nome Do Grupo:")} ${colors.blue(groupName)},
┇ ${colors.magenta("Nome Do Usuário:")} ${colors.yellow(pushname)},
┇ ${colors.magenta("Horário Atual:")} ${colors.red(hourofc)},
╰════════════════════════════════╯`);
if (isCmd && isGroup)
console.log(`\n╭════════════════════════════════╮
┇ 🐹 ${colors.bgCyan("NEW CAROL BETA WHATSAPP")} 🐹
┇ ${colors.magenta("Tipo De Mensagem:")} ${colors.cyan(MessageType)},
┇ ${colors.magenta("Nome Do Grupo:")} ${colors.blue(groupName)},
┇ ${colors.magenta("Nome Do Usuário:")} ${colors.yellow(pushname)},
┇ ${colors.magenta("Horário Atual:")} ${colors.red(hourofc)},
╰════════════════════════════════╯`);

// LOADING
async function carregamento() {
txt1 = `_🔥⃟᮪〭۬̇〬⃟˖ꪶ𝙾𝚋𝚝𝚎𝚗𝚍𝚘 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜ꦽꦼ̷১_\n_『ʟᴏᴀᴅɪɴɢ』:`;
var carre = [
`${txt1}ʟᴏᴀᴅɪɴɢ〘█▒▒▒▒▒▒▒▒▒〙10%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘███▒▒▒▒▒▒▒〙35%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘█████▒▒▒▒▒〙51%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘███████▒▒▒〙62%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘████████▒▒〙80%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘██████████〙100%`,
`_᭥ꩌ゚໋ @${sender.split("@")[0]}_\n_• Pesquisa realizada, Aguarde um pouco para ser enviado.._`,
];
let { key } = await carol.sendMessage(from, {text: `_᭥ꩌ゚໋ Ok @${sender.split("@")[0]}_\n_• Obtendo os resultados de sua pesquisa.._`, mentions: [sender]}, {quoted: selo});
for (let i = 0; i < carre.length; i++) {
await carol.sendMessage(from, {text: carre[i], mentions: [sender], edit: key});
}
};
async function loading() {
txt1 = `_🔥⃟᮪〭۬̇〬⃟˖ꪶ𝙾𝚋𝚝𝚎𝚗𝚍𝚘 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜ꦽꦼ̷১_\n_『ʟᴏᴀᴅɪɴɢ』:`;
var carre = [
`${txt1}〘█▒▒▒▒▒▒▒▒▒▒▒〙10%_`,
`${txt1}〘████▒▒▒▒▒▒▒▒〙30%_`,
`${txt1}〘███████▒▒▒▒▒〙50%_`,
`${txt1}〘█████████▒▒▒〙70%_`,
`${txt1}〘███████████▒〙90%_`,
`${txt1}〘████████████〙100%_`,
`_᭥ꩌ゚໋ @${sender.split("@")[0]}_\n_• Pesquisa realizada, Aguarde um pouco para ser enviado.._`,
];
let { key } = await carol.sendMessage(from, {text: `_᭥ꩌ゚໋ Ok @${sender.split("@")[0]}_\n_• Obtendo os resultados de sua pesquisa.._`,
mentions: [sender]}, {quoted: selo});
for (let i = 0; i < carre.length; i++) {
await carol.sendMessage(from, {text: carre[i], mentions: [sender], edit: key});
}
}

//====================≠≠===============\\

async function TiktokDown(url, from) {
try {
const response = await axios.post('https://tikwm.com/api/', null, {
headers: {
'Accept': 'application/json, text/javascript, */*; q=0.01',
'Accept-Language': 'pt-BR,pt;q=0.9',
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
'Origin': 'https://tikwm.com',
'Referer': 'https://tikwm.com/',
'User-Agent': 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
'X-Requested-With': 'XMLHttpRequest'
},
params: {
url,
count: 12,
cursor: 0,
web: 1,
hd: 0
}
});
const data = response.data.data;
const videoUrl = `https://tikwm.com${data.play}`;
await carol.sendMessage(from, {video: {url: videoUrl}, mimetype: "video/mp4"}, {quoted: selo});
} catch (error) {
console.error("Erro DownMp4:", error);
}
};

async function DownMp4(url, from) {
try {
if (url.includes("tiktok.com") || url.includes("vm.tiktok")) {
await TiktokDown(url, from);
}
if (url.includes("instagram.com")) {
await carol.sendMessage(from, {video: {url: `https://neon-apis.online/api/insta-video?url=${url}`}, mimetype: "video/mp4" }, {quoted: selo});
}
if (url.includes("facebook.com") || url.includes("fb.watch")) {
await carol.sendMessage(from, {video: {url: `https://neon-apis.online/api/facebook?url=${url}`}, mimetype: "video/mp4"}, {quoted: selo});
}
if (url.includes("youtube.com") || url.includes("youtu.be")) {
await carol.sendMessage(from, {video: {url: `https://neon-apis.online/api/yt-mp4?url=${url}`}, mimetype: "video/mp4"}, {quoted: selo});
}
if (url.includes("pinterest.com") || url.includes("pin.it")) {
let res = await fetchJson(`https://api.nexfuture.com.br/api/downloads/pinterestdl?apikey=72f831b2-f25f-4f64-b9b7-d4063eaf4deb&url=${url}`);
await carol.sendMessage(from, {video: {url: res.download}, mimetype: "video/mp4"}, {quoted: selo});
}
} catch (error) {
console.error("Erro DownMp4:", error);
await reagir(from, "❌");
}
};
//====================≠≠===============\\

const largeNumber = (value) => {
if (Number(value) < 0) return "O número precisa ser ≥ 0";
nmr = `${Number(value).toFixed(0)}`;
if (nmr.length >= 4) {
const existPoint = (nmr) => {
if (Number(nmr) !== 0) return "." + `${nmr}`;
return ``;
};
if (nmr.length >= 4)
txt =
nmr.slice(0, nmr.length - 3) +
existPoint(nmr.slice(nmr.length - 3, nmr.length - 2)) +
"K";
if (nmr.length >= 7)
txt =
nmr.slice(0, nmr.length - 6) +
existPoint(nmr.slice(nmr.length - 6, nmr.length - 5)) +
"M";
if (nmr.length >= 10)
txt =
nmr.slice(0, nmr.length - 9) +
existPoint(nmr.slice(nmr.length - 9, nmr.length - 8)) +
"B";
if (nmr.length >= 13)
txt =
nmr.slice(0, nmr.length - 12) +
existPoint(nmr.slice(nmr.length - 12, nmr.length - 11)) +
"T";
} else {
txt = nmr;
}
return txt;
};

// NAMORO
if (budy2.toLowerCase() === "s" || budy2.toLowerCase() === "sim") {
if (
JSON.stringify(namoro2).includes(sender) &&
namoro2[namoro2.map((i) => i.id).indexOf(sender)].idgp == from &&
isGroup
) {
C14 = namoro2.map((i) => i.id).indexOf(sender);
C12 = namoro1
.map((i) => i.usu1)
.indexOf(namoro2[C14].pedido + "@s.whatsapp.net");
namoro1[C12].namorados = true;
fs.writeFileSync(
"./bunker/database/func/namoro1.json",
JSON.stringify(namoro1, null, 2)
);
namoro1.push({usu1: sender, usu2: namoro2[C14].pedido, namorados: true, idgp: from, hora: hourofc, data: dattofc});
fs.writeFileSync("./bunker/database/func/namoro1.json", JSON.stringify(namoro1, null, 2));
namoro2.splice(C14, 1);
fs.writeFileSync("./bunker/database/func/namoro2.json", JSON.stringify(namoro2));
mention(`🥳 Felicitações @${namoro1[C12].usu1.split("@")[0]}! O (a) seu grande amor, @${sender.split("@")[0]}, aceitou o seu pedido de namoro.\nSeu par pode ser consultado no comando: ${prefix}minhadupla`);
}
};
if (budy2.toLowerCase() === "n" ||
budy2.toLowerCase().replace("ã", "a") === "nao"
) {
if (
JSON.stringify(namoro2).includes(sender) &&
namoro2[namoro2.map((i) => i.id).indexOf(sender)].idgp == from &&
isGroup
) {
C14 = namoro2.map((i) => i.id).indexOf(sender);
C12 = namoro1
.map((i) => i.usu1)
.indexOf(`${namoro2[C14].pedido}@s.whatsapp.net`);
mention(
`Sinto muito @${namoro1[C12].usu1.split("@")[0]}! O (a) @${sender.split("@")[0]} não te ama, deve está confuso(a) ou não preparado(a) e por isso não aceitou o seu pedido de namoro. 😦`
);
namoro1.splice(C12, 1);
fs.writeFileSync("./bunker/database/func/namoro1.json", JSON.stringify(namoro1, null, 2));
namoro2.splice(C14, 1);
fs.writeFileSync("./bunker/database/func/namoro2.json", JSON.stringify(namoro2));
}
};

if (isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
if (Procurar_String.includes("chat.whatsapp.com/")) {
if (isBot) return;
link_dgp = await carol.groupInviteCode(from);
if (Procurar_String.match(link_dgp))
return reply("Link do nosso grupo, não irei remover.. ");
if (IS_DELETE) {
setTimeout(() => {
carol.sendMessage(from, {
delete: {
remoteJid: from,
fromMe: false,
id: info.key.id,
participant: sender,
},
});
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender)) return;
carol.groupParticipantsUpdate(from, [sender], "remove");
}
};

const groupIdscount = [];
for (let obj of countMessage) {
groupIdscount.push(obj.groupId);
}

// MUTAR USUÁRIO
if (!muted.some((i) => i.grupo === from) && isGroup) {
muted.push({ grupo: from, usus: [] });
fs.writeFileSync(
"./bunker/database/grupos/muted.json",
JSON.stringify(muted, null, 2)
);
};

if (isGroup && muted[muted.map((i) => i.grupo).indexOf(from)].usus.includes(sender)
) {
await carol.sendMessage(from, {text: `🤫 Hmm @${sender.split("@")[0]}, achou que ia passar despercebido? Achou errado lindo(a)! Você está sendo removido por enviar mensagem, sendo que você está mutado neste grupo.`, mentions: [sender]}, {quoted: selo});
await carol.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
await carol.groupParticipantsUpdate(from, [sender], "remove");
// Após a remoção do participante mutado, automaticamente ele vai ser removido da lista de usuários mutados do grupo. ♥️
muted[muted.map((i) => i.grupo).indexOf(from)].usus.splice(sender);
fs.writeFileSync("./bunker/database/grupos/muted.json", JSON.stringify(muted, null, 2));
}

const filevddf = path.join(__dirname, "./bunker/vdd-dsf/verdade-desafio.json");
// Função para ler o arquivo JSON
function lerDados() {
try {
const data = fs.readFileSync(filevddf, "utf8");
return JSON.parse(data);
} catch (err) {
console.error("Erro ao ler o arquivo JSON", err);
return { verdade: [], desafio: [] };
}
};

// Função para salvar no arquivo JSON
function salvarDados(dados) {
try {
fs.writeFileSync(filevddf, JSON.stringify(dados, null, 2), "utf8");
console.log("Dados salvos com sucesso!");
} catch (err) {
console.error("Erro ao salvar os dados no arquivo JSON", err);
}
};

// Função para escolher aleatoriamente uma pergunta ou desafio
function getRandomElement(arr) {
return arr[Math.floor(Math.random() * arr.length)];
};

// Função principal do jogo
function jogoVerdadeOuDesafio(escolha) {
const dados = lerDados();

if (escolha.toLowerCase() === "verdade") {
const pergunta = getRandomElement(dados.verdade);
// console.log(`Verdade: ${pergunta}`);
// return pergunta
reply(pergunta);
} else if (escolha.toLowerCase() === "desafio") {
const desafio = getRandomElement(dados.desafio);
console.log(`Desafio: ${desafio}`);
return desafio;
} else {
console.log('Escolha inválida! Digite "verdade" ou "desafio".');
}
};

// Função para adicionar uma nova pergunta ou desafio
function adicionarPerguntaOuDesafio(tipo, conteudo) {
const dados = lerDados();

if (tipo.toLowerCase() === "verdade") {
dados.verdade.push(conteudo);
console.log("Nova pergunta de verdade adicionada!");
} else if (tipo.toLowerCase() === "desafio") {
dados.desafio.push(conteudo);
console.log("Novo desafio adicionado!");
} else {
console.log('Tipo inválido! Use "verdade" ou "desafio".');
return;
}
salvarDados(dados);
};

//====(CONTADOR-DE-MENSAGENS)=======\\
var numbersIds = [];
if (isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from);
for (let obj of countMessage[ind].numbers) {
numbersIds.push(obj.id);
}
if (numbersIds.indexOf(sender) >= 0) {
var indnum = numbersIds.indexOf(sender);
var RSM_CN = countMessage[ind].numbers[indnum];
type == "stickerMessage" ? "" : (RSM_CN.messages += isCmd ? 0 : 1);
type == "stickerMessage"
? ""
: (RSM_CN.cmd_messages += isCmd ? 1 : 0);
type == "stickerMessage" ? "" : (RSM_CN.aparelho = adivinha);
RSM_CN.figus += type == "stickerMessage" ? 1 : 0;
fs.writeFileSync(
"./configs/media/countmsg.json",
JSON.stringify(countMessage, null, 2) + "\n"
);
} else {
const messages = isCmd ? 0 : 1;
const cmd_messages = isCmd ? 1 : 0;
var figus = type == "stickerMessage" ? 1 : 0;
countMessage[ind].numbers.push({id: sender, messages: messages, cmd_messages: cmd_messages, aparelho: adivinha, figus: figus});
fs.writeFileSync("./configs/media/countmsg.json", JSON.stringify(countMessage, null, 2) + "\n");
}
} else if (isGroup) {
countMessage.push({ groupId: from, numbers: [{ id: sender, messages: 2, figus: 0, cmd_messages: isCmd ? 1 : 0, aparelho: adivinha }]});
fs.writeFileSync("./configs/media/countmsg.json", JSON.stringify(countMessage, null, 2) + "\n");
};

// PARA LIMPAR OS DADOS DOS USUÁRIOS //
async function ClearMembersInactive() {
var RD_CNT =
countMessage[countMessage.map((i) => i.groupId).indexOf(from)].numbers;
CNT1 = [];
for (i of groupMembers) {
CNT1.push(i.id);
}
CNT = [];
for (i of RD_CNT) {
if (!CNT1.includes(i.id)) CNT.push(i);
}
for (i of CNT) {
RD_CNT.splice(RD_CNT.map((i) => i.id).indexOf(i.id), 1);
}
fs.writeFileSync("./configs/media/countmsg.json", JSON.stringify(countMessage, null, 2));
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)];
};

//======================================\\

//======(ANTI-IMAGEM)========\\
if (isAntiImg && isBotGroupAdmins && type == "imageMessage") {
if (info.key.fromMe) return;
if (isGroupAdmins)
return await carol.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo});
if (dataGp[0].legenda_imagem != "0") {
await carol.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: selo});
}
if (IS_DELETE) {
setTimeout(async () => {
await carol.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }});
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender)) return;
await carol.groupParticipantsUpdate(from, [sender], "remove");
};

//======(ANTI-STICKER)========\\
if (isAntiSticker && isBotGroupAdmins && type == "stickerMessage") {
if (info.key.fromMe) return;
if (isGroupAdmins) return await carol.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo});
await carol.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: selo});
if (IS_DELETE) {
setTimeout(async () => {
await carol.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }});
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender)) return;
await carol.groupParticipantsUpdate(from, [sender], "remove");
};

if (Antidoc && isBotGroupAdmins && type == "documentMessage") {
if (info.key.fromMe) return;
if (isGroupAdmins) return await carol.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo});
if (dataGp[0].legenda_documento != "0") {
await carol.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: selo});
}
if (IS_DELETE) {
setTimeout(async () => {
await carol.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }});
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender)) return;
await carol.groupParticipantsUpdate(from, [sender], "remove");
};

const dominiosIgnorados = [
"instagram.com/reel",
"instagram.com/share/reel",
"tiktok.com",
"vm.tiktok.com",
"www.tiktok.com",
"facebook.com",
"fb.com",
"www.facebook.com",
"kwai.com",
"s.kw.ai",
"youtube.com",
"youtu.be",
"pinterest.com",
"pin.it",
];

function isDominioIgnorado(url) {
return dominiosIgnorados.some(dom => url.includes(dom));
};

let isTrueFalse = Array("tiktok", "facebook", "instagram", "twitter", "ytmp3", "ytmp4", "play", "kwai", "playdoc", "playvid").some((item) => item === command);
if (isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && !isListaBrancaG && isBotGroupAdmins && !info.key.fromMe) {
if (isDominioIgnorado(Procurar_String)) {
 return;
}
if (Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await carol.groupInviteCode(from);
if (Procurar_String.match(link_dgp)) return reply("Link do nosso grupo, não irei remover..");
}
if (isCmd && isTrueFalse) return;
if (IS_DELETE) {
setTimeout(async () => {
await carol.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
await carol.groupSettingUpdate(from, "announcement");
setTimeout(async () => {
await carol.groupSettingUpdate(from, "not_announcement");
}, 1200);
if (!JSON.stringify(groupMembers).includes(sender)) return;
await carol.groupParticipantsUpdate(from, [sender], "remove");
};

if (isUrl(PR_String) && isAntiLinkEasy && !isGroupAdmins && !isListaBrancaG && isBotGroupAdmins && !info.key.fromMe) {
if (isDominioIgnorado(Procurar_String)) {
 return;
}
if (Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await carol.groupInviteCode(from);
if (Procurar_String.match(link_dgp))
return reply("Link do nosso grupo, não irei deletar..");
}
if (isCmd && isTrueFalse) return;
if (IS_DELETE) {
setTimeout(async () => {
await carol.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
};

// ANTI NOTAS FAKES ==================>
if (isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi);
if (verificar && budy.length < 100) return;
if (IS_DELETE) {
setTimeout(async () => {
await carol.sendMessage(from, {
delete: {
remoteJid: from,
fromMe: false,
id: info.key.id,
participant: sender,
},
});
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender)) return;
await carol.groupParticipantsUpdate(from, [sender], "remove");
}

//FINALZIN ===========================>
function remover(id, usu) {
carol.groupParticipantsUpdate(id, [usu], "remove");
}
//======(ANTI-VIDEO)========\\
if (isAntiVid && isBotGroupAdmins && type == "videoMessage") {
if (isGroupAdmins)
return await carol.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo});
if (dataGp[0].legenda_video == "0") {
await carol.sendMessage(
from,
{ text: mess.messageProhibitedDetUser() },
{ quoted: selo }
);
} else {
await carol.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: selo});
}
if (IS_DELETE) {
setTimeout(async () => {
await carol.sendMessage(from, {
delete: {
remoteJid: from,
fromMe: false,
id: info.key.id,
participant: sender,
},
});
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender)) return;
await carol.groupParticipantsUpdate(from, [sender], "remove");
}

//======(ANTI-AUDIO)=======\\
if (isAntiAudio && isBotGroupAdmins && type == "audioMessage") {
if (isGroupAdmins)
return await carol.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo});
await carol.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: selo});
if (IS_DELETE) {
setTimeout(async () => {
await carol.sendMessage(from, {
delete: {
remoteJid: from,
fromMe: false,
id: info.key.id,
participant: sender,
},
});
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender)) return;
await carol.groupParticipantsUpdate(from, [sender], "remove");
};

//========(ANTI_LIGAR)========\\
if (!isGroup && isAnticall) {
carol.ws.on("CB:call", async (B) => {
var msgcallblock = `./bunker/database/func/call-msg_block-${sender}.json`;
if (!fs.existsSync(msgcallblock)) {
fs.writeFileSync(
msgcallblock,
JSON.stringify(mess.antiCalls(), null, 2)
);
var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock));
if (B.content[0].tag == "offer") {
await carol
.sendMessage(B.content[0].attrs["call-creator"], {
text: msgcallbl,
})
.then(async () => {
await carol.updateBlockStatus(
B.content[0].attrs["call-creator"],
"block"
);
DLT_FL(msgcallblock);
});
}
}
});
}

/* ANTIPV1 - Este anti pv bloqueia aqueles que encaminham mensagem no pv do bot.. */
var USUARIOS_BLOQ = [];
if (isAntiPv && !USUARIOS_BLOQ.includes(sender)) {
if (!isGroup && !SoDono && !isnit && !isVip) {
await sleep(2500);
reply(msgantipv1.replace("#nome#", pushname));
setTimeout(async () => {
await carol.updateBlockStatus(sender, "block");
}, 2000);
}
USUARIOS_BLOQ.push(sender);
}

/* ANTIPV2 - Vai floodar o privado do usuário que encaminhar a mensagem no privado.. */
var MSG_ANTPV2_ENC = [];
if (
!isGroup &&
!isVip &&
!SoDono &&
!isnit &&
!issupre &&
!ischyt &&
!info.key.fromMe &&
isAntiPv2 &&
!MSG_ANTPV2_ENC.includes(sender)
) {
MSG_ANTPV2_ENC.push(sender);
return reply(msgantipv2);
}

/* ANTIPV3 - Ignora todos os que falam ou usam os comandos no privado, exceto user vip e o proprietário atual do bot. */
if (!isGroup && !isVip && !SoDono && !info.key.fromMe && isAntiPv3)
return;

//====================================\\
var i9 = countMessage.map((i) => i.groupId).indexOf(from);
var idgrupo = groupIdscount.indexOf(from);

var idusu = numbersIds?.indexOf(sender);

const VerificarJSON = (json, value) => {
if (JSON.stringify(json).includes(value)) return true;
return false;
};

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

if (isCmd && isBanned) return reply(mess.bannedUser());

const totalhit = JSON.parse(
fs.readFileSync("./bunker/database/data/totalcmd.json")
);
const CmdUsedBOT = () => {
totalhit[0].totalcmd += 1;
fs.writeFileSync(
"./bunker/database/data/totalcmd.json",
JSON.stringify(totalhit)
);
};
if (isCmd) CmdUsedBOT();

const reqcmd = JSON.parse(
fs.readFileSync("./bunker/database/data/totalcmd.json")
);

if (
isGroup &&
isCmd &&
!isGroupAdmins &&
!SoDono &&
!isVip &&
dataGp[0]?.Limitar_CMD
) {
var TEMPO_A = Math.floor(Date.now() / 1000);
var ID_G = Limit_CMD.findIndex((i) => i.idgp === from);
var ID_U = Limit_CMD[ID_G]?.ids.findIndex((i) => i.id === sender);
if (
!JSON.stringify(Limit_CMD).includes(from) ||
(ID_G < 0 && ID_U < 0)
) {
Limit_CMD.push({
idgp: from,
ids: [{ id: sender, tempo: TEMPO_A }],
});
fs.writeFileSync(
"./bunker/database/func/limitarcmd.json",
JSON.stringify(Limit_CMD, null, 2)
);
} else if (ID_G >= 0 && ID_U < 0) {
Limit_CMD[ID_G].ids.push({ id: sender, tempo: TEMPO_A });
fs.writeFileSync(
"./bunker/database/func/limitarcmd.json",
JSON.stringify(Limit_CMD, null, 2)
);
}

if (ID_G >= 0 && ID_U >= 0) {
var TEMPO_D = Limit_CMD[ID_G].ids[ID_U].tempo;
var TEMPO_M = TEMPO_A - TEMPO_D;
var TEMPO_D2 = parseInt(dataGp[0]?.Limit_tempo) || 60;
if (TEMPO_M < TEMPO_D2) {
return reply(
nescessario.TEMPO_DE_CMD.replaceAll(
"#tempocmd#",
TimeCount(TEMPO_M)
).replaceAll("#tempo#", TEMPO_D2)
);
} else {
Limit_CMD[ID_G].ids[ID_U].tempo = TEMPO_A;
fs.writeFileSync(
"./bunker/database/func/limitarcmd.json",
JSON.stringify(Limit_CMD, null, 2)
);
}
}
}

carol.sendImageAsSticker = async (jid, path, options = {}) => {
let buff = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], "base64")
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
let buffer;
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options);
} else {
buffer = await imageToWebp(buff);
}
await carol.sendMessage(jid, { sticker: { url: buffer }, ...options });
return buffer;
};

carol.sendIMG = async (
imageDir,
ChatID,
TextM = "",
contextMessageInfo = {}
) => {
try {
await carol.sendMessage(
ChatID,
{
image: fs.readFileSync(imageDir),
caption: TextM,
contextInfo: contextMessageInfo,
},
{ quoted: selo }
);
} catch (errorMessage) {
return reply(String(errorMessage));
}
};

let isCodeKey = Array(
"aluguel",
"alugueis",
"alugar",
"alugarbot",
"loja",
"dono"
).some((i) => i === command);

if (isGroup && isModoAluguel && isCmd && !SoDono && !isCodeKey) {
if (!JSON.stringify(grupos).includes("CAROL V1 BETA -oficial")) {
grupos.push({ id: "CAROL V1 BETA -oficial", gps: [] });
fs.writeFileSync(
"./bunker/database/grupos/aluguel/grupos.json",
JSON.stringify(grupos, null, 2)
);
}
if (!JSON.stringify(grupos).includes(from)) {
grupos.push({ id: from, limite: 5, validado: false });
fs.writeFileSync(
"./bunker/database/grupos/aluguel/grupos.json",
JSON.stringify(grupos, null, 2)
);
}
AB = grupos.map((i) => i.id).indexOf(from);
if (grupos[AB].validado == false) {
if (grupos[AB].limite <= 1) {
grupos.splice(AB, 1);
fs.writeFileSync(
"./bunker/database/grupos/grupos.json",
JSON.stringify(grupos, null, 2)
);
reply(
`⏰️♥️ *O tempo de espera acabou!* Visto que o(s) senhor(es) não desejam comprar uma chave, estou saindo do grupo...`
);
await sleep(3000);
return await carol.groupLeave(from);
} else {
grupos[AB].limite -= 1;
fs.writeFileSync(
"./bunker/database/grupos/aluguel/grupos.json",
JSON.stringify(grupos, null, 2)
);
return await mention(
`💫🗣️ Não encontrei o grupo em meus registros! Por favor, caso esteja alugado ou deseja adquirir uma chave de ativação, entre em contato com o meu dono: *@${nmrdn.split("@")[0]}*`
);
}
}
}

if (chaves.length > 0) {
caixa = [];
for (k of chaves) {
if (budy2.toUpperCase() === k.key) {
caixa.push(k.key);
}
}
if (VerificarJSON(chaves, caixa[0])) {
AD = chaves.map((i) => i.key).indexOf(caixa[0]);
timeday = chaves[AD].dias;
pessoa = chaves[AD].cliente;
infinity = chaves[AD].dias > 0 ? false : true;
if (!VerificarJSON(grupos, "CAROL V1 BETA -oficial")) {
grupos.push({ id: "CAROL V1 BETA -oficial", gps: [] });
fs.writeFileSync(
"./bunker/database/grupos/aluguel/grupos.json",
JSON.stringify(grupos, null, 2)
);
}
if (!VerificarJSON(grupos, from)) {
grupos.push({ id: from, limite: 5, validado: true });
fs.writeFileSync(
"./bunker/database/grupos/aluguel/grupos.json",
JSON.stringify(grupos, null, 2)
);
} else {
GP = grupos.map((i) => i.id).indexOf(from);
grupos[GP].validado = true;
fs.writeFileSync(
"./bunker/database/grupos/aluguel/grupos.json",
JSON.stringify(grupos, null, 2)
);
}
if (infinity == false) {
if (chaves[AD].tipo == 1 && isGroup) {
if (!VerificarJSON(aluguel, from)) {
aluguel.push({
id: from,
nome: groupName,
tempo: timeday,
totalRent: timeday,
cliente: pessoa,
save: Number(moment.tz("America/Sao_Paulo").format("DD")),
cortesia: false,
});
fs.writeFileSync(
"./bunker/database/grupos/aluguel/aluguel.json",
JSON.stringify(aluguel, null, 2)
);
chaves.splice(AD, 1);
fs.writeFileSync(
"./bunker/database/grupos/aluguel/chaves.json",
JSON.stringify(chaves, null, 2)
);
reply(
`♥️🛒 O grupo foi registrado com sucesso ao aluguel! *Qualquer dúvida entre em contato com meu dono.*`
);
await sleep(2000);
await carol.sendMessage(nmrdn, {
text: `⚠️🛒 Código de aluguel foi validado no grupo com sucesso! Registrado no nome de *@${pessoa.split("@")[0]}*\n• Grupo registrado: *${groupName}*`,
mentions: [pessoa],
});
} else {
AB = aluguel.map((i) => i.id).indexOf(from);
aluguel[AB].cortesia = false;
aluguel[AB].nome = groupName;
aluguel[AB].totalRent = aluguel[AB].tempo + timeday;
aluguel[AB].tempo += timeday;
fs.writeFileSync(
"./bunker/database/grupos/aluguel/aluguel.json",
JSON.stringify(aluguel, null, 2)
);
chaves.splice(AD, 1);
fs.writeFileSync(
"./bunker/database/grupos/aluguel/chaves.json",
JSON.stringify(chaves, null, 2)
);
reply(
`+${timeday} dia${Number(timeday) > 1 ? "s" : ""} adicionado${Number(timeday) > 1 ? "s" : ""} para o grupo em meu banco de dados.`
);
await sleep(2000);
await carol.sendMessage(SoDono, {
text: `⚠️🛒 Código de aluguel foi validado no grupo com sucesso! Registrado no nome de *@${pessoa.split("@")[0]}*\n• Grupo registrado: *${groupName}*`,
mentions: [pessoa],
});
}
}

if (chaves[AD].tipo == 2 && isGroup) {
CD = grupos.map((i) => i.id).indexOf("CAROL V1 BETA -oficial");
if (!VerificarJSON(grupos[CD].gps, from)) {
if (!VerificarJSON(aluguel, from)) {
grupos[CD].gps.push({ id: from });
fs.writeFileSync(
"./bunker/database/grupos/aluguel/grupos.json",
JSON.stringify(grupos, null, 2)
);
aluguel.push({
id: from,
nome: groupName,
tempo: 24,
totalRent: 24,
cliente: sender,
save: Number(moment.tz("America/Sao_Paulo").format("mm")),
cortesia: true,
});
fs.writeFileSync(
"./bunker/database/grupos/aluguel/aluguel.json",
JSON.stringify(aluguel, null, 2)
);
reply(
`✅️♥️ Código Card Cortesia validado com sucesso! 24h liberadas neste grupo contando a partir de agora.`
);
await sleep(2000);
await carol.sendMessage(SoDono, {
text: `⚠️♥️️ Código *Card Cortesia* foi validado no grupo, registrado no nome de *@${pessoa.split("@")[0]}*.\n• Grupo registrado: *${groupName}*`,
mentions: [pessoa],
});
} else
reply(
"[!] Este grupo já está registrado em meu banco de dados."
);
} else
reply(
"[!] Já foi validado neste mês uma cortesia neste grupo."
);
}
} else {
if (chaves[AD].tipo == 1 && isGroup) {
chaves.splice(AD, 1);
fs.writeFileSync(
"./bunker/database/grupos/aluguel/chaves.json",
JSON.stringify(chaves, null, 2)
);
reply(
`[!] O grupo foi salvo no meu banco de dados com sucesso!`
);
}
}
}
}

const PlayPath = "./bunker/src/play-dados.json";

async function salvarLink(link, NomeMusica, LinkImage, numero) {
let dados = [];
try {
const conteudo = await fs.readFile(PlayPath, "utf-8");
dados = JSON.parse(conteudo);
} catch (error) {
if (error.code !== "ENOENT") {
console.error("Erro ao ler o arquivo:", error);
throw error;
}
}
const indice = dados.findIndex((item) => item.numero === numero);

if (indice !== -1) {
dados[indice].link = link;
dados[indice].NomeMusica = NomeMusica;
dados[indice].LinkImage = LinkImage;
console.log(
"Link e Nome da Música atualizados para o usuário:",
numero
);
} else {
dados.push({ link, NomeMusica, LinkImage, numero });
console.log("Link, Nome da Música e número salvos com sucesso!");
}
await fs.writeFile(PlayPath, JSON.stringify(dados, null, 2));
}

async function resgatarLinks() {
if (fs.existsSync(PlayPath)) {
const conteudo = fs.readFileSync(PlayPath, "utf-8");
const dados = JSON.parse(conteudo);
return dados;
} else {
console.log("Nenhum dado encontrado.");
return [];
}
}
async function buscarLink(numero) {
try {
const conteudo = await fs.readFile(PlayPath, "utf-8");
const dados = JSON.parse(conteudo);
const usuario = dados.find((item) => item.numero === numero);

if (usuario) {
return usuario;
} else {
console.log("Usuário não encontrado.");
return null;
}
} catch (error) {
if (error.code === "ENOENT") {
console.log("Arquivo não encontrado.");
} else {
console.error("Erro ao ler o arquivo:", error);
}
return null;
}
}

async function bufferImg(imageUrl) {
const fileName = "imagem.jpg";
const headers = {
"User-Agent":
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
};
axios
.get(imageUrl, { responseType: "arraybuffer", headers })
.then(async (response) => {
fs.writeFileSync(fileName, response.data);
carol.sendMessage(
from,
{ image: { url: fileName } },
{ quoted: selo }
);
})
.catch((err) => {
return reply("Erro!!");
});
}
const axios = require("axios");
const FormData = require("form-data");
const { fileTypeFromBuffer } = require("file-type");

// ÍNICIO: CASES / COMANDOS COM PREFIXO:
const autofigu = JSON.parse(fs.readFileSync("./bunker/autofigu.json"));

const IsAutofigu = isGroup ? autofigu.includes(from) : false;

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`;
};
const {
getExtension,
Random,
getFileBuffer,
} = require("./bunker/get2s.js");

const BaseYuxinzesite = `http://speedhosting.cloud:2009`;

const getbuffer = async (url, opcoes) => {
try {
opcoes ? opcoes : {};
const post = await axios({
method: "get",
url,
headers: {
"user-agent":
"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36",
DNT: 1,
"Upgrade-Insecure-Request": 1,
},
...opcoes,
responseType: "arraybuffer",
});
return post.data;
} catch (erro) {
console.log(`Erro identificado: ${erro}`);
}
};

const welcome = JSON.parse(fs.readFileSync("./bunker/src/antis/welkon.json"));
const isWelcome = isGroup ? welcome.includes(from) : false;
const MisheruModzDev = new Map();
const clientdomina = async (num) => {
const neguin = num.participants[0];
const MisheruModzin = `${num.id}-${neguin}-${num.action}`;
const now = Date.now();
if (
MisheruModzDev.has(MisheruModzin) &&
now - MisheruModzDev.get(MisheruModzin) < 10000
) {
return;
}
MisheruModzDev.set(MisheruModzin, now);
if (!welcome.includes(num.id)) return;
if (num.action === "add") {
if (MisheruModzDev.has(`${num.id}-${neguin}-remove`)) {
MisheruModzDev.delete(`${num.id}-${neguin}-remove`);
}
ppimg =
"https://storage.oberonhosting.com.br/media/a021dcf5ff046333.jpg";
const pimg = await getBuffer(ppimg);
const bbn = `🫂Seja bem-vindo(a) ao nosso grupo!! @${neguin.split("@")[0]}!`;
await carol.sendMessage(
num.id,
{ image: pimg, mentions: num.participants, caption: bbn },
{
quoted: {
key: { fromMe: false, participant: `${neguin}` },
message: { conversation: `𝚙𝚑.𝟺𝟼𝚖` },
},
}
);
} else if (num.action === "remove") {
//By: MisheruModz
if (MisheruModzDev.has(`${num.id}-${neguin}-add`)) {
//By: MisheruModz
MisheruModzDev.delete(`${num.id}-${neguin}-add`);
}
try {
//By: MisheruModz
ppimg = await carol.profilePictureUrl(neguin, "image");
} catch {
//By: MisheruModz
ppimg = "https://i.imgur.com/wx2hAIf.png";
}
const pimg = await getBuffer(ppimg);
const bbn = `🫂Tchau, até breve!! @${neguin.split("@")[0]}!`;
await carol.sendMessage(
num.id,
{ image: pimg, mentions: num.participants, caption: bbn },
{
quoted: {
key: { fromMe: false, participant: `${neguin}` },
message: { conversation: `𝚙𝚑.𝟺𝟼𝚖` },
},
}
);
}
};
carol.ev.removeAllListeners("group-participants.update");
carol.ev.on("group-participants.update", clientdomina);

async function carregando() {
var carre = [
"⬛⬛⬛⬛⬛0%",
"🟦⬛⬛⬛⬛20%",
"🟦🟦⬛⬛⬛40%",
"🟦🟦🟦⬛⬛60%",
"🟦🟦🟦🟦⬛90%",
"🟦🟦🟦🟦🟦100%",
];
let { key } = await carol.sendMessage(
from,
{ text: `${NomeDoBot}` },
{ quoted: selo }
); //primeira mensagem

//aqui é onde esta a magia
for (let i = 0; i < carre.length; i++) {
await carol.sendMessage(from, {text: carre[i], edit: key}, {quoted: selo});
};
}

let PlayCache = loadPlayCache();

if (PlayCache[sender]) {

// se expirou → remove
if (isExpired(PlayCache[sender].createdAt)) {
delete PlayCache[sender];
savePlayCache(PlayCache);
} else {

const escolha = body.trim();

// permitir apenas 1,2,3
if (["1", "2", "3"].includes(escolha)) {

// já usou antes?
if (PlayCache[sender].used.includes(escolha)) {
return reply("⚠️ *Você já usou essa opção.*");
}

// registrar uso
PlayCache[sender].used.push(escolha);
savePlayCache(PlayCache);

const { url, title } = PlayCache[sender];

reagir(from, "⏳");
try {
if (escolha === "1") {
try {
await carol.sendMessage(from, {
audio: {url: `${API_URL}/api/dl/ytaudio?url=${url}&apikey=${API_KEY_CAROL}`},
mimetype: "audio/mpeg"
}, {quoted: selo});
} catch {
await carol.sendMessage(from, {
audio: {url: `https://neon-apis.online/api/yt-mp3?url=${url}`},
mimetype: "audio/mpeg"
}, {quoted: selo});
}
return;
}
if (escolha === "2") {
try {
await carol.sendMessage(from, {
video: {url: `https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${url}&apikey=${API_KEY_BRONXYS}`},
mimetype: "video/mp4"
}, {quoted: selo});
} catch {
await carol.sendMessage(from, {
video: {url: `${API_URL}/api/dl/ytvideo?url=${url}&apikey=${API_KEY_CAROL}`},
mimetype: "video/mp4"
}, {quoted: selo});
}
return;
}
if (escolha === "3") {
try {
await carol.sendMessage(from, {
document: {url: `${API_URL}/api/dl/ytaudio?url=${url}&apikey=${API_KEY_CAROL}`},
mimetype: "audio/mpeg",
fileName: `${title}.mp3`
}, {quoted: selo});
} catch {
await carol.sendMessage(from, {
document: {url: `https://neon-apis.online/api/yt-mp3?url=${url}`},
mimetype: "audio/mpeg",
fileName: `${title}.mp3`
}, {quoted: selo});
}
return;
}
await reagir(from, "✅");
} catch (e) {
console.log(e);
return reply("❌ Erro ao enviar o arquivo.");
}
}
}
};

//COMEÇO DAS CASES

switch (command) {

//INICIO DOS MENUS

case "welkome2":
case "welcome2":
case "bemvindo2":
case "welkom2":
if (!isGroup) return reply("Só em Grupo");
if (!isGroupAdmins && !SoDono) return reply("Só adm ou dono");
if (q.length < 1) return reply("1 pra ligar / 0 pra desligar");
if (Number(args[0]) === 1) {
if (isWelcome) return reply("Ja esta ativo");
welcome.push(from);
fs.writeFileSync("./bunker/src/antis/welkon.json", JSON.stringify(welcome));
reply(`Ativou com sucesso o recurso de ${command} neste grupo `);
} else if (Number(args[0]) === 0) {
if (!isWelcome) return reply("Ja esta Desativado");
const ainMisheruzinho = from;
let ManoMisheru = welcome.indexOf(ainMisheruzinho);
while (ManoMisheru >= 0) {
welcome.splice(ManoMisheru, 1);
ManoMisheru = welcome.indexOf(ainMisheruzinho);
}
fs.writeFileSync("./bunker/src/antis/welkon.json", JSON.stringify(welcome));
reply("‼️ Desativou com sucesso o recurso de bem-vindo neste grupo ✔️");
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "autofigu":
case "autosticker":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins);
if (args.length < 1) return reply("1 pra ligar / 0 pra desligar");
if (Number(args[0]) === 1) {
if (IsAutofigu) return reply("Ja esta ativo");
autofigu.push(from);
fs.writeFileSync("./bunker/autofigu.json", JSON.stringify(autofigu));
reply("🌀 Ativou com sucesso o recurso de auto figurinhas neste grupo 📝");
} else if (Number(args[0]) === 0) {
if (!isAutofigu) return reply("Ja esta Desativado");
pesquisar = from;
processo = autofigu.indexOf(pesquisar);
while (processo >= 0) {
autofigu.splice(processo, 1);
processo = autofigu.indexOf(pesquisar);
}
fs.writeFileSync("./bunker/autofigu.json", JSON.stringify(autofigu));
reply("‼️ Desativou com sucesso o recurso de auto figurinhas neste grupo✔️");
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "menu1":
reagir(from, "💔");
if (isAudioMenu) {
audiomenu = await fetch(audio_menu).then((v) => v.buffer());
carol.sendMessage(from, {audio: audiomenu, mimetype: "audio/mpeg", ptt: false}, {quoted: selo});
}
await carol.sendMessage(from, {document: xmlBuffer, mimetype: "application/vnd.oasis.opendocument.presentation", fileName: "❏ 𝐂𝐀𝐑𝐎𝐋 𝐁𝐄𝐓𝐀 ❏", fileLength: 9999999999, caption: linguagem.menuPrincipal(NomeDoBot, pushname, isCargo, isChVip, hora, prefix), contextInfo: { externalAdReply: { body: "〘 🩸 𝐭𝐨𝐝𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐥𝐢𝐬𝐭𝐚𝐝𝐨 𝐚𝐛𝐚𝐢𝐱𝐨 🩸 〙", mediaType: 1, thumbnail: ThumbBuffer, renderLargerThumbnail: true}, }}, {quoted: selo});
break;

case "menu":
if (isAudioMenu) {
audiomenu = await fetch(audio_menu).then((v) => v.buffer());
carol.sendMessage(from, {audio: audiomenu, mimetype: "audio/mpeg", ptt: false}, {quoted: selo});
}
await enviarMenu(from, linguagem.menu(NomeDoBot, pushname, isCargo, isChVip, hora, prefix), "💔");
break

case "menu9":
reagir(from, "💔");
if (isAudioMenu) {
audiomenu = await fetch(audio_menu).then((v) => v.buffer());
carol.sendMessage(from, {audio: audiomenu, mimetype: "audio/mpeg", ptt: false}, {quoted: selo});
}
await carol.sendMessage(from, {document: xmlBuffer, mimetype: "application/vnd.oasis.opendocument.presentation", fileName: "❏ 𝐂𝐀𝐑𝐎𝐋 𝐁𝐄𝐓𝐀 ❏", fileLength: 9999999999, caption: linguagem.menufrases(NomeDoBot, pushname, isCargo, isChVip, hora, prefix), contextInfo: { externalAdReply: { body: "〘 🩸 𝐭𝐨𝐝𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐥𝐢𝐬𝐭𝐚𝐝𝐨 𝐚𝐛𝐚𝐢𝐱𝐨 🩸 〙", mediaType: 1, thumbnail: ThumbBuffer, renderLargerThumbnail: true}, }}, {quoted: selo});
break

case "menu5":
case "logos":
case "menulogo":
case "menulogos":
reagir(from, "💔");
if (isAudioMenu) {
audiomenu = await fetch(audio_menu).then((v) => v.buffer());
carol.sendMessage(from, {audio: audiomenu, mimetype: "audio/mpeg", ptt: false}, {quoted: selo});
}
await carol.sendMessage(from, {document: xmlBuffer, mimetype: "application/vnd.oasis.opendocument.presentation", fileName: "❏ 𝐂𝐀𝐑𝐎𝐋 𝐁𝐄𝐓𝐀 ❏", fileLength: 9999999999, caption: linguagem.menulogos(NomeDoBot, pushname, isCargo, isChVip, hora, prefix), contextInfo: { externalAdReply: { body: "〘 🩸 𝐭𝐨𝐝𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐥𝐢𝐬𝐭𝐚𝐝𝐨 𝐚𝐛𝐚𝐢𝐱𝐨 🩸 〙", mediaType: 1, thumbnail: ThumbBuffer, renderLargerThumbnail: true}, }}, {quoted: selo});
break;

case "menu8":
case "menu18":
reagir(from, "💔");
if (isAudioMenu) {
audiomenu = await fetch(audio_menu).then((v) => v.buffer());
carol.sendMessage(from, {audio: audiomenu, mimetype: "audio/mpeg", ptt: false}, {quoted: selo});
}
await carol.sendMessage(from, {document: xmlBuffer, mimetype: "application/vnd.oasis.opendocument.presentation", fileName: "❏ 𝐂𝐀𝐑𝐎𝐋 𝐁𝐄𝐓𝐀 ❏", fileLength: 9999999999, caption: linguagem.menu18(NomeDoBot, pushname, isCargo, isChVip, hora, prefix), contextInfo: { externalAdReply: { body: "〘 🩸 𝐭𝐨𝐝𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐥𝐢𝐬𝐭𝐚𝐝𝐨 𝐚𝐛𝐚𝐢𝐱𝐨 🩸 〙", mediaType: 1, thumbnail: ThumbBuffer, renderLargerThumbnail: true}, }}, {quoted: selo});
break;

case "menu2":
case "menuadm":
case "menuadms":
case "adm":
if (!isGroupAdmins && SoDono) return reply(mess.onlyOwner());
reagir(from, "💔");
if (isAudioMenu) {
audiomenu = await fetch(audio_menu).then((v) => v.buffer());
carol.sendMessage(from, {audio: audiomenu, mimetype: "audio/mpeg", ptt: false}, {quoted: selo});
}
await carol.sendMessage(from, {document: xmlBuffer, mimetype: "application/vnd.oasis.opendocument.presentation", fileName: "❏ 𝐂𝐀𝐑𝐎𝐋 𝐁𝐄𝐓𝐀 ❏", fileLength: 9999999999, caption: linguagem.adms(NomeDoBot, pushname, isCargo, isChVip, hora, prefix), contextInfo: { externalAdReply: { body: "〘 🩸 𝐭𝐨𝐝𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐥𝐢𝐬𝐭𝐚𝐝𝐨 𝐚𝐛𝐚𝐢𝐱𝐨 🩸 〙", mediaType: 1, thumbnail: ThumbBuffer, renderLargerThumbnail: true}, }}, {quoted: selo});
break;

case "menu3":
case "menudono":
case "donomenu":
if (!SoDono) return reply(mess.onlyOwner());
reagir(from, "💔");
if (isAudioMenu) {
audiomenu = await fetch(audio_menu).then((v) => v.buffer());
await carol.sendMessage(from, {audio: audiomenu, mimetype: "audio/mpeg", ptt: false}, {quoted: selo});
}
await carol.sendMessage(from, {document: xmlBuffer, mimetype: "application/vnd.oasis.opendocument.presentation", fileName: "❏ 𝐂𝐀𝐑𝐎𝐋 𝐁𝐄𝐓𝐀 ❏", fileLength: 9999999999, caption: linguagem.menudono(NomeDoBot, pushname, isCargo, isChVip, hora, prefix), contextInfo: { externalAdReply: { body: "〘 🩸 𝐭𝐨𝐝𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐥𝐢𝐬𝐭𝐚𝐝𝐨 𝐚𝐛𝐚𝐢𝐱𝐨 🩸 〙", mediaType: 1, thumbnail: ThumbBuffer, renderLargerThumbnail: true}, }}, {quoted: selo});
break;

case "menu7":
case "efeitosimg":
case "efeitos":
case "efeitoimg":
case "efeitosmarcar":
reagir(from, "💔");
if (isAudioMenu) {
audiomenu = await fetch(audio_menu).then((v) => v.buffer());
carol.sendMessage(from, {audio: audiomenu, mimetype: "audio/mpeg", ptt: false}, {quoted: selo});
}
await carol.sendMessage(from, {document: xmlBuffer, mimetype: "application/vnd.oasis.opendocument.presentation", fileName: "❏ 𝐂𝐀𝐑𝐎𝐋 𝐁𝐄𝐓𝐀 ❏", fileLength: 9999999999, caption: linguagem.efeitos(NomeDoBot, pushname, isCargo, isChVip, hora, prefix), contextInfo: { externalAdReply: { body: "〘 🩸 𝐭𝐨𝐝𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐥𝐢𝐬𝐭𝐚𝐝𝐨 𝐚𝐛𝐚𝐢𝐱𝐨 🩸 〙", mediaType: 1, thumbnail: ThumbBuffer, renderLargerThumbnail: true}, }}, {quoted: selo});
break;

case "menu6":
case "alteradores":
reagir(from, "💔");
if (isAudioMenu) {
audiomenu = await fetch(audio_menu).then((v) => v.buffer());
carol.sendMessage(from, {audio: audiomenu, mimetype: "audio/mpeg", ptt: false}, {quoted: selo});
}
await carol.sendMessage(from, {document: xmlBuffer, mimetype: "application/vnd.oasis.opendocument.presentation", fileName: "❏ 𝐂𝐀𝐑𝐎𝐋 𝐁𝐄𝐓𝐀 ❏", fileLength: 9999999999, caption: linguagem.alteradores(NomeDoBot, pushname, isCargo, isChVip, hora, prefix), contextInfo: { externalAdReply: { body: "〘 🩸 𝐭𝐨𝐝𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐥𝐢𝐬𝐭𝐚𝐝𝐨 𝐚𝐛𝐚𝐢𝐱𝐨 🩸 〙", mediaType: 1, thumbnail: ThumbBuffer, renderLargerThumbnail: true}, }}, {quoted: selo});
break;

case "menu4":
case "brincadeiras":
case "brincadeira":
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
reagir(from, "💔");
if (isAudioMenu) {
audiomenu = await fetch(audio_menu).then((v) => v.buffer());
carol.sendMessage(from, {audio: audiomenu, mimetype: "audio/mpeg", ptt: false}, {quoted: selo});
}
await carol.sendMessage(from, {document: xmlBuffer, mimetype: "application/vnd.oasis.opendocument.presentation", fileName: "❏ 𝐂𝐀𝐑𝐎𝐋 𝐁𝐄𝐓𝐀 ❏", fileLength: 9999999999, caption: linguagem.brincadeiras(NomeDoBot, pushname, isCargo, isChVip, hora, prefix), contextInfo: { externalAdReply: { body: "〘 🩸 𝐭𝐨𝐝𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐥𝐢𝐬𝐭𝐚𝐝𝐨 𝐚𝐛𝐚𝐢𝐱𝐨 🩸 〙", mediaType: 1, thumbnail: ThumbBuffer, renderLargerThumbnail: true}, }}, {quoted: selo});
break;

case "owner":
case "odono":
case "dono":
case "criador":
case "infodono":
await reagir(from, "👨🏻‍💻");
numerodn = SoDono;
await carol.sendMessage(from, {image: ThumbBuffer, caption: getInfo.infoOwner(prefix, ownerName, numerodn, NomeDoBot, sender), mentions: [sender]}, {quoted: selo});
break;

case "lojinha":
case "loja":
case "comprar":
case "alugar":
reagir(from, "🛒");
let buttons = [
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"「 💸 」𝟏𝟓 𝐃𝐈𝐀𝐒「 💸 」\",\"url\":\"https://wa.me/554699887263?text=Ol%C3%A1%20zenom,%20quero%20adquirir%2015%20dias%20de%20aluguel%20da%20carol-beta!%20no%20meu%20grupo.\",\"merchant_url\":\"https://wa.me/554699887263?text=Ol%C3%A1%20zenom,%20quero%20adquirir%2015%20dias%20de%20aluguel%20da%20carol-beta!%20no%20meu%20grupo.\"}"
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"「 💸 」𝟑𝟎 𝐃𝐈𝐀𝐒「 💸 」\",\"url\":\"https://wa.me/554699887263?text=Ol%C3%A1%20zenom,%20quero%20adquirir%2030%20dias%20de%20aluguel%20da%20carol-beta!%20no%20meu%20grupo.\",\"merchant_url\":\"https://wa.me/554699887263?text=Ol%C3%A1%20zenom,%20quero%20adquirir%2030%20dias%20de%20aluguel%20da%20carol-beta!%20no%20meu%20grupo.\"}"
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"「 💸 」𝟔𝟎 𝐃𝐈𝐀𝐒「 💸 」\",\"url\":\"https://wa.me/554699887263?text=Ol%C3%A1%20zenom,%20quero%20adquirir%2060%20dias%20de%20aluguel%20da%20carol-beta!%20no%20meu%20grupo.\",\"merchant_url\":\"https://wa.me/554699887263?text=Ol%C3%A1%20zenom,%20quero%20adquirir%2060%20dias%20de%20aluguel%20da%20carol-beta!%20no%20meu%20grupo.\"}"
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"「 💸 」𝐀𝐑𝐐𝐔𝐈𝐕𝐎「 💸 」\",\"url\":\"https://wa.me/554699887263?text=Ol%C3%A1%20zenom,%20quero%20adquirir%20o%20arquivo%20da%20carol-beta!\",\"merchant_url\":\"https://wa.me/554699887263?text=Ol%C3%A1%20zenom,%20quero%20adquirir%20o%20arquivo%20da%20carol-beta!\"}"
}
];
const card = {
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia(
{ image: ThumbBuffer },
{ upload: carol.waUploadToServer }
)),
hasMediaAttachment: true,
title: `╭═══════════════════╮
┆『♥️』R$10.00 = 15 DIAS
┆『♥️』R$30.00 = 30 DIAS
┆『♥️』R$50.00 = 60 DIAS
┆『♥️』ARQUIVO = R$80.00
╰═══════════════════╯`,
}),
nativeFlowMessage: {
buttons,
messageParamsJson: ""
}
};
const msg = generateWAMessageFromContent(from, {
interactiveMessage: {
contextInfo: {
participant: sender,
quotedMessage: info?.message
},
carouselMessage: {
cards: [card],
messageVersion: 1
}
}
}, {});
await carol.relayMessage(from, msg.message, {});
break;

case "listarevgp":
setTimeout(() => {
reagir(from, "✅");
}, 300);
if (!SoDono) return reply("```SOMENTE MEU DONO LINDÃO```");
var getGroups = await carol.groupFetchAllParticipating();
var groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
var ingfoo = groups.map((v) => v);
ingfoo.sort((a, b) => a[0] < b.length);
teks1 = "ᏞᏆՏͲᎪ ᎠᎬ ᏀᎡႮᏢϴՏ Ꭰϴ ᏴϴͲ\nͲϴͲᎪᏞ ( " + ingfoo.length + " )\n________________________________________";
for (let i = 0; i < ingfoo.length; i++) {
matheuzinho = JSON.stringify(revealmsg).includes(ingfoo[i].id) ? "✅" : "❌";
teks1 += "\n\n»" + i + "«\n⏤͟͟͞͞ ꦿ𝙽𝚘𝚖𝚎 𝙳𝚘 𝙶𝚛𝚞𝚙𝚘 ↴\n〘 " + ingfoo[i].subject + " 〙\n⏤͟͟͞͞ ꦿ𝙸𝙳 𝙳𝚘 𝙶𝚛𝚞𝚙𝚘 ↴\n× " + ingfoo[i].id + "\n⸺͟͞ꪶ𝙰𝚝𝚒𝚟𝚊𝚍𝚘⇒『 " + matheuzinho + " 』\n________________________________________";
}
reply(teks1);
break;

case "resetadsgp":
if (!SoDono) return reply(enviar.msg.dono);
if (!JSON.stringify(adsgp).includes("grupos")) {
adsgp.push({ tipo: "grupos", gps: [] });
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2));
}
if (!JSON.stringify(adsgp).includes("mensagens")) {
adsgp.push({ tipo: "mensagens", msgs: [] });
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2));
}
AB = adsgp.map((i) => i.tipo).indexOf("grupos");
AC = adsgp.map((i) => i.tipo).indexOf("mensagens");
adsgp[AB].gps = [];
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2));
adsgp[AC].msgs = [];
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2));
reply("Sistema resetado");
break;

case "setadsgp":
if (!SoDono) return reply(enviar.msg.dono);
if (!isGroup) return reply(enviar.msg.grupo);
if (!JSON.stringify(adsgp).includes("quantidade")) {
adsgp.push({ tipo: "quantidade", quant: 5 });
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2));
}
if (!JSON.stringify(adsgp).includes("grupos")) {
adsgp.push({ tipo: "grupos", gps: [] });
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2));
}
if (!JSON.stringify(adsgp).includes("mensagens")) {
adsgp.push({ tipo: "mensagens", msgs: [] });
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2));
}
var [ linkM4, msgM4 ] = q.split("|");
AB = adsgp.map((i) => i.tipo).indexOf("grupos");
AC = adsgp.map((i) => i.tipo).indexOf("mensagens");
if (!linkM4)
return reply("Insira um link de convite ao lado do comando.");
if (!msgM4)
return reply(`Vejo que você não inseriu a mensagem que será enviada... Faça assim:\n${prefix + command} link do grupo|mensagem para enviar`);
if (linkM4.includes("chat.whatsapp.com/")) {
link = linkM4.split("app.com/")[1];
try {
var getGroups = await carol.groupFetchAllParticipating();
var groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
var ingfoo = groups.map((v) => v);
ingfoo.sort((a, b) => a[0] < b.length);
grupos77 = [];
for (i = 0; i < ingfoo.length; i++) {
grupos77.push({ groupId: ingfoo[i].id });
}
adsgp[AB].gps = grupos77;
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2));
adsgp[AC].msgs.push({ txt: msgM4, cobrado: false });
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2));
carol.groupAcceptInvite(`${link}`);
return reply(`Todos os grupos da lista foram salvos na pasta... Qualquer grupo que esteja fora da lista será tratado como indigno e réu de receber anúncios em seu chat`);
} catch (erro) {
if (String(erro).includes("resource-limit")) {
reply("O grupo já está com o alcance máximo de membros.");
}
if (String(erro).includes("not-authorized")) {
reply("Não foi possível entrar no grupo.\nMotivo: Banimento.");
}
}
} else return reply("Ops, verifique o link que você inseriu.");
break;

case "setadstime":
case "sat":
if (!SoDono) return reply(enviar.msg.dono);
if (!JSON.stringify(adsgp).includes("quantidade")) {
adsgp.push({ tipo: "quantidade", quant: 5 });
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2));
}
if (!Number(args[0]) || Number(args[0]) < 1)
return reply(`Defina a quantidade de mensagens a serem enviadas no grupo ao usar o comando ${prefix}setadsgp\n\nEx: ${prefix + command} 5`);
if (q.includes(".")) return reply("Não pode números decimais");
AB = adsgp.map((i) => i.tipo).indexOf("quantidade");
adsgp[AB].quant = Number(args[0]);
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2));
reply(`Quant. de mensagens definida com sucesso ✅`);
break;

case "startads":
case "endads":
if (!isGroup) return reply(enviar.msg.grupo);
if (!isGroupAdmins) return reply(enviar.msg.adm);
adsStart = getGroupAds(from);
if (adsStart.acctive) {
adsStart.acctive = false;
saveADS();
return reply(`❕ *ADs System desativado com sucesso* 🗯`);
} else {
adsStart.acctive = true;
saveADS();
return reply(`🔰 *ADs System ativado com sucesso* 〽`);
}
break;

case "addads":
case "setads":
if (!isGroup) return reply(enviar.msg.grupo);
if (!isGroupAdmins) return reply(enviar.msg.adm);
if (!getGroupAds(from).acctive) return reply(enviar.adsatc);
if (!q) return reply(`Retorne após o comando a sua mensagem/anúncio... Ex: ${prefix + command} sua mensagem aqui`);
var [ qp, tm ] = q.split("|");
adsStart = getGroupAds(from);
if (isImage || isQuotedImage) {
try {
media = isQuotedImage ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
gfb = await getFileBuffer(media, "image");
img = await upload(gfb);
addAdminAds(from, sender, true, img);
saveADS();
} catch {
return reply(`Não foi possível salvar essa imagem... ❌`);
}
} else {
addAdminAds(from, sender, existAdminAds(from, sender) ? getAdminAds(from, sender).true_false : false, existAdminAds(from, sender) ? getAdminAds(from, sender).url : ``);
}
if (!tm || (!tm.includes("h") && !tm.includes("m")))
return isIOS ? reply(`Defina o tempo de envio, do mesmo jeito do exemplo abaixo, separando o anúncio e o tempo com uma barra ( | )... Ex:\n${prefix + command} sua anúncio|1h`) : sendListB(from, {text: `Selecione agora o tempo de intervalo entre o envio de cada mensagem...`, footer: `Clique na lista abaixo para selecionar o horário:`}, carol, sender,
`💢 CLIQUE AQUI 💢`,
[{title: `Escolha aqui...`,
options: adsStartList(prefix + command + ` ` + qp),
}], selo);
gpadm = getAdminAds(from, sender);
end = gpadm.true_false;
urlads = gpadm.url;
addAds(from, qp, tm, sender, end, urlads);
mention(`*O anúncio foi setato neste grupo a cada ${tm} pelo adm @${sender.split("@")[0]} com sucesso* ✅`);
await sleep(2000);
if (end) {
sendImage(from, urlads, qp);
} else {
sendMess(from, qp);
}
break;

case "listads":
if (!isGroup) return reply(enviar.msg.grupo);
if (!isGroupAdmins) return reply(enviar.msg.adm);
if (!getGroupAds(from).acctive) return reply(enviar.adsatc);
groupAds = getGroupAds(from).horarios;
if (groupAds.length <= 0)
return reply(`Não há anúncios definidos neste grupo...`);
txt = `📛 *Lista de anúncios programados neste grupo:*
🔰 *Total:* ${groupAds.length}

${groupAds
.map(
(i) =>
`🎭 *ID:* ${i.id}
📖 *ADS:* ${i.text.length > 50 ? i.text.slice(0, 50) + `...` : i.text}
⏱ *Tempo:* ${String(i.type.valor_numerico) + i.type.hm}
🧩 *Próximo ADS:* ${i.tempo}
🖼 *Mídia ( ${i.imagem.true_false ? `✔` : `✖`} )*`
)
.join(`\n\n`)}`;
reply(txt);
break;

case "rmads":
if (!isGroup) return reply(enviar.msg.grupo);
if (!isGroupAdmins) return reply(enviar.msg.adm);
if (!getGroupAds(from).acctive) return reply(enviar.adsatc);
groupAds = getGroupAds(from).horarios;
if (groupAds.length <= 0)
return reply(`Não há anúncios definidos neste grupo...`);
r1 = `🎭 *Retorne após o comando o id do anúncio que você quer deletar:*`;
lista = [];
for (i of groupAds) {
lista.push({
title: `🆔 ${i.id}`,
body: i.text.length > 50 ? i.text.slice(0, 50) + `...` : i.text,
command: prefix + command + ` ` + i.id,
});
}
if (groupAds.length >= 2)
lista.push({
title: `❌ DELETAR TODOS OS IDS`,
body: `Ação irreversível`,
command: prefix + command + ` all`,
});
if (!q || (!isIDads(from, q) && q.toLowerCase() != `all`))
return isIOS
? reply(
`${r1}\n*Ex* ${prefix + command} 010124013045\n_(Olhe no comando ${prefix}listads os ID disponíveis)_`
)
: sendListB(
from,
{
text: r1,
footer: `_Selecione abaixo os ID na lista..._`,
},
carol,
sender,
`📛 CLIQUE AQUI 📛`,
[{ title: `For Black System`, options: lista }],
selo
);
if (q.toLowerCase() == `all`) {
AB = ads.map((a) => a.groupId).indexOf(from);
ads.splice(AB, 1);
saveADS();
return reply(
`*Todos os anúncios foram deletados com sucesso* ✔`
);
} else {
rmAds(from, q);
return reply(
`*O anúncio de ID ${q} foi deletado com sucesso* ✔`
);
}
break;

case "rmtimeads":
case "rmtmads":
if (!isGroup) return reply(enviar.msg.grupo);
if (!isGroupAdmins) return reply(enviar.msg.adm);
if (!getGroupAds(from).acctive) return reply(enviar.adsatc);
groupAds = getGroupAds(from).horarios;
if (groupAds.length <= 0)
return reply(`Não há anúncios definidos neste grupo...`);
if (!q)
return reply(
`🎭 *Retorne após o comando o id do anúncio que você quer retirar os minutos que sobram:*\n*Ex* ${prefix + command} 010124013045\n_(Olhe no comando ${prefix}listads os ID disponíveis)_`
);
var [idads, typeads] = q.split("|");
if (!isIDads(from, idads))
return reply(`ID do anúncio não encontrado neste grupo ❌`);
if (!typeads)
return sendButton(
from,
{
text: `Selecione agora o modo de tempo na qual você irá remover...`,
footer: `• Se você selecionar o modo de horas e o anúncio estiver setado em ${sendHours("HH:mm")} por exemplo, os minutos serão excluídos, ficando apenas ${sendHours("HH")}:00
• Se você selecionar o modo em minutos e o anúncio estiver setado em ${sendHours("HH:mm")} por exemplo, o tempo será convertido no horário mais próximo de um múltiplo de 5, restanto o tempo ${converterMin(contarMin(sendHours("HH:mm")) - (contarMin(sendHours("HH:mm")) % 5))}`,
},
carol,
sender,
[
{
type: `cmd`,
text: `🕛 RETIRAR HORAS 🕛`,
command: prefix + command + ` ` + idads + `|h`,
},
{
type: `cmd`,
text: `🕕 RETIRAR MINUTOS 🕕`,
command: prefix + command + ` ` + idads + `|m`,
},
],
selo
);
AB = groupAds.map((i) => i.id).indexOf(idads);
antes = groupAds[AB].tempo;
dps =
typeads == `h`
? antes.split(":")[0] + `:00`
: converterMin(contarMin(antes) - (contarMin(antes) % 5));
groupAds[AB].tempo = dps;
saveADS();
reply(
`*O anúncio de ID ${idads} foi atualizado de ${antes} para ${dps} com sucesso* ✔`
);
break;

case "teste":
if (configSet.version === "v1") {
await reply("USANDO O V1");
} else if (configSet.version === "v2") {
await reply("USANDO O V2");
} else if (configSet.version === "v3") {
await reply("USANDO O V3");
} else {
console.log("Versão inválida no arquivo de configuração");
}
break;

case "setmeca":
const version = q;
await changeVersion(version);
await reply("SETADO COM SUCESSO");
break;

case "stickerinfo":
case "stmetadata":
if (!isQuotedSticker)
return reply(
"Por favor, é nescessário mencionar um sticker para obter sucesso à execução do comando."
);
try {
extractBuffer = await getFileBuffer(
info.message.extendedTextMessage.contextInfo.quotedMessage
.stickerMessage,
"sticker"
);
stickerMetadata = await extractMetadata(extractBuffer);
await carol.sendMessage(
from,
{
image: extractBuffer,
caption: `• Emojis: *${stickerMetadata?.emojis?.join(" ") || "❌"}*\n• ID do Pacote: *${stickerMetadata["sticker-pack-id"] || "❌"}*\n• Nome do Pacote: *${stickerMetadata["sticker-pack-name"] || "❌"}*\n• Autor do Pacote:*${stickerMetadata["sticker-pack-publisher"] || stickerMetadata["sticker-author-name"] || "❌"}*\n• Sticker Maker _(Android)_: *${stickerMetadata["android-app-store-link"] || "❌"}*\n• Sticker Maker _(iOS)_: *${stickerMetadata["ios-app-store-link"] || "❌"}*`,
},
{ quoted: selo }
);
} catch (error) {
return reply(
"[#] Ocorreu um erro ao obter a metadata do sticker, tente com outro..."
);
}
break;

case "savegp":
if (!SoDono) return reply(mess.onlyOwner());
if (!isGroup) return reply(mess.onlyGroup());
if (!VerificarJSON(grupos, from)) {
grupos.push({ id: from, limite: 5, validado: true });
fs.writeFileSync("./bunker/database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2));
reply(`Grupo *"${groupName}"* acaba de ser salvo em meu banco de dados..`);
} else {
GP = grupos.map((i) => i.id).indexOf(from);
grupos[GP].validado = true;
fs.writeFileSync("./bunker/database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2));
reply(`Grupo *"${groupName}"* já foi salvo em meu banco de dados, então só irei ativar o recurso de validado senhor(a)..️`);
}
break;

case "addrent":
case "addaluguel":
case "rgrent": {
if (!SoDono) return reply(mess.onlyOwner());
if (!isGroup) return reply(mess.onlyGroup());
let dias = Number(args[0]);
if (!dias) {
return reply(`Use assim: ${prefix + command} 30`);
}
if (dias <= 0) return reply("É necessário ao menos 1 dia.");
if (String(dias).includes(".")) return reply("Não use decimais.");
if (!VerificarJSON(grupos, from)) {
grupos.push({ id: from, limite: 5, validado: true });
fs.writeFileSync("./bunker/database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2));
} else {
let GP = grupos.map(i => i.id).indexOf(from);
grupos[GP].validado = true;
fs.writeFileSync("./bunker/database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2));
}
if (!JSON.stringify(aluguel).includes(from)) {
let cliente = sender;
aluguel.push({
id: from,
nome: groupName,
tempo: dias + 1,
totalRent: dias + 1,
cliente: cliente,
save: Number(moment.tz("America/Sao_Paulo").format("DD")),
cortesia: false,
});
fs.writeFileSync("./bunker/database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));
return reply(`Aluguel iniciado — Cliente: @${cliente.split("@")[0]}\nDias: ${dias}`, { mentions: [cliente] });
}
let AB = aluguel.map(i => i.id).indexOf(from);
aluguel[AB].cortesia = false;
aluguel[AB].nome = groupName;
aluguel[AB].totalRent = aluguel[AB].tempo + dias;
aluguel[AB].tempo += dias;
fs.writeFileSync("./bunker/database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));
reply(`+${dias} dia${dias > 1 ? "s" : ""} adicionados ao aluguel.`);
}
break;

case "cortesia24":
if (!SoDono) return reply(mess.onlyOwner());
if (!isGroup) return reply(mess.onlyGroup());
if (JSON.stringify(aluguel).includes(from))
return reply(`Grupo já registrado senhor..`);
if (!JSON.stringify(grupos).includes(from)) {
grupos.push({ id: from, limite: 5, validado: true });
fs.writeFileSync("./bunker/database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2));
}
aluguel.push({
id: from,
nome: groupName,
tempo: 24,
totalRent: 24,
cliente: nmrdn,
save: Number(moment.tz("America/Sao_Paulo").format("mm")),
cortesia: true,
});
fs.writeFileSync("./bunker/database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));
reply(`💳 Cartão verde validado! 24h liberadas neste grupo contando a partir de agora.`);
break;

case "listrent":
case "lista-aluguel":
if (!SoDono) return reply(mess.onlyGroup());
if (aluguel.length > 0) {
var getGroups = await carol.groupFetchAllParticipating();
var groups = Object.entries(getGroups)
.slice(0)
.map((entry) => entry[1]);
var ingfoo = groups.map((v) => v);
ingfoo.sort((a, b) => a[0] < b.length);
for (g = 0; g < ingfoo.length; g++) {
if (JSON.stringify(aluguel).includes(ingfoo[g].id)) {
matheuzinho = aluguel.map((m) => m.id).indexOf(ingfoo[g].id);
aluguel[matheuzinho].nome = ingfoo[g].subject;
fs.writeFileSync(
"./bunker/database/grupos/aluguel/aluguel.json",
JSON.stringify(aluguel, null, 2)
);
}
}
txte = `[Total: *${aluguel.length}*] - Lista dos grupos alugados:\n—\n`;
for (i = 0; i < aluguel.length; i++) {
hmm = aluguel[i].tempo;
txte += `*[${i + 1}]* Grupo: *${aluguel[i].nome}*\n`;
if (aluguel[i].cortesia == false) {
txte += `• Tempo Restante: *${hmm} dia${hmm > 1 ? "s" : ""}*\n• Cliente: *wa.me/${aluguel[i].cliente.split("@")[0]}*\n—\n`;
} else {
txte += `_O grupo está usando o cartão cortesia, ou seja, 24h de uso foram liberadas._\n—\n`;
}
}
reply(txte);
} else {
reply(`Não existe nenhum grupo registrado em aluguel senhor(a).`);
}
break;

case "lastrent":
if (!SoDono) return reply(mess.onlyOwner());
if (aluguel.length > 0) {
matheuzinho = aluguel.map((i) => i);
rank = matheuzinho.sort((a, b) => (a.tempo < b.tempo ? -1 : 0));
txtad =
"• Top 3 grupos com o aluguel mais próximo de acabar:\n—\n";
for (i = 0; i < 3; i++) {
if (rank[i].cortesia == false) {
hmm = rank[i].tempo;
txtad += `*[${i + 1}]* Grupo: *${rank[i].nome}*\n• Tempo Restante: ${hmm} dia${hmm > 1 ? "s" : ""}\n• Cliente: *wa.me/${rank[i].cliente.split("@")[0]}*\n—\n`;
}
}
reply(txtad);
} else {
reply(`Não existe nenhum grupo registrado em aluguel senhor(a).`);
}
break;

case "calendario":
case "dados":
setTimeout(() => {
reagir(from, "📅");
}, 300);
var getGroups = await carol.groupFetchAllParticipating();
var groups = Object.entries(getGroups)
.slice(0)
.map((entry) => entry[1]);
var ingfoo = groups.map((v) => v);
ingfoo.sort((a, b) => a[0] < b.length);
hora16 = moment.tz("America/Sao_Paulo").format("HH:MM:SS");
date16 = moment.tz("America/Sao_Paulo").format("DD/MM/YYYY");
day = `${tempo}, ${pushname}!\n• Grupo: *${isGroup ? groupName : "Privado"}*\n• Data & Hora: *${date16} ${hora16}*\n• Nome do Bot: *${NomeDoBot}*\n• Proprietário: *${ownerName}*\n• Estou operando em *${ingfoo.length}* grupos.`;
if (JSON.stringify(aluguel).includes(from)) {
AB = aluguel.map((i) => i.id).indexOf(from);
numsei = (aluguel[AB].tempo / aluguel[AB].totalRent) * 100;
if (numsei < 10)
matheuzinho = `${numsei.toFixed(0)}%〘▒▒▒▒▒▒▒▒▒▒〙`;
if (numsei >= 10)
matheuzinho = `${numsei.toFixed(0)}%〘█▒▒▒▒▒▒▒▒▒〙`;
if (numsei >= 20)
matheuzinho = `${numsei.toFixed(0)}%〘██▒▒▒▒▒▒▒▒〙`;
if (numsei >= 30)
matheuzinho = `${numsei.toFixed(0)}%〘███▒▒▒▒▒▒▒〙`;
if (numsei >= 40)
matheuzinho = `${numsei.toFixed(0)}%〘████▒▒▒▒▒▒〙`;
if (numsei >= 50)
matheuzinho = `${numsei.toFixed(0)}%〘█████▒▒▒▒▒〙`;
if (numsei >= 60)
matheuzinho = `${numsei.toFixed(0)}%〘██████▒▒▒▒〙`;
if (numsei >= 70)
matheuzinho = `${numsei.toFixed(0)}%〘███████▒▒▒〙`;
if (numsei >= 80)
matheuzinho = `${numsei.toFixed(0)}%〘████████▒▒〙`;
if (numsei >= 90)
matheuzinho = `${numsei.toFixed(0)}%〘█████████▒〙`;
if (numsei >= 95)
matheuzinho = `${numsei.toFixed(0)}%〘██████████〙`;
hmm = aluguel[AB].tempo;
if (aluguel[AB].cliente == sender || SoDono) {
matheusSabe = `• `;
if (aluguel[AB].cortesia == false) {
matheusSabe += `${hmm} dia${hmm > 1 ? "s" : ""} restantes`;
} else {
matheusSabe += hmm > 1 ? `${hmm} horas` : `Alguns minutos`;
}
matheusSabe += ` até o fim do contrato.`;
} else {
matheusSabe = ``;
}
day += `\n——\n🔋 *Bateria restante para uso:*\n${matheuzinho} ${matheusSabe}`;
}
reply(`${day}`);
break;

case "aluguel":
case "alugueis":
case "alugar":
case "alugarbot":
case "loja":
await reagir(from, "🛒");
reply(
`Digite *${prefix}dono* para entrar em contato com meu proprietário e liberar o acesso em seu grupo.\n• Os valores são passados por ele, não tenho nenhuma informação registrada sobre isso.`
);
break;

case "mycoderent": //by matheuzinho
txtfd = `🔑 Suas chaves de ativação:\n—\n`;
nmr = 0;
for (i of chaves) {
if (i.cliente == sender) {
txtfd += `\n• ${i.key}`;
nmr += 1;
}
}
if (nmr <= 0)
return reply("Você não possui nenhuma chave de ativação.");
reply(
isGroup
? "Por segurança lhe enviei em seu privado o que foi solicitado."
: "Aguarde, estou enviando o que foi solicitado..."
);
await sendText(sender, txtfd);
break;

case "codelistrent": //by matheuzinho
if (!SoDono) return reply(mess.onlyOwner());

caixa = [];
for (i of chaves) {
txsft = `[Total: *${i.chaves}*] - Lista de Códigos registrado(s) para aluguel:`;
txsft += `\n—\n• Chave: *${i.key}*\n• Cliente que realizou a solicitação: *@${i.cliente.split("@")[0]}*\n• Expiração: ${nmr > 0 ? `${i.dias} dia${i.dias > 1 ? "s" : ""}` : `Não contém dias para a expiração, é infinito.`}`;
caixa.push(i.cliente);
}
if (caixa <= 0)
return reply(
"Não existe nenhuma chave registrada em meu banco de dados."
);
reply(
isGroup
? "Por motivos de segurança, enviei em seu privado..."
: "Aguarde, estou enviando o que foi solicitado!"
);
await carol.sendMessage(sender, { text: txsft, mentions: caixa });
break;

case "gerarcoderent":
if (!SoDono) return reply(mess.onlyOwner());
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/");
var [v1, v2] = barra.split("/");
if (!q.includes("/"))
return reply(
`Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo.\n• Exemplo: *${prefix + command} ${nmrdn.split("@")[0]}/30*`
);
matheuzinho =
v1.toLowerCase() == "me"
? sender
: v1.includes("@")
? v1
.split("@")[1]
.replace(new RegExp("[()+-/ +/]", "gi"), "") +
"@s.whatsapp.net"
: v1.replace(new RegExp("[()+-/ +/]", "gi"), "") +
"@s.whatsapp.net";
const [checkkeygp] = await carol.onWhatsApp(
matheuzinho.split("@")[0]
);
if (checkkeygp == undefined) {
return reply(
`O número *${matheuzinho.split("@")[0]}* não é válido no whatsapp.`
);
}
nmr = Number(v2) > 0 ? Number(v2) : 0;
idks = `G${v2}-`;
idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(matheuzinho.slice(2, 8))}`;
idks += `M${nmr}H-${Number(moment.tz("America/Sao_Paulo").format("DDMMYY")) + Number(moment.tz("America/Sao_Paulo").format("HHmmss"))}B`;
chaves.push({
key: idks,
tipo: 1,
dias: nmr,
cliente: matheuzinho,
valor: 0,
}); //tipo 1 = aluguel de grupo
fs.writeFileSync(
"./bunker/database/grupos/aluguel/chaves.json",
JSON.stringify(chaves, null, 2)
);
await mention(
`🔑♥️ Código de ativação do serviço gerado com sucesso! Segue abaixo a chave:\n-> *${idks}*\n——\n• Quantidade de dias: *${nmr > 0 ? `${nmr} dia${nmr > 1 ? "s" : ""}` : `∞ INFINITO`}*\n• Usuário(a) que alugou: *@${matheuzinho.split("@")[0]}*`
);
break;

case "gerarcodecort": //by matheuzinho
if (!SoDono) return reply(mess.onlyOwner());
reagir(from, "😀");
cort = 24;
idks = `G${cort}-`;
idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(sender.slice(2, 8))}`;
idks += `E${Number(cort / 2).toFixed(0)}R-${Number(moment.tz("America/Sao_Paulo").format("DDMMYY")) + Number(moment.tz("America/Sao_Paulo").format("HHmmss"))}A`;
chaves.push({
key: idks,
tipo: 2,
dias: 24,
cliente: sender,
valor: 0,
}); //tipo 3 = cortesia
fs.writeFileSync(
"./bunker/database/grupos/aluguel/chaves.json",
JSON.stringify(chaves, null, 2)
);
reply(
`🛒♥️ O código cortesia foi gerado com sucesso! Segue abaixo a chave de ativação do mesmo:\n-> *${idks}*`
);
break;

case "delcoderent":
if (!SoDono) return reply(mess.onlyOwner());
if (!JSON.stringify(chaves).includes("CAROL V1 BETA -oficial"))
return reply(`Não há chaves registradas.`);
if (!q)
return reply(`Cadê o código de aluguel que você deseja apagar?`);
if (!JSON.stringify(chaves).includes(q))
return reply(
"O código não foi encontrado em nosso banco de dados, é inexistente!"
);
AD = chaves.map((i) => i.key).indexOf(q);
chaves.splice(AD, 1);
fs.writeFileSync(
"./bunker/database/grupos/aluguel/chaves.json",
JSON.stringify(chaves, null, 2)
);
reply(`[!] O código *${q}* foi deletado do sistema com sucesso.`);
break;

case "iddogrupo":
if (!SoDono) return reply(mess.onlyOwner());
reply(from);
break;

//=========== [ ÍNICIO JOGOS ] ========= //

case "quando":
if (args.length < 1) return reply("Digite a pergunta!");
const meupirul = [
"Hoje",
"Amanhã",
"Nunca",
"dia",
"semana",
"mês",
"ano",
];
const meupirul2 = ["dias", "semanas", "meses", "anos"];
randomm = meupirul[Math.floor(Math.random() * meupirul.length)];
random2 = `${Math.floor(Math.random() * 11) + 1}`;
if (
randomm == "Hoje" ||
randomm == "Amanhã" ||
randomm == "Nunca"
) {
texto = `Pergunta: ${body.slice(1)}\nResposta: ${randomm}`;
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\nResposta:1 ${randomm}`;
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)];
texto = `Pergunta: ${body.slice(1)}\nResposta: ${random2} ${random3}`;
}
reply(texto);
break;

//=========== [ FINAL JOGOS ] ========= //

case "banfake":
case "banfakes":
if (!isGroup) return reply(enviar.msg.grupo);
if (!isGroupAdmins) return reply(enviar.msg.adm);
caixa = [];
for (i of somembros) {
if (!SoDono.includes(i) && !botNumber.includes(i)) {
if (Number(i.slice(0, 2)) !== 55) caixa.push(i);
}
}
if (caixa.length > 0) {
for (a = 0; a < caixa.length; a++) {
await sleep(1000);
remover(from, caixa[a]);
}
} else reply("Não há números fake presentes neste grupo...");
break;

case "listafake":
case "listafakes": {
if (!isGroup) return reply(enviar.msg.grupo);
if (!isGroupAdmins) return reply(enviar.msg.adm);
reagir(from, "🇺🇸");
let txt;
txt = `🇺🇸 *Lista de números fake presentes neste grupo:*\n`;
let totalfake = 0;
for (i = 0; i < groupMembers.length; i++) {
if (!groupMembers[i].phoneNumber.startsWith("55")) {
txt += `⇒ ${isGroupAdmins ? "@" : "wa.me/"}${groupMembers[i].phoneNumber.split("@")[0]}\n`;
totalfake += 1;
}
};
txt += `\n🇺🇸 Total: ${totalfake}`;
if (totalfake > 0) {
reply(txt);
} else {
reply("Não há números fake neste grupo...");
}
}
break;

case "brlist":
case "listabr":
if (!isGroup) return reply(enviar.msg.grupo);
reagir(from, "🇧🇷");
txt = `🇧🇷 *Lista de números brasileiros presentes neste grupo:*\n`;
let totalbr = 0;
for (i = 0; i < groupMembers.length; i++) {
if (
groupMembers[i].phoneNumber.split(groupMembers[i].id.slice(2))[0] ===
"55"
) {
if (groupMembers[i].phoneNumber.includes(botNumber)) {
} else {
txt += `⇒ ${isGroupAdmins ? "@" : "wa.me/"}${groupMembers[i].phoneNumber.split("@")[0]}\n`;
totalbr += 1;
}
}
}
txt += `\n🇧🇷 Total: ${totalbr}`;
if (totalbr > 0) {
var resp = isGroupAdmins ? mention : reply;
resp(txt);
} else {
reply("Não há números brasileiros neste grupo...");
}
break;

case "listaddi":
case "ddilist":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (q.length < 1)
return reply(
`Fale o código de um país, por exemplo: *${prefix}listaddi 55*`
);
if (isNaN(q))
return reply(
`Fale o código de um país, por exemplo: *${prefix}listaddi 55*`
);
teks = `• Número com código de país +${args[0]} registrados no grupo:\n–\n`;
men = [];
for (let mem of groupMembers) {
if (mem.phoneNumber.startsWith(q)) {
teks += `⇒ @${mem.phoneNumber.split("@")[0]}\n`;
men.push(mem.phoneNumber);
}
}
if (teks.indexOf("⇒") < 0)
return reply(
`Nenhum número com o DDI *+${args[0]}* foi encontrado.`
);
await carol
.sendMessage(
from,
{ text: teks, mentions: men },
{ quoted: selo }
)
.catch(async (error) => {
reply(mess.error());
});
break;

case "listaddd":
case "dddlist":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (q.length < 1)
return reply(
`Fale o código do estado, por exemplo: *${prefix}listaddd 82*`
);
if (isNaN(q))
return reply(
`Fale o código de um estado(ddd), por exemplo: *${prefix}listaddd 82*`
);
teks = `• Lista de números brasileiros com o DDD *${q}* presentes neste grupo:\n–\n`;
men = [];
for (let mem of groupMembers) {
if (mem.phoneNumber.startsWith(55 + q)) {
teks += `⇒ @${mem.phoneNumber.split("@")[0]}\n`;
men.push(mem.phoneNumber);
}
}
if (teks.indexOf("⇒") < 0)
return reply(
"Nenhum *número brasileiro* com DDD fornecido foi encontrado no grupo."
);
await carol
.sendMessage(
from,
{ text: teks, mentions: men },
{ quoted: selo }
)
.catch(async (error) => {
reply(mess.error());
});
break;

case "limpar_mortos-cnt":
if (!SoDono) return reply(mess.onlyOwner());
if (!isGroup) return reply(mess.onlyOwner());
bla = [];
var CNT_RS =
countMessage[countMessage.map((i) => i.groupId).indexOf(from)]
.numbers;
for (i = 0; i < CNT_RS.map((i) => i.id).length; i++) {
bla.push(CNT_RS.map((i) => i.id)[i]);
}
for (i of groupMembers) {
bla.splice(bla.indexOf(i.id), 1);
}
for (i of bla) {
CNT_RS.splice(CNT_RS.indexOf(i), 1);
}
fs.writeFileSync(
"./configs/media/countmsg.json",
JSON.stringify(countMessage)
);
reply(
"Usuários que já foi removido, ou saiu do grupo, foi tirado do contador de mensagens.."
);
break;

case "tirar_docnt":
if (!SoDono) return reply(mess.onlyOwner());
if (!isGroup) return reply(mess.onlyGroup());
var i2 = countMessage.map((i) => i.groupId).indexOf(from);
var i = countMessage[i2].numbers
.map((i) => i.id)
.indexOf(q.trim() + "@s.whatsapp.net");
countMessage[i2].numbers.splice(i, 1);
fs.writeFileSync(
"./configs/media/countmsg.json",
JSON.stringify(countMessage)
);
reply("Usuário tirado do contador de mensagens com sucesso...");
break;

case "anotar":
case "tirar_nota":
case "rmnota":
if (!isGroup)
return reply(`Só em grupo pode utilizar este comando.`);
if (!isGroupAdmins)
return reply(`Só adm pode utilizar este tipo de comando.`);
if (command == "anotar") {
var [q5, q10] = q.trim().split("|");
if (!q5 || !q10 || !q.includes("|"))
return reply(
`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar Cachorro|Cachorros são bom pra comer na Venezuela...`
);
if (JSON.stringify(anotar).includes(from)) {
var i2 = anotar.map((i) => i.grupo).indexOf(from);
if (JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map((i) => i.nota).indexOf(q5);
if (anotar[i2].puxar[i3].nota == q5)
return reply(
`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`
);
}
}
if (!JSON.stringify(anotar).includes(from)) {
anotar.push({
grupo: from,
puxar: [{ nota: q5, anotacao: q10 }],
});
fs.writeFileSync(
"./bunker/database/func/anotar.json",
JSON.stringify(anotar)
);
reply("Anotação registrada com sucesso...");
} else {
anotar[i2].puxar.push({ nota: q5, anotacao: q10 });
fs.writeFileSync(
"./bunker/database/func/anotar.json",
JSON.stringify(anotar)
);
reply("Anotação registrada com sucesso...");
}
} else {
if (!q)
return reply("Digite qual anotação deseja tirar pelo título..");
if (JSON.stringify(anotar).includes(from)) {
var i2 = anotar.map((i) => i.grupo).indexOf(from);
if (JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map((i) => i.nota).indexOf(q);
}
}
if (0 > anotar[i2].puxar.map((i) => i.nota).indexOf(q))
return reply(
"Esta nota não está inclusa, verifique com atenção..."
);
anotar[i2].puxar.splice(i3, 1);
fs.writeFileSync(
"./bunker/database/func/anotar.json",
JSON.stringify(anotar)
);
reply(`Anotação ${q} tirada com sucesso...`);
}
break;

case "anotacao":
case "anotacoes":
case "nota":
case "notas":
if (!isGroup)
return reply(`Só em grupo pode utilizar este comando.`);
if (command == "anotacao" || command == "nota") {
if (!q)
return reply("Digite o título da anotação que deseja puxar..");
if (!JSON.stringify(anotar).includes(from))
return reply("Este grupo não tem nenhuma anotação...");
var i2 = anotar.map((i) => i.grupo).indexOf(from);
if (!JSON.stringify(anotar[i2].puxar).includes(q))
return reply("Não contém nenhuma anotação com este título.");
var i3 = anotar[i2].puxar.map((i) => i.nota).indexOf(q);
mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`);
} else {
var i2 = anotar.map((i) => i.grupo).indexOf(from);
if (anotar[i2].puxar.length == 0)
return reply("Este grupo não tem nenhuma anotação...");
var i2 = anotar.map((i) => i.grupo).indexOf(from);
var antr = anotar[i2].puxar;
txtin = `Aqui está todas as anotações registradas em minha database do grupo: *[ ${groupName} ]*\n`;
for (i = 0; i < antr.length; i++) {
txtin += `\n↝ Anotação: ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`;
}
txtin += "";
reply(txtin);
}
break;

case "download-link":
if (q.includes("video") || q.includes("mp4")) {
await carol
.sendMessage(
from,
{ video: { url: q }, mimetype: "video/mp4" },
{ quoted: selo }
)
.catch(async (e) => {
reply("Erro, visualize se este link é válido...");
});
} else if (q.includes("webp") || q.includes("jpg")) {
await carol
.sendMessage(from, { image: { url: q } }, { quoted: selo })
.catch(async (e) => {
reply("Erro, visualize se este link é válido...");
});
}
break;

case "signo":
try {
if (!q)
return reply(
`Digite seu signo, exemplo: ${prefix + command} Virgem`
);
signos = [
"Áries",
"Touro",
"Gêmeos",
"Câncer",
"Leão",
"Virgem",
"Libra",
"Escorpião",
"Sagitário",
"Capricórnio",
"Aquário",
"Peixes",
"aries",
"touro",
"gemeos",
"cancer",
"leao",
"virgem",
"libra",
"escorpiao",
"sagitario",
"capricornio",
"aquario",
"peixes",
];
if (!signos.includes(q_2))
return reply("Este signo não existe...");
ABC = await fetchJson(
API_URL +
`/api/pesquisa/horoscopo?signo=${q}&apikey=` +
API_KEY_CAROL
);
await carol
.sendMessage(from, {
image: { url: ABC.resultado.imagem },
caption: mess.horoscopo(q, ABC),
})
.catch(async (error) => {
return reply(mess.error());
});
} catch (error) {
return reply(mess.error());
}
break;

case "verificado-global":
if (!SoDono) return reply(mess.onlyOwner());
if (!isVerificado) {
nescessario.verificado = true;
setNes(nescessario);
reply("O verificado foi desativado com sucesso, ou seja, o selo foi retirado de todos os meus comandos! *Para reativar é só digitar o comando novamente.*");
} else if (isVerificado) {
nescessario.verificado = false;
setNes(nescessario);
reply(`O verificado foi ativado, ou seja, o selo foi colocado em todos os meus comandos! *Para remover o verificado dos comandos, use o comando novamente.*`);
}
break;

case "audio-menu":
if (!SoDono) return reply(mess.onlyOwner());
if (!isAudioMenu) {
nescessario.menu_audio = true;
setNes(nescessario);
reply(`O áudio foi ativado para o menu com sucesso, se quiser desativar é só digitar o comando novamente...`);
} else if (isAudioMenu) {
nescessario.menu_audio = false;
setNes(nescessario);
reply(`O áudio foi desativado para o menu com sucesso, se quiser ativar é só digitar o comando novamente...`);
}
break;

case "configurar-bot":
await carol.sendMessage(from, {text: getInfo.configbot(prefix)}, {quoted: selo});
break;

case "infoaluguel":
case "inforent":
case "info_aluguel":
await carol.sendMessage(from, {text: getInfo.infoRent(prefix)}, {quoted: selo});
break;

case "infovip":
case "info_vip":
await carol.sendMessage(from, {text: getInfo.infoVip(prefix)}, {quoted: selo});
break;

case "infocmdvip":
case "infocmdvip":
await carol.sendMessage(
from,
{ text: getInfo.infoCmdVip(prefix) },
{ quoted: selo }
);
break;

case "idiomas":
case "idioma":
await carol.sendMessage(
from,
{ text: getInfo.listLanguages(prefix) },
{ quoted: selo }
);
break;

case "infobv":
case "infowelcome":
case "infobemvindo":
await carol.sendMessage(
from,
{ text: getInfo.bemvindo(prefix) },
{ quoted: selo }
);
break;
case "destrava":
await carol.sendMessage(from, {text: destrava(prefix)}, {quoted: selo});
break;

case "perfil":
reagir(from, "✅");
try {
const migi = Math.floor(Math.random() * 105);
const russo = Math.floor(Math.random() * 105);
const valor = Math.floor(Math.random() * 5000);
const fiel = Math.floor(Math.random() * 105);
const aletl = Math.floor(Math.random() * 1005);
const bo = Math.floor(Math.random() * 1005);
const anime = Math.floor(Math.random() * 1005);
const famoso = Math.floor(Math.random() * 1005);
const marcadoNumero = menc_prt || sender;
const marcadoNum = menc_prt || sender;
let ppimg;
try {
ppimg = await carol.profilePictureUrl(`${marcadoNumero}`, "image");
} catch {
ppimg = "https://files.catbox.moe/epcgbz.jpg";
}
const mensagem = `╭══════════════════════╮
┇〔☎️〕Número: @${(sender_ou_n || '').replace('@s.whatsapp.net', '').replace('@lid', '') || 'Não encontrado'}
┇〔💘〕Nivel de Fiel: ${fiel}%
┇〔🥺〕Nivel de Feio: ${bo}%
┇〔🤡〕Punheteiro(a): ${aletl}%
┇〔🐂〕Nível de Gado: ${migi}%
┇〔👿〕Nível de Puta: ${russo}% 
┇〔💮〕Gosta de Anime: ${anime}% 
┇〔🎤〕Quanto e Famoso: ${famoso}% 
┇〔💸〕Valor do Programa: ${valor}$
╰══════════════════════╯`;
if (ppimg) {
const perfil = await getBuffer(ppimg);
await carol.sendMessage(from, {image: perfil, caption: mensagem, mentions: [sender_ou_n]}, {quoted: selo});
} else {
await carol.sendMessage(from, {text: mensagem, mentions: [sender_ou_n]}, {quoted: selo});
}
} catch (erro) {
reply("Deu um quero erro..");
}
break;

case "compartilharcase":
if (!SoDono)
return reply("😡Apenas meu dono pode usar este comando.");
if (!q) return reply("😅 Você precisa fornecer o nome da case.");
const caseName = q.trim();
try {
const fileData = fs.readFileSync("carol.js", "utf8");
const regex = new RegExp(
`case ['"\`]${caseName}['"\`]:([\\s\\S]*?)break;`,
"i"
);
const match = fileData.match(regex);
if (match) {
let caseCode = match[0]; // Captura todo o código da case
if (caseCode.length > 4000) {
return reply(
"⚠️ O código da case é muito grande para ser enviado aqui."
);
}
carol.sendMessage(from, {
text: `⿴⃟♥️❨👻❩ Código da case
"${caseName}":feito por H-Ricky\n\n\`\`\`${caseCode}\`\`\``,
});
} else {
reply(
"🤖 O bot não tem um comando para compartilhar essa case."
);
}
} catch (error) {
reply("❌ Erro ao acessar o arquivo das cases.");
console.error(error);
}
break;

case "tabela":
await carol.sendMessage(
from,
{ text: tabela(prefix, NomeDoBot) },
{ quoted: selo }
);
break;

case "destrava2":
await carol.sendMessage(
from,
{ text: destrava2(prefix) },
{ quoted: selo }
);
break;

case "tradutor":
case "traduzir":
if (!q) return reply(`Exemplo: ${prefix}tradutor pt|Dog`);
try {
txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|");
var [idioma, texto] = txt.split("|");
if (!q.includes("|"))
return reply(
`Está faltando a |, *use como exemplo:* ${prefix}tradutor pt|Dog`
);
bla = await fetchJson(
API_URL +
`/api/outros/translate?texto=${encodeURI(texto)}&ling=${encodeURI(idioma)}&apikey=` +
API_KEY_CAROL
);
reply(mess.translator(bla)).catch(async (error) => {
reply(mess.error());
});
} catch (error) {
reply(mess.error());
}
break;

case "getquoted":
case "getinfo":
case "get":
case "mek":
reply(JSON.stringify(info, null, 3));
break;

case "get-txt":
reply(
JSON.stringify(
info.message.extendedTextMessage.contextInfo.quotedMessage
.conversation,
null,
2
)
);
break;

case "gerarcpf":
cp1 = `${Math.floor(Math.random() * 300) + 600}`;
cp2 = `${Math.floor(Math.random() * 300) + 600}`;
cp3 = `${Math.floor(Math.random() * 300) + 600}`;
cp4 = `${Math.floor(Math.random() * 30) + 60}`;
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`;
await carol.sendMessage(
from,
{ text: `CPF gerado com sucesso: ${cpf}` },
{ quoted: selo }
);
break;

case "ddd":
if (args.length < 1) return reply(`Use ${prefix + command} 81`);
ddd = body.slice(5);
ddds = await axios.get(
`https://brasilapi.com.br/api/ddd/v1/${ddd}`
);
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`;
for (let i = 0; i < ddds.data.cities.length; i++) {
dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n`;
}
await carol.sendMessage(from, { text: dddlist }, { quoted: selo });
break;

case 'gethtml': {
try {
if (q.length < 5) return reply(`Exemplo: ${prefix + command} http://exemplo.com/docs.html`);
let url = q.trim()
if (!url.startsWith('http://') && !url.startsWith('https://')) {
url = 'http://' + url
}
const fetch = (...args) =>
import("node-fetch").then(({ default: fetch }) => fetch(...args));
let response = await fetch(url);
if (!response.ok) {
return enviar(`Erro ao acessar o site. Código de status: ${response.status}`)
}
reagir(from, "️⏳");
let html = await response.text();
let fileName = path.basename(new URL(url).pathname);
if (!fileName) fileName = "index.html";
let filePath = path.join(__dirname, fileName);
fs.writeFileSync(filePath, html, "utf-8");
await carol.sendMessage(from, {document: fs.readFileSync(filePath), fileName: fileName, mimetype: 'text/html'}, {quoted: selo});
await reagir(from, '✅️');
await sleep(1000);
fs.unlinkSync(filePath);
} catch (e) {
console.log(e)
await reply("Erro ao acessar o site.")
await reagir(from, "❌️");
}
}
break;

case "rvisu":
case "open":
if (!isQuotedVisuU)
return reply(
"Por favor, *mencione uma imagem ou video em visualização única* para executar o comando."
);
await reagir(from, "👀");
if (
info.message.extendedTextMessage.contextInfo.quotedMessage
.viewOnceMessageV2 ||
type == "viewOnceMessage"
) {
if (JSON.stringify(info).includes("videoMessage")) {
var px =
info.message.extendedTextMessage.contextInfo.quotedMessage
.viewOnceMessageV2?.message?.videoMessage ||
info.message?.viewOnceMessage?.message?.videoMessage;
px.viewOnce = false;
px.video = { url: px.url };
px.caption +=
"\n\nO vídeo em visualização única foi revelado..";
await carol.sendMessage(from, px);
} else {
var px =
info.message.extendedTextMessage.contextInfo.quotedMessage
.viewOnceMessageV2?.message?.imageMessage ||
info.message?.viewOnceMessage?.message?.imageMessage;
px.viewOnce = false;
px.image = { url: px.url };
px.caption +=
"\n\nA imagem em visualização única foi revelada..";
await carol.sendMessage(from, px);
}
}
break;

//===========(ADMS-FUNÇÕES-AKI)=========\\

case "calculadora":
case "calcular":
case "calc":
rsp = q
.replace("x", "*")
.replace('"', ":")
.replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "")
.replace("÷", "/");
return reply(JSON.stringify(eval(rsp, null, "\t")));
break;

case "nomegp":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
blat = args.join(" ");
await carol.groupUpdateSubject(from, `${blat}`);
await carol.sendMessage(
from,
{ text: "Sucesso, alterou o nome do grupo." },
{ quoted: selo }
);
break;

case "descgp":
case "descriçãogp":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyAdmins());
blabla = args.join(" ");
await carol.groupUpdateDescription(from, `${blabla}`);
await carol.sendMessage(
from,
{ text: "Sucesso, alterou a descrição do grupo" },
{ quoted: selo }
);
break;

case "setfotogp":
case "fotogp":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (!isQuotedImage)
return reply(`Use: ${prefix + command} <Marque uma foto>`);
ftgp = isQuotedImage
? info.message.extendedTextMessage.contextInfo.quotedMessage
.imageMessage
: info.message.imageMessage;
rane = getRandom("." + (await getExtension(ftgp.mimetype)));
buffimg = await getFileBuffer(ftgp, "image");
fs.writeFileSync(rane, buffimg);
medipp = rane;
carol.updateProfilePicture(from, { url: medipp });
reply(`Foto do grupo alterada com sucesso`);
break;

case "linkgp":
case "linkgroup":
if (!isGroup)
return reply("Este comando só pode ser usado em grupos!");
if (!isGroupAdmins)
return reply("Apenas administradores podem usar este comando!");
if (!isBotGroupAdmins)
return reply("O bot precisa ser administrador para executar este comando!");
const linkgc = await carol.groupInviteCode(from);
await reply(`https://chat.whatsapp.com/${linkgc}`);
break;

case "novolink":
case "nlink":
case "redefinir":
setTimeout(() => {
reagir(from, "⚙️");
}, 300);
if (!isGroupAdmins) return reply(enviar.msg.adm);
if (!isGroup) return reply(enviar.msg.grupo);
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin);
try {
await carol.groupRevokeInvite(from);
await sleep(1000);
link = await carol.groupInviteCode(from);
sendButton(
from,
{
text: `𓊈❗𓊉 𝙻𝙸𝙽𝙺 𝙳𝙾 𝙶𝚁𝚄𝙿𝙾 𝚁𝙴𝙳𝙴𝙵𝙸𝙽𝙸𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾 𓊈❗𓊉 `,
footer: NomeDoBot,
},
carol,
sender,
[
{
type: `copy_text`,
text: `✦ 𝐍𝐎𝐕𝐎 𝐋𝐈𝐍𝐊 𝐀𝐐𝐔𝐈 ✦`,
url: `https://chat.whatsapp.com/` + link,
},
],
selo
);
} catch (e) {
console.log(e);
reply("Erro ao tentar redefinir o link");
}
break;

case "recrutar":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (!q)
return reply(
"Cadê o número do usuário que você deseja convidar."
);
try {
photoG = await carol.profilePictureUrl(from, "image"); // Pegar a foto do grupo aonde foi solicitado o comando de recrutamento.
} catch {
photoG = thumbnail; // Vai colocar a img que está na definição, caso esteja sem foto.
}
rcrt =
q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`;
linkgc = await carol.groupInviteCode(from);
await carol.sendMessage(rcrt, {
text: "*Olá, tudo bem?* Você foi convidado(a) pelo(a) adminstrador(a) do grupo.\nPara entrar no grupo, clique acima!",
contextInfo: {
externalAdReply: {
title: "Clique aqui para participar do grupo.",
thumbnail: await getBuffer(photoG),
mediaType: 1,
sourceUrl: "https://chat.whatsapp.com/" + linkgc,
},
},
});
reply(
"Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso..."
);
break;

case "listatm":
if (!SoDono) return reply(mess.onlyOwner());
rgp = JSON.parse(
fs.readFileSync("./bunker/database/func/tmgroup.json")
);
if (rgp.length == 0)
return reply(
`Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`
);
bl = "";
for (i = 0; i < rgp.length; i++) {
bl += `( ${i + 1} ) - ID: ${rgp[i].id}\n• Nome do Usuário(a) ou Grupo: ${rgp[i].infonome}\n-\n`;
}
reply(bl);
break;

case "rgtm":
if (!SoDono) return reply(mess.onlyOwner());
rgp = JSON.parse(
fs.readFileSync("./bunker/database/func/tmgroup.json")
);
if (JSON.stringify(rgp).includes(from))
return reply(
"Este grupo/usuário já está registrado na lista de transmissão"
);
rgp.push({
id: from,
infonome: `${isGroup ? groupName : pushname}`,
});
fs.writeFileSync(
"./bunker/database/func/tmgroup.json",
JSON.stringify(rgp)
);
reply(
"Registrado com sucesso, quando for realizada as transmissões, esse grupo/usuário estará na lista."
);
break;

case "tirardatm":
if (!SoDono) return reply(mess.onlyOwner());
rgp = JSON.parse(
fs.readFileSync("./bunker/database/func/tmgroup.json")
);
if (!JSON.stringify(rgp).includes(from))
return reply(
"Este grupo/usuário não está registrado para ser tirado da lista de transmissão"
);
if (q.trim().length > 4) {
var ustm = rgp.map((i) => i.id).indexOf(q.trim());
} else {
var ustm = rgp.map((i) => i.id).indexOf(from);
}
rgp.splice(ustm, 1);
fs.writeFileSync(
"./bunker/database/func/tmgroup.json",
JSON.stringify(rgp)
);
reply("Grupo/Usuário tirado da lista de transmissão com sucesso");
break;

case 'aceitar': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
const pendentes = await carol.groupRequestParticipantsList(from);
const total = pendentes?.length || 0;
if (total === 0)
return reply('*ɴᴀᴏ ᴛᴇᴍ ꜱᴏʟɪᴄɪᴛᴀᴄᴏᴇꜱ ᴘᴇɴᴅᴇɴᴛᴇ.*');
for (const p of pendentes) {
await carol.groupRequestParticipantsUpdate(from, [p.jid], 'approve');
}
reply(`*${total} ꜱᴏʟɪᴄɪᴛᴀᴄᴏᴇꜱ ᴀᴄᴇɪᴛᴀ(ᴀꜱ)!*`);
}
break;

case 'recusar':
case 'negar': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
const pendentes = await carol.groupRequestParticipantsList(from);
const total = pendentes?.length || 0;
if (total === 0)
return reply('*ɴᴀᴏ ᴛᴇᴍ ꜱᴏʟɪᴄɪᴛᴀᴄᴏᴇꜱ ᴘᴇɴᴅᴇɴᴛᴇ.*');
for (const p of pendentes) {
await carol.groupRequestParticipantsUpdate(from, [p.jid], 'reject');
}
reply(`*${total} sᴏʟɪᴄɪᴛᴀᴄᴏᴇs ʀᴇᴄᴜsᴀᴅᴀ(ᴀꜱ)!*`);
}
break;

case "fazertm":
if (!SoDono) return reply(mess.onlyOwner());
var rgp = JSON.parse(
fs.readFileSync("./bunker/database/func/tmgroup.json")
);
if (rgp.lengh == 0)
return reply("Não contém nenhum grupo registrado para realizar transmissão");
await sleep(1000);
var DFC = "";
var rsm =
info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
var pink = isQuotedImage
? rsm?.imageMessage
: info.message?.imageMessage;
var blue = isQuotedVideo
? rsm?.videoMessage
: info.message?.videoMessage;
var red = isQuotedMsg
? rsm?.textMessage
: info.message?.textMessage;
var purple = isQuotedDocument
? rsm?.documentMessage
: info.message?.documentMessage;
var yellow = isQuotedDocW
? rsm?.documentWithCaptionMessage?.message?.documentMessage
: info.message?.documentWithCaptionMessage?.message
?.documentMessage;
var aud_d = isQuotedAudio ? rsm.audioMessage : "";
var figu_d = isQuotedSticker ? rsm.stickerMessage : "";
var red =
isQuotedMsg &&
!aud_d &&
!figu_d &&
!pink &&
!blue &&
!purple &&
!yellow
? "Transmissão do Proprietário: " + rsm.conversation
: info.message?.conversation;
var green =
isQuotedMsg2 &&
!aud_d &&
!figu_d &&
!red &&
!pink &&
!blue &&
!purple &&
!yellow
? "Transmissão do Proprietário: " +
rsm.extendedTextMessage?.text
: info?.message?.extendedTextMessage?.text;
if (pink) {
var DFC = pink;
pink.caption =
q.length > 1
? "Transmissão do Proprietário: " + q
: pink.caption.replace(
new RegExp(prefix + command, "gi"),
`Transmissão do Proprietário: ${ownerName}\n\n`
);
pink.image = { url: pink.url };
} else if (blue) {
var DFC = blue;
blue.caption =
q.length > 1
? "Transmissão do Proprietário: " + q
: blue.caption.replace(
new RegExp(prefix + command, "gi"),
`Transmissão do Proprietário: ${ownerName}\n\n`
);
blue.video = { url: blue.url };
} else if (red) {
black = {};
black.text = red.replace(
new RegExp(prefix + command, "gi"),
`Transmissão do Proprietário: ${ownerName}\n\n`
);
var DFC = black;
} else if (!aud_d && !figu_d && green) {
brown = {};
brown.text = green.replace(
new RegExp(prefix + command, "gi"),
`Transmissão do Proprietário: ${ownerName}\n\n`
);
var DFC = brown;
} else if (purple) {
var DFC = purple;
purple.document = { url: purple.url };
} else if (yellow) {
var DFC = yellow;
yellow.caption =
q.length > 1
? "Transmissão do Proprietário: " + q
: yellow.caption.replace(
new RegExp(prefix + command, "gi"),
`Transmissão do Proprietário: ${ownerName}\n\n`
);
yellow.document = { url: yellow.url };
} else if (figu_d) {
var DFC = figu_d;
figu_d.sticker = { url: figu_d.url };
} else if (aud_d) {
var DFC = aud_d;
aud_d.audio = { url: aud_d.url };
}
for (i = 0; i < rgp.length; i++) {
await carol.sendMessage(rgp[i].id, DFC);
}
break;

case "grupo":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}grupo *--help*_`
);
groupI = await carol.groupMetadata(from);
if (args[0] === "--help")
return await mention(mess.helpGroupSettings(prefix, sender));
if (args[0] === "-open" || args[0] === "a") {
if (groupI.announce == false)
return reply(
"O grupo já está aberto, não é possível solicitar para abrir o que já aberto..."
);
reply(`Como pedido senhor(a), o grupo foi aberto com sucesso...`);
await carol.groupSettingUpdate(from, "not_announcement");
} else if (args[0] === "-close" || args[0] === "f") {
if (groupI.announce == true)
return reply(
"O grupo já está fechado, não é possível solicitar para fechar o que já se encontra fechado..."
);
reply(
"Como pedido senhor(a), o grupo foi fechado com sucesso..."
);
await carol.groupSettingUpdate(from, "announcement");
} else if (args[0] === "-livre") {
if (groupI.restrict == false)
return reply(
"O grupo não possuí nenhuma restrição de alteração nos dados, ou seja, todos podem alterar."
);
reply(
"Como pedido senhor(a), todos os membros tem a permissão de editar as configurações do grupo."
);
await carol.groupSettingUpdate(from, "unlocked");
} else if (args[0] === "-private") {
if (groupI.restrict == true)
return reply(
"O grupo já possuí a restrição aos administradores! Então, não tem como ativar duas vezes."
);
reply(
"Como pedido senhor(a), somente os administradores tem a permissão de editar os configurações do grupo."
);
await carol.groupSettingUpdate(from, "locked");
} else {
reply(
`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}grupo *--help*_`
);
}
break;

//const { fs, colors, mess, getGroupAdmins } = require('../configs/imports/consts.js');
const {
verificarAberturaFechamento,
} = require("./bunker/schedule.js"); // Importa a função para reavaliar o agendamento

// Dentro do seu switch-case ou função de comandos

case "agendar":
{
// Verificar se é um grupo
if (!isGroup) {
return carol.sendMessage(from, { text: mess.groupOnly() });
}

// Verificar se o remetente é admin
const groupMetadata = await carol.groupMetadata(from);
const admins = getGroupAdmins(groupMetadata.participants);
if (!admins.includes(sender)) {
return carol.sendMessage(from, { text: mess.adminOnly() });
}

// Verificar se há argumentos
if (!q) {
return carol.sendMessage(from, {
text: `Uso: ${prefix}agendar abrir=HH:MM fechar=HH:MM ativo=on/off\nExemplo: ${prefix}agendar abrir=09:00 fechar=21:00 ativo=on`,
});
}

// Parsear argumentos
let config = {
abrir: "08:00",
fechar: "22:00",
ativo: false,
ultimoEstado: "",
};
const scheduleFile = `./bunker/database/grupos/schedule/${from}.json`;
if (fs.existsSync(scheduleFile)) {
config = JSON.parse(fs.readFileSync(scheduleFile));
}

let hasValidParam = false;
const argArray = q.split(/ +/); // Usa q para processar os argumentos
for (const arg of argArray) {
const [key, value] = arg.split("=");
if (!key || !value) {
return carol.sendMessage(from, {
text: "Formato inválido. Use: abrir=HH:MM fechar=HH:MM ativo=on/off",
});
}

if (key.toLowerCase() === "abrir") {
if (!/^\d{2}:\d{2}$/.test(value)) {
return carol.sendMessage(from, {
text: "Horário de abertura inválido. Use formato HH:MM.",
});
}
config.abrir = value;
hasValidParam = true;
} else if (key.toLowerCase() === "fechar") {
if (!/^\d{2}:\d{2}$/.test(value)) {
return carol.sendMessage(from, {
text: "Horário de fechamento inválido. Use formato HH:MM.",
});
}
config.fechar = value;
hasValidParam = true;
} else if (key.toLowerCase() === "ativo") {
if (
value.toLowerCase() !== "on" &&
value.toLowerCase() !== "off"
) {
return carol.sendMessage(from, {
text: "Valor de ativo inválido. Use on ou off.",
});
}
config.ativo = value.toLowerCase() === "on";
hasValidParam = true;
}
}

if (!hasValidParam) {
return carol.sendMessage(from, {
text: "Nenhum parâmetro válido fornecido. Use: abrir=HH:MM fechar=HH:MM ativo=on/off",
});
}

// Salvar configuração
fs.writeFileSync(scheduleFile, JSON.stringify(config, null, 2));
await carol.sendMessage(from, {
text: `Agendamento configurado:\nAbrir: ${config.abrir}\nFechar: ${config.fechar}\nAtivo: ${config.ativo ? "Sim" : "Não"}`,
});

// Reavaliar agendamento imediatamente
await iniciarAgendamento(carol);

console.log(
colors.blue(
`[CAROL V1 BETA] Agendamento atualizado para ${from}: ${JSON.stringify(config)}`
)
);
}
break;

case "grupoinfo":
case "infogrupo":
case "infogp":
case "gpinfo":
case "regras":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
try {
var ppUrl = await carol.profilePictureUrl(from, "image");
} catch {
var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`;
}
var puxarInfo = await carol.groupMetadata(from);
var ANC_INFO = puxarInfo.announce;
var returnAnnounce =
ANC_INFO === false
? "Não."
: ANC_INFO === true
? "Sim."
: undefined;
var RST_INFO = puxarInfo.restrict;
var returnRestrict =
RST_INFO === false
? "Sim."
: RST_INFO === true
? "Não."
: undefined;
var infoCreator = puxarInfo.subjectOwner || "Não Encontrado";
infoGroup = `• Nome do Grupo: *${puxarInfo.subject}*\n• ID: *${puxarInfo.id}*\n-\n• Este grupo foi criado por: *@${infoCreator.replace("@s.whatsapp.net", "")}*\n• Data/hora de criação do grupo: *${moment(
`${puxarInfo.creation}` * 1000
)
.tz("America/Sao_Paulo")
.format(
"DD/MM/YYYY HH:mm:ss"
)}*\n• Horário e data da última alteração no grupo: *${moment(`${puxarInfo.subjectTime}` * 1000).format("DD/MM/YYYY HH:mm:ss")}*\n-\n• Quantidade de adminstradores: *${groupAdmins.length}*\n• Quantidade de membros: *${somembros.length}*\n• Soma total de membros e admins do grupo: *${puxarInfo.participants.length} participantes*\n-\n• Este grupo está fechado no momento? *${returnAnnounce}*\n• As informações do grupo podem ser alteradas por membros? *${returnRestrict}*\n-\n• Para ver as atividades dos participantes, use: *${prefix}atividade*\n• Para ver os membros inativos no grupo, use: *${prefix}inativos [quantidade de mensagens]*, ex: ${prefix}inativos 10`;
await carol.sendMessage(
from,
{
image: { url: ppUrl },
caption: infoGroup,
mentions: [infoCreator],
},
{ quoted: selo }
);
break;

case "totag":
case "cita":
case "hidetag":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());

var DFC = "";
var rsm =
info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
var pink = isQuotedImage
? rsm?.imageMessage
: info.message?.imageMessage;
var blue = isQuotedVideo
? rsm?.videoMessage
: info.message?.videoMessage;
var purple = isQuotedDocument
? rsm?.documentMessage
: info.message?.documentMessage;
var yellow = isQuotedDocW
? rsm?.documentWithCaptionMessage?.message?.documentMessage
: info.message?.documentWithCaptionMessage?.message
?.documentMessage;
var aud_d = isQuotedAudio ? rsm.audioMessage : "";
var figu_d = isQuotedSticker ? rsm.stickerMessage : "";
var red =
isQuotedMsg &&
!aud_d &&
!figu_d &&
!pink &&
!blue &&
!purple &&
!yellow
? rsm.conversation
: info.message?.conversation;
var green =
rsm?.extendedTextMessage?.text ||
info?.message?.extendedTextMessage?.text;
var MRC_TD = groupMembers.map((i) => i.id);

// Função para escapar caracteres especiais em regex
function escapeRegExp(string) {
return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Cria regex segura para substituição
const commandToReplace = escapeRegExp(prefix + command);
const regexPattern = new RegExp(commandToReplace, "gi");
const replacementText = `❪👑 *Marcação do(a) Adm:* ${pushname}\n\n`;

if (pink && !aud_d && !purple) {
var DFC = pink;
pink.caption =
q.length > 1
? "❪👑 *Marcação do(a) Adm:* " + q
: pink.caption
? pink.caption.replace(regexPattern, replacementText)
: replacementText;
pink.image = { url: pink.url };
pink.mentions = MRC_TD;
} else if (blue && !aud_d && !purple) {
var DFC = blue;
blue.caption =
q.length > 1
? "❪👑 *Marcação do(a) Adm:* " + q.trim()
: blue.caption
? blue.caption.replace(regexPattern, replacementText).trim()
: replacementText.trim();
blue.video = { url: blue.url };
blue.mentions = MRC_TD;
} else if (red && !aud_d && !purple) {
var black = {};
black.text = red
? red.replace(regexPattern, replacementText).trim()
: replacementText.trim();
black.mentions = MRC_TD;
var DFC = black;
} else if (!aud_d && !figu_d && green && !purple) {
var brown = {};
brown.text = green
? green.replace(regexPattern, replacementText).trim()
: replacementText.trim();
brown.mentions = MRC_TD;
var DFC = brown;
} else if (purple) {
var DFC = purple;
purple.document = { url: purple.url };
purple.mentions = MRC_TD;
} else if (yellow && !aud_d) {
var DFC = yellow;
yellow.caption =
q.length > 1
? "❪👑 *Marcação do(a) Adm:* " + q.trim()
: yellow.caption
? yellow.caption
.replace(regexPattern, replacementText)
.trim()
: replacementText.trim();
yellow.document = { url: yellow.url };
yellow.mentions = MRC_TD;
} else if (figu_d && !aud_d) {
var DFC = figu_d;
figu_d.sticker = { url: figu_d.url };
figu_d.mentions = MRC_TD;
} else if (aud_d) {
var DFC = aud_d;
aud_d.audio = { url: aud_d.url };
aud_d.mentions = MRC_TD;
aud_d.ptt = true;
} else {
// Caso padrão quando não há mídia
var DFC = {
text:
q.length > 1
? "❪👑 *Marcação do(a) Adm:* " + q
: replacementText,
mentions: MRC_TD,
};
}

try {
await carol.sendMessage(from, DFC);
} catch (error) {
console.log("Erro ao enviar marcação:", error);
reply("Erro ao marcar membros do grupo.");
}
break;

case "marcar":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
async function marcac() {
bla = [];
blad = `• Mencionando os membros comuns do grupo ou de uma comunidade. ${!q ? "" : `\n*Mensagem:* ${q}`}\n\n`;
for (let i of somembros) {
blad += `» @${i.split("@")[0]}\n`;
bla.push(i);
}
blam = JSON.stringify(somembros);
if (blam.length == 2)
return reply(
`❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, é sim apenas administradores. `
);
await mentions(blad, bla, true);
}
marcac().catch((error) => {
console.log(error);
});
break;

case "marcar2":
try {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (q.includes(`${prefix}`))
return reply("Não pode utilizar comandos nesse comando.");
members_id = [];
teks = args.length > 1 ? body.slice(8).trim() : "";
teks += "";
for (let mem of groupMembers) {
teks += `╠➥ @${mem.phoneNumber.split("@")[0]}\n`;
members_id.push(mem.phoneNumber);
}
reply(teks);
} catch {
reply("Erro ao mencionar.");
}
break;

case "marcarwa":
try {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (q.includes(`${prefix}`))
return reply("Não pode utilizar comandos nesse comando");
members_id = [];
teks = args.length > 1 ? body.slice(10).trim() : "";
teks += "";
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.phoneNumber.split("@")[0]}\n`;
members_id.push(mem.phoneNumber);
}
await carol.sendMessage(from, { text: teks }, { quoted: selo });
} catch {
reply("Erro ao mencionar.");
}
break;

case "reviverqr":
if (!SoDono) return reply(mess.onlyOwner());
exec(`cd ${qrcode} && rm -rf pre-key* sender* session*`);
setTimeout(async () => {
await reply("Reiniciando...");
setTimeout(async () => {
process.exit();
}, 1200);
}, 1000);
break;

case "ptvmsg":
if (!isQuotedVideo && !info.message.videoMessage)
return reply(
"Marque um vídeo/gif que você deseja converter para mensagem de vídeo."
);
await carol.relayMessage(
from,
{
ptvMessage: isQuotedVideo
? info.message.extendedTextMessage.contextInfo.quotedMessage
.videoMessage
: info.message.videoMessage,
},
{}
);
break;

case "reviver":
if (!isGroup) return reply(mess.onlyGroup());
if (!SoDono) return reply(mess.onlyOwner());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (
info.message.extendedTextMessage === undefined ||
info.message.extendedTextMessage === null
)
return reply("Marque uma mensagem do alvo!");
await sleep(5000);
response2 = await carol.groupParticipantsUpdate(
from,
[menc_prt],
"add"
);
reply("Usuario adicionado de volta ao grupo.");
break;

case "sairgp":
if (isGroup && !SoDono && !info.key.fromMe)
return reply("Este comando só o bot ou o dono pode executar..");
try {
await carol.groupLeave(from);
} catch (erro) {
reply(String(erro));
}
break;

case "cronometro": //vncs & nunu
if (!SoDono) return reply(mess.onlyOwner());
async function CronZ(txt, timeArg) {
let totalTime = parseInt(timeArg, 10) * 60;
if (isNaN(totalTime) || totalTime > 60) totalTime = 60;
function sleep(ms) {
return new Promise((resolve) => setTimeout(resolve, ms));
} //vncs & nunu
const startMsg = `⏳ *Cronômetro Iniciado* ⏳\n\n${txt.length > 0 ? `*Mensagem:* ${txt}\n\n` : ""}*Tempo Restante: ${Math.floor(totalTime / 60)}:00*`;
let { key } = await carol.sendMessage(
from,
{ text: startMsg },
{ quoted: selo }
);
//vncs & nunu
const progressBarLength = 20;
//vncs & nunu
for (let i = totalTime - 1; i >= 0; i--) {
const minutes = Math.floor(i / 60);
const seconds = i % 60;
const timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
const progress = Math.floor(
((totalTime - i) / totalTime) * progressBarLength
);
const progressBar = `[${"█".repeat(progress)}${"░".repeat(progressBarLength - progress)}]`;

await sleep(1000);

const updateMsg = `⏳ *Cronômetro* ⏳\n\n${txt.length > 0 ? `*Mensagem:* ${txt}\n\n` : ""}> *Tempo Restante:* ${timeString}\n${progressBar}`;
await carol.sendMessage(
from,
{ text: updateMsg, edit: key },
{ quoted: selo }
);
}

const endMsg = `✅ *Tempo Esgotado!* ✅\n\n${txt.length > 0 ? `*Mensagem:* ${txt}\n\n` : ""}*O tempo especificado terminou.*`;
await carol.sendMessage(from, { text: endMsg }, { quoted: selo });
}
const txt = args.slice(1).join(" ");
const timeArg = args[0];
CronZ(txt, timeArg);
break;

case "seradm":
if (!SoDono) return reply(mess.onlyOwner());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
await mentions(
`@${sender.split("@")[0]} Pronto - Agora você é um administrador..`,
[sender],
true
);
await carol.groupParticipantsUpdate(from, [sender], "promote");
break;

case "sermembro":
if (!SoDono) return reply(mess.onlyOwner());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
await mentions(
`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`,
[sender],
true
);
await carol.groupParticipantsUpdate(from, [sender], "demote");
break;

case "advertir":
case "adverter":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (menc_os2 == botNumber)
return reply("Não pode advertir o próprio bot.");
if (menc_os2 == SoDono)
return reply("Não pode advertir o próprio dono do bot.");
if (groupAdmins.includes(menc_os2))
return reply("Não é possível advertir adminstrador do grupo.");
if (!JSON.stringify(groupMembers).includes(menc_os2))
return reply(
"Não tem como advertir um usuário que não se encontra mais no grupo."
);
ADVT.push(menc_os2);
setGp(dataGp);
setTimeout(async () => {
var dfqn = ADVT.filter((x) => x == menc_os2).length;
var dfntxt = mess.warningAdvertencia(menc_os2, dfqn);
if (!dfntxt.includes("3/3")) {
if (!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500);
await mentions(dfntxt, [menc_os2]);
} else if (dfqn == 2) {
await sleep(1500);
await mentions(dfntxt, [menc_os2]);
}
} else {
await carol.sendMessage(
from,
{
text: mess.finishAdvertencia(menc_os2),
mentions: [menc_os2],
},
{ quoted: selo }
);
await sleep(1500);
await carol.groupParticipantsUpdate(from, [menc_os2], "remove");
var i = ADVT.indexOf(menc_os2);
ADVT.splice(i, 3);
setGp(dataGp);
}
}, 3000);
break;

case "rmadv":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!marc_tds)
return reply("Você esqueceu de mencionar o alvo após o comando.");
adv = dataGp[0].advertir.map((i) => i).indexOf(marc_tds);
if (adv < 0)
return reply(
"Este usuário não contém nenhuma advertência no grupo."
);
dataGp[0].advertir.splice(adv, 1);
setGp(dataGp);
reply(
"A advertência do usuário neste grupo foi retirada com sucesso!"
);
break;

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case "sairdogp":
if (!SoDono) return reply(mess.onlyOwner());
if (!q)
return reply(
`Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`
);
var getGroups = await carol.groupFetchAllParticipating();
var groups = Object.entries(getGroups)
.slice(0)
.map((entry) => entry[1]);
var ingfoo = groups.map((v) => v);
try {
await carol.sendMessage(ingfoo[q].id, {
text: "Irei sair do grupo, por ordem do meu dono, adeus...",
});
setTimeout(async () => {
await carol.groupLeave(ingfoo[q].id);
}, 5000);
} catch (erro) {
reply(String(erro));
}
reply(
"Pronto meu dono, sair do grupo que você queria, em caso de dúvidas acione o comando listagp pra verificar.."
);
break;

case "listagp":
if (!SoDono && !isnit && !info.key.fromMe)
return reply(mess.onlyOwner());
var getGroups = await carol.groupFetchAllParticipating();
var groups = Object.entries(getGroups)
.slice(0)
.map((entry) => entry[1]);
var ingfoo = groups.map((v) => v);
ingfoo.sort((a, b) => a[0] < b.length);
teks1 = `[Total: *${ingfoo.length}*] - Lista de Grupos e comunidades que estou atualmente:\n—\n`;
for (let i = 0; i < ingfoo.length; i++) {
var metadt = await carol.groupMetadata(ingfoo[i].id);
try {
var linkdogp = await carol.groupInviteCode(ingfoo[i].id);
} catch {
var linkdogp = "Não foi possivel puxar o link.";
}
teks1 += `( ${i + 1} ) - Nome do Grupo: ${ingfoo[i].subject}\nID: ${ingfoo[i].id}\nLink do Grupo: https://chat.whatsapp.com/${linkdogp}\nCriado por: ${metadt.subjectOwner}\nCriado em: ${moment(
`${ingfoo[i].creation}` * 1000
)
.tz("America/Sao_Paulo")
.format(
"DD/MM/YYYY HH:mm:ss"
)}\nTotal de Participantes: ${ingfoo[i].participants.length}\n—\n`;
}
reply(teks1);
break;

case "atividade":
case "atividades":
try {
if (!isGroupAdmins && !issupre && !ischyt)
return reply(mess.onlyAdmins());
if (isGroup && JSON.stringify(countMessage).includes(from)) {
var i6 = countMessage.map((i) => i.groupId).indexOf(from);
if (countMessage[i6].numbers.length == 0) return;
teks = `*Atividade dos membros do grupo:*\n–\n`;
for (i = 0; i < countMessage[i6].numbers.length; i++) {
var i8 = countMessage[i6].numbers
.map((i) => i.id)
.indexOf(countMessage[i6].numbers[i].id);
var uscnt = countMessage[i6].numbers[i];
teks += `• Participante: *@${uscnt.id.split("@")[0]}*\n• Quantidade de comandos usados pelo(a) participante no grupo: *${uscnt.cmd_messages}*\n• Quantidade de mensagens enviadas pelo(a) participante: *${uscnt.messages}*\n• O participante no momento está conectado em: *${uscnt.aparelho}*\n• Quantidade de figurinhas enviadas no grupo: *${uscnt.figus}*\n–\n`;
}
await mention(teks);
} else return reply("*Nada foi encontrado*");
} catch (error) {
console.log(error);
}
break;

case "inativos":
case "inativo":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (q.match(/[a-z]/i) || !q)
return reply(
`Exemplo: ${prefix + command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`
);
await ClearMembersInactive();
var i2 = countMessage?.map((x) => x.groupId)?.indexOf(from);
blue = [];
for (i of countMessage[i2].numbers) {
if (i.messages <= q.trim())
if (i.figus <= q.trim())
if (i.cmd_messages <= q.trim())
if (!groupAdmins.includes(i.id))
if (!SoDono.includes(i.id))
if (i.id != botNumber)
if (groupMembers.map((i) => i.id).includes(i.id))
blue.push(i.id);
}
for (i of countMessage[i2].numbers) {
if (!groupMembers.map((i) => i.id).includes(i.id))
if (i.id.length > 5) blue.push(i.id);
}
if (blue.length == 0)
return reply(`Não tem pessoas com ${q} mensagens..`);
bli = `Usuários com *${q.trim()}* mensagem(ns) pra baixo estão listados abaixo, verifique:\n–\n`;
for (ac = 0; ac < blue.length; ac++) {
bli += `*${ac + 1}.* @${blue[ac].split("@")[0]}\n`;
}
await mention(bli);
break;

case "banghost":
if (!isGroup) return reply(mess.onlyGroup());
if (!SoDono) return reply(mess.onlyOwner());
if (q.match(/[a-z]/i) || !q || q.length > 3)
return reply(
`Digite a partir de quantas mensagens pra baixo você deseja remover (que não interaje no grupo).\nExemplo: ${prefix + command} 0`
);
var i2 = countMessage?.map((x) => x.groupId)?.indexOf(from);
blue = [];
for (i of countMessage[i2].numbers) {
if (i.messages <= Number(q.trim()))
if (i.figus <= Number(q.trim()))
if (i.cmd_messages <= Number(q.trim()))
if (!groupAdmins.includes(i.id))
if (!SoDono.includes(i.id))
if (i.id != botNumber)
if (groupMembers.map((i) => i.id).includes(i.id))
blue.push(i.id);
}
for (i of countMessage[i2].numbers) {
if (!groupMembers.map((i) => i.id).includes(i.id))
if (i.id.length > 5) blue.push(i.id);
}
if (blue.length == 0)
return reply(
`Não tem mais pessoas com ${q.trim()} mensagem(ns) para eu remover..`
);
for (i = 0; i < blue.length; i++) {
await sleep(1000);
await carol.groupParticipantsUpdate(from, [blue[i]], "remove");
}
break;

case "envpv":
case "pv":
{
if (!isGroup) return reply("Somente em grupos!");
if (!menc_prt)
return reply(
"Marque uma mídia ou uma mensagem, para que eu possa-lhe enviar em seu privado o que for pedido."
);
var DFC = "";
var rsm =
info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
var pink = isQuotedImage
? rsm?.imageMessage
: info.message?.imageMessage;
var blue = isQuotedVideo
? rsm?.videoMessage
: info.message?.videoMessage;
var purple = isQuotedDocument
? rsm?.documentMessage
: info.message?.documentMessage;
var yellow = isQuotedDocW
? rsm?.documentWithCaptionMessage?.message?.documentMessage
: info.message?.documentWithCaptionMessage?.message
?.documentMessage;
var aud_d = isQuotedAudio ? rsm.audioMessage : "";
var figu_d = isQuotedSticker ? rsm.stickerMessage : "";
var red =
isQuotedMsg &&
!aud_d &&
!figu_d &&
!pink &&
!blue &&
!purple &&
!yellow
? rsm.conversation
: info.message?.conversation;
var green =
rsm?.extendedTextMessage?.text ||
info?.message?.extendedTextMessage?.text;
if (pink && !aud_d && !purple) {
var DFC = pink;
pink.caption =
q.length > 1
? "É o Akame 💞"
: pink.caption.replace(
new RegExp(prefix + command, "gi"),
`É o Akame 💞`
);
pink.image = { url: pink.url };
} else if (blue && !aud_d && !purple) {
var DFC = blue;
blue.caption =
q.length > 1
? "É o Akame 💞" + q.trim()
: blue.caption
.replace(
new RegExp(prefix + command, "gi"),
`É o Akame 💞`
)
.trim();
blue.video = { url: blue.url };
} else if (red && !aud_d && !purple) {
carol = {};
carol.text = red
.replace(new RegExp(prefix + command, "gi"), `É o Akame 💞`)
.trim();
var DFC = carol;
} else if (!aud_d && !figu_d && green && !purple && !purple) {
carol = {};
carol.text = green
.replace(new RegExp(prefix + command, "gi"), `É o Akame 💞`)
.trim();
var DFC = carol;
} else if (purple) {
var DFC = purple;
purple.document = { url: purple.url };
} else if (yellow && !aud_d) {
var DFC = yellow;
yellow.caption =
q.length > 1
? "É o Akame 💞" + q.trim()
: yellow.caption
.replace(
new RegExp(prefix + command, "gi"),
`É o Akame 💞`
)
.trim();
yellow.document = { url: yellow.url };
} else if (figu_d && !aud_d) {
var DFC = figu_d;
figu_d.sticker = { url: figu_d.url };
} else if (aud_d) {
var DFC = aud_d;
aud_d.audio = { url: aud_d.url };
aud_d.ptt = true;
}
reply("mandei, olha meu privado. 💞");
await carol
.sendMessage(sender, DFC, { quoted: selo })
.catch((e) => {
console.log(e);
});
}
break;

case "correio":
txt0 = args.join(" ");
let txt1 = txt.split("/")[0].replace(/\D/g, "");
let txt2 = txt.split("/")[1];
if (!txt1) return reply(mess.syntaxAnonymousMail(prefix));
if (!txt1) return reply("*Cadê o número do destinatário?*");
if (!txt2) return reply("*Cadê a mensagem para ser enviada ao destinatário?*");
let [result] = await carol.onWhatsApp(txt1);
if (!result)
return reply(`O número fornecido está indisponível no WhatsApp! Verifique por favor.`);
await reagir(from, "💌️");
reply(mess.sucessAnonymousMail());
await carol.sendMessage(result.jid, {text: mess.anonymousMail(txt0)}).catch(async (error) => {
return reply("Error ao encaminhar a mensagem, tente novamente mais tarde!");
});
break;

case "getperfil": {
try {
reagir(from, "✅");
if (!menc_os2) return reply("⚠️ Cadê número ou @marcação?");
let ppimgx = await carol.profilePictureUrl(`${menc_os2}`, "image");
const perfilx = await getBuffer(ppimgx);
await carol.sendMessage(from, {image: perfilx}, {quoted: selo});
} catch (e) {
console.log(e);
reagir(from, "❌");
reply("⚠️ Erro ao coletar informações..");
}
}
break;

case "nome-bot":
if (!SoDono && !isnit && !info.key.fromMe)
return reply(mess.onlyOwner());
setting.NomeDoBot = q.trim();
fs.writeFileSync("./configs/settings.json", JSON.stringify(setting, null, 2));
reply(`O nome do bot foi alterado com sucesso para: ${setting.NomeDoBot}`);
break;

case "nick-dono":
if (!SoDono && !isnit && !info.key.fromMe)
return reply(mess.onlyOwner());
setting.ownerName = q.trim();
fs.writeFileSync(
"./configs/settings.json",
JSON.stringify(setting, null, 2)
);
reply(`O nick do dono foi configurado para: ${setting.ownerName}`);
break;

case "numero-dono":
if (!SoDono && !isnit && !info.key.fromMe)
return reply(mess.onlyOwner());
if (q.match(/[a-z]/i)) return reply("É apenas números..");
setting.ownerNumber = q
.trim()
.replace(new RegExp("[()+-/ +/]", "gi"), "");
fs.writeFileSync(
"./configs/settings.json",
JSON.stringify(setting, null, 2)
);
reply(`O número dono foi configurado com sucesso para: ${q}`);
break;

case "prefixo-bot":
case "setprefix":
if (args.length < 1) return;
if (!SoDono && !isnit && !info.key.fromMe)
return reply(mess.onlyOwner());
setting.prefix = q.trim();
fs.writeFileSync(
"./configs/settings.json",
JSON.stringify(setting, null, 2)
);
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`);
break;

case "fotomenu":
case "fundomenu": {
if (!SoDono) return reply(mess.onlyOwner());
if (!isQuotedImage) return reply("Marque uma imagem.");
if (
((isMedia && !info.message.videoMessage) || isQuotedImage) &&
!q.length <= 1
) {
reagir(from, `✅`);
var boij = isQuotedImage
? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
.message.extendedTextMessage.contextInfo.message
.imageMessage
: info.message.imageMessage;
var owgi = await getFileBuffer(boij, "image");
const ImagemPath = path.join(__dirname, "configs", "media", "logomenu.jpeg");
fs.writeFileSync(ImagemPath, owgi);
saveMenuConfig({
type: "image",
path: ImagemPath
});
reply(`A foto do menu foi alterada com sucesso..`);
} else {
reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto dos menus..`);
}
}
break;

case "setprefix":
if (args.length < 1) return;
if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe)
return reply(mess.onlyOwner());
setting.prefix = q;
fs.writeFileSync(
"./configs/settings.json",
JSON.stringify(setting, null, 2)
);
reply(`O prefixo foi alterado com sucesso para: ${q}`);
break;

case "wprivacyph":
if (!SoDono) return reply(mess.onlyOwner());
if (args.length < 1)
return reply(
`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacyph *--help*_`
);
if (args[0] === "--help")
return await mention(mess.helpPhotoPrivacy(prefix, sender));
if (args[0] === "-all") {
reply(`A minha foto do perfil agora está visível à todos.`);
await carol.updateProfilePicturePrivacy("all");
} else if (args[0] === "-cntt") {
reply(
`A minha foto do perfil agora está visível somente aos meus contatos.`
);
await carol.updateProfilePicturePrivacy("contacts");
} else if (args[0] === "-noall") {
reply(
`A foto do meu perfil está privada a todos, até mesmo ao senhor mestre.`
);
await carol.updateProfilePicturePrivacy("none");
} else {
reply(
`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacyph *--help*_`
);
}
break;

case "wprivacygp":
if (!SoDono) return reply(mess.onlyOwner());
if (args.length < 1)
return reply(
`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacygp *--help*_`
);
if (args[0] === "--help")
return await mention(mess.helpGroupPrivacy(prefix, sender));
if (args[0] === "-all") {
reply(
`Pronto, agora todos pode me adicionar em grupo normalmente.`
);
await carol.updateGroupsAddPrivacy(`all`);
} else if (args[0] === "-cntt") {
reply(`Agora somente meus contatos, pode me adicionar em grupo.`);
await carol.updateGroupsAddPrivacy(`contacts`);
} else if (args[0] === "-noall") {
reply(
`Agora ninguém pode ousar me adicionar em grupo, pois será negado.`
);
await carol.updateGroupsAddPrivacy("none");
} else {
reply(
`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacygp *--help*_`
);
}
break;

case "nomegp":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
await carol.groupUpdateSubject(from, `${body.slice(9)}`);
await carol.sendMessage(
from,
{ text: "Sucesso, alterou o nome do grupo." },
{ quoted: selo }
);
break;

case "envmsg":
if (!SoDono && !isnit) return reply(mess.onlyOwner());
var [tx1, tx2] = q.split("/");
await carol.sendMessage(tx1, { text: tx2 });
break;

case "getquoted":
reply(
JSON.stringify(
info.message.extendedTextMessage.contextInfo,
null,
3
)
);
break;

case "myid":
case "meuid":
reply(`${JSON.stringify(info.key, null, 2)}\n`);
break;

case "admins":
case "listadmins":
case "listaadmins":
if (!isGroup) return reply(mess.onlyGroup());
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`;
no = 0;
for (let admon of groupAdmins) {
no += 1;
ytb += `( ${no.toString()} ) - @${admon.split("@")[0]}\n`;
}
await mentions(ytb, groupAdmins, true);
break;

case "ativo":
case "on":
case "voltei":
if (!isGroupAdmins && !SoDono)
return reply("Só adm ou dono pode utilizar este comando.");
if (SoDono) {
if (
fs.existsSync(
"./bunker/database/func/afk/afk-@" + SoDono + ".json"
)
) {
DLT_FL(
"./bunker/database/func/afk/afk-@" + SoDono + ".json"
);
reply("Bem vindo de volta, agora você está online 🙂");
} else {
reply("Você não registrou nenhuma mensagem de ausência...");
}
} else if (isGroupAdmins) {
if (!JSON.stringify(dataGp[0].ausentes).includes(sender))
return reply("Não há nenhum registro de ausência sua..");
dataGp[0].ausentes.splice(
dataGp[0].ausentes.map((x) => x.id).indexOf(sender),
1
);
setGp(dataGp);
reply("Registro de ausência tirada com sucesso...");
}
break;

case "ausente":
case "off":
case "afk":
if (!isGroupAdmins && !SoDono)
return reply("Só adm ou dono pode utilizar este comando.");
if (SoDono) {
msgtmp = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
fs.writeFileSync(
`./bunker/database/func/afk/afk-@${clear_dono_ofc.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`,
JSON.stringify(
{ Ausente_Desde: msgtmp, Motivo_Da_Ausência: q },
null,
2
)
);
reply(`Mensagem de ausência criada com sucesso...`);
} else if (isGroupAdmins) {
if (!q.trim())
return reply(
`Digite a mensagem de ausência, Exemplo: ${prefix + command} Estou tomando banho`
);
if (!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
dataGp[0].ausentes.push({ id: sender, msg: q.trim() });
setGp(dataGp);
reply(
"Mensagem de ausência criada com sucesso..\nSe deseja desativar a mensagem de ausência use o comando ativo"
);
} else {
dataGp[0].ausentes[
dataGp[0].ausentes.map((i) => i.id).indexOf(sender)
].msg = q.trim();
setGp(dataGp);
reply(
"Mensagem de ausência alterada com sucesso..\nSe deseja desativar a mensagem de ausência use o comando ativo"
);
}
} else {
return reply(
"Comando apenas para administradores e dono do bot.."
);
}
break;

case "limpar":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`;
await carol.sendMessage(
from,
{ text: clear },
{
quoted: selo,
contextInfo: { forwardingScore: 500, isForwarded: false },
}
);
break;

case "doc":
case "docfake":
try {
sprd = "|";
if (!q)
return reply(
`${prefix + command} exemplo${sprd}500${sprd}apk\n-\nOs tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png`
);
kls = args.join(" ");
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`;
let peso = kls.split(sprd)[1] * 1000000 || "1000000";
let mimetyp = kls.split(sprd)[2].replace(" ", "") || "gif";
let thumbc = kls.split(sprd)[3] || "https://google.com/";
if (mimetyp.toLowerCase() == "pdf") mimetyp = "application/pdf";
if (mimetyp.toLowerCase() == "apk")
mimetyp = "application/vnd.android.package-archive";
if (mimetyp.toLowerCase() == "aac") mimetyp = "audio/aac";
if (mimetyp.toLowerCase() == "xml") mimetyp = "application/xml";
if (mimetyp.toLowerCase() == "zip") mimetyp = "application/zip";
if (mimetyp.toLowerCase() == "jpg") mimetyp = "image/jpeg";
if (mimetyp.toLowerCase() == "ppt")
mimetyp = "application/vnd.ms-powerpoint";
if (mimetyp.toLowerCase() == "pptx")
mimetyp =
"application/vnd.openxmlformats-officedocument.presentationml.presentation";
if (mimetyp.toLowerCase() == "mp4") mimetyp = "video/mp4";
if (mimetyp.toLowerCase() == "m4a") mimetyp = "audio/mpeg";
if (mimetyp.toLowerCase() == "mp3") mimetyp = "audio/mpeg";
if (mimetyp.toLowerCase() == "gif") mimetyp = "image/gif";
if (mimetyp.toLowerCase() == "png") mimetyp = "image/png";
if (mimetyp.toLowerCase() == "svg") mimetyp = "image/svg+xml";
if (mimetyp.toLowerCase() == "txt") mimetyp = "text/plain";
let Messagemdoc = {
document: fs.readFileSync("./bunker/database/data/docf.txt"),
mimetype: mimetyp,
jpegThumbnail: await getBuffer(thumbc),
fileName: nomedoc,
fileLength: peso,
headerType: 4,
contextInfo: { forwardingScore: 999, isForwarded: false },
};
await carol.sendMessage(from, Messagemdoc, { quoted: selo });
} catch (err) {
console.log(err);
reply(mess.error());
}
break;

case "deletar":
case "delete":
case "del":
case "d":
if (!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém.");
await carol.sendMessage(from, {delete: {remoteJid: from, fromMe: false,
id: info.message.extendedTextMessage.contextInfo.stanzaId,
participant: menc_prt}});
break;

case "antiligar":
case "antiligacao":
case "antiligação":
if (!SoDono) return reply(mess.onlyOwner());
if (!isAnticall) {
nescessario.anticall = true;
setNes(nescessario);
reply(
`O anti ligação foi ativado com sucesso. Caso alguém efetue uma ligação para o bot será bloqueado.`
);
} else if (isAnticall) {
nescessario.anticall = false;
setNes(nescessario);
reply("O anti ligação foi desativado com sucesso.");
}
break;

case "antipv":
if (!SoDono) return reply(mess.onlyOwner());
if (!isAntiPv) {
nescessario.antipv = true;
setNes(nescessario);
reply(
`Antipv ativado com sucesso, caso alguém enviar mensagem para mim, irei bloquear!`
);
} else if (isAntiPv) {
nescessario.antipv = false;
setNes(nescessario);
reply(
"A função antipv foi desabilitada com sucesso, agora todos podem me usar no pv."
);
}
break;

case "antipv2":
if (!SoDono) return reply(mess.onlyOwner());
if (!isAntiPv2) {
nescessario.antipv2 = true;
setNes(nescessario);
reply(
"Antipv2 ativado com sucesso, o pv pode ser usado, mas não bloquearei, só irei flodar a cada mensagem que ele enviar avisando.."
);
} else if (isAntiPv2) {
nescessario.antipv2 = false;
setNes(nescessario);
reply(
"Antipv2 desativado com sucesso, agora o meu pv está totalmente liberado."
);
}
break;

case "antipv3":
if (!SoDono) return reply(mess.onlyOwner());
if (!isAntiPv3) {
nescessario.antipv3 = true;
setNes(nescessario);
reply(
"Antipv3 ativado com sucesso, irei ignorar todas as mensagens recebidas no pv, exceto: donos e usuários vip.."
);
} else if (isAntiPv3) {
nescessario.antipv3 = false;
setNes(nescessario);
reply(
"Antipv3 desativado com sucesso, agora responderei todos sem preferência!"
);
}
break;

case "limitarcmd":
case "limitarcomando":
case "limitecmd":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
dataGp[0].Limitar_CMD = !dataGp[0].Limitar_CMD;
setGp(dataGp);
reply(
dataGp[0]?.Limitar_CMD
? "Limitador de comandos ativado com sucesso no grupo: " +
groupName
: "Limitador de comandos desativado no grupo: " + groupName
);
break;

case "tempocmd":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!q.trim())
return reply(
`Exemplo: ${prefix + command} 120\n60 = 1 minuto\nExemplo que coloquei, com o : ${prefix}limitarcmd ativo, só podera usar comandos a cada 2 minutos\nBoa sorte.`
);
dataGp[0].Limit_tempo = q.trim();
setGp(dataGp);
reply(
`Tempo limite definido para: ${TimeCount(q.trim())} a cada comando.`
);
break;

case "lyrics":
case "letramusica":
if (!q)
return reply(
`Você esqueceu de colocar após o comando o nome da música...`
);
try {
data = await fetchJson(
API_URL +
`/api/pesquisa/letramusic?query=${q}&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
text: mess.lyrics(data, II),
contextInfo: {
externalAdReply: {
title: data.resultado.name,
body: data.resultado.description,
thumbnail: await getBuffer(data.resultado.image),
mediaType: 2,
sourceUrl: data.resultado.url,
},
},
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
console.log(error);
}
break;

case "blockuser":
if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe)
return reply(mess.onlyOwner());
if (!q.length > 6)
return reply(
"Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar..."
);
var blcp =
q.replace(new RegExp("[()+-/ @+/]", "gi"), "") +
"@s.whatsapp.net";
var numblc = ban.indexOf(blcp);
if (numblc >= 0)
return reply(
"*Esse número já esta incluso na lista de bloqueio.*"
);
ban.push(blcp);
fs.writeFileSync(
"./bunker/database/usuarios/banned.json",
JSON.stringify(ban)
);
await carol.sendMessage(from, {
text: mess.bannedMessage(blcp),
mentions: [blcp],
});
break;

case "unblockuser":
if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe)
return reply(mess.onlyOwner());
if (!q.length > 6)
return reply(
"Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar..."
);
var blcp =
q.replace(new RegExp("[()+-/ @+/]", "gi"), "") +
"@s.whatsapp.net";
var numbl = ban.indexOf(blcp);
if (numbl < 0)
return reply(
"*Esse número não está incluso na lista de bloqueados.*"
);
pesquisar = blcp;
processo = ban.indexOf(pesquisar);
while (processo >= 0) {
ban.splice(processo, 1);
processo = ban.indexOf(pesquisar);
}
fs.writeFileSync(
"./bunker/database/usuarios/banned.json",
JSON.stringify(ban)
);
await carol.sendMessage(from, {
text: mess.unbannedMessage(blcp),
mentions: [blcp],
});
break;

case "acess":
if (!SoDono && !isnit && !issupre && !ischyt)
return reply(mess.onlyOwner());
teks = body.slice(7);
await exec(teks, async (err, stdout) => {
if (err)
return await carol.sendMessage(
from,
{ text: `root@AKAMOficial:~ ${err}` },
{ quoted: selo }
);
if (stdout) return await carol.sendMessage(from, { text: stdout });
});
break;

case "execut":
if (!SoDono && !isnit && !issupre && !ischyt)
return reply(mess.onlyOwner());
try {
return eval(`(async() => { ${args.join(" ")}})()`);
} catch (error) {
await carol.sendMessage(
from,
{ text: `${error}` },
{ quoted: selo }
);
}
break;

case "exec":
if (!SoDono && !isnit && !issupre && !ischyt) return;
try {
paramsQuoted =
info.message.extendedTextMessage.contextInfo.quotedMessage
.conversation ||
info.message.extendedTextMessage.contextInfo.quotedMessage
.extendedTextMessage.text;
return await eval(`${paramsQuoted}`);
console.log(`[EXEC]~> ${paramsQuoted}`);
} catch (e) {
reply(e);
}
break;

case "sender":
reply(sender.replace('@s.whatsapp.net', ''));
break;

case 'totalcmd':
case 'totalcomando':
reply(`*Olá ${pushname}*

EU CONTENHO: ${totalcmds} COMANDOS ♥️`);
break

case "ping":
reagir(from, `👾`);
const latency = Date.now() - (info.messageTimestamp * 1000);
const speed = Math.round(latency).toString().slice(0, 4);
const VerSion = os.release().replace('-android13', '');
ds = `❪🎡ꦿᰧ͢𝐒𝐏𝐄𝐄𝐃 ↯ 𝐁𝐎𝐓ེ≭•۟.❫\nꨄ︎ *Latência:* ${speed} milisegundos.\nꨄ︎ *Uptime:* ${TimeCount(process.uptime())}\n—\n⚙️ *Infos do Sistema:*\nꨄ︎ Sistema Operacional: *${os.type()}*\nꨄ︎ Versão: *${VerSion}*\nꨄ︎ Total de Comandos: *${totalcmds}*\nꨄ︎ Memória RAM Usada: *${(os.freemem() / Math.pow(1024, 3)).toFixed(2)} GB*\nꨄ︎ Memória RAM Livre: *${(os.totalmem() / Math.pow(1024, 3)).toFixed(2)} GB*\nꨄ︎ Uso da CPU: *${os.loadavg()[0].toFixed(2)}%*\nꨄ︎ Uso da Memória RAM: *${(((os.totalmem() - os.freemem()) / os.totalmem()) * 100).toFixed(2)}%*\nꨄ︎ Versão do NodeJS: *${process.version}*\nꨄ︎ Versão da Baileys: *${baileysVersion}*\n—`;
await carol.sendMessage(from, {text: ds}, {quoted: selo});
break;

case "gtts":
try {
if (args.length < 1)
return await carol.sendMessage(
from,
{
text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`,
},
{ quoted: selo }
);
const gtts = require("./bunker//funcoes/gtts.js")(args[0]);
if (args.length < 2)
return await carol.sendMessage(
from,
{ text: "Falta colocar o código do idioma!" },
{ quoted: selo }
);
dtt = body.slice(8);
ranm = getRandom(".mp3");
rano = getRandom(".ogg");
if (dtt.length > 200)
return reply(
"Para reduzir spam o máximo de letras permitidas são 200!"
);
gtts.save(ranm, dtt, async function () {
await exec(
`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`,
async (err) => {
await carol
.sendMessage(
from,
{
audio: fs.readFileSync(ranm),
ptt: false,
mimetype: "audio/mpeg",
},
{ quoted: selo }
)
.catch(async (error) => {
return reply(mess.error());
});
DLT_FL(ranm);
DLT_FL(rano);
}
);
});
} catch (error) {
return reply(mess.error());
}
break;

case "tagme":
const tagme = `@${sender.split("@")[0]} ✔️`;
await mentions(tagme, [sender], true);
break;

case "modoaluguel":
case "aluguel":
case "modorent":
if (!isGroup) return reply(mess.onlyGroup());
if (!SoDono) return reply(mess.onlyOwner());
if (args.length < 1)
return reply(
"Aviso: 1 para ativar, 0 para desativar este recurso de forma global."
);
if (Number(args[0]) === 1) {
if (isModoAluguel)
return reply(
"Atualmente este modo já está ativado de forma global..."
);
nescessario.modo_aluguel = true;
setNes(nescessario);
reply(
"Ativou com sucesso o modo aluguel global, agora todos os grupos que o bot está devem ser registrados para o bot funcionar perfeitamente para todos os participantes/adms do grupo, com meus proprietários não haverá nenhuma restrição de uso."
);
} else if (Number(args[0]) === 0) {
if (!isModoAluguel)
return reply(
"O modo aluguel global não está ativo na configuração."
);
nescessario.modo_aluguel = false;
setNes(nescessario);
reply(
"O modo aluguel foi desativado com sucesso, agora todos os comandos estarão funcionando para todos os participantes e adminstradores do grupo, sem a precisão de registrar o grupo no aluguel."
);
} else {
reply(
"Aviso: 1 para ativar, 0 para desativar este recurso de forma global."
);
}
break;

case "addcmdvip":
if (!SoDono) return reply(mess.onlyOwner());
tp = args.join(" ");
if (
tp.includes("addcmdvip addcmdvip") ||
tp.includes("addcmdvipaddcmdvip")
)
return reply(
`Tá louco maluco? Não tem como adicionar o mesmo comando.`
);
if (isCmdVip.includes(args[0]))
return reply(
"Este comando já está incluso na lista de comandos vip, verifique."
);
isCmdVip.push(args[0]);
fs.writeFileSync(
"./configs/nescessario.json",
JSON.stringify(nescessario, null, 2)
);
reply(
`O comando *${args[0]}* foi adicionado na lista de comandos vip.`
);
break;

case "delcmdvip":
if (!SoDono) return reply(mess.onlyOwner());
tp = args.join(" ");
if (
tp.includes("delcmdvip delcmdvip") ||
tp.includes("delcmdvipdelcmdvip")
)
return reply(
`Tá louco maluco? Não tem como deletar o mesmo comando.`
);
if (!isCmdVip.includes(args[0]))
return reply(
"Este comando já está excluído da lista de comandos vip."
);
var i = isCmdVip.indexOf(args[0]);
isCmdVip.splice(i, 1);
fs.writeFileSync(
"./configs/nescessario.json",
JSON.stringify(nescessario, null, 2)
);
reply(
`O comando *${args[0]}* foi tirado da lista de comandos vip.`
);
break;

case "listacmdvip":
case "cmdviplist":
tkks = `[Total: *${isCmdVip.length}*] - Comandos que foram adicionados para uso Vip:\n–\n`;
tkks += isCmdVip
.map(
(v, index) =>
`\t• [ *N° ${index + 1}* ] - Comando: ${prefix + v}`
)
.join("\n–\n");
await carol.sendMessage(
from,
{ text: tkks.trim() },
{ quoted: selo }
);
break;

case "blocklist":
if (ban.length == 0)
return reply(
`Existe *0* user(s) bloqueado(s), ou seja, não existe ninguém.`
);
tkks = `[Total: *${ban.length}*] - Lista de Usuários bloqueados pelo julgamento do(s) donos(as):\n–\n`;
tkks += ban
.map(
(v, index) =>
`\t• [ *N° ${index + 1}* ] - Usuário: @${v.split("@")[0]}`
)
.join("\n–\n");
await carol.sendMessage(
from,
{ text: tkks.trim(), mentions: ban },
{ quoted: selo }
);
break;

case "blockcmdgp":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
tp = args.join(" ");
if (
tp.includes("blockcmd blockcmd") ||
tp.includes("blockcmdblockcmd")
)
return reply(
`Tá louco maluco?, Quer banir o comando de bloquear comando?`
);
if (getComandoBlock(from).includes(args[0]))
return reply("Este comando já está bloqueado.");
await addComandos(from, args[0]);
reply(`O comando *${args[0]}* foi bloqueado no grupo com sucesso.`);
break;

case "unblockcmdgp":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
tp = args.join(" ");
if (
tp.includes("blockcmd unblockcmd") ||
tp.includes("blockcmdunblockcmd")
)
return reply(
`Tá louco maluco?, Quer banir o comando de desbloquear comando?`
);
if (!getComandoBlock(from).includes(args[0]))
return reply("Este comando já está desbloqueado.");
await deleteComandos(from, args[0]);
reply(
`O comando *${args[0]}* foi desbloqueado com sucesso no grupo.`
);
break;

case "listblockcmdgp":
case "listbcmdgp":
if (!isGroup) return reply(mess.onlyGroup());
if (getComandoBlock(from).length == 0)
return reply(
"Não existe ainda nenhum *comando bloqueado* neste grupo."
);
tkks = `[Total: *${getComandoBlock(from).length}*] - Comandos bloqueados pelo adminstrador(s) do grupo:\n–\n`;
tkks += getComandoBlock(from)
.map(
(v, index) =>
`\t• [ *N° ${index + 1}* ] - Comando: ${prefix + getComandoBlock(from)[v]}`
)
.join("\n–\n");
await carol.sendMessage(
from,
{ text: tkks.trim() },
{ quoted: selo }
);
break;

case "blockcmdg":
if (!SoDono) return reply(mess.onlyOwner());
tp = args.join(" ");
if (
tp.includes("blockcmdg blockcmdg") ||
tp.includes("blockcmdgblockcmdg")
)
return reply(
`Tá louco maluco? Não tem como adicionar o mesmo comando.`
);
if (isBlockCmdG.includes(args[0]))
return reply(
"Este comando já está incluso na lista de *comandos bloqueados global*."
);
isBlockCmdG.push(args[0]);
fs.writeFileSync(
"./configs/nescessario.json",
JSON.stringify(nescessario, null, 2)
);
reply(
`O comando *${args[0]}* foi adicionado na lista de comandos bloqueados global.`
);
break;

case "unblockcmdg":
if (!SoDono) return reply(mess.onlyOwner());
tp = args.join(" ");
if (
tp.includes("unblockcmdg unblockcmdg") ||
tp.includes("unblockcmdgunblockcmdg")
)
return reply(
`Tá louco maluco? Não tem como desbloquear o mesmo comando.`
);
if (!isBlockCmdG.includes(args[0]))
return reply(
"Este comando não está incluso na lista de *cmds bloqueados global*."
);
var ab = isBlockCmdG.indexOf(args[0]);
isBlockCmdG.splice(ab, 1);
fs.writeFileSync(
"./configs/nescessario.json",
JSON.stringify(nescessario, null, 2)
);
reply(
`O comando *${args[0]}* foi tirado da lista de cmds bloqueados global.`
);
break;

case "listbcmdglobal":
if (isBlockCmdG.length == 0)
return reply("Não existe nenhum *comando bloqueado* na lista.");
tkks = `[Total: *${isBlockCmdG.length}*] - Lista de comandos bloqueados pelo(s) meus proprietários:\n–\n`;
tkks += isBlockCmdG
.map(
(v, index) =>
`\t• [ *N° ${index + 1}* ] - Comando: ${prefix + v}`
)
.join("\n–\n");
await carol.sendMessage(
from,
{ text: tkks.trim() },
{ quoted: selo }
);
break;

case "gimage":
if (!q)
return reply(
`Coloque o que deseja após o comando... Por exemplo: *${prefix + command} Fogo*`
);
try {
await reagir(from, '✅');
data = await fetchJson(
API_URL +
`/api/pesquisa/googleimage?query=${q}&apikey=` +
API_KEY_CAROL
);
returnData = pickRandom(
data.resultado
); /* Cria um random no resultado, retornando só 1. */
await carol.sendMessage(
from,
{
image: { url: returnData.url },
caption: mess.googleImage(returnData),
},
{ quoted: selo }
);
} catch (error) {
reply(mess.error());
}
break;

case "google":
case "googlesrc":
if (!q)
return reply(
`Você esqueceu de colocar o que você deseja pesquisar após o comando.`
);
try {
await reagir(from, '✅');
data = await fetchJson(
API_URL +
`/api/pesquisa/google?query=${q}&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
text: data.resultado
.map(
(v) =>
`• Título: *${v.title}*\n• Descrição: *${v.snippet}*\n• Link: *${v.link}*`
)
.join("\n–\n"),
contextInfo: {
externalAdReply: {
title: data.resultado[0].title,
body: data.resultado[0].snippet,
mediaType: 2,
sourceUrl: data.resultado[0].link,
},
},
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
break;

case "screenshotweb":
case "printsite":
case "ssweb":
if (!q)
return reply(
`Cadê o link do site o qual você deseja visualizar?`
);
reply("Aguarde um pouco, entrando no site solicitado...");
try {
await carol.sendMessage(
from,
{
image: {
url:
API_URL +
`/api/outros/ssweb?link=${q}&apikey=` +
API_KEY_CAROL,
},
caption: `• *Site:* ${q}`,
},
{ quoted: selo }
);
} catch (error) {
reply(
"• Erro ao entrar no site desejado. Tente novamente mais tarde!"
);
}
break;

case "cpf":
if(!q) return reply("Está faltando o parâmetro..");
reagir(from, "✅");
try {
var consu = fetchJson(`https://api.nexfuture.com.br/api/consulta/cpf/consulta-cpf-1?apikey=72f831b2-f25f-4f64-b9b7-d4063eaf4deb&query=${q}`);
await carol.sendMessage(from, {text: consu.resultado}, {quoted: selo});
} catch (e) {
reagir(from, "❌");
await reply("Não encontei resultados");
}
break

case "memes":
case "memedroid":
try {
await reagir(from, '✅');
res = await axios.get(
API_URL + `/api/memes?apikey=` + API_KEY_CAROL
);
teks = pickRandom(res.data.pesquisa.resultado);
await carol
.sendMessage(
from,
{
image: await getBuffer(teks.imagem),
caption: mess.memesImages(teks),
},
{ quoted: selo }
)
.catch(async (error) => {
return reply(mess.error());
});
} catch (error) {
return reply(mess.error());
}
break;

case "memesvid":
case "ifunnyvideo":
try {
await reagir(from, '✅');
res = await axios.get(
API_URL + `/api/memesvid?apikey=` + API_KEY_CAROL
);
teks = pickRandom(res.data.videos);
await carol
.sendMessage(
from,
{
video: await getBuffer(teks.video),
caption: mess.iFunnyVideo(teks),
},
{ quoted: selo }
)
.catch(async (error) => {
return reply(mess.error());
});
} catch (error) {
return reply(mess.error());
}
break;

case "noticias":
case "getnoticias":
try {
if (!q)
return reply(
`Informe um tema para realizar a pesquisa de suas notícias!`
);
theNews = await axios.get(
`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=9dc1dde158804756ae9b33dd8d71f7a1`
);
d = await pickRandom(theNews.data.articles);

reply(
`> *${d.title}* - ${d.author} [${d.source.name}]\n–\n• Descrição: *${d.description}*\n• Postagem: *${d.publishedAt.split("T").join(" - ").split("Z")[0]}*\n• URL: *${d.url}*`
);
} catch (error) {
return reply(mess.error());
}
break;

case "googlenews":
case "gnews":
try {
idioma = "pt-br"; // Idioma: Português do Brasil
country = "BR"; // Mude a sigla para qual você quiser puxar as notícias.
dataNews = await fetchJson(
`https://delirius-api-oficial.vercel.app/api/noticias?language=${idioma}&country=${country}`
);
NTD = pickRandom(dataNews.headline_stories);
await reply(
`> Google Notícias - Brasil:\n–\n• Título: *${NTD.title}*\n• Postagem por: *${NTD.by}* | ${NTD.published}\n–\n• URL: *${NTD.url}*`
);
} catch (e) {
return await reply(mess.error());
}
break;

case "cases":
if (!SoDono) return reply(mess.onlyOwner());
try {
const listCases = () => {
const fileContent = fs.readFileSync("carol.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames
.map(
(caseName, index) =>
`${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`
)
.join("\n");
} else {
reply("Nenhuma case encontrada.");
}
};
carol.sendMessage(from, { text: listCases() }, { quoted: selo });
} catch (e) {
reply("Ocorreu um erro ao obter as cases.");
}
break;

case "pinterest":
case "pin":
try {
if (!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} cat`);
await reagir(from, '✅');
async function Pinas(q, randons) {
await carol.sendMessage(from, {image: {url: `https://neon-apis.online/api/pinterest?q=${q}`}}, {quoted: selo});
}
for (let i = 0; i < 5; i++) {
const randons = Date.now() + Math.random();
await Pinas(q, randons);
await sleep(200); 
}
} catch (error) {
reply(mess.error());
}
break;

case "pinterestmp4":
try {
if (!q)
return reply(
`Insira o link de algum vídeo do Pinterest\nExemplo: ${prefix + command} https://pin.it/2rjIHJxKm`
);
await reagir(from, '✅');
data = await fetchJson(
API_URL + `/api/pinterest_mp4?url=${q}&apikey=` + API_KEY_CAROL
);
await carol
.sendMessage(
from,
{ video: { url: data.video }, mimetype: "video/mp4" },
{ quoted: selo }
)
.catch(async (error) => {
return reply(mess.error());
});
} catch (e) {
reply(mess.error());
}
break;

case 'take':
case 'roubar':
case 'rename': {
if (!isQuotedSticker) return reply('🧩 Marque uma figurinha.');
await reagir(from, '⏳');
try {
let pack, author;
if (command === 'take' || command === 'roubar') {
const i8 = rgtake.map(i => i.usuario).indexOf(sender);
if (i8 < 0)
return reply(`Você ainda não registrou sua marca d’água com *${prefix}rgtake carol|bot*`);
pack = rgtake[i8].mcdagua1;
author = rgtake[i8].mcdagua2;
} else {
if (!q.includes("|")) return reply(`Uso correto: ${prefix}rename nome|autor`);
[pack, author] = q.split("|");
}
await renameContextSticker(pack, author, info, carol, from, selo);
await reagir(from, '✅');
} catch (err) {
console.error("Erro no take/rename:", err);
await reagir(from, '❌');
reply('❌ Erro ao processar a figurinha.');
}
}
break;

case "rgtake":
var [TP, TP2] = q.split("|");
rgtakergtake = [];
for (i of rgtake) {
rgtakergtake.push(i.usuario);
}
if (rgtakergtake.indexOf(sender) >= 0)
return reply("Você já registrou sua marca ďagua, não é possível usar esse comando novamente.");
if (!q.includes("|"))
return reply(
`Você usou de forma errada, siga o exemplo: *${prefix + command} sb|bot*`
);
if (!TP)
return reply(`Você esqueceu de preencher o primeiro campo... Ex: *${prefix + command} sb|bot*`);
if (!TP2)
return reply(`Você esqueceu de preencher o segundo campo... Ex: *${prefix + command} sb|bot*`);
rgtake.push({ usuario: sender, mcdagua1: TP, mcdagua2: TP2 });
fs.writeFileSync(
"./bunker/database/usuarios/take.json",
JSON.stringify(rgtake, null, 2)
);
reply(
`Sucesso ao concluir o registro... Agora você pode usar o comando: *${prefix}take*`
);
break;

case "rntake":
i8 = rgtake.map((i) => i.usuario).indexOf(sender);
if (i8 < 0)
return reply(
`Como você quer renomear algo que você não tem registro?`
);
if (!q.includes("|"))
return reply(
`Você usou de forma errada, siga o exemplo: *${prefix + command} sb|bot*`
);
var [MARCAD1, MARCAD2] = q.split("|");
if (!MARCAD1)
return reply(
`Você esqueceu de preencher o primeiro campo... Ex: *${prefix + command} sb|bot*`
);
if (!MARCAD2)
return reply(
`Você esqueceu de preencher o segundo campo... Ex: *${prefix + command} sb|bot*`
);
rgtake[i8].mcdagua1 = MARCAD1;
rgtake[i8].mcdagua2 = MARCAD2;
fs.writeFileSync(
"./bunker/database/usuarios/take.json",
JSON.stringify(rgtake, null, 2) + "\n"
);
reply(
`Sua marca ďágua foi alterada para *"${MARCAD1}|${MARCAD2}"* com sucesso.`
);
break;

case "gerarlink":
case "imgpralink":
case "upload": {
try {
await reagir(from, "✅️");
const quotedData = JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message?.extendedTextMessage?.contextInfo?.message;
let midiaObj = quotedData?.imageMessage || quotedData?.videoMessage || quotedData?.audioMessage || quotedData?.documentMessage || quotedData?.stickerMessage;
if (!midiaObj)
return reply("Não consegui identificar a mídia.");
const buffer = await downloadMediaMessage({message: { [Object.keys(quotedData)[0]]: midiaObj }},"buffer");
const url = await upload(buffer);
reply(url);
} catch (e) {
console.log(e);
await reagir(from, '❌');
reply("Erro ao tentar converter a mídia para link.");
}
}
break;

case "gerarlink2":
case "imgpralink2":
case "upload2":
try {
if (isQuotedImage || isQuotedVideo || isQuotedSticker) {
const gerarlinkBoij = isQuotedImage
? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
.message.extendedTextMessage.contextInfo.message
.imageMessage
: info.message.imageMessage;
const fetch = require("node-fetch");
const FormData = require("form-data");
async function gerarlinkUploadMedia(mediaBuffer) {
const gerarlinkForm = new FormData();
gerarlinkForm.append("image", mediaBuffer, {
filename: "media",
});
const gerarlinkResponse = await fetch(
"https://api.imgur.com/3/image",
{
method: "POST",
body: gerarlinkForm,
headers: {
Authorization: "Client-ID 400116076ba4b73",
},
}
);
const gerarlinkData = await gerarlinkResponse.json();
if (
gerarlinkResponse.ok &&
gerarlinkData.data &&
gerarlinkData.data.link
) {
return gerarlinkData.data.link;
} else {
throw new Error("Falha ao recuperar o URL do Imgur.");
}
}
const gerarlinkMediaBuffer = await getFileBuffer(
gerarlinkBoij,
isQuotedImage ? "image" : "video");
const gerarlinkMediaUrl =
await gerarlinkUploadMedia(gerarlinkMediaBuffer);
reply(gerarlinkMediaUrl);
} else {
reply("Marque uma imagem, vídeo ou sticker.");
}
} catch (e) {
console.log(e);
reply("Erro ao tentar converter a mídia para link.");
}
break;

// LOGOS

case "cria":
if (args.length < 1) return reply("Cade o texto ?");
teks = q;
if (teks.length > 15)
return reply("O texto é longo, até 15 caracteres");
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`);
yurimodz = await getBuffer(
`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${teks}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`
);
carol.sendMessage(from, { image: yurimodz }, { quoted: selo });
break;

case "anime1":
if (args.length < 1) return reply("Cade o texto ?");
teks = q;
if (teks.length > 15)
return reply("O texto é longo, até 15 caracteres");
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`);
yurimodz = await getBuffer(
`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`
);
carol.sendMessage(from, { image: yurimodz }, { quoted: selo });
break;

case "ff1":
if (args.length < 1) return reply("Cade o texto ?");
teks = q;
if (teks.length > 15)
return reply("O texto é longo, até 15 caracteres");
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`);
yurimodz = await getBuffer(
`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`
);
carol.sendMessage(from, { image: yurimodz }, { quoted: selo });
break;

case "game":
if (args.length < 1) return reply("Cade o texto ?");
teks = q;
if (teks.length > 15)
return reply("O texto é longo, até 15 caracteres");
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`);
yurimodz = await getBuffer(
`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`
);
carol.sendMessage(from, { image: yurimodz }, { quoted: selo });
break;

case "ff2":
if (args.length < 1) return reply("Cade o texto ?");
teks = q;
if (teks.length > 15)
return reply("O texto é longo, até 15 caracteres");
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`);
yurimodz = await getBuffer(
`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`
);
carol.sendMessage(from, { image: yurimodz }, { quoted: selo });
break;

case "anime2":
if (args.length < 1) return reply("Cade o texto ?");
teks = q;
if (teks.length > 15)
return reply("O texto é longo, até 15 caracteres");
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`);
yurimodz = await getBuffer(
`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`
);
carol.sendMessage(from, { image: yurimodz }, { quoted: selo });
break;

case "entardecer":
if (args.length < 1) return reply("Cade o texto ?");
teks = q;
if (teks.length > 15)
return reply("O texto é longo, até 15 caracteres");
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`);
yurimodz = await getBuffer(
`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`
);
carol.sendMessage(from, { image: yurimodz }, { quoted: selo });
break;

case "indian":
if (args.length < 1) return reply("Cade o texto ?");
teks = q;
if (teks.length > 15)
return reply("O texto é longo, até 15 caracteres");
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`);
yurimodz = await getBuffer(
`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`
);
carol.sendMessage(from, { image: yurimodz }, { quoted: selo });
break;

case "ffrose":
if (args.length < 1) return reply("Cade o texto ?");
teks = q;
if (teks.length > 15)
return reply("O texto é longo, até 15 caracteres");
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`);
yurimodz = await getBuffer(
`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`
);
carol.sendMessage(from, { image: yurimodz }, { quoted: selo });
break;

case "ffgren":
if (args.length < 1) return reply("Cade o texto ?");
teks = q;
if (teks.length > 15)
return reply("O texto é longo, até 15 caracteres");
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`);
yurimodz = await getBuffer(
`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`
);
carol.sendMessage(from, { image: yurimodz }, { quoted: selo });
break;

case "chufuyu":
if (args.length < 1) return reply("Cade o texto ?");
teks = q;
if (teks.length > 15)
return reply("O texto é longo, até 15 caracteres");
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`);
yurimodz = await getBuffer(
`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`
);
carol.sendMessage(from, { image: yurimodz }, { quoted: selo });
break;

case "wolf":
if (args.length < 1) return reply("cade o texto ?");
teks = q;
if (teks.length > 15)
return reply("O texto é longo, até 15 caracteres");
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`);
yurimodz = await getBuffer(
`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`
);
carol.sendMessage(from, { image: yurimodz }, { quoted: selo });
break;

case "dragonred":
if (args.length < 1) return reply("Cade o texto ?");
teks = q;
if (teks.length > 15)
return reply("O texto é longo, até 15 caracteres");
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`);
yurimodz = await getBuffer(
`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`
);
carol.sendMessage(from, { image: yurimodz }, { quoted: selo });
break;

case "qc":
if (!q)
return reply(
`Para usar este comando é nescessário adicionar algo após o comando.`
);
await reagir(from, '✅');
try {
ppimg = await carol.profilePictureUrl(sender, "image");
} catch {
ppimg = "https://telegra.ph/file/24fa902ead26340f3df2c.png";
}
await axios
.post(
"https://quote.btch.bz/generate",
{
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: { id: 1, name: pushname, photo: { url: ppimg } },
text: q,
replyMessage: {},
},
],
},
{ headers: { "Content-Type": "application/json" } }
)
.then(async (res) => {
const buffer = new Buffer.from(res.data.result.image, "base64");
await carol.sendImageAsSticker(from, buffer, {
author: `📌 Criado(a) por: ${NomeDoBot}`,
});
})
.catch(async (error) => {
console.log(error);
return reply(mess.error());
});
break;

case "figuweb":
verifText = args.join(" ");
if (!verifText) return reply(mess.syntaxWebSticker(prefix));
let text, colorNumber;
if (q.includes("/")) {
[text, colorNumber] = q.split("/");
} else {
text = q;
colorNumber = "1";
}
await reagir(from, "💬");
reply(
"• Aguarde, estou gerando a figurinha de acordo o que você solicitou!"
);
const colorC = {
1: "#000000",
2: "#FFFFFF",
3: "#FF0000",
4: "#0000FF",
};
const backgroundColor = colorC[colorNumber] || "#000000";
try {
ppimg = await carol.profilePictureUrl(sender, "image");
} catch {
ppimg = "https://telegra.ph/file/b5427ea4b8701bc47e751.jpg";
}
axios
.post(
"https://quote.btch.bz/generate",
{
type: "quote",
format: "png",
backgroundColor: backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: { id: 1, name: pushname, photo: { url: ppimg } },
text: text,
replyMessage: {},
},
],
},
{ headers: { "Content-Type": "application/json" } }
)
.then(async (resultar) => {
const bufferE = new Buffer.from(
resultar.data.result.image,
"base64"
);
await carol.sendImageAsSticker(from, bufferE, {
author: `📌 Criado(a) por: ${NomeDoBot}`,
});
})
.catch(async (error) => {
return reply(mess.error());
});
break;

case "amazon":
case "amazonsearch":
if (q.trim().length < 4)
return reply(
`NaN, você esqueceu de colocar o nome do produto após o comando.`
);
await reagir(from, '✅');
try {
ABC = await fetchJson(
API_URL +
`/api/pesquisa/amazon?nome=${q}&apikey=` +
API_KEY_CAROL
);
MAP_MAP_RESULT = ABC.resultado
.map(
(v, index) =>
`*${index + 1}.* Produto: *${v.titulo}*\n• Valor do Produto: *${v.valor}*\n• Link: *${v.link}*`
)
.join("\n–\n");
await carol.sendMessage(
from,
{
text: `> 𝐀𝐦𝐚𝐳𝐨𝐧 - 𝐒𝐭𝐨𝐫𝐞\n–\n${MAP_MAP_RESULT}`,
contextInfo: {
externalAdReply: {
title: ABC.resultado[0].titulo,
thumbnail: await getBuffer(ABC.resultado[0].imagem),
mediaType: 2,
sourceUrl: ABC.resultado[0].link,
},
},
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
break;

case "brasileirao":
try {
ABC = await fetchJson(
API_URL + `/api/noticias/brasileirao?apikey=` + API_KEY_CAROL
);
reply(
`⚽️📊 *Tabela Brasileirão:*\n–\n${ABC.resultado.map((v, index) => `${index + 1}°) Time: *${v.equipe}*\n• Pontos alcançados pelo time: *${v.pontos}*\n• Jogos jogados pelo time: *${v.jogosJogados}*`).join("\n–\n")}`
);
} catch (error) {
return reply(mess.error());
}
break;

case "receita":
case "revenue":
if (!q)
return reply(`NaN, você esqueceu de digitar após o comando.`);
try {
data = await fetchJson(
API_URL +
`/api/pesquisa/pesquisar-receitas?query=${q}&apikey=` +
API_KEY_CAROL
);
if (data.resultado.length == 0) return reply(mess.noresult());
RST = "> 𝐂𝐲𝐛𝐞𝐫𝐂𝐨𝐨𝐤 - 𝐑𝐞𝐜𝐞𝐢𝐭𝐚𝐬\n—\n";
RST += data.resultado
.map(
(v, index) =>
`*${index + 1}.* Título: *Receita de ${v.title}*\n• Avaliação: *${v.assessment.starEmoji} (${v.assessment.star})*\n• Enviado(a) por: *${v.by}*\n• URL: *${v.url}*`
)
.join("\n—\n");
await carol.sendMessage(
from,
{
text: RST,
contextInfo: {
externalAdReply: {
title: `Receita de ${data.resultado[0].title} - Enviada por: '${data.resultado[0].by}'`,
body: `Encontre as melhores receitas culinárias no CyberCook, clique aqui!`,
thumbnail: await getBuffer(data.resultado[0].image),
mediaType: 2,
sourceUrl: data.resultado[0].url,
},
},
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
break;

case "playstore":
if (!q) return reply("Cade o título do apk que deseja pesquisar?");
await reagir(from, "✅️")
data = await fetchJson(`https://neon-apis.online/api/playstore?query=${q}`);
let a = data.resultado[0];
ABC = `\n📬 Nome: ${a.nome}\n----------------------------------------------
👨🏻‍💻 Desenvolvedor: ${a.desenvolvedor}\n----------------------------------------------
⭐️ Estrelas: ${a.estrelas}\n----------------------------------------------
📥 URL: ${a.link}\n`;
await carol.sendMessage(from, {image: {url: a.imagem}, caption: ABC}, {quoted: selo});
break;

case "happymod":
if (!q)
return reply(`NaN, você esqueceu de digitar após o comando.`);
try {
AB = await fetchJson(
API_URL +
`/api/pesquisa/happymod?nome=${q}&apikey=` +
API_KEY_CAROL
);
if (AB.resultado.length == 0) return reply(mess.noresult());
ABC = `> 𝐇𝐚𝐩𝐩𝐲𝐦𝐨𝐝 - 𝐒𝐞𝐚𝐫𝐜𝐡\n–\n`;
ABC += `${AB.resultado.map((v, index) => `*${index + 1}.* Nome: *${v.nome}*\n• Url: *${v.link}*`).join("\n–\n")}`;
await carol.sendMessage(from, {
text: ABC,
contextInfo: {
externalAdReply: {
title: AB.resultado[0].nome,
body: `• Clique aqui para ser redirecionado(a) ao site do Happymod..`,
thumbnail: await getBuffer(AB.resultado[0].icon),
mediaType: 2,
sourceUrl: AB.resultado[0].link,
},
},
});
} catch (error) {
return reply(mess.error());
}
break;

case "rastrear":
if (!q) return reply(mess.syntaxTrackParcels(prefix));
if (q.length < 13) return reply(mess.invalidCodeRastrear());
data = await fetchJson(API_URL + `/api/outros/rastreio-encomendas?code=${q}&apikey=` + API_KEY_CAROL);
await carol.sendMessage(from, {text: mess.rastrearEncomenda(data, q)}, {quoted: selo}).catch(async (error) => {
return reply(mess.error());
});
break;

case "imdb":
if (!q)
return reply(
`• Para realizar a pesquisa do filme no *IMDb* é necessário conter pelo menos um gênero ou nome do filme.\n• Exemplo: *${prefix}imdb Ação*\n–\n🔍 Saber mais informações sobre o filme pesquisado? Use: *${prefix}imdbinfo [link]*\n\t• Lembrando que o *link do filme* para ser usado ele é apresentado na pesquisa, *se obter sucesso.*\n\t\t• Exemplo: *https://m.imdb.com/title/tt6495770/?ref_=fn_al_tt_5*`
);
try {
AB = await fetchJson(
API_URL + `/api/pesquisa/imdb?query=${q}&apikey=` + API_KEY_CAROL
);
ABC = `• 𝐈𝐌𝐃𝐛 𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀\n\t• *Nota:* Para ver as informações do filme de uma forma detalhada, use o comando: *${prefix}imdbinfo [link do filme]*\n\t\tExemplo: *${prefix}imdbinfo ${AB.resultado[0].url}*\n–\n${AB.resultado.map((v, index) => `*${index + 1}.* Título: *${v.title}*\n• Ano de Lançamento: *${v.release}*\n• Créditos principais: *${v.topCredits[0]} e ${v.topCredits[1]}*\n• Link: *${v.url}*`).join("\n–\n")}`;
await carol.sendMessage(
from,
{
text: ABC,
contextInfo: {
externalAdReply: {
title: `IMDb - ${AB.resultado[0].title} (${AB.resultado[0].release}) ⭐`,
body: `• Créditos principais: ${AB.resultado[0].topCredits[0]} e ${AB.resultado[0].topCredits[1]}`,
mediaType: 2,
sourceUrl: AB.resultado[0].url,
},
},
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
break;

case "imdbinfo":
if (!q.includes("m.imdb.com"))
return reply(
"Coloque o link do filme que você deseja puxar informações."
);
try {
RST = await fetchJson(
API_URL +
`/api/pesquisa/imdb-info-filme?url=${q}&apikey=` +
API_KEY_CAROL
);
ABC = `• Título em Português: *${RST.resultado.titulo}*\n• Título Original: *${RST.resultado.tituloOriginal}*\n–\n• Sinopse: *${RST.resultado.trama}*\n–\n• Status do filme: *${RST.resultado.status}*\n• Data de lançamento: *${RST.resultado.dataLancamento.dia}.${RST.resultado.dataLancamento.mes}.${RST.resultado.dataLancamento.ano}*\n• Duração do filme: *${RST.resultado.duracao}*\n• Classificação de Idade: *${RST.resultado.certificado || "Livre"}*\n–\n• Avaliação total de usuários: *${formatNumberDecimal(RST.resultado.avaliacaoTotalUsers)}*\n• Total de críticas: *${formatNumberDecimal(RST.resultado.criticaTotal)}*\n–\n• Valor orçamentário: *$ ${formatNumberDecimal(RST.resultado.dinheiro.orcamento.valor)}*\n• Valor bruto por países: *$ ${formatNumberDecimal(RST.resultado.dinheiro.brutoPaises.valor)}*\n• Valor semanal: *$ ${formatNumberDecimal(RST.resultado.dinheiro.semana.valor)}*\n• Valor bruto pelo mundo: *$ ${formatNumberDecimal(RST.resultado.dinheiro.brutoMundial.valor)}*\n–\n• Prêmios: *${RST.resultado.avaliado.vitorias} vitória(s) e ${RST.resultado.avaliado.indicacoes} indicação(s)*\n• Disputando no rank em: *${RST.resultado.avaliado.rank}° lugar*\n–`;
ABC += `\n• Mixagens: *${RST.resultado.mixagens.map((v) => `${v}`).join(", ")}*\n`;
ABC += `• Produção: *${RST.resultado.producao.map((v) => `${v}`).join(", ")}*\n–\n`;
ABC += `• Gênero(s): *${RST.resultado.genero.map((v) => `${v}`).join(", ")}*\n–\n`;
ABC += `• *Elenco* - Atrizes e atores participantes do elenco principal do filme:\n–\n${RST.resultado.elencoPrincipal.map((v) => `\t\t• Nome: ${v.nome} - ( ${v.categoria} )\n\t\t• Personagem(ns): *${v.personagem}*`).join("\n–\n")}\n–\n`;
ABC += `• *Créditos principais:*\n${RST.resultado.creditosPrincipais.map((v) => `\t\t• ${v.categoria}: *${v.creditos}*`).join("\n")}`;
reply(ABC);
} catch (error) {
return reply(mess.error());
}
break;

case "sanime":
case "animetv":
if (!q)
return reply(
"Você não digitou nenhuma palavra ao lado do comando."
);
try {
RST = await fetchJson(
API_URL +
`/api/animetv_search?query=${q}&apikey=` +
API_KEY_CAROL
);
ABC = `${RST.resultado.map((v) => `• Título: *${v.title}* | *${v.type}*\n• Foto: *${v.thumb}*\n• Link: *${v.url}*`).join("\n–\n")}`;
reply(ABC);
} catch (error) {
return reply(mess.error());
}
break;

case "frases":
case "pensador":
if (!q)
return reply(
mess.noArgsSearch() + `Exemplo: *${prefix + command} Amor`
);
AB = await fetchJson(
API_URL +
`/api/pesquisa/pensador?query=${q}&apikey=` +
API_KEY_CAROL
);
await carol
.sendMessage(
from,
{
text: AB.resultado
.map((v, index) => `*${index + 1}.* “${v.frase}”`)
.join("\n–\n"),
},
{ quoted: selo }
)
.catch(async (error) => {
return reply(mess.error());
});
break;

case "megadl":
if (!q.includes("mega.nz"))
return reply(
`Você esqueceu de colocar um link do *mega.nz* após o comando.`
);
try {
const { File } = require("megajs");
const fileListINFO = await File.fromURL(q);
await fileListINFO.loadAttributes(); // Rodar a função para executar o resultado.
if (fileListINFO.size >= 300000000)
return reply(
`😿 Infelizmente, não foi possível concluir a ação, *pois o tamanho do arquivo excede o limite máximo de 300MB.*`
);
function formatSize(bytes) {
if (bytes >= 1073741824) {
bytes = (bytes / 1073741824).toFixed(2) + " GB";
} else if (bytes >= 1048576) {
bytes = (bytes / 1048576).toFixed(2) + " MB";
} else if (bytes >= 1024) {
bytes = (bytes / 1024).toFixed(2) + " KB";
} else if (bytes > 1) {
bytes = bytes + " bytes";
} else if (bytes == 1) {
bytes = bytes + " byte";
} else {
bytes = "0 bytes";
}
return bytes;
}
await replyWithNewsletter(
`🤖💫 Por favor, aguarde alguns minutos! O arquivo está sendo baixado!\n• Arquivo: *${fileListINFO.name}* - [${formatSize(fileListINFO.size)}]`,
{
forwardingScore: 10000,
isForwarded: false,
forwardedNewsletterMessageInfo: { newsletterJid: channel },
},
info
);
const dataFileBuffer = await fileListINFO.downloadBuffer();
// Adicionadas extensões suportadas (zip, rar, 7z, jpg, png, zip) à lista.
if (/mp4/.test(fileListINFO.name)) {
await carol.sendMessage(
from,
{
document: dataFileBuffer,
caption: fileListINFO.name,
mimetype: "video/mp4",
fileName: `Download Completo! Obrigado por esperar *${pushname}*...`,
},
{ quoted: selo }
);
} else if (/mp3|mpeg/.test(fileListINFO.name)) {
await carol.sendMessage(
from,
{
document: dataFileBuffer,
caption: fileListINFO.name,
mimetype: "audio/mpeg",
fileName: `Download Completo! Obrigado por esperar *${pushname}*...`,
},
{ quoted: selo }
);
} else if (/pdf/.test(fileListINFO.name)) {
await carol.sendMessage(
from,
{
document: dataFileBuffer,
caption: `Download Completo: *100%* - ${fileListINFO.name}`,
mimetype: "application/pdf",
fileName: fileListINFO.name,
},
{ quoted: selo }
);
} else if (/txt/.test(fileListINFO.name)) {
await carol.sendMessage(
from,
{
document: dataFileBuffer,
caption: `Download Completo! Obrigado por esperar *${pushname}*...`,
mimetype: "text/plain",
fileName: fileListINFO.name,
},
{ quoted: selo }
);
} else if (/zip/.test(fileListINFO.name)) {
await carol.sendMessage(
from,
{
document: dataFileBuffer,
caption: `Download Completo! Obrigado por esperar *${pushname}*...`,
mimetype: "application/zip",
fileName: fileListINFO.name,
},
{ quoted: selo }
);
} else if (/rar/.test(fileListINFO.name)) {
await carol.sendMessage(
from,
{
document: dataFileBuffer,
caption: `Download Completo! Obrigado por esperar *${pushname}*...`,
mimetype: "application/x-rar-compressed",
fileName: fileListINFO.name,
},
{ quoted: selo }
);
} else if (/7z/.test(fileListINFO.name)) {
await carol.sendMessage(
from,
{
document: dataFileBuffer,
caption: `Download Completo! Obrigado por esperar *${pushname}*...`,
mimetype: "application/x-7z-compressed",
fileName: `${fileListINFO.name}`,
},
{ quoted: selo }
);
} else if (/jpg|jpeg/.test(fileListINFO.name)) {
await carol.sendMessage(
from,
{
document: dataFileBuffer,
caption: `Download Completo! Obrigado por esperar *${pushname}*...`,
mimetype: "image/jpeg",
fileName: fileListINFO.name,
},
{ quoted: selo }
);
} else if (/png/.test(fileListINFO.name)) {
await carol.sendMessage(
from,
{
document: dataFileBuffer,
caption: `Download Completo! Obrigado por esperar *${pushname}*...`,
mimetype: "image/png",
fileName: fileListINFO.name,
},
{ quoted: selo }
);
} else if (/apk/.test(fileListINFO.name)) {
await carol.sendMessage(
from,
{
document: dataFileBuffer,
caption: `Download Completo! Obrigado por esperar *${pushname}*...`,
mimetype: "application/vnd.android.package-archive",
fileName: fileListINFO.name,
},
{ quoted: selo }
);
} else {
return reply(
"Desculpe-me, ocorreu um erro ao encaminhar o arquivo!😿 O formato de arquivo apresentado não é suportado."
);
}
} catch (error) {
return console.log(`Error: ${error.message}`);
}
break;

case "encurtalink":
case "tinyurl":
if (args.length < 1)
return reply(
`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/zenodexx`
);
anu = await axios.get(
`https://tinyurl.com/api-create.php?url=${q}`
);
reply(`*Link encurtado com sucesso, aqui está:* ${anu.data}`).catch(
async (error) => {
reply(mess.error());
}
);
break;

case "spotify":
if (!q)
return reply(
"O campo de texto está vazio. Por favor, insira do URL do Spotify, sendo ."
);
if (!q.startsWith("https://"))
return reply(
`Este comando só baixa tracks, playlist ou albuns pelo link do Spotify.`
);
try {
data = await fetchJson(API_URL + `/api/dl/spotify?url=${q}&apikey=` + API_KEY_CAROL);
const SerachYT = await yts(data.resultado.detalhes.nome);
const ABC = SerachYT.all[0];
const hasil = `╭═══════════════════╮
┆『♥️』 TÍTULO: ${ABC.title}
┆『♥️』 DESCRIÇÃO: ${ABC.description}
┆『♥️』 DURAÇÃO: ${ABC.duration.timestamp}
┆『♥️』 LANÇADO: ${ABC.ago}
┆『♥️』 AUTOR: ${ABC.author.name}
┆『♥️』 VIEWS: ${ABC.views}
┆ 0:00 ❍──────╼ ${ABC.duration.timestamp} ↻ ⊲ Ⅱ ⊳ ↺
╰═══════════════════╯`;
await carol.sendMessage(
from,
{ image: { url: ABC.thumbnail }, caption: hasil },
{ quoted: selo }
);
await carol.sendMessage(
from,
{
audio: { url: reqapi.play(ABC.title) },
fileName: `music.mp3`,
mimetype: "audio/mpeg",
},
{ quoted: selo }
);
} catch (e) {
console.log(e);
return await reply(`${e}`);
}
break;

case "ytsearch":
case "pesquisa-ytb":
if (q.trim().length < 4) return reply(`Você esqueceu de colocar algum texto após o comando.`);
try {
const searchUrl = await yts(q);
const ABC = searchUrl.videos;
RST = ABC.map((v, index) =>
`*${index + 1}.* Título: *${v.title || "Não encontrado"}*\n• Descrição: *${v.description || "Não encontrado"}*\n• Duração: *${v.duration.timestamp || "Não encontrado"}*\n• Link: *${v.url || "Não encontrado"}*`
).join("\n–\n");
reply(`> YouTube Search:\n–\n` + RST);
} catch (error) {
return reply(mess.error());
}
break;

case "play2":
case "ytmp2": {
if (!q) return reply("Digite o nome da música..");
try {
let r = await yts(q);
let v = r.videos[0];
let TextoPlay = v.title;
let PlayLimitado = TextoPlay.toLowerCase().slice(0, 18) + '..';
if (!v) return reply("Nenhum resultado encontrado.");
reagir(from, "✅");
let imageBuffer = await axios.get(v.thumbnail, { responseType: "arraybuffer" })
imageBuffer = imageBuffer.data;
const imgInfo = await prepareWAMessageMedia({image: imageBuffer}, {upload: carol.waUploadToServer});
const template = generateWAMessageFromContent(from, {viewOnceMessage: {message: {
messageContextInfo: {deviceListMetadata: {}, deviceListMetadataVersion: 2},
interactiveMessage: {
contextInfo: {
participant: sender,
mentionedJid: info?.mentions,
quotedMessage: info.message
},
carouselMessage: {
messageVersion: 1,
cards: [{header: {hasMediaAttachment: true, imageMessage: imgInfo.imageMessage},
body: {text: `╭════════════════════╮
┆『♥️』 TÍTULO: ${PlayLimitado}
┆『♥️』 DURAÇÃO: ${v.duration.timestamp || "não encontrado."}
┆『♥️』 LANÇADO: ${v.ago || "não encontrado."}
┆『♥️』 AUTOR: ${v.author.name || "não encontrado."}
┆『♥️』 VIEWS: ${v.views || "não encontrado."}
╰════════════════════╯`},
footer: {text: "Escolha uma opção abaixo:"},
nativeFlowMessage: {
buttons: [
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "💽 Baixar MP3",
id: `${prefix}baixar_audio ${v.url}`
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "🎬 Baixar MP4",
id: `${prefix}baixar_video ${v.url}`
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "🗂️ Baixar DOC",
id: `${prefix}ytdoc ${v.url}`
})
}
],
messageParamsJson: ""
}
}]}}}}}, {});
await carol.relayMessage(from, template.message, {});
} catch (e) {
reagir(from, "❌");
console.log(e);
return reply("❌ Erro ao pesquisar.");
}
}
break;

case "play":
case "ytmp": {
if (!q) return reply("Digite o nome da música para pesquisar..");
reagir(from, "✅");
try {
const res = await yts(q);
const ABC = res.videos[0];
if (!ABC) return reply("Nenhum resultado encontrado.");
let titulo = ABC.title;
let curta = titulo.slice(0, 17) + "..";
const playzin = `> ╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╼╼╾╼
> 『🎵』 𝐓𝐢𝐭𝐮𝐥𝐨: ${curta}
> 『⏱️』 𝐃𝐮𝐫𝐚𝐜𝐚𝐨: ${ABC.duration.timestamp}
> 『👤』 𝐀𝐮𝐭𝐨𝐫: ${ABC.author.name}
> 『📅』 𝐏𝐨𝐬𝐭𝐚𝐝𝐨: ${ABC.ago}
> 『👁️』 𝐕𝐢𝐞𝐰𝐬: ${ABC.views}
> -
> *𝐄𝐬𝐜𝐨𝐥𝐡𝐚 𝐔𝐦𝐚 𝐎𝐩𝐜𝐚𝐨 𝐀𝐛𝐚𝐢𝐱𝐨:*
> -
> 1 - 𝐁𝐚𝐢𝐱𝐚𝐫 𝐀𝐮𝐝𝐢𝐨 (𝐌𝐏𝟑)
> 2 - 𝐁𝐚𝐢𝐱𝐚𝐫 𝐕𝐢𝐝𝐞𝐨 (𝐌𝐏𝟒)
> 3 - 𝐁𝐚𝐢𝐱𝐚𝐫 𝐀𝐫𝐪𝐮𝐢𝐯𝐨 (𝐌𝐏𝟑)
> ╾╼╾╼╾╼╾╼╾╼╾╼╾╼╼╾╼╼╾╼`;

PlayCache = loadPlayCache();

PlayCache[sender] = {
url: ABC.url,
title: ABC.title,
used: [],
createdAt: Date.now()
};

savePlayCache(PlayCache);
await carol.sendMessage(from, {image: {url: ABC.thumbnail}, caption: playzin}, {quoted: selo});
} catch (e) {
console.log(e);
return reply("❌ Erro ao pesquisar.");
}
}
break;

case "baixar_audio":
if (!q) return reply(`❌ Você não digitou nada... Exemplo: *${prefix + command} link da música*`);
await reagir(from, '🎵');
try {
try {
await carol.sendMessage(from, {audio: {url: `https://neon-apis.online/api/yt-mp3?url=${q}`},
mimetype: "audio/mpeg",
ptt: false}, {quoted: selo});
} catch (Primeiro) {
await carol.sendMessage(from, {audio: {url: `${API_URL}/api/dl/ytaudio?url=${q}&apikey=${API_KEY_CAROL}`},
mimetype: "audio/mpeg",
ptt: false}, {quoted: selo});
}
} catch (error) {
reagir(from, '❌');
return reply(`Desculpe, ocorreu um erro ao baixar o seu vídeo. Tente novamente mais tarde.`);
}
break;

case "baixar_video":
if (!q) return reply(`❌ Você não digitou nada... Exemplo: *${prefix + command} link da música*`);
await reagir(from, '🎵');
try {
try {
await carol.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${q}&apikey=${API_KEY_BRONXYS}`}, mimetype: "video/mp4"}, {quoted: selo});
} catch (primeiro) {
await carol.sendMessage(from, {video: {url: `${API_URL}/api/dl/ytvideo?url=${q}&apikey=${API_KEY_CAROL}`}, mimetype: "video/mp4"}, {quoted: selo});
}
} catch (error) {
await reagir(from, '❌');
return reply(`❌ Desculpe, ocorreu um erro ao baixar o seu video.\n\n*Possíveis causas:*\n• API temporariamente indisponível\n• Vídeo com restrições\n• Erro de conexão\n\n*Tente novamente em alguns minutos.*`);
}
break;

case "ytmp4":
case "playvideo":
case "playvid":
try {
if (!q) return await reply("🚫 Digite algo para enviar!");
const textinho = q;
await reply(`🔍 Pesquisando por: ${textinho}`);
await reagir(from, '🎵');
const searchUrl = await yts(textinho);
const ABC = searchUrl.videos[0];
let TextoPlay = ABC.title;
let PlayLimitado = TextoPlay.toLowerCase().slice(0, 18) + '..';
if (!ABC || !ABC.url) return await reply("🚫 Não consegui encontrar nada!");
const hasil = `╭═════════════════════╮
┆『♥️』 TÍTULO: ${PlayLimitado}
┆『♥️』 DURAÇÃO: ${ABC.duration.timestamp || "não encontrado."}
┆『♥️』 LANÇADO: ${ABC.ago || "não encontrado."}
┆『♥️』 AUTOR: ${ABC.author.name || "não encontrado."}
┆『♥️』 VIEWS: ${ABC.views || "não encontrado."}
╰═════════════════════╯`;
await carol.sendMessage(from, {image: {url: ABC.thumbnail}, caption: hasil, 
"contextInfo": {
"forwardingScore": 1,
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": newsletterJid,
"serverMessageId": '',
"newsletterName": newsletterName
},
}}, {quoted: selo});
await carol.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${ABC.url}&apikey=${API_KEY_BRONXYS}`}, mimetype: "video/mp4"}, {quoted: selo});
} catch (error) {
await reagir(from, '❌');
await reply(`❌ Erro ao processar o comando ${command}. Tente novamente mais tarde.`);
}
break;

case "ytmp4-2":
case "playvideo2":
case "playvid2":
if (!q) return reply(`Para baixar o video de alguma música você precisa digitar o nome da música ao lado do comando!.`);
await reagir(from, '🎵');
try {
const searchUrl = await yts(q);
const ABC = searchUrl.videos[0];
let TextoPlay = ABC.title;
let PlayLimitado = TextoPlay.toLowerCase().slice(0, 18) + '..';
const hasil = `╭═════════════════════╮
┆『♥️』 TÍTULO: ${PlayLimitado}
┆『♥️』 DURAÇÃO: ${ABC.duration.timestamp || "não encontrado."}
┆『♥️』 LANÇADO: ${ABC.ago || "não encontrado."}
┆『♥️』 AUTOR: ${ABC.author.name || "não encontrado."}
┆『♥️』 VIEWS: ${ABC.views || "não encontrado."}
╰═════════════════════╯`;

await carol.sendMessage(from, {video: {url: `https://neon-apis.online/api/yt-mp4?url=${ABC.url}`}, caption: hasil, 
"contextInfo": {
"forwardingScore": 1,
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": newsletterJid,
"serverMessageId": '',
"newsletterName": newsletterName
},
}}, {quoted: selo});
} catch (e) {
console.log(e);
return reply(
`Desculpe, ocorreu um erro ao baixar o seu video, tente novamente e se nao funcionar a api caiu :/.`
);
}
break;

case "ytdoc":
case "playdoc":
if (!q) return reply(mess.syntaxDownloadMusic());
try {
const searchUrl = await yts(q);
const ABC = searchUrl.videos[0];
await carol.sendMessage(from, {document: {url: `https://neon-apis.online/api/yt-mp3?url=${ABC.url}`},
fileName: ABC.title + ".mp3",
mimetype: "audio/mpeg",
},
{quoted: selo}).catch(async (error) => {
return reply(mess.error());
});
} catch (error) {
reply(
"Seja mais específico, não deu pra encontrar com apenas isto..."
);
}
break;

case "shazam":
if (!isQuotedAudio) return reply("Envie o áudio para eu tentar detectar o nome da música!");
await reagir(from, '✅');
// Ensure the ./shazam directory exists
const shazamDir = "./bunker/shazam";
if (!fs.existsSync(shazamDir)) {
fs.mkdirSync(shazamDir, {recursive: true});
}
try {
// Get the audio buffer
const dataMedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, "audio");
const mime = (quoted.info || quoted).mimetype || "";
const cleanSender = sender.replace(/[@.:]/g, "_");
const filePath = `${shazamDir}/shazam-${cleanSender}.mp3`;
// Save the audio file
await fs.writeFileSync(filePath, dataMedia);
// Process the audio with Shazam API
const hasil = await arcloud(fs.readFileSync(filePath, {encoding: "base64"}));
const data = await yts(hasil[0].titulo);
const ABC = data.videos[0];
let TextoPlax = ABC.title;
let PlayLimitado = TextoPlax.slice(0, 16) + '..';
carol.sendMessage(from, {image: {url: ABC.thumbnail}, caption: `> ┆『♥️』 *TÍTULO:* ${PlayLimitado}\n> ┆『🖤』 *AUTOR:* ${ABC.author.name || "não encontrado."}\n> ┆『♥️』 *DURAÇÃO:* ${ABC.duration.timestamp || "não encontrado."}\n> ┆『🖤』 *LANÇADO:* ${ABC.ago || "não encontrado."}\n> ┆『♥️』 *VIEWS:* ${ABC.views || "não encontrado."}`}, {quoted: selo});
let cornyou;
try {
 cornyou = `https://neon-apis.online/api/yt-mp3?url=${ABC.url}`;
 } catch {
 cornyou = `${API_URL}/api/dl/ytaudio?url=${ABC.url}&apikey=${API_KEY_CAROL}`;
 }
// Send the result
await carol.sendMessage(from, {audio: {url: `${cornyou}`}, mimetype: "audio/mpeg"}, {quoted: info});
// Delete the file after successful processing
await sleep(4000);
await fs.unlinkSync(filePath);
} catch (error) {
console.log(error);
// Delete the file if it exists on error
const cleanSender = sender.replace(/[@.:]/g, "_");
const filePath = `${shazamDir}/shazam-${cleanSender}.mp3`;
if (fs.existsSync(filePath)) {
await fs.unlinkSync(filePath);
};
// Send error message
await reply("Sem resultado! 😿 Desculpe, não consegui identificar a música fornecida.");
await reagir(from, '❌');
}
break;

// Dentro do seu switch (command) { ... }

case "audiomeme2":
case "playmeme2":
if (!q)
return reply(
`Você precisa me dizer qual meme buscar!\n\nExemplo: *${prefix + command} lula*`
);
await reagir(from, "😸");

try {
const AudioMeme = require("./bunker/src/myinstants.js");
const searchResults = await AudioMeme(q);
if (!searchResults || searchResults.length === 0) {
await reagir(from, "😿"); // Reação de "não encontrado"
return reply(
`Poxa, não encontrei nenhum meme com o nome "*${q}*".\nTente outro termo!`
);
}
const primeiroResultado = searchResults[0];
const teks = primeiroResultado.mp3;

reply(
`Encontrei o áudio "*${primeiroResultado.title}*".\nEnviando como mensagem de voz...`
);
await carol.sendMessage(
from,
{
audio: { url: searchResults[0].mp3 },
mimetype: "audio/mpeg",
ptt: false,
},
{ quoted: selo }
);
} catch (error) {
console.log("Erro no comando 'audiomeme':", error);
reply(`${error}`);
}
break;

case "audiosend":
try {
if (!q)
return reply(
`Você não digitou nada após o comando! Exemplo: *${prefix + command} https://myinstants.com/media/sounds/lula.mp3*`
);
if (!q.startsWith("https://"))
return reply(
`O link fornecido não é válido. Por favor, forneça um link direto para o áudio.`
);
const audioUrl = q;
async function checkAudioUrl(url) {
try {
const response = await axios.head(url);
return response.status === 200;
} catch (error) {
console.error(
`Erro ao verificar URL de áudio: ${error.message}`
);
return false;
}
}
const isValidAudio = await checkAudioUrl(audioUrl);
if (!isValidAudio)
return reply(
`O link fornecido não é um áudio válido ou não está acessível. Por favor, verifique o link e tente novamente.`
);
carol.sendMessage(
from,
{
audio: { url: audioUrl },
mimetype: "audio/mpeg",
ptt: false, // Envia como mensagem de voz
},
{ quoted: selo }
);
} catch (error) {
console.error(
`Erro ao processar o comando 'audiosend': ${error.message}`
);
reply(
`❌ Ocorreu um erro ao processar o comando 'audiosend'. Por favor, tente novamente mais tarde.`
);
}
break;

case "imgpraanime":
case "animeia":
case "toanime":
if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
post = isQuotedImage
? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
.message.extendedTextMessage.contextInfo.message
.imageMessage
: info.message.imageMessage;
imagem = await downloadContentFromMessage(post, "image");
base64 = Buffer.from([]);
for await (const send of imagem) {
base64 = Buffer.concat([base64, send]);
}
reply(
`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`
);
link = await upload(base64);
conv = await fetchJson(
`https://delirius-api-oficial.vercel.app/api/toanime?url=${link}`
);
await carol
.sendMessage(
from,
{ image: { url: conv.data.comparation } },
{ quoted: selo }
)
.catch(async (error) => {
return reply(
`Não foi possível criar seu avatar! Por favor, tente com outra imagem!`
);
});
} else {
reply("Mencione uma imagem para atribuir o efeito a foto.");
}
break;

case "gtaia":
case "togta":
case "imgpragta":
if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
post = isQuotedImage
? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
.message.extendedTextMessage.contextInfo.message
.imageMessage
: info.message.imageMessage;
imagem = await downloadContentFromMessage(post, "image");
base64 = Buffer.from([]);
for await (const send of imagem) {
base64 = Buffer.concat([base64, send]);
}
reply(
`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`
);
link = await upload(base64);
dataConvertAndreas = await fetchJson(
`https://aemt.me/jadigta?url=${link}`
);
await carol
.sendMessage(
from,
{ image: { url: dataConvertAndreas.result } },
{ quoted: selo }
)
.catch(async (error) => {
return reply(
`Não foi possível criar seu avatar! Por favor, tente com outra imagem!`
);
});
} else {
reply("Mencione uma imagem para atribuir o efeito a foto.");
}
break;

case "tozombie":
case "zombieai":
case "imgprazombie":
if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
post = isQuotedImage
? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
.message.extendedTextMessage.contextInfo.message
.imageMessage
: info.message.imageMessage;
imagem = await downloadContentFromMessage(post, "image");
base64 = Buffer.from([]);
for await (const send of imagem) {
base64 = Buffer.concat([base64, send]);
}
reply(
`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`
);
link = await upload(base64);
dataConvertZombie = await fetchJson(
`https://aemt.me/converter/zombie?url=${link}`
);
await carol
.sendMessage(
from,
{ image: { url: dataConvertZombie.url } },
{ quoted: selo }
)
.catch(async (error) => {
return reply(
`Não foi possível criar seu avatar! Por favor, tente com outra imagem!`
);
});
} else {
reply("Mencione uma imagem para atribuir o efeito a foto.");
}
break;

case "enhance":
case "dehaze":
case "recolor":
if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
post = isQuotedImage
? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
.message.extendedTextMessage.contextInfo.message
.imageMessage
: info.message.imageMessage;
imagem = await downloadContentFromMessage(post, "image");
base64 = Buffer.from([]);
for await (const send of imagem) {
base64 = Buffer.concat([base64, send]);
}
data = await vyroEngine(base64, command);
await carol
.sendMessage(from, { image: data }, { quoted: selo })
.catch(async (error) => {
return reply(mess.error());
});
} else {
reply("Mencione uma imagem para atribuir o efeito a foto.");
}
break;

case "ler":
case "ocr":
case "lerfoto":
if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
post = isQuotedImage
? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
.message.extendedTextMessage.contextInfo.message
.imageMessage
: info.message.imageMessage;
imagem = await downloadContentFromMessage(post, "image");
base64 = Buffer.from([]);
for await (const send of imagem) {
base64 = Buffer.concat([base64, send]);
}
await reagir(from, '✅');
link = await upload(base64);
data = await fetchJson(
API_URL +
`/api/outros/leitura-ocr?image=${link}&apikey=` +
API_KEY_CAROL
);
reply(data.resultado).catch(async (error) => {
return reply(mess.error());
});
} else {
reply("Mencione uma imagem, por favor!");
}
break;

case "movie":
if (args.length == 0)
return reply(
`Cadê o nome do filme o qual você deseja ver informações?`
);
movieInfo = await axios.get(
`https://api.themoviedb.org/3/search/movie?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`
);
if (movieInfo.data.total_results == 0)
return reply(mess.noresult());
var ImageMovieLink = `https://image.tmdb.org/t/p/original${movieInfo.data.results[0].backdrop_path}`;
var fotoFilme = await getBuffer(ImageMovieLink);
carol
.sendMessage(
from,
{ image: fotoFilme, caption: mess.movies(movieInfo) },
{ quoted: selo }
)
.catch(async (error) => {
return reply(mess.error());
});
break;

case "promocell":
if (!q)
return reply(
"Qual produto você deseja pesquisar? Coloque após o comando o nome do celular o qual você deseja obter as promoções..."
);
try {
data = await fetchJson(
API_URL +
`/api/pesquisa/tudocelular?query=${q}&apikey=` +
API_KEY_CAROL
);
promoções = data.resultado.menoresPrecos
.map(
(value, index) =>
`[Oferta *N° ${index + 1}*] - Valor ofertado pela loja que realizou a promoção: *${value.preco}*\n• Título: *${value.nome}*\n• URL: *${value.linkCompra}*`
)
.join("\n——\n");
await replyWithReaction(
`• Produto: *${data.resultado.nomeProduto}*\n• Link do Produto no TudoCelular, confira a partir deste link as demais informações sobre o produto: *${data.resultado.linkCelular}*\n—\n• As melhores ofertas do seu produto *'${data.resultado.nomeProduto}'* estão aqui! Confira abaixo senhor(a):\n—\n${promoções}`,
{ react: { text: "🛒", key: info.key } }
);
} catch (error) {
await replyWithReaction(
"*Sem promoções para este produto!* Tente outro, caso ocorra o mesmo erro a api do comando deve ter caído.",
{ react: { text: "😿", key: info.key } }
);
}
break;

case "myname":
if (!q)
return reply(
"Qual é o nome que você deseja saber o significado? Adicione após o comando..."
);
try {
data = await fetchJson(
API_URL +
`/api/pesquisa/myname?query=${q}&apikey=` +
API_KEY_CAROL
);
await reagir(from, "😸"); // Reagir quando o comando for executado por um usuário!
await carol.sendMessage(
from,
{
image: { url: data.resultado.imageUrl },
caption: `• Origem do Nome: *${data.resultado.origem}*\n• Derivações: *${data.resultado.derivacoes ? data.resultado.derivacoes : "Não possuí nenhum tipo de derivação."}*\n• Gênero: *${capitalizeFirstLetter(data.resultado.genero.split("nome ")[1] || "Gênero não identificado.")}*\n• Lugares ou referências com relação ao nome: *${data.resultado.locaisComNome}*\n• Relacionados: *${data.resultado.nomesRelacionados}*`,
},
{ quoted: selo }
);
} catch (error) {
await replyWithReaction(mess.error(), {
react: { text: "😿", key: info.key },
}); // Encaminhar a mensagem pré-definida ao parametro e reagir a mensagem com o emoji definido na função.
}
break;

case "spoiler":
case "morechat":
var [text1_a, text2_b] = q.split("/"); // Separador
if (!text1_a) text1_a = ""; // Caso o texto1 esteja vazio, vai retornar vázio o parâmetro.
if (!text2_b) text2_b = ""; // Caso o texto2 esteja vazio, vai retornar vázio o parâmetro.
reply(text1_a + String.fromCharCode(8206).repeat(4001) + text2_b); // Enviar o spoiler.
break;

case "obesidade":
case "obeso":
if (!q.includes("/"))
return reply(`Ex.: *${prefix + command} peso/altura*`);
var [peso, altura] = q.split("/");
var resultado = await obeso(peso, altura);
if (resultado <= 17 || resultado <= 18.4) {
await replyWithReaction(
`• Seu índice de massa corporal é de: *${resultado}* -> Você está abaixo do peso.`,
{ react: { text: "😸", key: info.key } }
);
} else if (resultado <= 18.5 || resultado <= 24.9) {
await replyWithReaction(
`• Seu índice de massa corporal é: *${resultado}* -> Você está no peso ideal.`,
{ react: { text: "👍", key: info.key } }
);
} else if (resultado <= 25 || resultado <= 29.9) {
await replyWithReaction(
`• Seu índice de massa corporal é: *${resultado}* -> Você está com sobrepeso.`,
{ react: { text: "🫤", key: info.key } }
);
} else if (resultado <= 30 || resultado <= 39.9) {
await replyWithReaction(
`• Seu índice de massa corporal é: *${resultado}* -> Em situção de Obesidade.`,
{ react: { text: "🤨", key: info.key } }
);
} else if (resultado > 40) {
await replyWithReaction(
`• Seu índice de massa corporal é: *${resultado}* -> Obesidade mórbida!`,
{ react: { text: `😵`, key: info.key } }
);
}
break;

case "contardias":
case "countdays":
if (!q.includes("/"))
return reply(
`Você esqueceu da */* para separar os campos.. Exemplo: *31/03/2024*`
);
if (q.length < 10)
return reply(
`Deve conter a data completa *(dia/mês/ano)* após o comando!\n• Exemplo: *${prefix + command} 31/03/2024*`
);
try {
var tomp = await timeDate("DD/MM/YYYY");
countDay = await countDays(q.split("/"), tomp.split("/"));
reply(`*${countDay}* dia(s).`);
} catch (error) {
return reply(mess.error());
}
break;

case "qrcode":
case "gerarqr":
if (!q)
return reply(
"Insira um link ou texto para que eu possa gerar o qr code.."
);
try {
await carol.sendMessage(
from,
{
image: {
url: `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${q}`,
},
caption: `💫| 𝐒𝐞𝐮 𝐪𝐫 𝐜𝐨𝐝𝐞 𝐟𝐨𝐢 𝐠𝐞𝐫𝐚𝐝𝐨 𝐜𝐨𝐧𝐭𝐞𝐧𝐝𝐨 𝐨 𝐭𝐞𝐱𝐭𝐨/𝐮𝐫𝐥 𝐞𝐬𝐩𝐞𝐜𝐢𝐟𝐢𝐜𝐚𝐝𝐨 𝐚𝐨 𝐥𝐚𝐝𝐨: *${q}*`,
},
{ quoted: selo }
);
} catch (e) {
return reply(mess.error());
}
break;

case "serie":
if (args.length == 0)
return reply(
`Cadê o nome da serie o qual você deseja ver informações?`
);
serieInfo = await axios.get(
`https://api.themoviedb.org/3/search/tv?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`
);
if (serieInfo.data.total_results == 0)
return reply(mess.noresult());
await carol
.sendMessage(
from,
{
image: {
url: `https://image.tmdb.org/t/p/original${serieInfo.data.results[0].backdrop_path}`,
},
caption: mess.series(serieInfo),
},
{ quoted: selo }
)
.catch(async (error) => {
return reply(mess.error());
});
break;

case "gamenews":
case "gamesnews":
if (args.length < 1)
return reply(
`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix + command} *--help*_`
);
if (args[0] == "--help")
return await mention(mess.helpNoticesG(sender, prefix));
if (args[0] === "-cod") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/e-sports?query=cod&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-csgo") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/e-sports?query=csgo&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-fifa") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/e-sports?query=fifa&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-fortnite") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/e-sports?query=fortnite&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-gamexp") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/e-sports?query=gamexp&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-pes") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/e-sports?query=pes&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-lol") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/e-sports?query=lol&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-pokemon") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/e-sports?query=pokemon&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-r6") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/e-sports?query=rainbow-6&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-valorant") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/e-sports?query=valorant&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-tcg") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/e-sports?query=tcg&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else {
await reagir(from, "🤔");
reply(
`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix + command} *--help*_`
);
}
break;

case "esporte_news":
case "esportenoticias":
case "esportenews":
if (args.length < 1)
return reply(
`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix + command} *--help*_`
);
if (args[0] == "--help")
return await mention(mess.helpNoticesEsporte(sender, prefix));
if (args[0] === "-all") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-futebol") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=futebol&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-futsal") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=futsal&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-skate") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=skate&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-surf") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=surfe&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-basquete") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=basquete&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-volei") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=volei&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-tenis") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=tenis&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-atletismo") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=atletismo&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-natacao") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=natacao&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-ciclismo") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=ciclismo&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-boxe") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=boxe&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-beisebol") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=beisebol&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-futebol-eua") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=futebol-americano&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-judo") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=judo&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-ginastica") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=ginastica-artistica&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-golfe") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=golfe&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else if (args[0] === "-f1") {
try {
ABC = await fetchJson(
API_URL +
`/api/noticias/esporte?esporte=formula-1&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: ABC.resultado[0].linkImagem || ftmenu.logo },
caption: mess.GshowGE(ABC),
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
} else {
await reagir(from, "🤔");
reply(
`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix + command} *--help*_`
);
}
break;

case "aptoide":
if (args.length == 0)
return reply(
`Cadê o nome do app? *Use como exemplo:* ${prefix + command} WhatsApp.`
);
try {
const aptoide = await axios.get(
`https://ws75.aptoide.com/api/7/apps/search?query=${encodeURIComponent(q)}&trusted=true`
);
if (aptoide.data.datalist.total == 0)
return reply(mess.noresult());
phAptoide = await (
await fetch(aptoide.data.datalist.list[0].graphic)
).buffer();
lnDown = await axios.get(
`https://tinyurl.com/api-create.php?url=${aptoide.data.datalist.list[0].file.path_alt}`
);
await carol.sendMessage(
from,
{
image: phAptoide,
caption: mess.aptoide(
aptoide.data.datalist.list[0],
(aptoide.data.datalist.list[0].size / 1048576).toFixed(1),
lnDown
),
},
{ quoted: selo }
);
await carol.sendMessage(
from,
{
document: { url: aptoide.data.datalist.list[0].file.path },
mimetype: "application/vnd.android.package-archive",
fileName: `${aptoide.data.datalist.list[0].name}.apk`,
caption: "Download Completo!",
},
{ quoted: selo }
);
} catch (error) {
return reply(mess.error());
}
break;

case "soundcloud":
case "scdl":
if (!q)
return reply(
`Tá faltando aí! Cadê o link da música no SoundCloud hein?`
);
try {
data = await fetchJson(
API_URL +
`/api/download/soundcloud?url=${q}&apikey=` +
API_KEY_CAROL
);
tinyUrl = await axios.get(
`https://tinyurl.com/api-create.php?url=${data.resultado.link_dl}`
);
await carol.sendMessage(
from,
{
text: mess.soundcloud(data, tinyUrl),
contextInfo: {
externalAdReply: {
title: `Escute ${data.resultado.titulo} em seu aplicativo do SoundCloud.`,
body: `Música • Total de Downloads: ${data.resultado.total_downloads}`,
thumbnail: await getBuffer(data.resultado.capa),
mediaType: 2,
sourceUrl: q,
},
},
},
{ quoted: selo }
);
await carol
.sendMessage(
from,
{
audio: {
url:
API_URL +
`/api/download/soundcloud/v2?url=${q}&apikey=` +
API_KEY_CAROL,
},
mimetype: "audio/mpeg",
},
{ quoted: selo }
)
.catch(async (error) => {
return reply(mess.error());
});
} catch (e) {
reply(mess.error());
}
break;

case "kwai":
if (!q)
return await reply(
`O campo de texto está vazio. Por favor, insira uma URL, nome de usuário ou pesquise um vídeo.`
);
if (q.includes("kwai.com")) {
// Download de Vídeos //
data = await fetchJson(
API_URL + `/api/download/kwai?query=${q}&apikey=` + API_KEY_CAROL
);
captionTextDownload = "> 𝐊𝐰𝐚𝐢 - 𝐃𝐋\n—\n";
captionTextDownload += `• Criador(a):\n\t• Nome: *${data.resultado.profile.name}* | @${data.resultado.profile.user}\n\t• Total de Publicações: *${data.resultado.profile.publications}*\n\t• Seguidores: *${data.resultado.profile.follow}*\n\t• Curtidas: *${data.resultado.profile.like}*\n\t• URL: *${data.resultado.profile.url}*\n—\n• Vídeo:\n\t• Likes: *${data.resultado.like}*\n\t• Visualizações: *${data.resultado.watch}*\n\t• Comentários: *${data.resultado.comments}*\n\t• Compartilhamentos: *${data.resultado.share}*\n\t• Descrição: *${data.resultado.description}*\n\t• Áudio:\n\t\t• Nome: *${data.resultado.audioName}*\n\t\t• Autor: *${data.resultado.audioAuthor}*`;
await carol.sendMessage(
from,
{
video: { url: data.resultado.dl },
caption: captionTextDownload,
},
{ quoted: selo }
);
} else if (q.startsWith("@")) {
// Stalkear Perfis do Kwai //
try {
data = await fetchJson(
API_URL +
`/api/download/kwai?query=${q}&apikey=` +
API_KEY_CAROL
);
await sendUrlText(
from,
`> 𝐊𝐰𝐚𝐢 - 𝐒𝐭𝐚𝐥𝐤𝐞𝐫\n—\n• Nome: *${data.resultado.name}* | @${data.resultado.user}\n• Total de Curtidas: *${data.resultado.like}*\n• Seguidores: *${data.resultado.follow}*\n• Total de Publicações: *${data.resultado.publications}*\n• Ícone: *${data.resultado.icon}*\n• URL: *${data.resultado.url}*`,
`${data.resultado.name} (@${data.resultado.user})`,
"Clique aqui e acompanhe todo contéudo do perfil no Kwai.",
data.resultado.icon,
data.resultado.url,
info
);
} catch (error) {
await reply(mess.error());
}
} else {
// Pesquisa Kwai - Vídeos //
try {
data = await fetchJson(
API_URL +
`/api/download/kwai?query=${q}&apikey=` +
API_KEY_CAROL
);
captionTextSearch = "> 𝐊𝐰𝐚𝐢 - 𝐒𝐞𝐚𝐫𝐜𝐡\n—\n";
captionTextSearch += data.resultado
.map(
(v, index) =>
`• Nome: *${v.name || "Sem nome"}* | @${v.user}\n• Descrição: *${v.caption}*\n• Vídeo:\n\t• Comentários: *${v.comments}*\n\t• Likes: *${v.likes}*\n\t• Visualizações: *${v.views}*\n\t• Compartilhamentos: *${v.sharing}*\t• URL: *${v.url}*`
)
.join("\n—\n");
await reply(captionTextSearch);
} catch (e) {
await reply(mess.error());
}
}
break;

case 'tiksearch':
if (!q) return reply(`Ex: ${prefix}tiktok <link ou nome>`);
const rsw = await fetchJson(`https://neon-apis.online/api/tiktok-search?query=${q}`);
try {
reagir(from, '✅');
carol.sendMessage(from, {video: {url: `${rsw.resultado.videos}`}, caption: `♥️⃟ Descrição: ${rsw.resultado.titulo}`}, {quoted: selo});
await carol.sendMessage(from, {audio: {url: rsw.resultado.audio}, mimetype: 'audio/mpeg', ptt: false});
} catch (erro) {
await reagir(from, '❌');
}
break

case "tiktok":
case "tiktok_video":
try {
if (!q) return reply(`⚠️informe o link do TikTok`);
reagir(from, "😘");
reply(`Baixando o vídeo, aguarde um pouquinho...`);
if (!q.includes("tiktok"))
return reply(`⚠️informe somente link do TikTok`);
const searchtk = await fetchJson(
API_URL + `/api/download/tiktok?url=${q}&apikey=` + API_KEY_CAROL
);
const ABC = searchtk.resultado;
const hasil = `╭═══════════════════╮
┆『♥️』 DESCRIÇÃO: ${ABC.desc}
┆『⏱️』 DURAÇÃO: ${ABC.video.duration}
┆『💬』 COMENTÁRIOS: ${ABC.statistics.commentCount}
┆『❤️』 LIKES: ${ABC.statistics.likeCount}
┆『🔁』 COMPARTILHAMENTOS: ${ABC.statistics.shareCount}
┆『▶️』 PLAY: ${ABC.statistics.playCount}
┆『📥』 DOWNLOADS: ${ABC.statistics.downloadCount}
┆『👤』 USUÁRIO: ${ABC.author.username}
┆『💖』 NOME: ${ABC.author.nickname}
╰═══════════════════╯
`;
await carol.sendMessage(
from,
{
video: { url: ABC.video.playAddr[0] },
caption: hasil,
mimetype: "video/mp4",
},
{ quoted: selo }
);
await carol.sendMessage(
from,
{
audio: { url: ABC.music.playUrl[0] },
mimetype: "audio/mpeg",
ptt: false,
},
{ quoted: selo }
);
} catch (error) {
console.log(error);
return reply(`Deu um pequeno erro ao baixar o vídeo!`);
}
break;

case "tiktok2":
case "tiktok_audio":
try {
if (!q.includes("tiktok"))
return reply(`${prefix + command} link do Tiktok`);
reply("Realizando ação..");
carol
.sendMessage(
from,
{ video: { url: reqapi.tiktok(q) }, mimetype: "video/mp4" },
{ quoted: selo }
)
.catch((e) => {
console.log(e);
return reply("Erro..");
});
carol
.sendMessage(
from,
{ audio: { url: reqapi.tiktok(q) }, mimetype: "audio/mpeg" },
{ quoted: selo }
)
.catch((e) => {
console.log(e);
return reply("Erro..");
});
} catch (e) {
console.log(e);
return reply("Erro...");
}
break;

case "face_video":
try {
if (!q.includes("facebook") && !q.includes("fb.watch"))
return reply(`Exemplo: ${prefix + command} o link do Facebook`);
reply("Realizando ação..");
carol
.sendMessage(from, {
video: {
url: `${API_URL2}/api-bronxys/${command}?url=${q}&apikey=${API_KEY_BRONXYS}`,
},
mimetype: "video/mp4",
})
.catch((e) => {
return reply("Erro..");
});
} catch (e) {
return reply("Erro..");
}
break;

case "face_audio":
try {
if (!q.includes("facebook") && !q.includes("fb.watch"))
return reply(`Exemplo: ${prefix + command} o link do Facebook`);
reply("Realizando ação..");
carol
.sendMessage(from, {
audio: {
url: `${API_URL2}/api-bronxys/${command}?url=${q}&apikey=${API_KEY_BRONXYS}`,
},
mimetype: "audio/mpeg",
})
.catch((e) => {
return reply("Erro..");
});
} catch (e) {
return reply("Erro..");
}
break;

case "twitter_video":
try {
if (!q.includes("twitter"))
return reply(`Exemplo: ${prefix + command} o link do Twitter`);
reply("Realizando ação..");
carol
.sendMessage(from, {
video: {
url: `${API_URL2}/api-bronxys/${command}?url=${q}&apikey=${API_KEY_BRONXYS}`,
},
mimetype: "video/mp4",
})
.catch((e) => {
return reply("Erro..");
});
} catch (e) {
return reply("Erro..");
}
break;

case "twitter_audio":
try {
if (!q.includes("twitter"))
return reply(`Exemplo: ${prefix + command} o link do Twitter`);
reply("Realizando ação..");
carol
.sendMessage(from, {
audio: {
url: `${API_URL2}/api-bronxys/${command}?url=${q}&apikey=${API_KEY_BRONXYS}`,
},
mimetype: "audio/mpeg",
})
.catch((e) => {
return reply("Erro..");
});
} catch (e) {
return reply("Erro..");
}
break;

case "instagram":
try {
if (q.length < 5)
return reply(`Exemplo: ${prefix + command} o link`);
ABC = await fetchJson(
`${API_URL2}/api-bronxys/instagram?url=${q.trim()}&apikey=${API_KEY_BRONXYS}`
);
reply("Realizando ação..");
let DM_T = ABC.msg[0].type;
var A_T =
DM_T === "mp4"
? "video/mp4"
: DM_T === "webp"
? "image/webp"
: DM_T === "jpg"
? "image/jpeg"
: DM_T === "mp3"
? "audio/mpeg"
: "video/mp4";
carol
.sendMessage(
from,
{
[A_T.split("/")[0]]: { url: ABC.msg[0].url },
mimetype: A_T,
},
{ quoted: selo }
)
.catch((e) => {
return reply("Erro..");
});
} catch (e) {
return reply("Erro..");
}
break;

case "insta_audio":
case "instaaudio":
case "igaudio":
case "insta_audio":
try {
if (!q.trim())
return reply(`Exemplo: ${prefix + command} o link`);
ABC = await fetchJson(
`${API_URL2}/api-bronxys/instagram?url=${q.trim()}&apikey=${API_KEY_BRONXYS}`
);
reply("AGUARDE, REALIZANDO AÇÃO.");
let DM_T = ABC.msg[0].type;
var A_T =
DM_T === "webp"
? "image/webp"
: DM_T === "jpg"
? "image/jpeg"
: DM_T === "mp3"
? "audio/mpeg"
: "audio/mpeg";
carol
.sendMessage(
from,
{
[A_T.split("/")[0]]: { url: ABC.msg[0].url },
mimetype: A_T,
},
{ quoted: selo }
)
.catch((e) => {
return reply("Erro..");
});
} catch (e) {
return reply("Erro..");
}
break;

case "mediafire":
try {
if (!q.includes("mediafire.com"))
return reply(
"Faltando o link do mediafire para download do arquivo, cade?"
);
let nex = await fetchJson(
`${API_URL2}/api-bronxys/mediafire?url=${q}&apikey=${API_KEY_BRONXYS}`
);
reply(
`Enviando: ${nex.resultado[0].nama}\n\nPeso: ${nex.resultado[0].size}`
);
await carol.sendMessage(from, {
document: { url: nex.resultado[0].link },
mimetype: "application/" + nex.resultado[0].mime,
fileName: nex.resultado[0].nama,
});
} catch (error) {
console.log(error);
return reply(
"Deu um pequeno error, tente novamente mais tarde..."
);
}
break;

case "threads":
case "thdl":
if (q.length < 5)
return reply("Por favor, adicione um link do Threads post/reel.");
try {
await reagir(from, '✅');
data = await fetchJson(
API_URL +
`/api/download/threads?link=${q}&apikey=` +
API_KEY_CAROL
);
for (let i = 0; i < data.resultado.resultado.length; i++) {
let dmt = data.resultado.resultado[i].type;
mimety =
dmt === "video"
? "video/mp4"
: dmt === "webp"
? "image/webp"
: dmt === "imagem"
? "image/jpeg"
: dmt === "audio"
? "audio/mpeg"
: "video/mp4";
await carol.sendMessage(
from,
{
[mimety.split("/")[0]]: {
url: data.resultado.resultado[i].link,
},
mimetype: mimety,
},
{ quoted: selo }
);
}
} catch (error) {
return reply(mess.error());
}
break;

case "twtdl":
case "twitter":
if (q.length < 5)
return reply("Por favor, adicione um link do Threads post/reel.");
try {
await reagir(from, '✅');
data = await fetchJson(
API_URL +
`/api/download/twitter?url=${q}&apikey=` +
API_KEY_CAROL
);
for (let i = 0; i < data.resultado.media.length; i++) {
let dmt = data.resultado.media[i].type;
mimety =
dmt === "video"
? "video/mp4"
: dmt === "webp"
? "image/webp"
: dmt === "imagem"
? "image/jpeg"
: dmt === "audio"
? "audio/mpeg"
: "video/mp4";
await carol.sendMessage(
from,
{
[mimety.split("/")[0]]: {
url: data.resultado.media[i].url,
},
mimetype: mimety,
},
{ quoted: selo }
);
}
} catch (error) {
return reply(mess.error());
}
break;

case "multidl":
case "pocbi":
if (q.length < 5)
return reply(
"Por favor, adicione um link de uma rede social de mídia. (Ex.: Tiktok, insta, threads, etc...)"
);
try {
data = await fetchJson(
API_URL +
`/api/download/multi-download?url=${q}&apikey=` +
API_KEY_CAROL
);
for (let i = 0; i < data.resultado.medias.length; i++) {
let dmt = data.resultado.medias[i].extension;
mimety =
dmt === "mp4"
? "video/mp4"
: dmt === "webp"
? "image/webp"
: dmt === "jpg"
? "image/jpeg"
: dmt === "mp3"
? "audio/mpeg"
: "video/mp4";
await carol.sendMessage(
from,
{
[mimety.split("/")[0]]: {
url: data.resultado.medias[i].url,
},
mimetype: mimety,
},
{ quoted: selo }
);
}
} catch (error) {
return reply(mess.error());
}
break;

case "tksh":
case "tiktokstalker":
try {
if (!q) return reply("❌CADE O USUÁRIO DO TIKTOK");
const tikstalk = await fetchJson(
`${API_URL}/api/tiktokstalker/v3?usuario=${q}&apikey=${API_KEY_CAROL}`
);
textTik = tikstalk.resultado;
textTikTok = `╭━━━━━━━━━━━━━━━━━━━━╮
┃╭・────────────⟢
┃┆📝USERNAME:${textTik.usuario}.
┃┆📜NOME:${textTik.apelido}.
┃┆✔️SEGUIDORES:${textTik.seguidores_totais}.
┃┆✅SEGUINDO:${textTik.seguindo}.
┃┆📼VIDEO:${textTik.videos_totais}.
┃┆👍LIKES:${textTik.curtidas_totais}.
┃┆❤️CORAÇÕES MÉDIO:${textTik.media_curtidas}.
┃╰・────────────⟢
╰━━━━━━━━━━━━━━━━━━━━╯`;
carol.sendMessage(
from,
{
image: {url: textTik.foto_perfil},
caption: textTikTok,
},
{ quoted: selo }
);
console.log(textTik);
} catch (error) {
console.log(error);
}
break;

case "ttkvideo":
try {
await reagir(from, '🎥');
if (!q || q.trim() === "")
return reply(`[🇦🇱] Cadê o nome? ${pushname}`);
const url = `https://sugoiapi.space/api/tiktok-search?query=${encodeURIComponent(q)}&apikey=Bot-Academy`;
const response = await fetch(url).catch((err) => {
console.error("Erro ao consultar API:", err);
return reply("Erro: Falha ao conectar à API.");
});
if (!response || !response.ok) {
return reply(`Erro: API retornou status ${response?.status}`);
}
const text = await response.text();
let res;
try {
res = JSON.parse(text);
} catch (jsonError) {
console.error("Erro ao converter JSON:", jsonError);
return reply("Erro: Resposta da API não é um JSON válido.");
}

if (!res || !res.resultado || res.resultado.length === 0) {
return reply("Erro: Nenhum resultado encontrado na API.");
}

// Pega um resultado aleatório do array
const randomIndex = Math.floor(
Math.random() * res.resultado.length
);
const videoData = res.resultado[randomIndex];

// Envia o áudio do TikTok
if (videoData.no_watermark) {
await carol
.sendMessage(
from,
{
video: { url: videoData.no_watermark },
caption: videoData.title,
mimetype: "video/mp4",
},
{ quoted: selo }
)
.catch(console.error);
} else {
return reply("Erro: Não foi possível obter o áudio.");
}
} catch (e) {
console.error("Erro geral:", e);
await reply("Erro ao processar a solicitação.");
}
break;

case "igsh":
case "igstalker":
case "instastalk":
case "instastalker":
if (!q)
return reply(
"digite o username da pessoa que você deseja stalkear no instagram."
);
reply("pesquisando resultados.");
try {
igstalk = await fetchJson(
`${BaseYuxinzesite}/stalks/insta-stalk?username=${q}`
);
const hasil = `╭═══════════════════╮
┆『👤』 Nome de usuário: ${igstalk.resultado.usuario}
┆『👤』 Nome: ${igstalk.resultado.nome_completo}
┆『📜』 Biografia: ${igstalk.resultado.biografia}
┆『👥』 Seguidores: ${igstalk.resultado.seguidores}
┆『👥』 Seguindo: ${igstalk.resultado.seguindo}
┆『📸』 Postagens: ${igstalk.resultado.postagens}
┆『✅』 Verificado: ${igstalk.resultado.verificado ? "sim" : "não"}
┆『🔒』 Privado: ${igstalk.resultado.privado ? "sim" : "não"} 
╰═══════════════════╯`;
await carol.sendMessage(
from,
{
image: { url: igstalk.resultado.foto_perfil_hd },
caption: hasil,
},
{ quoted: selo }
);
} catch (e) {
console.log(e);
return reply(
"ocorreu um erro ao buscar o usuario, verifique ou tente novamente mais tarde"
);
}
break;

case "mediafire":
try {
if (!q.includes("mediafire.com"))
return reply(
"Faltando o link do mediafire para download do arquivo, cade?"
);
let nex = await fetchJson(
`${API_URL}/api/dl/mediafire?url=${q}&apikey=${API_KEY_CAROL}`
);
reply(
`Enviando: ${nex.filename}\n\nPeso: ${nex.filesize}`
);
await carol.sendMessage(from, {
document: { url: nex.link },
mimetype: "application/" + nex.mimetype,
fileName: nex.filename,
});
} catch (error) {
console.log(error);
return reply(
"Deu um pequeno error, tente novamente mais tarde..."
);
}
break;

case "play3":
try {
if (!q) return reply("🎵 Informe o nome da música");
await reagir(from, "⏳");

const play2 = await fetchJson(
`https://nexus-api.shop/youtube/play?query=${encodeURIComponent(q)}`
);

if (
!play2 ||
!play2.resultado ||
!play2.resultado.audio ||
!play2.resultado.imagem
) {
return reply("⚠️ | Não foi possível encontrar a música!");
}

const audioUrl = play2.resultado.audio;
const thumbnailUrl = play2.resultado.imagem;
const videoUrl = `https://youtube.com/watch?v=${play2.resultado.id}`;
const musicTitle = play2.resultado.titulo;
const musicDuration = play2.resultado.tempo;

await carol.sendMessage(from, {
document: { url: videoUrl },
mimetype: "application/pdf",
fileName: `${NomeDoBot}.pdf`,
caption: "🎶 Baixando música...",
contextInfo: {
externalAdReply: {
title: `🎼 ${musicTitle}`,
body: `🎧 Duração: ${musicDuration}`,
mediaType: 1,
thumbnailUrl: thumbnailUrl,
showAdAttribution: true,
renderLargerThumbnail: true,
},
},
});

await carol.sendMessage(
from,
{
audio: { url: audioUrl },
mimetype: "audio/mpeg",
fileName: `${musicTitle}.mp3`,
contextInfo: {
externalAdReply: {
title: `🤖Bot: ${NomeDoBot} `,
body: `Aqui está sua música`,
thumbnail: await getBuffer(thumbnailUrl),
mediaType: 1,
showAdAttribution: true,
sourceUrl: videoUrl,
},
},
},
{ quoted: selo }
);

await reagir("✅");
} catch (error) {
console.error(error);
await reagir("❌");
return reply("⚠️ Ocorreu um erro, tente novamente mais tarde!");
}
break;

case "perfilsticker":
{
//ph.46m
let user = sender;
if (
info.message.extendedTextMessage &&
info.message.extendedTextMessage.contextInfo.mentionedJid
) {
user =
info.message.extendedTextMessage.contextInfo
.mentionedJid[0] || sender;
}

const userNumber = user.replace("@s.whatsapp.net", "");

try {
let ppUrl;
try {
ppUrl = await carol.profilePictureUrl(
`${userNumber}@c.us`,
"image"
);
} catch {
ppUrl = "https://via.placeholder.com/512.png"; // Se não houver foto, usa uma imagem padrão
}

// Baixa a imagem da URL
const axios = require("axios");
const fs = require("fs");
const { exec } = require("child_process");

const response = await axios.get(ppUrl, {
responseType: "arraybuffer",
});
const buffer = Buffer.from(response.data, "binary");

// Salva a imagem temporariamente
const tempFile = `perfil_${userNumber}.jpg`;
const stickerFile = `perfil_${userNumber}.webp`;
fs.writeFileSync(tempFile, buffer);

// Metadados
const stickerPackName = ``;
const stickerPackPublisher = `👤 Usuário: ${pushname}`;

// Converte a imagem para figurinha
const command = `ffmpeg -i ${tempFile} -vf "scale=512:512:force_original_aspect_ratio=decrease" -c:v libwebp -lossless 1 -preset default -loop 0 -an -vsync 0 ${stickerFile}`;

exec(command, (err) => {
fs.unlinkSync(tempFile);
if (err) {
console.error(err);
return carol.sendMessage(
from,
{ text: "❌ Erro ao criar figurinha." },
{ quoted: selo }
);
}

// Envia a figurinha
carol.sendMessage(
from,
{ sticker: fs.readFileSync(stickerFile) },
{ quoted: selo }
);
fs.unlinkSync(stickerFile);
});
} catch (error) {
console.error(error);
carol.sendMessage(
from,
{ text: "❌ Erro ao obter a foto de perfil." },
{ quoted: selo }
);
}
}
break; //ph.46m

case "googledrive":
case "drive":
case "gdrive":
if (!q)
return reply(
"por favor digite o link do video do Google drive que você deseja baixar."
);
reply("enviando resultados.");
try {
drive = await fetchJson(
`${BaseYuxinzesite}/download/googledrive?url=${q}`
);

await carol.sendMessage(
from,
{
video: { url: drive.resultado.arquivo },
caption: `『𝐃𝐑𝐈𝐕𝐄 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑』`,
},
{ quoted: selo }
);
} catch (e) {
console.log(e);
return reply("ocorreu um erro ao baixar o seu vídeo do drive");
}
break;

case "gitclone":
let regex1 =
/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
if (!q)
return reply(
`Exemplo: ${prefix}gitclone https://github.com/whiskeysockets/baileys`
);
await reagir(from, '✅');
let [user, repo] = args[0].match(regex1) || [];
repo = repo.replace(/.git$/, "");
let filename = (await fetch(url, { method: "HEAD" })).headers
.get("content-disposition")
.match(/attachment; filename=(.*)/)[1];
await carol
.sendMessage(
from,
{
document: {
url: `https://api.github.com/repos/${user}/${repo}/zipball`,
},
fileName: filename + ".zip",
mimetype: "application/zip",
},
{ quoted: selo }
)
.catch(async (error) => {
return reply(mess.error());
});
break;

case "antiimg":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isAntiImg)
return reply("O recurso de anti imagem já está ativado.");
dataGp[0].antiimg = true;
setGp(dataGp);
reply(
"Ativou com sucesso o recurso de anti imagem neste grupo.️"
);
} else if (Number(args[0]) === 0) {
if (!isAntiImg)
return reply("O recurso de anti imagem já está desativado.");
dataGp[0].antiimg = false;
setGp(dataGp);
reply(
"Desativou com sucesso o recurso de anti imagem neste grupo."
);
} else {
reply("1 para ativar, 0 para desativar.");
}
break;

case "antivideo":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isAntiVid)
return reply("O recurso de anti vídeo já está ativado.");
dataGp[0].antivideo = true;
setGp(dataGp);
reply("Ativou com sucesso o recurso de anti video neste grupo.");
} else if (Number(args[0]) === 0) {
if (!isAntiVid)
return reply("O recurso de anti vídeo já está desativado.");
dataGp[0].antivideo = false;
setGp(dataGp);
reply(
"Desativou com sucesso o recurso de anti video neste grupo."
);
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "antiaudio":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isAntiAudio)
return reply("O recurso de anti áudio já está ativado.");
dataGp[0].antiaudio = true;
setGp(dataGp);
reply("Ativou com sucesso o recurso de anti audio neste grupo.");
} else if (Number(args[0]) === 0) {
if (!isAntiAudio)
return reply("O recurso de anti áudio já está desativado.");
dataGp[0].antiaudio = false;
setGp(dataGp);
reply(
"Desativou com sucesso o recurso de anti audio neste grupo."
);
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "antisticker":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isAntiSticker)
return reply("O recurso de anti sticker já está ativado.");
dataGp[0].antisticker = true;
setGp(dataGp);
reply(
"Ativou com sucesso o recurso de anti sticker neste grupo."
);
} else if (Number(args[0]) === 0) {
if (!isAntiSticker)
return reply("O recurso de anti sticker já está desativado.");
dataGp[0].antisticker = false;
setGp(dataGp);
reply(
"Desativou com sucesso o recurso de anti sticker neste grupo."
);
} else {
reply("1 para ativar, 0 para desativar.");
}
break;

case "antidocumento":
case "antidoc":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (Antidoc)
return reply("O recurso de anti documento já está ativado.");
dataGp[0].antidoc = true;
setGp(dataGp);
reply(
"Ativou com sucesso o recurso de anti documento neste grupo."
);
} else if (Number(args[0]) === 0) {
if (!Antidoc)
return reply("O recurso de anti documento já está desativado.");
dataGp[0].antidoc = false;
setGp(dataGp);
reply(
"Desativou com sucesso o recurso de anti documento neste grupo."
);
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "antictt":
case "anticontato":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isAntiCtt)
return reply("O recurso de anti contato já está ativado.");
dataGp[0].antictt = true;
setGp(dataGp);
reply(
"Ativou com sucesso o recurso de anti contato neste grupo."
);
} else if (Number(args[0]) === 0) {
if (!isAntiCtt)
return reply("O recurso de anti contato já está desativado.");
dataGp[0].antictt = false;
setGp(dataGp);
reply(
"️Desativou com sucesso o recurso de anticontato neste grupo.️"
);
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "antiloc":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (Antiloc)
return reply("O recurso de anti loc já está ativado.");
dataGp[0].antiloc = true;
setGp(dataGp);
reply("Ativou com sucesso o recurso de anti loc neste grupo.");
} else if (Number(args[0]) === 0) {
if (!Antiloc)
return reply("O recurso de anti loc já está desativado.");
dataGp[0].antiloc = false;
setGp(dataGp);
reply("Desativou com sucesso o recurso de anti loc neste grupo.");
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "antiddd":
case "anti_ddd":
case "anti-ddd":
if (!isGroup) return await reply(mess.onlyGroup());
if (!isGroupAdmins) return await reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return await reply(mess.onlyBotAdmin());
if (args.length < 1)
return await reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isAntiDDD)
return await reply(
"Este recurso já está ativado atualmente senhor(a)!"
);
dataGp[0].ANTI_DDD.active = true;
setGp(dataGp);
await reply(
"(♥️) O recurso de remoção de números com DDD adicionado à lista, foi ativado com sucesso!"
);
} else if (Number(args[0]) === 0) {
if (!isAntiDDD)
return await reply(
"Este recurso já está desativado atualmente senhor(a)!"
);
dataGp[0].ANTI_DDD.active = false;
setGp(dataGp);
await reply(
"(♥️) O recurso de remoção de números com DDD adicionado à lista, foi desativado com sucesso!"
);
} else {
await reply("1 para ativar, 0 para desativar.");
}
break;

case "antiddd-list":
if (!isGroup) return await reply(mess.onlyGroup());
if (!isAntiDDD)
return await reply(
`Para usar este comando, você deve ativar o comando: antiddd\nExemplo: ${prefix}antiddd 1.`
);
if (dataGp[0].ANTI_DDD.listaProibidos.length < 1)
return await reply(
`[!] Não existe nenhum ddd proibido neste grupo. Para adicionar à lista, use: ${prefix}add_ddd 21, por exemplo.`
);
await reply(
`Aqui está a lista de DDD proibidos no grupo: '${groupName}':\n• *[Total: ${dataGp[0].ANTI_DDD.listaProibidos.length}]* - ${dataGp[0].ANTI_DDD.listaProibidos.map((v, index) => v).join(", ")}`
);
break;

case "add_ddd":
if (!isGroup) return await reply(mess.onlyGroup());
if (!isGroupAdmins) return await reply(mess.onlyAdmins());
if (!isAntiDDD)
return await reply(
`Para usar este comando, você deve ativar o comando: antiddd\nExemplo: ${prefix}antiddd 1.`
);
if (!q.trim())
return await reply(
"Determine o DDD que você deseja adicionar na lista, não pode conter espaço vázio."
);
if (q.trim() === 2)
return await reply(
`Um DDD possuí 2 dígitos numéricos, por exemplo: 81 (Este DDD pertence à Pernambuco).`
);
if (dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()) >= 0)
return await reply(
`Esse DDD já se encontra incluso, procure ver na lista dos DDDs banidos no grupo, use: '${prefix}antiddd-list'`
);
if (arrayDDDs.indexOf(q.trim()) >= 0)
return await reply(
"O DDD preenchido é inválido, não existe nenhum número com este DDD atualmente."
);
dataGp[0].ANTI_DDD.listaProibidos.push(q.trim());
setGp(dataGp);
await reply(
`• O DDD '${q.trim()}' foi adicionado com sucesso à blacklist, agora os números que tiver o DDD de ${extractStateFromDDD(q.trim())} será imediatamente banido do grupo.`
);
break;

case "delete_ddd":
case "del_ddd":
case "rm_ddd":
if (!isGroup) return await reply(mess.onlyGroup());
if (!isGroupAdmins) return await reply(mess.onlyAdmins());
if (!isAntiDDD)
return await reply(
`Para usar este comando, você deve ativar o comando: antiddd\nExemplo: ${prefix}antiddd 1.`
);
if (!q.trim())
return await reply(
"Determine o DDD que você deseja remover da lista, não pode conter espaço vázio."
);
if (q.trim() === 2)
return await reply(
`Calma, só pode ser removido um DDD por vez.\n• Exemplo: ${prefix + command} 84, aí o bot não vai mais remover os DDDs pertencentes à Rio Grande do Sul.`
);
if (dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()) < 0)
return await reply(
`Este DDD não está incluso, procure ver na lista dos DDDs excluídos para este grupo. Use: ${prefix}antiddd-list`
);
if (dataGp[0].ANTI_DDD.listaProibidos.length == 0)
return await reply(
"A lista atualmente está vázia, então não tem como remover nenhum DDD, adicione pelo menos um."
);
dataGp[0].ANTI_DDD.listaProibidos.splice(
dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()),
1
);
setGp(dataGp);
await reply(
`O DDD '${q.trim()}' tirado com sucesso da lista de DDDs excluídos do grupo com sucesso, agora o bot não irá mais impedir à entrada deles.`
);
break;

case "antilinkgp":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isAntilinkgp)
return reply("O recurso de antilink de grupo já está ativado.");
dataGp[0].antilinkgp = true;
setGp(dataGp);
reply("Ativou com sucesso o recurso de antilink de grupo.");
} else if (Number(args[0]) === 0) {
if (!isAntilinkgp)
return reply(
"O recurso de antilink de grupo já está desativado."
);
dataGp[0].antilinkgp = false;
setGp(dataGp);
reply("Desativou com sucesso o recurso de antilink de grupo.");
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "antilinkhard":
case "antilink":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isAntiLinkHard)
return reply("O recurso de antilink hardcore já está ativado.");
dataGp[0].antilinkhard = true;
setGp(dataGp);
reply(
"Ativou com sucesso o recurso de antilink hardcore neste grupo."
);
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard)
return reply(
"O recurso de antilink hardcore já está desativado."
);
dataGp[0].antilinkhard = false;
setGp(dataGp);
reply(
"Desativou com sucesso o recurso de antilink harcore neste grupo.️"
);
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "antilinkeasy":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isAntiLinkEasy)
return reply("O recurso de antilink easy já está ativado.");
dataGp[0].antilinkeasy = true;
setGp(dataGp);
reply(
"Ativou com sucesso o recurso de antilink easy neste grupo."
);
} else if (Number(args[0]) === 0) {
if (!isAntiLinkEasy)
return reply("O recurso de antilink easy já está desativado.");
dataGp[0].antilinkeasy = false;
setGp(dataGp);
reply(
"Desativou com sucesso o recurso de antilink easy neste grupo.️"
);
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "x9":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isx9) return reply("O recurso de x9 já está ativado.");
dataGp[0].x9 = true;
setGp(dataGp);
reply(
"Ativou com sucesso o recurso de x9 neste grupo, irei notificar quando alguém for rebaixado/promovido a adm e também quando ouver fixação/desafixação de mensagem do(s) adminstrador(es)."
);
} else if (Number(args[0]) === 0) {
if (!isx9) return reply("O recurso de x9 já está desativado.");
dataGp[0].x9 = false;
setGp(dataGp);
reply(
"Desativou com sucesso o recurso de x9 neste grupo, não irei mais notificar promoção de adm nem rebaixamento ou fixação/desafixação de mensagem do(s) adminstrador(es)."
);
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "visualizarmsg":
if (!SoDono) return reply(mess.onlyOwner());
if (!isVisualizar) {
nescessario.visualizarmsg = true;
setNes(nescessario);
reply(
"Ativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado."
);
} else if (isVisualizar) {
nescessario.visualizarmsg = false;
setNes(nescessario);
reply(
"Desativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado."
);
}
break;

case "x9visuunica":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isX9VisuUnica)
return reply(
"O recurso de revelar visu única já está ativado."
);
dataGp[0].visuUnica = true;
setGp(dataGp);
reply(
"Ativou com sucesso o recurso de revelar visu única neste grupo."
);
} else if (Number(args[0]) === 0) {
if (!isX9VisuUnica)
return reply(
"O recurso de revelar visu única já está desativado."
);
dataGp[0].visuUnica = false;
setGp(dataGp);
reply(
"Desativou com sucesso o recurso de revelar visu única neste grupo."
);
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "so_adm":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (So_Adm)
return reply(
"O modo para somente adminstradores usarem o bot, já se encontra ativo no grupo senhor(a)!"
);
dataGp[0].soadm = true;
setGp(dataGp);
reply(
"Ativou com sucesso o recurso de só adm utilizar comandos neste grupo."
);
} else if (Number(args[0]) === 0) {
if (!So_Adm)
return reply(
"O modo para somente adminstradores usarem o bot atualmente já está desativado no grupo."
);
dataGp[0].soadm = false;
setGp(dataGp);
reply(
"Desativou o recurso de só adm utilizar comandos neste grupo.️"
);
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "odelete":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (IS_DELETE)
return reply("O recurso de delete já está ativado.");
nescessario.Odelete = true;
setNes(nescessario);
reply("Ativou com sucesso o recurso de delete nos grupos.");
} else if (Number(args[0]) === 0) {
if (!IS_DELETE)
return reply("O recurso de delete já está desativado.");
nescessario.Odelete = false;
setNes(nescessario);
reply("️Desativou com sucesso o recurso de delete nos grupos.️");
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "antifake":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isAntifake)
return reply(
"O recurso de antifake neste grupo já está ativado."
);
dataGp[0].antifake = true;
setGp(dataGp);
reply("Ativou com sucesso o recurso de antifake neste grupo!");
} else if (Number(args[0]) === 0) {
if (!isAntifake)
return reply(
"O recurso de antifake neste grupo já está desativado."
);
dataGp[0].antifake = false;
setGp(dataGp);
reply("Desativou com sucesso o recurso de antifake neste grupo!");
} else {
reply("1 para ativar, 0 para desativar.");
}
break;

case "prefixos":
if (!isGroup) return reply(mess.onlyGroup());
if (!isMultiP)
return reply(
`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`
);
if (dataGp[0].prefixos.length < 1)
return reply(
"Não contem nenhum prefixo a mais adicionado neste grupo."
);
reply(
`Lista de prefixos para uso do bot, no Grupo: *${groupName}*:\n• *[Total: ${dataGp[0].prefixos.length}]* - ${dataGp[0].prefixos.map((v, index) => `( ${v} )`).join(", ")}`
);
break;

case "add_prefixo":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isMultiP)
return reply(
`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`
);
if (ANT_LTR_MD_EMJ(q))
return reply("Não pode letra modificada, nem emoji..");
if (!q.trim())
return reply(
"Determine o novo prefixo, não pode espaço vazio..."
);
if (q.trim() > 1)
return reply(
`Calma, o prefixo só pode ser um\nExemplo: ${prefix + command} _\nAe o bot vai passar á responder _ como prefixo do bot..`
);
if (dataGp[0].prefixos.indexOf(q.trim()) >= 0)
return reply(
`Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`
);
dataGp[0].prefixos.push(q.trim());
setGp(dataGp);
reply(
`Prefixo ${q.trim()} foi adicionado com sucesso na lista de prefixos para uso do bot, neste grupo...`
);
break;

case "tirar_prefixo":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isMultiP)
return reply(
`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`
);
if (ANT_LTR_MD_EMJ(q))
return reply("Não pode letra modificada, nem emoji..");
if (!q.trim())
return reply(
"Determine o prefixo que deseja tirar, não pode espaço vazio..."
);
if (q.trim() > 1)
return reply(
`Calma, o prefixo só pode ser tirado um por vez..\nExemplo: ${prefix + command} _\nAe o bot não vai responder mais com _`
);
if (dataGp[0].prefixos.indexOf(q.trim()) < 0)
return reply(
`Esse prefixo não está incluso, procure ver na lista dos prefixos. Veja: ${prefix}prefixos`
);
if (dataGp[0].prefixos.length == 1)
return reply(
"Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro."
);
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1);
setGp(dataGp);
reply(
`Prefixo ${q.trim()} tirado com sucesso da lista de prefixos de uso deste grupo..`
);
break;

case "multiprefixo":
case "multiprefix":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isMultiP) {
dataGp[0].multiprefix = true;
setGp(dataGp);
reply(
"Ativou com sucesso o recurso de multi prefixos neste grupo."
);
}
if (isMultiP) {
dataGp[0].multiprefix = false;
setGp(dataGp);
reply(
"Desativou com sucesso o recurso de multi prefixos neste grupo."
);
}
break;

case "ephemeral":
case "msgtemp":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
getInfoG =
await carol.groupMetadata(
from
); /* Pegar as informações total do grupo! */
if (getInfoG.ephemeralDuration == undefined) {
reply(
`As mensagens temporárias no grupo foram ativadas com sucesso.`
);
await carol.sendMessage(from, {
disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL,
});
} else if (getInfoG.ephemeralDuration > 1) {
reply(
`As mensagens temporárias no grupo foram desativadas com sucesso.`
);
await carol.sendMessage(from, {
disappearingMessagesInChat: false,
});
}
break;

case "rmphotogp":
case "rmfotogroup":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
reply(`A foto do grupo foi removida com sucesso.`);
await carol.removeProfilePicture(from);
break;

case "antinotas":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isAntiNotas)
return reply(
"O recurso de anti notas já está ativado no grupo."
);
dataGp[0].antinotas = true;
setGp(dataGp);
reply("Ativou com sucesso o recurso de anti notas neste grupo.️");
} else if (Number(args[0]) === 0) {
if (!isAntiNotas)
return reply(
"O recurso de anti notas já está desativado no grupo."
);
dataGp[0].antinotas = false;
setGp(dataGp);
reply(
"Desativou com sucesso o recurso de anti notas neste grupo.️"
);
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "anticatalogo":
case "anticatalg":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isAnticatalogo)
return reply(
"O recurso de anti catálogos já se encontra ativo no grupo atualmente."
);
dataGp[0].anticatalogo = true;
setGp(dataGp);
reply(
"Ativou com sucesso o recurso de anticatalogo neste grupo."
);
} else if (Number(args[0]) === 0) {
if (!isAnticatalogo)
return reply(
"O recurso atualmente se encontra desativado no grupo."
);
dataGp[0].anticatalogo = false;
setGp(dataGp);
reply(
"Desativou com sucesso o recurso de anticatalogo neste grupo.️"
);
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "bemvindo":
case "welcome":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (args.length < 1)
return reply(
`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `
);
if (Number(args[0]) === 1) {
if (isWelkom2)
return reply("O recurso já está ativado no grupo.");
dataGp[0].wellcome[0].bemvindo1 = true;
setGp(dataGp);
reply("O recurso foi ativado.");
} else if (Number(args[0]) === 0) {
if (!isWelkom2)
return reply("O recurso não está ativado no grupo.");
dataGp[0].wellcome[1].bemvindo2 = false;
setGp(dataGp);
reply("O recurso foi desativado.");
} else {
reply(
`Digite da forma correta, ${prefix + command} 1, para ativar e 0 para desativar`
);
}
break;

case "legendabv":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (args.length < 1)
return reply("*Escreva a mensagem de boas-vindas*");
teks = body.slice(11);
if (isWelkom) {
dataGp[0].wellcome[0].legendabv = teks;
setGp(dataGp);
reply("*Mensagem de boas vindas definida com sucesso!*");
} else {
reply(`Ative o ${prefix}bemvindo 1`);
}
break;

case "legendabv2":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (args.length < 1)
return reply("*Escreva a mensagem de boas-vindas*");
teks = body.slice(12);
if (isWelkom2) {
dataGp[0].wellcome[1].legendabv = teks;
setGp(dataGp);
reply("*Mensagem de boas vindas2 definida com sucesso!*");
} else {
reply(`Ative o ${prefix}bemvindo2 1`);
}
break;

case "legendasaiu":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (args.length < 1)
return reply(
"Escreva a mensagem de saída ou para desativar, use: 0"
);
teks = body.slice(13);
if (isWelkom) {
dataGp[0].wellcome[0].legendasaiu = Number(teks) === 0 ? 0 : teks;
setGp(dataGp);
reply("Mensagem de saída do bemvindo foi definida com sucesso!");
} else {
reply(
`Ative o ${prefix}bemvindo para o recurso de edição de mensagem.`
);
}
break;

case "legendasaiu2":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (q.length < 1)
return reply(
"Escreva a mensagem de saída ou para desativar, use: 0"
);
if (isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = Number(teks) === 0 ? 0 : q;
setGp(dataGp);
reply("Mensagem de saída do bemvindo2 foi definida com sucesso!");
} else {
reply(
`Ative o ${prefix}bemvindo2 para o recurso de edição de mensagem.`
);
}
break;

case "legenda_estrangeiro":
case "legenda_estrangeiros":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (args.length < 1)
return reply("*Escreva a mensagem de remoção de estrangeiros*");
if (isAntifake) {
dataGp[0].legenda_estrangeiro = q;
setGp(dataGp);
reply(
"*Mensagem de remoção de estrangeiros definida com sucesso!*"
);
} else {
reply(
`Ative o antifake primeiro para definir uma legenda, com: ${prefix}antifake 1`
);
}
break;

case "legenda_video":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (args.length < 1)
return reply("*Escreva a mensagem de remoção no antivideo*");
if (isAntiVid) {
dataGp[0].legenda_video = q;
setGp(dataGp);
reply("*Mensagem de remoção de video definida com sucesso!*");
} else {
reply(
`Ative o antivideo primeiro para definir uma legenda, com: ${prefix}antivideo`
);
}
break;

case "legenda_imagem":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (args.length < 1)
return reply("*Escreva a mensagem de remoção no antiimg*");
if (isAntiImg) {
dataGp[0].legenda_imagem = q;
setGp(dataGp);
reply("*Mensagem de remoção de imagem definida com sucesso!*");
} else {
reply(
`Ative o anti-imagem primeiro para definir uma legenda, com: ${prefix}antiimg`
);
}
break;

case "legenda_documento":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (args.length < 1)
return reply("*Escreva a mensagem de remoção no antidoc*");
if (Antidoc) {
dataGp[0].legenda_documento = q;
setGp(dataGp);
reply("*Mensagem de remoção de documento definida com sucesso!*");
} else {
reply(
`Ative o antidoc primeiro para definir uma legenda, com: ${prefix}antidoc 1`
);
}
break;

case "addautorm":
case "addautoban":
case "listanegra":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono)
return reply("Precisa ser Dono ou Adm");
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (!mrc_ou_numero)
return reply(
"Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra.."
);
if (dataGp[0].listanegra.includes(mrc_ou_numero))
return reply("*Esse Número ja esta incluso*");
dataGp[0].listanegra.push(mrc_ou_numero);
setGp(dataGp);
reply(`*Número adicionado a lista de autoban*`);
break;

case "autobang":
case "listanegrag":
if (!SoDono) return reply(mess.onlyOwner());
if (!mrc_ou_numero)
return reply(
"Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global.."
);
if (listanegraG.includes(mrc_ou_numero))
return reply("*Esse Número ja esta incluso*");
listanegraG.push(mrc_ou_numero);
fs.writeFileSync(
"./configs/nescessario.json",
JSON.stringify(nescessario, null, "\t")
);
reply(`*Número adicionado a lista de autoban*`);
break;

case "tirardalistag":
if (!SoDono) return reply(mess.onlyOwner());
if (!mrc_ou_numero)
return reply(
"Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra.."
);
if (!listanegraG.includes(mrc_ou_numero))
return reply("*Esse Número não esta incluso*");
var i = listanegraG.indexOf(mrc_ou_numero);
listanegraG.splice(i, 1);
fs.writeFileSync(
"./configs/nescessario.json",
JSON.stringify(nescessario, null, "\t")
);
reply(`*Número foi removido da lista negra*`);
break;

case "delremover":
case "delautorm":
case "delautoban":
case "tirardalista":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (!mrc_ou_numero)
return reply(
"Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra.."
);
if (!dataGp[0].listanegra.includes(mrc_ou_numero))
return reply("*Esse Número não esta incluso*");
var i = dataGp[0].listanegra.indexOf(mrc_ou_numero);
dataGp[0].listanegra.splice(i, 1);
setGp(dataGp);
reply(`*Número foi removido da lista de autoban*`);
break;

case "listban":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (dataGp[0].listanegra.length < 1)
return reply("*Nenhum Número não foi adicionado*");
teks = "*Números que vou moer na porrada se voltar:*\n";
for (i = 0; i < dataGp[0].listanegra.length; ++i) {
teks += `➤ *${dataGp[0].listanegra[i].split("@")[0]}*\n`;
}
teks += "*Esses ai vou descer meu martelo do ban.*";
reply(teks);
break;

case "mute":
case "mutar":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (!menc_os2)
return reply(
`🎯 Por favor, mencione o usuário ou marque a mensagem do alvo que você deseja mutar.`
);
if (menc_os2 == botNumber)
return reply("❌️️ Não é possível mutar o bot! Você é louco?");
if (menc_os2 == SoDono)
return reply(
"Quem você pensa que é, para mutar meu proprietário(a)?"
);
if (vip.map((i) => i.id).includes(menc_os2))
return reply(
"❌️️ Não é possível mutar usuários que contém vip no bot!"
);
if (groupAdmins.includes(menc_os2))
return reply(
"❌️ Não é possível mutar um(a) adminstrador(a) do grupo."
);
if (!JSON.stringify(groupMembers).includes(menc_os2))
return reply(
"❌ ️Não é possível mutar uma pessoa que atualmente não participa mais deste grupo."
);
if (
muted[muted.map((i) => i.grupo).indexOf(from)].usus.includes(
menc_os2
)
)
return mention(
`O participante: '@${menc_os2.split("@")[0]}' já está na lista de mutados, para desmutar o usuário, use: ${prefix}desmute.`
);
//// ADICIONA O USUÁRIO À LISTA:
mention(
`O participante '@${menc_os2.split("@")[0]}' foi mutado pelo administrador: '@${sender.split("@")[0]}'. Se ele(a) falar alguma coisa, será removido do grupo!`
);
muted[muted.map((i) => i.grupo).indexOf(from)].usus.push(menc_os2);
fs.writeFileSync(
"./bunker/database/grupos/muted.json",
JSON.stringify(muted, null, 2)
);
break;

case "desmute":
case "desmutar":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (!menc_os2)
return reply(
`🎯 Por favor, mencione o usuário ou marque a mensagem do alvo que você deseja desmutar.`
);
if (
!muted[muted.map((i) => i.grupo).indexOf(from)].usus.includes(
menc_os2
)
)
return mention(
`O participante: '@${menc_os2.split("@")[0]}' não está na lista de mutados do grupo.`
);
//// REMOVE O USUÁRIO DA LISTA:
mention(
`O participante '@${menc_os2.split("@")[0]}' foi desmutado com sucesso pelo adminstrador(a): '@${sender.split("@")[0]}'.`
);
muted[muted.map((i) => i.grupo).indexOf(from)].usus.splice(
menc_os2
);
fs.writeFileSync(
"./bunker/database/usuarios/muted.json",
JSON.stringify(muted, null, 2)
);
break;

case "mutelist":
case "listamutados":
if (muted[muted.map((i) => i.grupo).indexOf(from)].usus.length == 0)
return reply(`Não existe nenhum usuário mutado neste grupo.`);
usus__ = `[Total: *${muted[muted.map((i) => i.grupo).indexOf(from)].usus.length}*] - Lista de participantes mutados no grupo:\n–\n`;
usus__ += muted[muted.map((i) => i.grupo).indexOf(from)].usus
.map((v, index) => `• *[${index + 1}]* - @${v.split("@")[0]}`)
.join("\n");
await mention(usus__);
break;

case "roletarussa":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
TAMBOR = [
"na perna.",
"na cabeça.",
"no pescoço.",
"no peito.",
"no olho.",
"no estômago.",
"na boca.",
"na perna.",
"na testa.",
"no braço.",
];
C2 = somembros[Math.floor(Math.random() * somembros.length)];
if (somembros.length == 0)
return reply(
"Não existe *membros comuns* no grupo, somente admins."
);
if (C2 === sender || C2 === botNumber)
return mentions(
`Escolhi *@${C2.split("@")[0]}*, mas conseguiu escapar...`,
[C2],
true
);
if (C2 === sender || C2 === SoDono)
return mentions(
`Escolhi *@${C2.split("@")[0]}*, mas conseguiu escapar...`,
[C2],
true
);
reply(
`A escolha é minha! 1 membro irá morrer, que os jogos comecem...`
);
setTimeout(async () => {
await mentions(
`Que pena... você não sobreviveu ao meu jogo *@${C2.split("@")[0]}*, hora de enterrar o cadáver, infelizmente morreu com tiro ${TAMBOR[Math.floor(Math.random() * TAMBOR.length)]}`,
[C2],
true
);
}, 5000);
setTimeout(async () => {
await carol.groupParticipantsUpdate(from, [C2], "remove");
}, 6000);
break;

case "dinextenso":
if (!q.includes("."))
return reply(
`❌️ - Coloque apenas números para realizar a transformação de digitos numérico para números em extenso.\nPor exemplo: *${prefix}dinextenso 500.00 ou 756.50*, tudo que você colocar os valores deve colocar um ponto(.) para converter os valores.`
);
try {
data = await fetchJson(
`https://api.invertexto.com/v1/number-to-words?token=${API_KEY_INVERTEXTO}&number=${q}&language=pt&currency=BRL`
);
reply(`*${q}* : ${capitalizeFirstLetter(data.text)}`);
} catch (error) {
reply(mess.error());
}
break;

case "validarcpf":
case "validarcnpj":
if (command === "validarcpf") {
if (!q)
return reply(
"Digite um CPF para realizar a verificação se é válido ou inválido..."
);
if (q.length < 11)
return reply(
"Você digitou um cpf que não tem 11 dígitos, verifique se colocou pontuação, se estiver retire."
);
try {
data = await fetchJson(
`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`
);
if (data.valid == true) return reply("Válido.");
if (data.valid == false) return reply("Inválido.");
} catch (error) {
reply(mess.error());
}
} else if (command === "validarcnpj") {
if (!q)
return reply(
"Digite um CNPJ para realizar a verificação se é válido ou inválido!"
);
if (q.length < 14)
return reply(
"Você digitou um CNPJ que não tem 14 dígitos, verifique se colocou pontuação, se estiver retire."
);
try {
data = await fetchJson(
`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`
);
if (data.valid == true) return reply("Válido.");
if (data.valid == false) return reply("Inválido.");
} catch (error) {
reply(mess.error());
}
}
break;

case "createimg":
case "texttoimage":
case "imagine":
if (!q)
return reply(
`O que você deseja criar amiguinho? Coloque após o comando o que você deseja criar... Por exemplo: ${prefix + command} macaco dirigindo uma bmw`
);
try {
await replyWithReaction(
"Olá, estou criando a imagem a partir de seu questionamento, aguarde senhor(a)...",
{ react: { text: "🎨", key: info.key } }
);
dataResultAI = await fetchJson(
`https://hercai.onrender.com/v3/text2image?prompt=${q}`
);
await carol.sendMessage(
from,
{ image: { url: dataResultAI.url } },
{ quoted: selo }
);
} catch (error) {
await replyWithReaction(mess.error(), {
react: { text: "❌", key: info.key },
});
}
break;

case "pergunta":
case "openai":
case "gpt":
case "chatgpt":
try {
reply(
"Aguarde, criando / pesquisando sobre o que esta perguntando ou pedindo."
);
ABC = await fetchJson(
`${API_URL2}/api-bronxys/PERGUNTE_E_EU_RESPONDO?q=${q.trim()}&apikey=${API_KEY_BRONXYS}`
);
reply(`( ${ABC.msg} )`);
} catch {
reply("Erro..");
}
break;

case "gemini":
try {
if (!q) return reply("Pergunta não fornecida.");
let { key } = await carol.sendMessage(
from,
{ text: `Estou processando sua pergunta...` },
{ quoted: selo }
);
let urlg = `${API_URL3}/api/ias/gemini/gemini-2.5?apikey=${API_KEY_NEX}&query=${q}`;
let gemipro = await fetchJson(urlg);
await carol.sendMessage(from, {
text: gemipro.resultados.resposta,
edit: key,
});
} catch (error) {
console.log(error);
return reply("Deu um pequeno erro, tente novamente mais tarde.");
}
break;

case "gpt-3.5":
case "chatgpt-3.5":
try {
if (!q)
return reply("Você esqueceu de perguntar ao lado do comando.");
let { key } = await carol.sendMessage(
from,
{
text: `Estou processando sua pergunta, isso pode levar alguns segundos...`,
},
{ quoted: selo }
);
data = await fetchJson(`https://aemt.me/turbo?text=${q}`);
await carol.sendMessage(from, {
text: `${data.result}`,
edit: key,
});
} catch (error) {
reply(mess.error());
}
break;

case "redacao":
if (!q)
return reply(
`Você esqueceu de colocar o tema de sua redação ao lado do comando.`
);
try {
let { key } = await carol.sendMessage(
from,
{
text: `Estou processando sua solicitação. Isso pode levar alguns segundos...`,
},
{ quoted: selo }
);
promptUser = `Crie um texto dissertativo-argumentativo com o tema: ${q}`;
anu1 = await fetchJson(`https://aemt.me/gpt4?text=${promptUser}`);
await carol.sendMessage(from, {
text: mess.respostaRedacao(anu1),
edit: key,
});
} catch (error) {
return reply(mess.error());
}
break;

case "summerize":
if (!q)
return reply(
`Você esqueceu de colocar o que você deseja resumir ao lado do comando.`
);
try {
let { key } = await carol.sendMessage(
from,
{
text: `Estou resumindo o texto solicitado. Isso pode levar alguns segundos...`,
},
{ quoted: selo }
);
promptUser = `Faça um resumo básico do texto apresentado: ${q}`;
anu1 = await fetchJson(`https://aemt.me/gpt4?text=${promptUser}`);
await carol.sendMessage(from, {
text: mess.respostaResumida(anu1),
edit: key,
});
} catch (error) {
return reply(mess.error());
}
break;

case "wikipedia":
case "wiki":
try {
if (!q) return reply(`Exemplo: ${prefix + command} JavaScript`);
reply(`Aguarde, pesquisando sobre o que está perguntando..`);
wikip = await axios.get(
`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`
);
wikis = await axios.get(
`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`
);
reply(mess.wikiResposta(wikis));
} catch (error) {
reply(mess.error());
}
break;

case "nasa":
try {
if (!q) return reply(`*Exemplo:* ${prefix}${command} 19-10-2007`);
dataAkam = await fetchJson(
API_URL +
`/api/pesquisa/nasa_apod?data=${q}&apikey=` +
API_KEY_CAROL
);
resultExp = await fetchJson(
API_URL +
`/api/outros/translate?texto=${dataAkam.nasa.explanation}&ling=pt&apikey=` +
API_KEY_CAROL
);
await carol.sendMessage(
from,
{
image: { url: dataAkam.nasa.hdurl },
caption: mess.result_APOD(dataNaga, resultExp),
},
{ quoted: selo }
);
} catch (error) {
reply(mess.error());
}
break;

case "book":
if (args.length == 0)
return reply(`*Exemplo:* ${prefix + command} Nome do Livro`);
try {
const takeBook = await axios.get(
`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&langRestrict=pt`
);
const getBook = await axios.get(
`${takeBook.data.items[0].selfLink}`
);
var bookImage = await getBuffer(
getBook.data.volumeInfo.imageLinks.thumbnail
);
await carol.sendMessage(
from,
{ image: bookImage, caption: mess.searchBooks(getBook) },
{ quoted: selo }
);
} catch (error) {
reply(mess.error());
}
break;

case "clima":
if (args.length == 0)
return reply(`*Exemplo:* ${prefix}Clima Maceió`);
try {
const wttrin = (
await axios.get(
`https://pt.wttr.in/${encodeURIComponent(q)}?format=j1`
)
).data;
var wttrImage = await getBuffer(
`https://wttr.in/${encodeURIComponent(q)}.png`
);
await carol.sendMessage(
from,
{ image: wttrImage, caption: mess.clima(wttrin) },
{ quoted: selo }
);
} catch (error) {
reply(mess.error());
}
break;

case "simi":
if (!isGroup) return reply(mess.onlyGroup());
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {
method: "POST",
headers: {
"content-type": "application/x-www-form-urlencoded",
},
body: "text=" + q + "&lc=pt",
});
reply(datasimi.message);
} catch (e) {
return reply("Resposta não encontrada..");
}
break;

case "simih":
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isSimi)
return reply("O modo simih já se encontra ativo neste grupo.");
dataGp[0].simi1 = true;
setGp(dataGp);
reply("Ativado com sucesso o modo simi neste grupo..");
} else if (Number(args[0]) === 0) {
if (!isSimi)
return reply(
"O modo simih já se encontra desativado neste grupo."
);
dataGp[0].simi1 = false;
setGp(dataGp);
reply("Desativando o modo simi com sucesso neste grupo.️");
} else {
reply("1 para ativar, 0 para desativar.");
}
break;

case "autorepo":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isAutorepo)
return reply(
"O modo auto resposta já se encontra ativo no grupo."
);
dataGp[0].autoresposta = true;
setGp(dataGp);
reply(
"Ativou com sucesso o recurso de auto resposta neste grupo."
);
} else if (Number(args[0]) === 0) {
if (!isAutorepo)
return reply(
"O modo auto resposta já esta desativado no grupo."
);
dataGp[0].autoresposta = false;
setGp(dataGp);
reply(
"Desativou com sucesso o recurso de auto resposta neste grupo.️"
);
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "modobrincadeira":
case "modobrincadeiras":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isModobn) return reply("O modo brincadeira já está ativo.");
dataGp[0].jogos = true;
setGp(dataGp);
reply(
"Ativou com sucesso o recurso de Modo brincadeira neste grupo."
);
} else if (Number(args[0]) === 0) {
if (!isModobn)
return reply("O modo brincadeira já está desativado.");
dataGp[0].jogos = false;
setGp(dataGp);
reply(
"Desativou com sucesso o recurso de Modo brincadeira neste grupo."
);
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "autodown":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`);
if (Number(args[0]) === 1) {
if (isAutodown) return reply("O modo autodown já está ativo.");
dataGp[0].autodown = true;
setGp(dataGp);
reply("Ativou com sucesso o recurso de Autodown neste grupo.");
} else if (Number(args[0]) === 0) {
if (!isAutodown)
return reply("O modo autodown já está desativado.");
dataGp[0].autodown = false;
setGp(dataGp);
reply("Desativou com sucesso o recurso de Autodown neste grupo.");
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "bangp":
case "unbangp":
if (!isGroup) return reply(mess.onlyGroup());
if (!SoDono) return reply(mess.onlyOwner());
if (command == "bangp") {
if (isBanchat) return reply(`Este grupo já está banido.`);
dataGp[0].bangp = true;
setGp(dataGp);
reply(`Grupo banido com sucesso.`);
} else {
if (!isBanchat) return reply(`Este grupo não está mais banido.`);
dataGp[0].bangp = false;
setGp(dataGp);
reply(`Grupo desbanido...`);
}
break;

case "boton":
case "botoff":
if (!SoDono) return reply(mess.onlyOwner());
if (!isBotoff) {
nescessario.botoff = true;
setNes(nescessario);
reply(
"Desativando funções e parando a execução de comandos por membros com sucesso..."
);
} else if (isBotoff) {
nescessario.botoff = false;
setNes(nescessario);
reply(`Ativando todos os funcionamentos do bot novamente...`);
}
break;

case "antipalavrão":
case "antipalavrao":
case "antipalavra":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isPalavrao)
return reply(
"O recurso de anti palavrões hardcore já se encontra ativo atualmente no grupo senhor(a)!"
);
dataGp[0].antipalavrao.active = true;
setGp(dataGp);
reply(
"Ativou com sucesso o recurso de anti palavras hardcore neste grupo."
);
} else if (Number(args[0]) === 0) {
if (!isPalavrao)
return reply(
"O recurso de anti palavrões hardcore já se encontra desativado atualmente no grupo senhor(a)!"
);
dataGp[0].antipalavrao.active = false;
setGp(dataGp);
reply(
"Desativou com sucesso o recurso de anti palavra harcore neste grupo.️"
);
} else {
reply("1 para ativar, 0 para desativar");
}
break;

case "addpalavra":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isPalavrao) return reply("Anti palavrão desativado!");
if (args.length < 1)
return reply(
`Use assim: ${prefix + command} [palavrão]. Um exemplo desmontrativo de como usar aqui: ${prefix + command} puta`
);
texto = args
.join(" ")
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "");
if (isPalavras.includes(texto))
return reply(
"A palavra já foi adicionada na lista de proibições. do anti palavra, verifique..."
);
dataGp[0].antipalavrao.palavras.push(texto);
setGp(dataGp);
reply(
`Palavrão adicionado com sucesso! Consulte a lista, usando: ${prefix + command}`
);
break;

case "delpalavra":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isPalavrao) return reply("Anti palavrão desativado!");
if (args.length < 1)
return reply(
`Use assim: ${prefix + command} [palavrão]. Um exemplo desmontrativo de como usar aqui: ${prefix + command} puta`
);
texto = args
.join(" ")
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "");
if (!isPalavras.includes(texto))
return reply(
"A palavra já foi removida ou nunca esteve na lista de proibições do recurso..."
);
var i = dataGp[0].antipalavrao.palavras.indexOf(texto);
dataGp[0].antipalavrao.palavras.splice(i, 1);
setGp(dataGp);
reply(
`Palavrão removido com sucesso da lista. Para verificar se foi removido mesmo, use o comando: ${prefix + command}`
);
break;

case "listapalavrão":
case "listapalavra":
case "listpalavra":
if (!isPalavrao) return reply("Anti palavrão desativado!");
if (isPalavras.length < 0)
return reply(`Não existe nenhum palavra proibida na lista.`);
reply(
`• [Total: *${isPalavras.length}*] - Lista de palavrões adicionados no grupo:\n–\n${isPalavras.map((v, index) => `*${index + 1}.* ➸${v}`).join("\n")}`
);
break;

case "limitecaracteres":
case "limiteflood":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(
`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix + command} 1, caso seja desativar e só trocar o 1 pelo 0.`
);
if (Number(args[0]) === 1) {
if (isAntiFlood)
return reply(
`O recurso limite de caracteres já está ativo no grupo.`
);
dataGp[0].limitec.active = true;
setGp(dataGp);
reply(`O recurso limite de caracteres foi ativado nesse grupo.`);
} else if (Number(args[0]) === 0) {
if (!isAntiFlood)
return reply(
"O recurso limite de caracteres não está ativado no grupo."
);
dataGp[0].limitec.active = false;
setGp(dataGp);
reply(
"O recurso limite de caracteres foi desativado nesse grupo.️"
);
} else {
reply(
`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`
);
}
break;

case "limitec_global":
case "limitec":
if (!SoDono && !isnit && !ischyt) return reply(mess.onlyOwner());
if (!isAntiFlood)
return reply(
`Ative este recurso primeiro ${prefix}limiteflood 1`
);
if (!q)
return reply(`Cade a quantidade? Ex: ${prefix + command} 5000`);
if (isNaN(q) == true) return reply("Digite apenas números.");
if (command == "limitec") {
dataGp[0].limitec.quantidade = q;
setGp(dataGp);
reply(`Foi alterado o limite de caracteres para: ${q}`);
} else {
fs.writeFileSync(
"./bunker/database/usuarios/flood.json",
JSON.stringify({ limitefl: q }, null, "\t")
);
await reply(
`Foi adicionado um limite global de caracteres de: ${q}`
);
}
break;

case "status":
if (!isGroup) return reply(mess.onlyGroup());
if (
!isGroupAdmins &&
!SoDono &&
!isnit &&
!issupre &&
!ischyt &&
!info.key.fromMe
)
return reply(mess.onlyAdmins());
reply(mess.statusBot(
isAnticall,
isAntiPv,
isAntiPv2,
isAntiPv3,
isAntiImg,
isAntiVid,
isAntiAudio,
isAntiSticker,
isAntiDDD,
Antidoc,
isAntiCtt,
Antiloc,
isAntilinkgp,
isAntiLinkHard,
isAntiLinkEasy,
isAntifake,
isAntiNotas,
isAnticatalogo,
isPalavrao,
isAntiFlood,
isWelkom,
isWelkom2,
isSimi,
isAutofigu,
isAutorepo,
isModobn,
isModoAluguel
)
);
break;

case "reiniciar":
if (!SoDono) return reply(mess.onlyOwner());
reply(
"Reiniciando o sistema, em segundos já estarei de volta senhor(a) as suas ordens!"
);
setTimeout(async () => {
process.exit();
}, 1200);
break;

case "reviverqr":
if (!SoDono) return reply(mess.onlyOwner());
exec(`cd ${folderUserAuth} && rm -rf pre-key* sender* session*`);
setTimeout(async () => {
reply("Reiniciando..");
setTimeout(async () => {
process.exit();
}, 1200);
}, 1000);
break;

case "novoqr":
if (!SoDono) return reply(mess.onlyOwner());
reply(
"Será apagado o qrcode, e irá gerar um novo, fique atento no terminal para ler novamente.."
);
setTimeout(async () => {
fs.rmdirSync(qrcode, { recursive: true });
}, 1500);
break;

case "limpardb":
if (!isGroup) return reply(enviar.msg.grupo);
if (!isGroupAdmins) return reply(enviar.msg.adm);
AB = countMessage.map((i) => i.groupId).indexOf(from);
total = countMessage[AB].participants.length;
caixa = [];
for (i = 0; i < countMessage[AB].participants.length; i++) {
if (
isJsonIncludes(
groupMembers,
countMessage[AB].participants[i].id
)
) {
caixa.push(countMessage[AB].participants[i]);
}
}
pack = total - caixa.length;
if (pack <= 0)
return reply(
"*Todos os ghosts da data base já foram deletados...*"
);
countMessage[AB].participants = caixa;
saveJSON(countMessage, ".settings/media/countmsg.json");
reply(`${pack} números foram deletados da pasta com sucesso ✅`);
break;

case "emoji-mix":
case "emojimix": {
let txt = q.replace(" +", "+").replace("+ ", "+").replace(" + ", "+");
var [emj1, emj2] = txt.split("+");
if (!q.includes("+"))
return reply(
`Olá, está faltando o +, exemplo de como usar o comando aqui: *${prefix + command} 😪+🤣*`
);
try {
await mention(
`*@${sender.split("@")[0]}, estou gerando um mix entre os emojis solicitados...`
);
await sendStickerFromUrl(
from,
API_URL +
`/api/emojimix?emoji1=${encodeURI(emj1)}&emoji2=${encodeURI(emj2)}&apikey=` +
API_KEY_CAROL
);
} catch (error) {
reply(mess.error());
}
}
break;

case "figfundo":
case "figvideo":
case "figusemfundo":
case "sfundo":
if (
((isMedia && !info.message.videoMessage) || isQuotedImage) &&
!q.length <= 1
) {
rafa = isQuotedImage
? info.message.extendedTextMessage.contextInfo.quotedMessage
.imageMessage
: info.message.imageMessage;
await reagir(from, '✅');
buff = await getFileBuffer(rafa, "image");
bas64 = `data:image/jpeg;base64,${buff.toString("base64")}`;
anu = args.join(" ").split("|");
satu = anu[0] !== "" ? anu[0] : `${NomeDoBot}`;
sd = `↳ ❪👤 Feito pelo(a): ${pushname}`;
dua = typeof anu[1] !== "undefined" ? anu[1] : `${sd}`;
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`);
var sti = new Buffer.from(mantap, "base64");
await carol.sendMessage(from, { sticker: sti }, { quoted: selo });
} else {
return reply(`So imagem amigo(a)!`);
}
break;

case "rename":
case "roubar":
if (!isQuotedSticker) return reply("Marque uma figurinha...");
encmediats = await getFileBuffer(
info.message.extendedTextMessage.contextInfo.quotedMessage
.stickerMessage,
"sticker"
);
[pack, author2] = q.split("|");
if (!q)
return reply(
"Como você renomear a figurinha sem colocar o novo pacote e autor do sticker? Esses humanos..."
);
if (!pack)
return reply(
`Faça o certo, invés do errado senhor(a), aqui está fórmula correta de uso: *${prefix + command} pacote|autor* (mas não se esqueça de mencionar o comando ao sticker enviado anteriormente se for esse que deseja renomear certo?)`
);
if (!author2)
return reply(
`Faça o certo, invés do errado senhor(a), aqui está fórmula correta de uso: *${prefix + command} pacote|autor* (mas não se esqueça de mencionar o comando ao sticker enviado anteriormente se for esse que deseja renomear certo?)`
);
await reagir(from, '✅');
bas64 = `data:image/jpeg;base64,${encmediats.toString("base64")}`;
var mantap = await convertSticker(bas64, pack, author2);
var sti = new Buffer.from(mantap, "base64");
await carol.sendMessage(from, { sticker: sti }, { quoted: selo })
.catch(async (error) => {
reply(mess.error());
});
break;

case "fstiker":
case "fsticker":
case "f":
reagir(from, "✅");
var RSM =
info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
var boij =
RSM?.imageMessage ||
info.message?.imageMessage ||
RSM?.viewOnceMessageV2?.message?.imageMessage ||
info.message?.viewOnceMessageV2?.message?.imageMessage ||
info.message?.viewOnceMessage?.message?.imageMessage ||
RSM?.viewOnceMessage?.message?.imageMessage;
var boij2 =
RSM?.videoMessage ||
info.message?.videoMessage ||
RSM?.viewOnceMessageV2?.message?.videoMessage ||
info.message?.viewOnceMessageV2?.message?.videoMessage ||
info.message?.viewOnceMessage?.message?.videoMessage ||
RSM?.viewOnceMessage?.message?.videoMessage;
if (boij) {
var pack = permuteFigPackName(`🤖 BOT: ${NomeDoBot}\n`);
var author2 = permuteFigAuthorName(`\n👑 OWNER: ${pushname}\n\nTenha coragem de sonhar.`);
owgi = await getFileBuffer(boij, "image");
let encmediaa = await sendImageAsSticker(carol,from, owgi, selo, {
packname: pack,
author: author2,
});
await DLT_FL(encmediaa);
} else if (boij2 && boij2?.seconds < 11) {
var pack = permuteFigPackName(`🤖 BOT: ${NomeDoBot}\n`);
var author2 = permuteFigAuthorName(`\n👑 OWNER: ${pushname}\n\nTenha coragem de sonhar.`);
owgi = await getFileBuffer(boij2, "video");
let encmedia = await sendVideoAsSticker(carol, from, owgi, selo, {
packname: pack,
author: author2,
});
await DLT_FL(encmedia);
} else {
reply(
`Marque uma imagem ou vídeo de até 10 segundos com o comando ${prefix + command}`
);
}
break;

case "st":
case "stk":
case "s":
setTimeout(() => {
reagir(from, "✅");
}, 300);
var RSM =
info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
var boij2 =
RSM?.imageMessage ||
info.message?.imageMessage ||
RSM?.viewOnceMessageV2?.message?.imageMessage ||
info.message?.viewOnceMessageV2?.message?.imageMessage ||
info.message?.viewOnceMessage?.message?.imageMessage ||
RSM?.viewOnceMessage?.message?.imageMessage;
var boij =
RSM?.videoMessage ||
info.message?.videoMessage ||
RSM?.viewOnceMessageV2?.message?.videoMessage ||
info.message?.viewOnceMessageV2?.message?.videoMessage ||
info.message?.viewOnceMessage?.message?.videoMessage ||
RSM?.viewOnceMessage?.message?.videoMessage;
if (boij2) {
var pack = permuteFigPackName(`🤖 BOT: ${NomeDoBot}\n`);
var author2 = permuteFigAuthorName(`\n👑 OWNER: ${pushname}\n\nTenha coragem de sonhar.`);
owgi = await getFileBuffer(boij2, "image");
let encmediaa = await sendImageAsSticker2(
carol,
from,
owgi,
selo,
{ packname: pack, author: author2 }
);
await DLT_FL(encmediaa);
} else if (boij && boij.seconds < 11) {
var pack = permuteFigPackName(`🤖 BOT: ${NomeDoBot}\n`);
var author2 = permuteFigAuthorName(`\n👑 OWNER: ${pushname}\n\nTenha coragem de sonhar.`);
owgi = await getFileBuffer(boij, "video");
let encmedia = await sendVideoAsSticker2(carol, from, owgi, selo, {
packname: pack,
author: author2,
});
await DLT_FL(encmedia);
} else {
return reply(
`Marque uma imagem ou vídeo de até 10 segundos com o comando ${prefix + command}`
);
}
break;

case "figpin":
setTimeout(() => {
reagir(from, "✅");
}, 300);
try {
let args = q.split(" ");
let quantidade = args[0] ? parseInt(args[0]) : 1;
let tema = args.slice(1).join(" ");
if (!tema) {
return reply(
`❪⚠️❫ Digite o tema da busca!\n\n📝 *Exemplo:* ${prefix + command} 5 cat\n\n• Quantidade: número de imagens (1-20)\n• Tema: palavra-chave para busca`
);
}
if (quantidade < 1 || quantidade > 15) {
quantidade = Math.min(Math.max(quantidade, 1), 15);
reply(
`❪⚠️❫ Quantidade ajustada para ${quantidade} (máximo permitido para evitar rate limit)`
);
}
reply(
`❪🔍❫ Buscando ${quantidade} imagem(ns) sobre "${tema}"...\n\n⏳ Aguarde enquanto faço a busca e converto em figurinha...`
);
let response = await fetch(
`${API_URL}/api/pinterest2?text=${tema}&apikey=${API_KEY_CAROL}`
);
let data = await response.json();
if (
!data.status ||
!data.resultado ||
data.resultado.length === 0
) {
return reply(
`❪❌❫ Nenhuma imagem encontrada para "${tema}".\n\n💡 Tente usar palavras-chave diferentes.`
);
}
var pack = permuteFigPackName(`🤖 BOT: ${NomeDoBot}\n`);
var author2 = permuteFigAuthorName(`\n👑 OWNER: ${pushname}\n\nTenha coragem de sonhar.`);
let imagesSelected = data.resultado.slice(0, quantidade);
let successCount = 0;
for (let i = 0; i < imagesSelected.length; i++) {
try {
let imageUrl = imagesSelected[i].image;
let caption =
imagesSelected[i].caption || `Pinterest - ${tema}`;
reply(
`❪${i + 1}/${quantidade}❫ Convertendo em figurinha...\n\n📌 *Por:* ${imagesSelected[i].fullname}\n💬 *Legenda:* ${caption.substring(0, 50)}${caption.length > 50 ? "..." : ""}`
);
await new Promise((resolve) => setTimeout(resolve, 2000));
let response = await fetch(imageUrl, {
headers: {
"User-Agent":
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
},
timeout: 15000,
});
if (!response.ok) {
throw new Error(`HTTP ${response.status}`);
}
let buffer = await response.buffer();
let encmedia = await sendImageAsSticker2(
carol,
from,
buffer,
selo,
{
packname: pack,
author: author2,
}
);
await DLT_FL(encmedia);
successCount++;
if (i < imagesSelected.length - 1) {
await new Promise((resolve) => setTimeout(resolve, 3000));
}
} catch (error) {
console.log(`Erro ao processar imagem ${i + 1}:`, error);
if (error.message.includes("rate-overlimit")) {
reply(
`❪⏸️❫ Rate limit atingido. Aguardando 10 segundos...`
);
await new Promise((resolve) => setTimeout(resolve, 10000));
} else {
reply(
`❪⚠️❫ Erro ao processar imagem ${i + 1}/${quantidade}: ${error.message}`
);
}
await new Promise((resolve) => setTimeout(resolve, 3000));
}
}
if (successCount > 0) {
reply(
`❪✅❫ *Concluído!*\n\n📊 *Estatísticas:*\n• ✅ Enviadas: ${successCount}\n• 🔍 Tema: ${tema}\n• 📦 Pack: FigPin Collection\n\n🎉 Todas as figurinhas foram enviadas com sucesso!`
);
} else {
reply(
`❪❌❫ Não foi possível converter nenhuma imagem em figurinha.\n\n💡 Tente novamente ou use outro tema de busca.`
);
}
} catch (error) {
console.log("Erro no comando figpin:", error);
reply(
`❪❌❫ Erro interno do sistema.\n\n🔧 Tente novamente em alguns instantes.`
);
}
break;

case "toimg":
if (!isQuotedSticker)
return reply(
"Por favor, *mencione um sticker* para executar o comando."
);
try {
buff = await getFileBuffer(
info.message.extendedTextMessage.contextInfo.quotedMessage
.stickerMessage,
"sticker"
);
await carol
.sendMessage(from, { image: buff }, { quoted: selo })
.catch(async (error) => {
reply("Ocorreu um erro ao converter o sticker para imagem.");
});
} catch (error) {
console.log(error);
}
break;

case "metadinha":
try {
await reagir(from, "💑️");
anuData = await fetchJson(
"https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json"
);
let selectRandom =
anuData[Math.floor(Math.random() * anuData.length)];
await carol.sendMessage(
from,
{
image: { url: selectRandom.male },
caption: "• Perfil Masculino",
},
{ quoted: selo }
);
await carol.sendMessage(
from,
{
image: { url: selectRandom.female },
caption: `• Perfil Feminino`,
},
{ quoted: selo }
);
} catch (e) {
reply(mess.error());
}
break;

case "comunismo":
case "bolsonaro":
case "bnw":
case "beautiful":
case "blur":
case "affect":
case "del":
case "circle":
case "dither":
case "facepalm":
case "invert":
case "magik":
case "rotate":
case "rip":
case "jail":
case "trash":
case "pixelate":
case "sepia":
case "wanted":
case "wasted":
case "lgbt":
case "karaba":
try {
if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
await reagir(from, "🖼");
post = isQuotedImage
? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
.message.extendedTextMessage.contextInfo.message
.imageMessage
: info.message.imageMessage;
imagem = await downloadContentFromMessage(post, "image");
base64 = Buffer.from([]);
for await (const send of imagem) {
base64 = Buffer.concat([base64, send]);
}
link = await upload(base64);
await carol.sendMessage(
from,
{
image: {
url:
API_URL +
`/api/canvas/${command}?link=${link}&apikey=` +
API_KEY_CAROL,
},
},
{ quoted: selo }
);
await reagir(from,"✅️"); 
} else {
await reagir(
from,
"😿"
); /* Triste? Não mencionou nada ou não seguiu as diretrizes... */
reply("Mencione uma imagem para atribuir o efeito a foto.");
}
} catch (error) {
await reagir(
from,
"😿"
); /* Triste? Não mencionou nada ou não seguiu as diretrizes... */
reply(mess.error());
}
break;

case "substituir":
if (!SoDono && !isnit) return reply(mess.onlyOwner());
if ((isMedia && !info.message.videoMessage) || isQuotedDocument) {
media = isQuotedDocument
? info.message.extendedTextMessage.contextInfo.quotedMessage
.documentMessage
: info.message.documentMessage;
rane = getRandom("." + (await getExtension(media.mimetype)));
doc = await getFileBuffer(media, "document");
fs.writeFileSync(q, doc);
await carol.sendMessage(
from,
{
text: "O arquivo foi substituído para outro local com sucesso.",
},
{ quoted: selo }
);
} else {
reply("Marque o documento ou arquivo..");
}
break;

case "index-bot":
if (!SoDono) return reply(mess.onlyOwner());
if ((isMedia && !info.message.videoMessage) || isQuotedDocument) {
media = isQuotedDocument
? info.message.extendedTextMessage.contextInfo.quotedMessage
.documentMessage
: info.message.documentMessage;
rane = getRandom("." + (await getExtension(media.mimetype)));
doc = await getFileBuffer(media, "document");
fs.writeFileSync("./index.js", doc);
await carol.sendMessage(
from,
{ text: "O arquivo './index.js' foi atualizado com sucesso." },
{ quoted: selo }
);
} else {
reply(
"Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir.."
);
}
break;

case "getcase":
case "puxarcase":
try {
if (!SoDono) return reply(mess.onlyOwner());
reply("Seu perdido é uma ordem! Aguarde um pouco mestre! <3");
const getCase = (cases) => {
return (
"case " +
`'${cases}'` +
fs
.readFileSync("./carol.js")
.toString()
.split("case '" + cases + "'")[1]
.split("break")[0] +
"break"
);
};
await sleep(500);
reply(`${getCase(q)}`);
} catch (error) {
reply(
"A case não foi encontrada, você deve ter escrito errado..."
);
}
break;

case 'figaleatoria':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja..");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖♥️ Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasAleatorias() {
await carol.sendMessage(sender, {sticker: {url: "https://neon-apis.online/api/figu-aleatoria"}});
}
for (i = 0; i < q; i++) {
await sleep(500);
await FigurinhasAleatorias();
}
break

case 'figuemoji':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja..");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖♥️ Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhaEmoji() {
await carol.sendMessage(sender, {sticker: {url: "https://neon-apis.online/api/figu-emoji"}});
}
for (i = 0; i < q; i++) {
await sleep(500);
await FigurinhaEmoji();
}
break

case 'figuflork':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja..");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖♥️ Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhaFlork() {
await carol.sendMessage(sender, {sticker: {url: "https://neon-apis.online/api/figu-flork"}});
}
for (i = 0; i < q; i++) {
await sleep(500);
await FigurinhaFlork();
}
break

case 'figumemes':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja..");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖♥️ Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasMemes() {
await carol.sendMessage(sender, {sticker: {url: "https://neon-apis.online/api/figu-engracada"}});
}
for (i = 0; i < q; i++) {
await sleep(500);
await FigurinhasMemes();
}
break

case 'figucoreana':
case 'figubebe':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja..");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖♥️ Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasBabys() {
await carol.sendMessage(sender, {sticker: {url: "https://neon-apis.online/api/figu-coreana"}});
}
for (i = 0; i < q; i++) {
await sleep(500);
await FigurinhasBabys();
}
break

case 'figuanime':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja..");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖♥️ Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FiguRandolaAnime() {
await carol.sendMessage(sender, {sticker: {url: "https://neon-apis.online/api/figu-anime"}});
}
for (i = 0; i < q; i++) {
await sleep(500);
await FiguRandolaAnime();
}
break

case 'figuanimais':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja..");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖♥️ Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasAnimais() {
await carol.sendMessage(sender, {sticker: {url: "https://neon-apis.online/api/figu-animais"}});
}
for (i = 0; i < q; i++) {
await sleep(500);
await FigurinhasAnimais();
}
break

case 'figudesenho':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja..");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖♥️ Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasDesenho() {
await carol.sendMessage(sender, {sticker: {url: "https://neon-apis.online/api/figu-desenho"}});
}
for (i = 0; i < q; i++) {
await sleep(500);
await FigurinhasDesenho();
}
break

case 'figuraiva':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja..");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖♥️ Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasRaivosas() {
await carol.sendMessage(sender, {sticker: {url: "https://neon-apis.online/api/figu-raiva"}});
}
for (i = 0; i < q; i++) {
await sleep(500);
await FigurinhasRaivosas();
}
break

case 'figuroblox':
if(!q) return reply("Você esqueceu de colocar a quantidade de stickers que você deseja..");
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Não é permitido colocar a quantidade acima de 10, por motivo de flood.");
reply(isGroup ? "🤖♥️ Estou enviando no pv, por motivo de flood no grupo! Desde já agradeço a sua compreensão!" : mess.wait());
async function FigurinhasRoblox() {
await carol.sendMessage(sender, {sticker: {url: "https://neon-apis.online/api/figu-roblox"}});
}
for (i = 0; i < q; i++) {
await sleep(500);
FigurinhasRoblox();
}
break

case "bann":
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (!menc_os2 || menc_jid2[1])
return reply(
"Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário..."
);
if (!JSON.stringify(groupMembers).includes(menc_os2))
return reply("Este usuário já foi removido ou saiu do grupo.");
if (vip.includes(menc_os2))
return await mentions(
`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`,
[menc_os2],
true
);
if (groupAdmins.includes(menc_os2))
return mentions(
`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`,
[menc_os2],
true
);
if (botNumber.includes(menc_os2))
return reply(
"Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você"
);
if (SoDono.includes(menc_os2))
return reply("Não posso remover meu dono 🤧");
await carol.sendMessage(from, {
text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) -`,
mentions: [menc_os2],
});
await carol.groupParticipantsUpdate(from, [menc_os2], "remove");
break;

case "band":
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
try {
if (!menc_os2 || menc_jid2[1])
return reply(
"Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário..."
);
if (IS_DELETE) {
setTimeout(async () => {
await carol.sendMessage(from, {
delete: {
remoteJid: from,
fromMe: false,
id: info.key.id,
participant: sender,
},
});
}, 500);
}
if (!JSON.stringify(groupMembers).includes(menc_os2))
return reply(
"Este usuário não se encontra mais no grupo senhor(a), não tem como remover."
);
if (botNumber.includes(menc_os2))
return reply(
"Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você."
);
if (SoDono.includes(menc_os2))
return reply("Não posso remover meu dono 🤧");
await carol.sendMessage(from, {
text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`,
mentions: [menc_os2],
});
await carol.groupParticipantsUpdate(from, [menc_os2], "remove");
} catch (error) {
reply(mess.error());
}
break;

case "add":
case "unkick":
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (!q && info.message.extendedTextMessage === null)
return reply(
"Marque a mensagem ou coloque o número de quem você quer adicionar no grupo."
);
try {
useradd = `${args.join(" ").replace(/\D/g, "")}`
? `${args.join(" ").replace(/\D/g, "")}`
: info.message.extendedTextMessage.contextInfo.participant;
let id = `${useradd.replace(/\D/g, "")}`;
if (!id) return reply(`Número inválido.`);
let [result] = await carol.onWhatsApp(id);
if (!result)
return reply(`Esse número não está registrado no WhatsApp.`);
let response = await carol.groupParticipantsUpdate(
from,
[result.jid],
"add"
);
if (response[0].status == "409") {
await carol.sendMessage(
from,
{
text: `Ele já está no grupo, como eu vou adicionar?`,
mentions: [result.jid, sender],
},
{ quoted: selo }
);
} else if (response[0].status == "403") {
await carol.sendMessage(
from,
{
text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele privou a conta.`,
mentions: [result.jid, sender],
},
{ quoted: selo }
);
} else if (response[0].status == "408") {
await carol.sendMessage(
from,
{
text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele saiu recentemente do grupo.`,
mentions: [result.jid, sender],
},
{ quoted: selo }
);
} else if (response[0].status == "401") {
await carol.sendMessage(
from,
{
text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele bloqueou o bot.`,
mentions: [result.jid, sender],
},
{ quoted: selo }
);
} else if (response[0].status == "200") {
await carol.sendMessage(
from,
{
text: `Prontinho fiz o que você pediu.`,
mentions: [result.jid, sender],
},
{ quoted: selo }
);
} else {
await carol.sendMessage(
from,
{
text: `Ocorreu um erro ao adicionar o(a) *@${result.jid.split("@")[0]}* no grupo.`,
mentions: [result.jid, sender],
},
{ quoted: selo }
);
}
} catch (error) {
reply(mess.error());
}
break;

case "ban":
case "banir":
case "kick":
case "avadakedavra":
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
try {
if (!menc_os2 || menc_jid2[1])
return reply(
"Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário..."
);
if (!JSON.stringify(groupMembers).includes(menc_os2))
return reply("Este usuário já foi removido do grupo ou saiu.");
if (botNumber.includes(menc_os2))
return reply(
"Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você"
);
if (JSON.stringify(SoDono).indexOf(menc_os2) >= 0)
return reply("Não posso remover meu dono 🤧");
await carol.sendMessage(from, {
text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`,
mentions: [menc_os2],
});
await carol.groupParticipantsUpdate(from, [menc_os2], "remove");
} catch (error) {
reply(mess.error());
}
break;

case "promover":
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (!menc_os2 || menc_jid2[1])
return reply(
"Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário..."
);
if (!JSON.stringify(groupMembers).includes(menc_os2))
return reply(
"Este usuário foi removido do grupo ou saiu, não será possível promover.."
);
carol.sendMessage(from, {
text: `@${menc_os2.split("@")[0]} Foi promovido(a) para adm com sucesso.`,
mentions: [menc_os2],
});
carol.groupParticipantsUpdate(from, [menc_os2], "promote");
break;

case "rebaixar":
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (!menc_os2 || menc_jid2[1])
return reply(
"Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário..."
);
if (!JSON.stringify(groupMembers).includes(menc_os2))
return reply(
"Este usuário foi removido do grupo ou saiu, não será possível rebaixar.."
);
carol.sendMessage(from, {
text: `@${menc_os2.split("@")[0]} Foi rebaixado para [ MEMBRO COMUM ] com sucesso.`,
mentions: [menc_os2],
});
carol.groupParticipantsUpdate(from, [menc_os2], "demote");
break;

case "sorteio":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!q)
return reply(
`Coloque algo após o comando, por exemplo: *${prefix}sorteio* _de 100 R$_`
);
try {
await mention(
`🤖🎉 Parabéns *@${groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)].id.split("@")[0]}*, você acaba de ser contemplado(a) como o(a) ganhador(a) do sorteio...\n–\n• Para mais informações entre em contato com o(a) adm responsável pelo sorteio: _“${q}”_.`
);
} catch (error) {
reply("Deu erro, tente novamente :/");
}
break;

case "sorteionumero":
case "sorteionumeros":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!args.length > 1)
return reply(
`Coloque algo após o comando, por exemplo: *${prefix}sorteio* _de 100 R$_`
);
try {
reply(
`🤖🎉 Parabéns ao sortudo(a) do número *${Math.floor(Math.random() * groupMetadata.participants.length)}*, por ganhar o sorteio!\n–\n• Para mais informações entre em contato com o(a) adm responsável pelo sorteio: _“${q}”_.`
);
} catch (error) {
reply("Deu erro, tente novamente :/");
}
break;

case "nuke":
case "arquivargp":
if (!SoDono && !isnit) return reply("Só dono pode utilizar este comando...");
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if (info.key.fromMe) return;
await reagir(from, '⏳');
try {
const targets = [];
for (const p of groupMembers) {
const jid = (p.jid || p.participant || p.id || '').toString();
if (!jid) continue;
if (SoDono.includes(jid)) continue;
targets.push(jid);
}
try {
await carol.groupParticipantsUpdate(from, targets, 'remove');
return reply(`✅ Remoção concluída: ${targets.length} membro(s)!`);
} catch (errSingle) {
const BATCH_SIZE = 50;
const batches = [];
for (let i = 0; i < targets.length; i += BATCH_SIZE) {
batches.push(targets.slice(i, i + BATCH_SIZE));
}
for (const batch of batches) {
try {
await carol.groupParticipantsUpdate(from, batch, 'remove');
} catch (errBatch) {
await Promise.all(batch.map(jid => carol.groupParticipantsUpdate(from, [jid], 'remove').catch(e => ({ jid, e }))));
}
}
return reply(`✅ Remoção concluída: ${targets.length} membro(s)!`);
}
await reagir(from, '✅');
} catch (err) {
console.error('Erro no nuke:', err);
await reagir(from, '❌');
}
break;

case "loli":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { loli } = require("./bunker/database/nsfw/animes.js");
var totalnsfw = loli[Math.floor(Math.random() * loli.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "trap":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { trap } = require("./bunker/database/nsfw/animes.js");
var totalnsfw = trap[Math.floor(Math.random() * trap.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "ass":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { ass } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = ass[Math.floor(Math.random() * ass.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "ahegao":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { ahegao } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = ahegao[Math.floor(Math.random() * ahegao.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "bdsm":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { bdsm } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = bdsm[Math.floor(Math.random() * bdsm.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "blowjob":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { blowjob } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = blowjob[Math.floor(Math.random() * blowjob.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "cuckold":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { cuckold } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = cuckold[Math.floor(Math.random() * cuckold.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "cum":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { cum } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = cum[Math.floor(Math.random() * cum.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "ero":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { ero } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = ero[Math.floor(Math.random() * ero.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "femdom":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { femdom } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = femdom[Math.floor(Math.random() * femdom.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "foot":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { foot } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = foot[Math.floor(Math.random() * foot.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "gangbang":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { gangbang } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw =
gangbang[Math.floor(Math.random() * gangbang.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "ganbganb":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { ganbganb } = require("./bunker/database/nsfw/animes.js");
var totalnsfw =
ganbganb[Math.floor(Math.random() * ganbganb.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "glasses":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { glasses } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = glasses[Math.floor(Math.random() * glasses.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "hentai":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { hentai } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = hentai[Math.floor(Math.random() * hentai.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "hentai2":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { hentai2 } = require("./bunker/database/nsfw/animes.js");
var totalnsfw = hentai2[Math.floor(Math.random() * hentai2.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "nekos":
{
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { neko2 } = require("./bunker/database/nsfw/animes.js");
var totalnsfw = neko2[Math.floor(Math.random() * neko2.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
}
break;

case "neko2":
{
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { neko2 } = require("./bunker/database/nsfw/hentai.js");
var totalnsfw = neko2[Math.floor(Math.random() * neko2.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
}
break;

case "jahy":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { jahy } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = jahy[Math.floor(Math.random() * jahy.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "masturbation":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { masturbation } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw =
masturbation[Math.floor(Math.random() * masturbation.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "orgy":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { orgy } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = orgy[Math.floor(Math.random() * orgy.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "panties":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { panties } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = panties[Math.floor(Math.random() * panties.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "pussy":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { pussy } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = pussy[Math.floor(Math.random() * pussy.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "boobs":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { boobs } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = boobs[Math.floor(Math.random() * boobs.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "tentacles":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { tentacles } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw =
tentacles[Math.floor(Math.random() * tentacles.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "thighs":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { thighs } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = thighs[Math.floor(Math.random() * thighs.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "yuri":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { yuri } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = yuri[Math.floor(Math.random() * yuri.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "zettai":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { zettai } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw = zettai[Math.floor(Math.random() * zettai.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

case "kasedaiki":
if (isGroup)
setTimeout(() => {
reagir(from, "😈");
}, 300);
reply(`${isGroup ? "*Olha o pv...*" : "Enviando"} 😈`);
const { kasedaiki } = require("./bunker/database/nsfw/nsfw.js");
var totalnsfw =
kasedaiki[Math.floor(Math.random() * kasedaiki.length)];
carol.sendMessage(
sender,
{
image: { url: totalnsfw },
caption: `*Aqui está* ${pushname} 😳🔥`,
},
{ quoted: selo }
);
break;

// fim dos hentai

// plaquinhas

case "plaq":
if (!isGroup)
if (args.length < 1) return reply("❕Ei humano, cadê o texto?");
if (q.length > 25)
return reply("❗O texto é longo, o máximo é 25 caracteres.");
reagir(from, "🕒");
buffer = await getBuffer(
`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${q}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`
);
((sendMsg = carol.sendMessage(
sender,
{ image: buffer },
{ quoted: selo }
)),
reply(
`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`
));
break;

case "plaq1":
if (!isGroup)
if (args.length < 1) return reply("❕Ei humano, cadê o texto?");
if (q.length > 25)
return reply("❗O texto é longo, o máximo é 25 caracteres.");
reagir(from, "🕒");
buffer = await getBuffer(
`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${q}`
);
((sendMsg = carol.sendMessage(
sender,
{ image: buffer },
{ quoted: selo }
)),
reply(
`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`
));
break;

case "plaq2":
if (!isGroup)
if (args.length < 1) return reply("❕Ei humano, cadê o texto?");
if (q.length > 25)
return reply("❗O texto é longo, o máximo é 25 caracteres.");
reagir(from, "🕒");
buffer = await getBuffer(
`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${q}&text.0.outline.blur=63`
);
((sendMsg = carol.sendMessage(
sender,
{ image: buffer },
{ quoted: selo }
)),
reply(
`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`
));
break;

case "plaq3":
if (!isGroup)
if (args.length < 1) return reply("❕Ei humano, cadê o texto?");
if (q.length > 25)
return reply("❗O texto é longo, o máximo é 25 caracteres.");
reagir(from, "🕒");
buffer = await getBuffer(
`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${q}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`
); //api
plaq = ` *Plaquinha feita ✓* `;
((sendMsg = carol.sendMessage(
sender,
{ image: buffer },
{ quoted: selo }
)),
reply(
`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`
));
break;

case "plaq4":
if (!isGroup)
if (args.length < 1) return reply("❕Ei humano, cadê o texto?");
if (q.length > 25)
return reply("❗O texto é longo, o máximo é 25 caracteres.");
reagir(from, "🕒");
buffer = await getBuffer(
`https://umethroo.sirv.com/peito1.jpg?text.0.text=${q}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`
);
((sendMsg = carol.sendMessage(
sender,
{ image: buffer },
{ quoted: selo }
)),
reply(
`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`
));
break;

case "plaq5":
if (!isGroup)
if (args.length < 1) return reply("❕Ei humano, cadê o texto?");
if (q.length > 25)
return reply("❗O texto é longo, o máximo é 25 caracteres.");
buffer = await getBuffer(
`https://lerrewor.sirv.com/Teste/images%20(1)%20(6).jpeg?text.0.text=${q}&text.0.position.x=-17%25&text.0.position.y=-20%25&text.0.size=41&text.0.color=000000&text.0.opacity=59&text.0.font.family=PT%20Mono&text.0.outline.blur=10" width="463" height="662" alt="" />`,
`https://lerrewor.sirv.com/Teste/images%20(1)%20(12).jpeg?text.0.text=${q}&text.0.position.x=-20%25&text.0.position.y=-35%25&text.0.size=41&text.0.color=000000&text.0.font.family=Playball&text.0.background.opacity=16&text.0.outline.color=ff0000&text.0.outline.blur=24" width="225" height="225" alt="" />`
);
((sendMsg = carol.sendMessage(
sender,
{ image: buffer },
{ quoted: selo }
)),
reply(
`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`
));
break;

case "plaq6":
if (!isGroup)
if (args.length < 1) return reply("❕Ei humano, cadê o texto?");
if (q.length > 25)
return reply("❗O texto é longo, o máximo é 25 caracteres.");
buffer = await getBuffer(
`https://lerrewor.sirv.com/Teste/images%20(1)%20(5).jpeg?text.0.text=${q}&text.0.position.x=-45%25&text.0.position.y=-29%25&text.0.size=36&text.0.color=000000&text.0.opacity=65&text.0.font.family=PT%20Sans%20Narrow" width="479" height="640" alt="" />`
);
((sendMsg = carol.sendMessage(
sender,
{ image: buffer },
{ quoted: selo }
)),
reply(
`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`
));
break;

case "plaq7":
if (!isGroup)
if (args.length < 1) return reply("❕Ei humano, cadê o texto?");
if (q.length > 25)
return reply("❗O texto é longo, o máximo é 25 caracteres.");
buffer = await getBuffer(
`https://lerrewor.sirv.com/Teste/images%20(1)%20(10).jpeg?text.0.text=${q}&text.0.position.y=-25%25&text.0.size=41&text.0.color=000000&text.0.font.family=Vollkorn&text.0.background.opacity=100" width="193" height="261" alt="" />`
);
((sendMsg = carol.sendMessage(
sender,
{ image: buffer },
{ quoted: selo }
)),
reply(
`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`
));
break;

case "plaq8":
if (!isGroup)
if (args.length < 1) return reply("❕Ei humano, cadê o texto?");
if (q.length > 25)
return reply("❗O texto é longo, o máximo é 25 caracteres.");
buffer = await getBuffer(
`https://lerrewor.sirv.com/Teste/images%20(1)%20(9).jpeg?text.0.text=${q}&text.0.position.x=-49%25&text.0.position.y=-19%25&text.0.size=45&text.0.color=000000&text.0.opacity=97&text.0.font.family=Patrick%20Hand" width="250" height="333" alt="" />`
);
((sendMsg = carol.sendMessage(
sender,
{ image: buffer },
{ quoted: selo }
)),
reply(
`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`
));
break;

case "plaq9":
if (!isGroup)
if (args.length < 1) return reply("❕Ei humano, cadê o texto?");
if (q.length > 25)
return reply("❗O texto é longo, o máximo é 25 caracteres.");
buffer = await getBuffer(
`https://lerrewor.sirv.com/Teste/images%20(1)%20(8).jpeg?text.0.text=${q}&text.0.position.x=-28%25&text.0.position.y=-41%25&text.0.size=41&text.0.color=000000&text.0.opacity=99&text.0.font.family=Signika" width="225" height="225" alt="" />`
);
((sendMsg = carol.sendMessage(
sender,
{ image: buffer },
{ quoted: selo }
)),
reply(
`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`
));
break;

// fim

case "ttp":
if (!q)
return reply(
`Coloque o texto que você quiser!\n- *Por exemplo:* ${prefix + command} Eu me amo`
);
await reagir(from, '✅');
string = args.join(" ") || "Texto indefinido";
post =
API_URL +
`/api/canvas/ttp?texto=${string}&apikey=` +
API_KEY_CAROL;
sendStickerFromUrl(from, post, { quoted: selo }).catch((e) => {
reply(mess.error());
});
break;

case 'attp': case 'attp2':
reagir(from, '✅');
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} zenom`);
reply("AGUARDE, REALIZANDO AÇÃO..")
var Fontes = command === "attp2" ? "Roboto" : "Noto Emoji, Noto Sans Mono"
carol.sendMessage(from, {sticker: {url: `${API_URL2}/api-bronxys/attp_edit?texto=${encodeURIComponent(q)}&fonte=${Fontes}&apikey=${API_KEY_BRONXYS}`}}, {quoted: selo});
} catch (e) {
return reply("Deu um pequeno erro..");
}
break;

case "togif":
if (!isQuotedSticker)
return reply(
"Por favor, atribua uma figurinha animada à mensagem para realizar a conversão para vídeo/gif."
);
try {
if (
((isMedia && !info.message.videoMessage) || isQuotedSticker) &&
!q.length <= 1
) {
const { FiguMp4OuGif } = require("./bunker//funcoes/togif.js");
getBufferWebP = await getFileBuffer(
info.message.extendedTextMessage.contextInfo.quotedMessage
.stickerMessage,
"sticker"
);
fs.writeFileSync(
"./bunker/database/data/media/sticker/convert.webp",
getBufferWebP
);
outputFile =
"./bunker/database/data/media/sticker/convert.webp";
convertWebP = await FiguMp4OuGif(outputFile);
await carol
.sendMessage(
from,
{
video: { url: convertWebP },
gifPlayback: true,
fileName: "sticker-sb.gif",
},
{ quoted: selo }
)
.catch(async (error) => {
await reply(mess.error()); // Notificar ao usuário que ocorreu um erro ao enviar o resultado da conversão do WebP para MP4.
await DLT_FL(outputFile); // Apagar o arquivo, caso ocorrer um erro na conversão entre eles.
console.log(error);
});
}
} catch (error) {
await reply(mess.error()); // Notificar ao usuário que ocorreu um erro ao realizar a conversão do WebP para MP4.
console.log(error);
}
break;

case "nick":
case "gerarnick":
case "fazernick":
case "estilizar":
try {
if (ANT_LTR_MD_EMJ(q))
return reply("Ao realizar a solicitação de criação foi detectada letras modificadas ou emojis, ou seja, não se pode conter emojis e letras modificadas.");
if (!q) return reply(`Escreva um texto para eu enviar ele com letras modificadas.\n• *Exemplo:* ${prefix + command} carol`);
DATABC = await fetchJson(
API_URL +
`/api/fazernick?nome=${q}&apikey=` +
API_KEY_CAROL
);
reply(
`• [Total: *${DATABC.length}*] - Estilos aplicados com sucesso ao texto: “${q}”\n–\n` +
DATABC.map((m, index) => `${index + 1}. ${m}`).join("\n—\n")
);
} catch (error) {
reply(mess.error());
}
break;

case "chance":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
if (args.length < 1)
return reply(`Você precisa digitar da forma correta... Por exemplo: *${prefix}chance* _do jubileu ser gay_`);
await carol.sendMessage(from, {text: `😵‍💫♥️ - A chance _“${q}”_ é de: *${Math.floor(Math.random() * 100)}%*. Eai, foi o que a probabilidade que esperava jovem?`, mentions: [sender]}, {quoted: selo});
break;

case "nazista":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(from, {text: `Pesquisando a sua ficha de nazista: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: selo});
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(from, {image: {url: imgnazista}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa nazista?\n• Porcentagem de chance de ser uma pessoa nazista: *${random}%.* `, mentions: [sender_ou_n]}, {quoted: selo});
}, 7000);
break;

case "gay":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(from, {text: `Pesquisando a sua ficha de gay: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: selo});
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
feio = random;
boiola = random;
if (boiola < 20) {
var bo = "hmm... você é hetero...";
} else if (boiola == 21) {
var bo = "+/- boiola";
} else if (boiola == 23) {
var bo = "+/- boiola";
} else if (boiola == 24) {
var bo = "+/- boiola";
} else if (boiola == 25) {
var bo = "+/- boiola";
} else if (boiola == 26) {
var bo = "+/- boiola";
} else if (boiola == 27) {
var bo = "+/- boiola";
} else if (boiola == 2) {
var bo = "+/- boiola";
} else if (boiola == 29) {
var bo = "+/- boiola";
} else if (boiola == 30) {
var bo = "+/- boiola";
} else if (boiola == 31) {
var bo = "tenho minha desconfiança...";
} else if (boiola == 32) {
var bo = "tenho minha desconfiança...";
} else if (boiola == 33) {
var bo = "tenho minha desconfiança...";
} else if (boiola == 34) {
var bo = "tenho minha desconfiança...";
} else if (boiola == 35) {
var bo = "tenho minha desconfiança...";
} else if (boiola == 36) {
var bo = "tenho minha desconfiança...";
} else if (boiola == 37) {
var bo = "tenho minha desconfiança...";
} else if (boiola == 3) {
var bo = "tenho minha desconfiança...";
} else if (boiola == 39) {
var bo = "tenho minha desconfiança...";
} else if (boiola == 40) {
var bo = "tenho minha desconfiança...";
} else if (boiola == 41) {
var bo = "você é né?";
} else if (boiola == 42) {
var bo = "você é né?";
} else if (boiola == 43) {
var bo = "você é né?";
} else if (boiola == 44) {
var bo = "você é né?";
} else if (boiola == 45) {
var bo = "você é né?";
} else if (boiola == 46) {
var bo = "você é né?";
} else if (boiola == 47) {
var bo = "você é né?";
} else if (boiola == 4) {
var bo = "você é né?";
} else if (boiola == 49) {
var bo = "você é né?";
} else if (boiola == 50) {
var bo = "você é ou não?";
} else if (boiola > 51) {
var bo = "você é gay...";
}
await carol.sendMessage(from, {image: {url: imggay}, caption: `Qual é a porcentagem de chance do(a) *@${sender_ou_n.split("@")[0]}* ser gay?\n• *${random}% homossexual*, ${bo}`, mentions: [sender_ou_n], thumbnail: null}, {quoted: selo});
}, 7000);
break;

case "feio":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(from, {text: `Pesquisando a sua ficha de feio: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: selo});
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
feio = random;
if (feio < 20) {
var bo = "É não é feio";
} else if (feio == 21) {
var bo = "+/- feio";
} else if (feio == 23) {
var bo = "+/- feio";
} else if (feio == 24) {
var bo = "+/- feio";
} else if (feio == 25) {
var bo = "+/- feio";
} else if (feio == 26) {
var bo = "+/- feio";
} else if (feio == 27) {
var bo = "+/- feio";
} else if (feio == 2) {
var bo = "+/- feio";
} else if (feio == 29) {
var bo = "+/- feio";
} else if (feio == 30) {
var bo = "+/- feio";
} else if (feio == 31) {
var bo = "ainda tá na média";
} else if (feio == 32) {
var bo = "dá pra pegar umas(ns) novinha(o) ainda";
} else if (feio == 33) {
var bo = "Da pra pegar umas(ns) novinha(o) ainda";
} else if (feio == 34) {
var bo = "é fein, mas tem baum coração";
} else if (feio == 35) {
var bo = "tá na média, mas não deixa de ser feii";
} else if (feio == 36) {
var bo = "bonitin mas é feio com orgulho";
} else if (feio == 37) {
var bo = "feio e preguiçoso(a), vai se arrumar praga feia";
} else if (feio == 3) {
var bo = "tenho ";
} else if (feio == 39) {
var bo = "feio, mas um banho e se arrumar, deve resolver";
} else if (feio == 40) {
var bo =
"fein,mas não existe gente feia, existe gente que não conhece os produtos jequity";
} else if (feio == 41) {
var bo = "você é Feio, mas é legal, continue assim";
} else if (feio == 42) {
var bo =
"Nada que uma maquiagem e se arrumar, que não resolva.";
} else if (feio == 43) {
var bo = "Feio que dói de ver, compra uma máscara que melhora";
} else if (feio == 44) {
var bo = "Feio mas nada que um saco na cabeça não resolva né!?";
} else if (feio == 45) {
var bo = "você é feio, mas tem bom gosto";
} else if (feio == 46) {
var bo = "feio mas tem muitos amigos";
} else if (feio == 47) {
var bo = "é feio mas tem lábia pra pegar várias novinha";
} else if (feio == 4) {
var bo = "feio e ainda não sabe se vestir, vixi";
} else if (feio == 49) {
var bo = "feiooo dms vey.";
} else if (feio == 50) {
var bo = "você é feio, mas não se encherga.";
} else if (feio > 51) {
var bo = "você é feio demais bixo.";
}
await carol.sendMessage(
from,
{
image: { url: imgfeio },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa feia?\n• A porcentagem de chance é *${random}%*, ${bo}`,
mentions: [sender_ou_n],
thumbnail: null,
},
{ quoted: selo }
);
}, 7000);
break;

case "corno":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a ficha de corno @${sender_ou_n.split("@")[0]}, aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imgcorno },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa chifruda?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "vesgo":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a ficha de vesgo @${sender_ou_n.split("@")[0]}, aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imgvesgo },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa vesga?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "bebado":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a ficha de bebado(a) @${sender_ou_n.split("@")[0]}, aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imgbebado },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa bêbada?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;
// ====== COMANDO FIEL ======
case "fiel":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));

// Áudio inicial
// Mensagem de busca
carol.sendMessage(
from,
{
text: `🔎 Analisando o coração de *@${sender_ou_n.split("@")[0]}*... será fiel mesmo?`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);

setTimeout(async () => {
let random = Math.floor(Math.random() * 101);

// Definição de título conforme a porcentagem
let titulo = "";
if (random <= 20) titulo = "💔 Coração de Pedra";
else if (random <= 50) titulo = "😏 Aventureiro";
else if (random <= 80) titulo = "💘 Comprometido";
else titulo = "😇 Anjo Fiel";

// Criar barra de fidelidade
let barra =
"█".repeat(Math.floor(random / 10)) +
"░".repeat(10 - Math.floor(random / 10));

carol.sendMessage(
from,
{
image: {
url: `https://storage.oberonhosting.com.br/media/2168f346e72f836f.jpg`,
},
caption:
`💞 Resultado da análise de fidelidade:\n\n` +
`👤 Usuário: *@${sender_ou_n.split("@")[0]}*\n` +
`📊 Fidelidade: *${random}%*\n` +
`🏆 Título: *${titulo}*\n\n` +
`📈 Barra de Fidelidade:\n[${barra}]`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

// ====== COMANDO INFIEL ======
case "infiel":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));

carol.sendMessage(
from,
{
text: `⚠️ Investigando a ficha de *@${sender_ou_n.split("@")[0]}*... será que é infiel? 👀`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);

setTimeout(async () => {
let random = Math.floor(Math.random() * 101);

// Frases sarcásticas baseadas na porcentagem
let frase = "";
if (random <= 20) frase = "Esse aí é quase um santo! 😇";
else if (random <= 50)
frase = "Hmm... já começou a olhar pros lados. 👀";
else if (random <= 80)
frase =
"⚡ Perigo! Pode sumir e voltar com desculpa esfarrapada.";
else
frase =
"🔥 100% infiel! Nem o celular fica desbloqueado perto de você.";

let barra =
"█".repeat(Math.floor(random / 10)) +
"░".repeat(10 - Math.floor(random / 10));

carol.sendMessage(
from,
{
image: {
url: `https://storage.oberonhosting.com.br/media/744d0516ce7ea886.jpg`,
},
caption:
`💔 Análise concluída!\n\n` +
`👤 Usuário: *@${sender_ou_n.split("@")[0]}*\n` +
`📊 Infidelidade: *${random}%*\n\n` +
`📈 Barra de Infidelidade:\n[${barra}]\n\n` +
`💬 ${frase}`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "gado":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a ficha de gado @${sender_ou_n.split("@")[0]}, aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imggado },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um gado?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "gostoso":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a sua ficha de gostoso @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imggostoso },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`,
gifPlayback: true,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "gostosa":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a sua ficha de gostosa @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imggostosa },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`,
gifPlayback: true,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "sigma":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a sua ficha de sigma @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imgsigma },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa sigma?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "beta":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a sua ficha de beta @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imgbeta },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um beta?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "baiano":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a sua ficha de baiano @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imgbaiano },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa baiana?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "baiana":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a sua ficha de baiana @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imgbaiana },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa baiana?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "carioca":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a sua ficha de carioca @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imgcarioca },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa carioca?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "louco":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a sua ficha de louco @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imglouco },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa louca?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "louca":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a sua ficha de louca @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imglouca },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa louca?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "safada":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a sua ficha de safada @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imgsafada },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa safada?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "safado":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a sua ficha de safado @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imgsafado },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa safada?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "macaco":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a sua ficha de macaco @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imgmacaco },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um macaco?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "macaca":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a sua ficha de macaca @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imgmacaca },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma macaca?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "puta":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await carol.sendMessage(
from,
{
text: `Pesquisando a sua ficha de puta @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
setTimeout(async () => {
random = `${Math.floor(Math.random() * 110)}`;
await carol.sendMessage(
from,
{
image: { url: imgputa },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma puta?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n],
},
{ quoted: selo }
);
}, 7000);
break;

case "morte":
case "death":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
if (args.length == 0)
return reply(
`Está faltando o nome da pessoa! Por exemplo: ${prefix + command} Victor`
);
predea = await axios.get(
`https://api.agify.io/?name=${encodeURIComponent(args[0])}`
);
if (predea.data.age == null)
return reply(
`Você inseriu um nome invalido, certifique-se de inserir um sem acentos, emojis, números e outros.`
);
await carol.sendMessage(
from,
{
video: { url: deathcmd },
gifPlayback: true,
caption: `Pessoas com este nome citado “${predea.data.name}” tendem a morrer aos ${predea.data.age} anos.`,
mentions: [sender],
},
{ quoted: selo }
);
break;

case "matar":
case "mata":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(
"marque o alvo que você quer matar, a mensagem ou o @"
);
carol.sendMessage(
from,
{
video: { url: matarcmd },
gifPlayback: true,
caption: `Você acabou de matar o(a) *@${menc_os2.split("@")[0]}*, seu... 😵‍💫💅🏻`,
mentions: [menc_os2],
},
{ quoted: selo }
);
break;

case "provocante":
{
let r = [
"Hmm… você gosta de provocar, né?",
"Chega mais… prometo não morder. Muito.",
"Só seu jeito já me deixa no clima.",
"Continua assim que eu me perco."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "malicioso":
{
let r = [
"Pensando besteira de novo, né?",
"Esse olhar aí não engana ninguém…",
"Sua mente é mais quente que você admite.",
"Cuidado… eu percebo malícia de longe."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "safado":
{
let r = [
"Safadinho desse jeito?",
"Te conheço… e sei exatamente o que você pensou.",
"Você vive no limite da malícia.",
"Safado do jeito que eu gosto."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "safadinha":
{
let r = [
"Hmmm… te pegando no flagra de novo.",
"Essa carinha não engana, viu?",
"Toda jeitinho de quem apronta.",
"Safadinha… e você sabe disso."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "tentacao":
{
let r = [
"Você é tentação pura.",
"Só seu jeito já me chama.",
"Não brinca comigo… ou eu cedo.",
"Eu tento resistir, mas fica difícil."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "seduzir":
{
let r = [
"Você sabe seduzir sem nem perceber.",
"Continua que eu caio na sua.",
"Esse charme aí… perigoso.",
"Seu jeito me deixa sem reação."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "climax":
{
let r = [
"O clima tá esquentando…",
"Você sabe exatamente o que faz.",
"Continua… devagar…",
"A tensão tá ficando boa."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "caliente":
{
let r = [
"Temperatura subindo aqui…",
"Você chegou pegando fogo.",
"Caliente do jeitinho que eu gosto.",
"Se continuar assim eu derreto."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "calor":
{
let r = [
"Tá quente aqui ou é você?",
"Esse calor é diferente…",
"Meu Deus… você tá pegando fogo.",
"O clima esquentou rápido demais."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "tesao":
{
let r = [
"Só de ouvir sua voz já dá um negócio…",
"Você sabe que mexe comigo.",
"Hmmm… perigoso o que você desperta.",
"Nem disfarça… eu senti sua vibe."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "quente":
{
let r = [
"Tá ficando quente demais…",
"Não chega tão perto assim…",
"Você acende qualquer ambiente.",
"Quente do jeito certo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "delicia":
{
let r = [
"Você é uma delícia de pessoa.",
"Hmmm… que delícia ouvir isso.",
"Fala de novo… que eu gostei.",
"Que delícia essa sua energia."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "pervertido":
{
let r = [
"Pervertido… eu vi seu pensamento.",
"Nem tenta disfarçar… eu sei.",
"Essa sua mente é perigosíssima.",
"Pervertido do jeitinho que eu gosto."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "pervertida":
{
let r = [
"Você pensou bobagem, né?",
"Seu sorriso te entrega.",
"Pervertida… e charmosa.",
"Sua mente é mais quente que você admite."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "ousadia":
{
let r = [
"Ó a ousadia crescendo…",
"Você tá brincando com fogo.",
"Cuidado… posso gostar.",
"Ousadia combina com você."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "ousado":
{
let r = [
"Que ousadia é essa?",
"Você não tem limites, né?",
"Ousado desse jeito… perigoso.",
"Eu gosto de gente assim."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "ousada":
{
let r = [
"Ousada desse jeitinho…",
"Você provoca sem perceber.",
"Adoro essa sua coragem.",
"Ousada na medida certa."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "desejo":
{
let r = [
"Seu desejo tá estampado na sua cara.",
"Cuidado… desejo chama desejo.",
"Tá com vontade, né?",
"Eu sinto seu desejo daqui."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "vontade":
{
let r = [
"Vontade você tem…",
"Te conheço, e sei o que você quer.",
"Vem com essa vontade toda?",
"Só cuidado pra eu não corresponder."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "luxuria":
{
let r = [
"Luxúria pura saindo de você.",
"Seu olhar diz tudo.",
"A energia tá intensa, viu?",
"Você exala desejo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "proibido":
{
let r = [
"Tudo que é proibido é mais gostoso.",
"Cuidado… isso pode dar problema.",
"Você adora o proibido, né?",
"Eu iria… mas não devia."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "quero":
{
let r = [
"Você quer… e eu percebi.",
"Só fala que você quer.",
"Eu sei o que você tá querendo.",
"Querer é o primeiro passo…"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "teprovoco":
{
let r = [
"Se eu te provocar… você aguenta?",
"Eu posso te provocar mais se quiser.",
"Não me olha assim… ou eu começo.",
"Adoro quando você cai na provocação."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "instigar":
{
let r = [
"Você tá me instigando.",
"Continua que eu respondo.",
"Não provoca… ou eu entro no jogo.",
"Você sabe provocar demais."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "manha":
{
let r = [
"Faz manha pra mim não…",
"Esse jeitinho manhoso aí… perigoso.",
"Você sabe ser manhoso(a) como ninguém.",
"Manha é sua arma secreta, né?"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "suspiroquente":
{
let r = [
"Hmmm… só o suspiro já diz tudo.",
"Esse seu suspiro… confesso que mexe.",
"Deu até um arrepio aqui.",
"Assim eu perco a linha."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sugarolhar":
{
let r = [
"Seu olhar me desmonta.",
"Me olha assim não…",
"Esse olhar tira o ar.",
"Você sabe olhar do jeito certo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sussurro":
{
let r = [
"Um sussurro seu já basta.",
"Sussurra de novo… gostei.",
"Sua voz baixinha é perigosa.",
"Se você sussurrar mais… eu cedo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sensual":
{
let r = [
"Você é naturalmente sensual.",
"Nem tenta negar… você sabe.",
"Seu jeito fala mais que palavras.",
"Sensualidade pura."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "dominante":
{
let r = [
"Você gosta de mandar, né?",
"Hmmm… dominante até demais.",
"Eu percebi quem manda aqui.",
"Seu jeito dominante é… interessante."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "submisso":
{
let r = [
"Você gosta de obedecer?",
"Submisso… é isso mesmo?",
"Seu jeitinho entrega tudo.",
"Gosta quando dizem o que fazer, né?"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "submissa":
{
let r = [
"Hmmm… submissa?",
"Seu jeito é tão obediente…",
"Você gosta quando mandam, né?",
"Submissinha do jeito certo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "perigo":
{
let r = [
"Você mexe com perigo.",
"Se continuar assim eu não respondo.",
"Perigoso brincar comigo.",
"Perigo pode ser gostoso às vezes."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "quebralimite":
{
let r = [
"Você gosta de ultrapassar limites.",
"Cuidado… eu posso ir longe.",
"Se passar dos limites, eu acompanho.",
"Vamos ver até onde você aguenta."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "tensao":
{
let r = [
"A tensão aqui tá diferente…",
"O clima entre a gente tá pegando.",
"Você também sentiu isso?",
"Tensão boa é essa."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "mordida":
{
let r = [
"Esse jeitinho dá vontade de morder.",
"Mordidinha de leve… que mal tem?",
"Se eu morder… você aguenta?",
"Nem chega tão perto assim…"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "olharquente":
{
let r = [
"Seu olhar diz TANTA coisa…",
"Para de olhar assim.",
"Você sabe olhar do jeito certo.",
"Esse olhar tira o ar."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "lentoeprovocante":
{
let r = [
"Devagar… assim mesmo.",
"Do jeito lento e provocante que eu gosto.",
"Continua nesse ritmo…",
"Assim você me desmonta."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sensacaolenta":
{
let r = [
"Sentiu isso também?",
"Hmmm… devagarzinho fica melhor.",
"A sensação tá boa…",
"Continua nesse passo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "chamativa":
{
let r = [
"Você chama atenção fácil.",
"Seu jeito atrai… e muito.",
"Difícil não olhar pra você.",
"Chamativa do jeito certo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "frisson":
{
let r = [
"Frisson bom subindo aqui…",
"Você arrepia até minha alma.",
"Que sensação deliciosa.",
"Eu sinto o frisson no ar."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "delirio":
{
let r = [
"Você faz qualquer um delirar.",
"Isso tá mexendo comigo.",
"Nem fala assim comigo…",
"Delírio puro esse clima."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "tentacaoforte":
{
let r = [
"A tentação tá ficando forte…",
"Eu tô quase cedendo.",
"Para… ou continua.",
"Tentação desse jeito é golpe."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "safadeza":
{
let r = [
"A safadeza tá fluindo forte hoje.",
"Safadeza gostosa assim… difícil resistir.",
"Você distribui safadeza fácil.",
"A energia tá quente."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "calmapequente":
{
let r = [
"Calmo… mas quente…",
"Essa calmaria tá maliciosa.",
"Quietinho assim é perigoso.",
"A calmaria antes do calor."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "ar":
{
let r = [
"O ar ficou pesado… e quente.",
"Respira fundo… devagar.",
"Você tirou meu ar.",
"O clima tá no ar."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sensoes":
{
let r = [
"A sensação tá diferente hoje.",
"Seu toque imaginário arrepia.",
"Você mexe com minhas sensações.",
"Hmmm… sente isso?"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "latejante":
{
let r = [
"Só de falar já deu um negócio…",
"Latejante… do jeitinho que começa.",
"A tensão tá pulsando.",
"Nossa… que sensação forte."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "arrepios":
{
let r = [
"Arrepiei aqui… sério.",
"Você dá arrepio só falando.",
"Meu corpo reagiu sem querer.",
"Esse clima arrepia."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sorrisosujo":
{
let r = [
"Esse seu sorriso… hmmm.",
"Sorriso de quem pensou besteira.",
"Eu conheço esse sorriso sujo aí.",
"Continua sorrindo assim pra ver."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "malicia":
{
let r = [
"Sua malícia tá vazando.",
"Você sabe exatamente o que faz.",
"Malicioso(a) demais pra ser inocente.",
"Eu sinto a malícia daqui."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "pecado":
{
let r = [
"Você é meu pecado favorito.",
"Pecado gostoso dá até vontade.",
"Isso aqui vai dar pecado.",
"Você inspira coisas proibidas."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "cadencia":
{
let r = [
"Devagar… na cadência certa.",
"Você sabe a cadência perfeita.",
"Ritmo gostoso esse seu.",
"Continua nesse balanço…"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "maldadeboa":
{
let r = [
"Essa maldade aí é gostosa.",
"Maldade do jeitinho perfeito.",
"Continua que eu gosto.",
"Maldade boa é outra história."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "indecencia":
{
let r = [
"Você tá indecente hoje.",
"Nem tenta ser comportado(a).",
"Indecente do jeito que me deixa bobo(a).",
"Isso daí passa longe de inocência."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "climaforte":
{
let r = [
"O clima ficou intenso demais.",
"Você também sentiu isso?",
"Clima forte… irresistível.",
"A pressão tá subindo por aqui."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "puxada":
{
let r = [
"Se eu te puxar… você vem?",
"Te puxaria pra perto sem pensar.",
"Só uma puxadinha… vem cá.",
"Cuidado… eu puxo de verdade."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sintoniaquente":
{
let r = [
"Nossa sintonia tá quente.",
"A conexão aqui tá diferente.",
"Você combina com meu calor.",
"Sintonia perfeita… perigosa."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "provocacaolenta":
{
let r = [
"Devagar… bem devagar…",
"Desse jeito você me desmonta.",
"A provocação lenta é a pior.",
"Continua… mas sem pressa."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "riscando":
{
let r = [
"Você tá riscando o limite.",
"Cuidado… você me atiça fácil.",
"Riscando? Eu respondo.",
"Vai riscando… eu gosto."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "beijo":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1]) return reply("Marque a pessoa que você quer beijar, a mensagem ou o @");
await carol.sendMessage(
from,
{
video: { url: beijocmd },
gifPlayback: true,
caption: `Você acabou de mandar um beijo gostoso para o(a) *@${menc_os2.split("@")[0]}*!`,
mentions: [menc_os2],
},
{ quoted: selo }
);
break;

case "motivacao":
{
let r = [
"Você é mais forte do que imagina!",
"Continue, falta pouco para vencer.",
"Respira, foca e segue.",
"Seu esforço vai valer a pena."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "inspire":
{
let r = [
"Viva hoje melhor que ontem.",
"Seu futuro depende do que você faz agora.",
"A motivação te coloca pra começar, o hábito te mantém.",
"Plante hoje o que quer colher amanhã."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "frase":
{
let r = [
"Tudo passa, até o que parece impossível.",
"Não tenha medo de recomeçar.",
"Seja grato pelo que você tem.",
"A calma é poderosa."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "reflexao":
{
let r = [
"O problema não é o problema, mas como você reage.",
"A paz vem quando você aceita o que não pode mudar.",
"Nem tudo merece sua reação.",
"Às vezes silêncio é resposta."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "autoestima":
{
let r = [
"Você é suficiente.",
"Você merece o melhor.",
"Acredite mais em você.",
"Não se compare, você é único."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "elogio":
{
let r = [
"Você tem um brilho incrível!",
"Sua presença ilumina tudo!",
"Seu sorriso é contagiante!",
"Você é uma pessoa especial."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "cantada":
{
let r = [
"Você não é Wi-Fi, mas me conectou.",
"Seu nome é Google? Porque tem tudo o que eu procuro.",
"Se beleza fosse crime, você estaria preso(a).",
"Você tem um mapa? Me perdi nos seus olhos."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "piada":
{
let r = [
"Por que o computador foi ao médico? Porque estava com vírus!",
"Eu ia contar uma piada sobre programação… mas ainda estou debugando.",
"O que o zero disse para o oito? Belo cinto!",
"Qual é o cúmulo da rapidez? Fechar a gaveta e prender o dedo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "indireta":
{
let r = [
"Tem gente que só aparece para sugar sua energia.",
"Se toca antes que alguém precise te empurrar.",
"Nem todo mundo torce por você. Observe.",
"Seja esperto com quem você compartilha sua energia."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "direta":
{
let r = [
"Para de ser idiota.",
"Cria vergonha na cara.",
"Se manca, por favor.",
"Para de passar vergonha."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "conselho":
{
let r = [
"Beba água.",
"Respira antes de reagir.",
"Nem tudo vale a sua energia.",
"Escolha suas batalhas."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "alerta":
{
let r = [
"Cuidado com quem você chama de amigo.",
"Atenção: nem tudo é o que parece.",
"Fique esperto com as intenções dos outros.",
"Proteja sua paz."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "energia":
{
let r = [
"Sua energia muda tudo ao seu redor.",
"Se afaste do que te rouba energia.",
"Vibre na frequência do que você deseja.",
"Energia boa atrai coisa boa."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "simnao":
{
let r = ["Sim", "Não", "Talvez", "Depende…"];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "moeda":
{
let r = ["Cara", "Coroa", "A moeda caiu em pé 😳"];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "destino":
{
let r = [
"Seu destino está sendo escrito agora.",
"Algo grande está vindo para você.",
"Nem tudo é coincidência.",
"O universo está conspirando a seu favor."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "beijo":
{
let r = [
"💋 Beijinho enviado!",
"😘 Toma um beijo aí!",
"🫦 Beijo doce pra você.",
"😳 Eita… beijo enviado!"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "abraco":
{
let r = [
"🤗 Abraço apertado!",
"🫂 Abraço quentinho pra você.",
"💞 Abraço cheio de carinho.",
"🤝 Você ganhou um abraço."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sorte":
{
let r = [
"Sua sorte hoje está altíssima!",
"Sua sorte está média.",
"Sua sorte está baixa… cuidado.",
"Hoje a sorte tá indecisa 😅"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "azar":
{
let r = [
"Talvez seja bom evitar riscos hoje.",
"Melhor não tentar a sorte.",
"Hmm… não é seu melhor dia.",
"Deu ruim, mas pode melhorar."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "humor":
{
let r = [
"Seu humor tá ótimo hoje!",
"Você tá meio estranho… mas tudo bem.",
"Humor instável detectado.",
"Hoje você tá impossível 😂"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sentimento":
{
let r = [
"Você é mais amado do que imagina.",
"Tem alguém pensando em você.",
"Seu coração é enorme, sabia?",
"Hoje é um bom dia para sentir coisas boas."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "filosofia":
{
let r = [
"Penso, logo existo.",
"A vida examinada é a única que vale a pena.",
"Somos aquilo que fazemos repetidamente.",
"Nada é permanente, exceto a mudança."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "verdade":
{
let r = [
"A verdade dói, mas liberta.",
"Nem todo mundo quer ouvir a verdade.",
"A verdade é simples, as pessoas que complicam.",
"Fale a verdade, mesmo quando dói."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "desafio":
{
let r = [
"Envie um emoji aleatório.",
"Mande um áudio dizendo 'eu sou incrível'.",
"Troque seu nome do WhatsApp por 1 minuto.",
"Envie um sticker aleatório agora!"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "memesimples":
{
let r = [
"Eu tentei e falhei… mas tentei 😂",
"Quando a vida te bater, bate de volta.",
"O problema não sou eu, é você.",
"Erro 404: paciência não encontrada."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "risada":
{
let r = ["😂😂😂", "KKKKKKKKK", "😹😹😹", "Meu Deus 😂😂😂"];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sono":
{
let r = [
"Tô com sono também 😴",
"Dormir? Parece uma boa ideia.",
"Um cochilo cairia bem agora.",
"Vai descansar, campeão."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "ansiedade":
{
let r = [
"Respira fundo… vai ficar tudo bem.",
"Você está no controle.",
"Calma, uma coisa de cada vez.",
"A ansiedade mente, não acredite nela."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "calma":
{
let r = [
"Respire… devagar…",
"Você consegue manter a calma.",
"Relaxa, nada dura pra sempre.",
"Respira 4 segundos, segura 2, solta 6."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "felicidade":
{
let r = [
"Você merece ser feliz!",
"A felicidade está nas pequenas coisas.",
"Hoje é um bom dia para sorrir.",
"Sua felicidade importa."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "triste":
{
let r = [
"Tudo bem não estar bem.",
"Eu tô aqui, respira comigo.",
"Você não está sozinho(a).",
"Vai passar, confia."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "forca":
{
let r = [
"Você já venceu tanta coisa… continua!",
"Força! Você aguenta.",
"Coragem é agir mesmo com medo.",
"Você é uma pessoa forte."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "saude":
{
let r = [
"Beba água agora.",
"Lembre de cuidar de você.",
"Sua saúde mental importa.",
"Alongue um pouco o corpo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "amizade":
{
let r = [
"Amigos são a família que escolhemos.",
"Uma boa amizade vale ouro.",
"Você é um amigo incrível.",
"Quem tem amigos tem tudo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "amor":
{
let r = [
"Amar é um risco que vale a pena.",
"O amor cura tudo.",
"Você merece ser amado(a).",
"O amor vem nas horas certas."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "crush":
{
let r = [
"Seu crush pensou em você hoje 👀",
"Seu crush tá online te ignorando 😭",
"Seu crush te acha interessante 😳",
"Alguém está apaixonado por você…"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "ship":
{
let r = [
"Vocês combinam muito!",
"Casem logo 😍",
"Isso aí tem futuro!",
"Hmmm… sinto química 👀"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "coragem":
{
let r = [
"Você consegue superar isso.",
"Vai com medo mesmo!",
"Coragem é a chave hoje.",
"Não deixe o medo te travar."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "objetivo":
{
let r = [
"Foque no que realmente importa.",
"Seu objetivo é possível.",
"Você está mais perto do que imagina.",
"Mantenha o foco e avance."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "futuro":
{
let r = [
"Seu futuro é brilhante.",
"Coisas boas estão chegando.",
"Você vai mais longe do que imagina.",
"O futuro te reserva grandes coisas."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "presente":
{
let r = [
"Viva o agora.",
"O presente é tudo o que você realmente tem.",
"Aproveite o momento.",
"O hoje nunca volta."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "passado":
{
let r = [
"O passado não define você.",
"Você cresceu muito desde então.",
"Perdoe-se pelo seu passado.",
"Olhe pra frente, não pra trás."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "historia":
{
let r = [
"Toda pessoa tem uma história incrível.",
"Sua história ainda está sendo escrita.",
"Você já superou muito até aqui.",
"Sua jornada é única."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "medo":
{
let r = [
"Medo é só uma sensação, não um destino.",
"Encare o medo aos poucos.",
"O medo some quando você age.",
"Você é maior que seu medo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "alegria":
{
let r = [
"Sorria, faz bem pra alma.",
"Você é luz!",
"Hoje tem alegria pra você.",
"Pequenos momentos criam grandes memórias."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sorteio":
{
let r = [
"🎉 Você ganhou!",
"🤔 Não foi dessa vez.",
"🔥 Quase! Faltou pouco!",
"🍀 Sorte está do seu lado!"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "risada":
{
let r = ["KKKKKKKKKK", "😂😂😂", "🤣🤣🤣", "😹😹😹"];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "brabo":
{
let r = [
"Brabo demais!",
"Apenas o brabo em ação.",
"Aqui é só excelência!",
"Fala dele!! 🔥"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "zika":
{
let r = [
"Zik4 do rolê!",
"O mais zika do grupo chegou.",
"Zikado nível máximo.",
"Chamou o zika? Tô aqui 😎"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "humilde":
{
let r = [
"Humildade reina sempre.",
"Ser humilde nunca sai de moda.",
"Quem é humilde sempre cresce.",
"A humildade conquista."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "aleatorio":
{
let r = [
"Mensagem aleatória enviada!",
"Isso foi totalmente randômico.",
"Talvez faça sentido… talvez não.",
"O destino te mandou essa frase."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "energiaalta":
{
let r = [
"Sua energia tá lá no alto!",
"Você tá impossível hoje!",
"Ninguém te segura!",
"Energia máxima ativada."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "energiabaixa":
{
let r = [
"Hmm… sua energia caiu um pouco.",
"Descansa um pouco, vai te fazer bem.",
"Faça algo leve agora.",
"Se cuida, tá precisando."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "memerandom":
{
let r = [
"🤡 Esse sou eu.",
"😂 Eu tentando viver.",
"🔥 Quando a vida te bate mas você é BRABO.",
"🧠 Mente de campeão."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "pensamento":
{
let r = [
"Pense antes de agir.",
"O pensamento cria a realidade.",
"Suas ideias têm poder.",
"A mente é seu maior aliado."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "inteligencia":
{
let r = [
"Inteligente demais!",
"Sua mente vai longe.",
"Você pensa rápido, hein?",
"Sua inteligência é admirável."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sabedoria":
{
let r = [
"A sabedoria começa na reflexão.",
"Nem tudo que você pensa deve ser dito.",
"Aprenda a ouvir mais do que falar.",
"O sábio observa antes de agir."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "paz":
{
let r = [
"Sua paz vale ouro.",
"Não deixe ninguém roubar sua paz.",
"Silêncio também é paz.",
"A paz começa dentro de você."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "caos":
{
let r = [
"Às vezes o caos é necessário.",
"O caos antecede a evolução.",
"Você cresce na confusão.",
"O caos também é parte do caminho."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "loucura":
{
let r = [
"Um pouco de loucura faz bem.",
"Somos todos um pouco loucos.",
"A loucura é prima da criatividade.",
"Parabéns, você desbloqueou a loucura."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "fogo":
{
let r = [
"🔥 Você tá pegando fogo hoje!",
"🔥 Energia incandescente detectada.",
"🔥 Só tapa quente.",
"🔥 Hoje você tá impossível!"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "gelo":
{
let r = [
"❄️ Frio igual seu coração.",
"❄️ Gelado até demais!",
"❄️ Congelou o ambiente.",
"❄️ Climinha tenso…"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "vento":
{
let r = [
"💨 Passou voando.",
"💨 Vento de mudança vindo aí.",
"💨 Tudo flui.",
"💨 Você tá leve hoje."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "terra":
{
let r = [
"🌱 O que você planta, colhe.",
"🌍 A Terra te acolhe.",
"🌿 Crescendo em silêncio.",
"🌾 Paz e natureza."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "elemento":
{
let r = [
"🔥 Fogo!",
"💧 Água!",
"💨 Ar!",
"🌱 Terra!"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "risofino":
{
let r = [
"hehe",
"hihi",
"hoho",
"rsrsrs"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "misterio":
{
let r = [
"Algo está acontecendo…",
"Você sente isso também?",
"Silêncio… algo se aproxima.",
"Mistérios rondam este chat."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "plot":
{
let r = [
"Plot twist: você foi enganado.",
"Plot twist: tudo era um sonho.",
"Plot twist: eu sempre soube.",
"Plot twist: nada é o que parece."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "revelacao":
{
let r = [
"Uma verdade será revelada hoje.",
"Prepare-se para descobrir algo.",
"Nem tudo é segredo para sempre.",
"Alguém vai te surpreender."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "energiaoculta":
{
let r = [
"Sinto algo estranho no ar…",
"Tem uma vibração diferente hoje.",
"Energia oculta detectada.",
"Alguém aqui carrega uma aura forte."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "caotico":
{
let r = [
"Você traz o caos por onde passa 😂",
"Caos personificado.",
"A confusão é seu habitat natural.",
"Você é pura entropia."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "ordem":
{
let r = [
"Tudo está se encaixando.",
"Ordem restabelecida.",
"Equilíbrio conseguido.",
"A harmonia voltou."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "foco":
{
let r = [
"Foco total!",
"Nada te distrai hoje.",
"Concentração no máximo.",
"Sua mente está afiada."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "desfoque":
{
let r = [
"Sua mente tá confusa hoje.",
"Será que você dormiu bem?",
"Volta pro foco, campeão.",
"Você tá viajando demais agora 😂"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "alma":
{
let r = [
"Sua alma brilha.",
"Você tem uma energia rara.",
"Sua essência é bonita.",
"Existe algo especial em você."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "espirito":
{
let r = [
"Seu espírito é forte.",
"Sua energia espiritual está alta.",
"Você carrega uma luz poderosa.",
"Continue evoluindo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "mente":
{
let r = [
"Sua mente é poderosa.",
"Você pensa mais do que fala.",
"Sua lógica é afiada.",
"Você tem uma mente brilhante."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "corpo":
{
let r = [
"Seu corpo merece descanso.",
"Alongue-se por alguns segundos.",
"Cuide mais de você.",
"Seu corpo fala—escute."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "espelho":
{
let r = [
"O espelho reflete só o exterior.",
"Se olhe com carinho.",
"Você é mais bonito do que pensa.",
"O espelho mente às vezes."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "universo":
{
let r = [
"O universo conspira a seu favor.",
"O universo te observa.",
"O universo sabe o caminho.",
"Você faz parte de algo grande."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "estrela":
{
let r = [
"Você nasceu para brilhar.",
"Uma estrela nunca perde o brilho.",
"Seu brilho incomoda alguns.",
"Continue brilhando."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "lua":
{
let r = [
"A lua te observa hoje.",
"Você tem energia lunar.",
"Sua vibe é mística.",
"Noite bonita, né?"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sol":
{
let r = [
"Você tem luz própria.",
"Sua energia é quente como o sol.",
"Ilumine o dia de alguém.",
"Brilhe sem medo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "tempestade":
{
let r = [
"Toda tempestade passa.",
"Depois da tempestade vem a calma.",
"A tormenta te fortalece.",
"Tem algo grande vindo aí."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "chuva":
{
let r = [
"A chuva limpa a alma.",
"Chuva é sinônimo de renovação.",
"Chover faz parte da vida.",
"Hoje o clima tá poético."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "arcoiris":
{
let r = [
"Depois da chuva sempre vem o arco-íris.",
"Cores trazem esperança.",
"Seu dia terá algo bonito hoje.",
"Você merece ver um arco-íris."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "silencio":
{
let r = [
"Shhh… silêncio fala muito.",
"Às vezes ficar quieto é a melhor resposta.",
"O silêncio diz mais que mil palavras.",
"Nem tudo precisa ser dito."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "grito":
{
let r = [
"AAAAAAAHHHH!!! 😱",
"GRITOOOOOOO 🔊",
"AAAAAAAAAAAAAAAAAAAA",
"Gritei mais alto que sua vida amorosa 😂"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "suspiro":
{
let r = [
"*suspiro profundo…*",
"Ai ai…",
"Que dia complicado, né?",
"Suspiro de cansaço detectado."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "energiaextra":
{
let r = [
"Você recebeu +100 de energia!",
"Boost de energia concedido!",
"Energia reposta, bora!",
"Modo turbo ativado ⚡"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "recarga":
{
let r = [
"Carregando energia… 10%… 100%! ⚡",
"Bateria emocional recarregada.",
"Você agora está no máximo!",
"Recarga concluída."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "soninho":
{
let r = [
"😴 Sono tá batendo forte.",
"Vai descansar um pouco.",
"Dormir é top, sabia?",
"Tira um cochilo, você merece."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "acordo":
{
let r = [
"ACORDAAAAAAA! ☀️",
"Bom dia, campeão(a)!",
"Levanta que o mundo é seu!",
"Acordar cedo é pra poucos 😎"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "surpresa":
{
let r = [
"😳 Surpresa!",
"Você não esperava por isso, né?",
"Peguei você desprevenido(a)!",
"Plot twist inesperado!"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "confete":
{
let r = [
"🎉 *Confetes jogados!* 🎉",
"🎊 ALEGRIA NO AR!",
"💥 POW! Confete na sua cara!",
"🎉 Você merece festa!"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "carinho":
{
let r = [
"💞 Carinho enviado.",
"✨ Um pouco de afeto pra você.",
"🤍 Você merece cuidado.",
"💗 Carinho digital ativado."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "fofo":
{
let r = [
"Aw, você é muito fofo(a)! 💕",
"Fofura detectada!",
"Você é nivel: explosão de fofura!",
"Tão fofinho(a) que dá vontade de apertar 😳"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "ignorancia":
{
let r = [
"Nem tudo merece sua resposta.",
"Ignora… é melhor.",
"Às vezes o silêncio vence.",
"Não caia em provocação."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "classe":
{
let r = [
"Classe nunca foi questão de dinheiro.",
"Estilo é natural.",
"Você tem presença.",
"Elegância pura."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "poder":
{
let r = [
"Você tem um poder incrível.",
"Seu potencial é gigante.",
"A força está com você.",
"Seu poder interior é real."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "cuidado":
{
let r = [
"Cuidado por onde pisa.",
"Nem todo mundo quer seu bem.",
"Cuidado com as intenções alheias.",
"Você é valioso, se proteja."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "alertaverde":
{
let r = [
"🟢 Tudo seguro.",
"🟢 Melhor momento pra agir!",
"🟢 Energia boa no ar.",
"🟢 Pode seguir em frente!"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "alertaamarelo":
{
let r = [
"🟡 Vá com calma.",
"🟡 Talvez seja bom esperar.",
"🟡 Atenção aos sinais.",
"🟡 Algo pode estar estranho."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "alertavermelho":
{
let r = [
"🔴 ALERTA MÁXIMO!",
"🔴 CUIDADO! perigo detectado!",
"🔴 Algo está MUITO errado!",
"🔴 Recuar pode ser sábio."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "espanto":
{
let r = [
"😳 EITA!",
"😱 Meu Deus!",
"😮 Como assim?!",
"😵 O que tá acontecendo?"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "drama":
{
let r = [
"💅 *Eu nasci pra causar*.",
"😩 Ai meu Deus, que dramaaa!",
"😭 Sofrendo igual novela mexicana.",
"😔 Drama? Eu? Imagina!"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "calmaelegante":
{
let r = [
"🕊️ Mantenha a postura.",
"😌 Elegância até na calma.",
"✨ Respira com estilo.",
"🌿 Paz e classe sempre."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "nojo":
{
let r = [
"🤢 Credo, que nojo.",
"🤮 Tô passando mal.",
"🤢 Sai pra lá!",
"🤮 Argh… detesto isso."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "aleatorio2":
{
let r = [
"Mensagem caótica aleatória enviada.",
"Sem sentido? Sim. Necessário? Talvez.",
"O universo falou comigo e mandou isso.",
"Não pergunte… só aceite."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "energiaestranha":
{
let r = [
"Você sentiu isso também?",
"Energia estranha no ar…",
"Hmm… vibração diferente hoje.",
"Tem algo fora do normal."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "mistico":
{
let r = [
"🔮 O destino está agindo.",
"✨ Sua aura brilha hoje.",
"🌙 Você carrega energia mística.",
"🔮 Algo mágico te ronda."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sombrio":
{
let r = [
"🌑 Sinto uma sombra perto…",
"🕷️ O clima ficou pesado.",
"👁️ Alguém te observa…",
"💀 Atmosfera sombria detectada."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "desabafo":
{
let r = [
"Pode desabafar, eu tô te ouvindo.",
"Às vezes a gente só precisa falar.",
"Fala aí, tô aqui pra você.",
"Solta o que tá te prendendo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "apoio":
{
let r = [
"Tô com você, relaxa.",
"Você não está sozinho(a).",
"Se precisar, tô aqui.",
"Pode contar comigo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "maturidade":
{
let r = [
"Maturidade é saber quando ficar em silêncio.",
"Crescer dói, mas vale a pena.",
"Nem tudo merece sua energia.",
"Seja sábio nas suas escolhas."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "caixinha":
{
let r = [
"📦 Surpresa dentro da caixa!",
"🎁 Você ganhou um presente imaginário.",
"📦 Abriu a caixa: nada. Mas é de coração.",
"🎁 Caixa mágica ativada!"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "esperanca":
{
let r = [
"Nunca perca a esperança.",
"Amanhã pode ser incrível.",
"Algo bom está vindo.",
"A esperança te mantém firme."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "vitoria":
{
let r = [
"Você nasceu pra vencer!",
"Vitória é questão de tempo.",
"Foco + esforço = vitória.",
"Você vai conquistar o que deseja."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "derrota":
{
let r = [
"Perder faz parte do caminho.",
"Toda queda te ensina algo.",
"Você aprende mais na derrota.",
"Levante-se e tente de novo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sabedoriaoculta":
{
let r = [
"As respostas estão dentro de você.",
"Nem todo sábio fala muito.",
"Encontre sentido no caos.",
"Observe antes de decidir."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "calmaria":
{
let r = [
"Acalme sua mente.",
"Respire tranquilamente.",
"A paz está chegando.",
"Um momento de calma faz bem."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sensacao":
{
let r = [
"Tem algo especial no ar.",
"Você tá diferente hoje.",
"Sinto uma energia nova vindo.",
"Você pode sentir isso também?"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "alertaintuicao":
{
let r = [
"Sua intuição tá certa.",
"Confie no seu pressentimento.",
"Sua intuição tá te avisando.",
"Quando a intuição fala, escute."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "charme":
{
let r = [
"Você tem um charme natural.",
"Seu charme derruba qualquer um.",
"Encantador(a) demais!",
"O charme bateu alto hoje 😳"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sortebaixa":
{
let r = [
"Sua sorte tá meio baixa hoje.",
"Melhor não arriscar muito.",
"Sinto um azar rondando 😂",
"Evite decisões importantes agora."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sortemedia":
{
let r = [
"Sorte média… pode ir.",
"Talvez você dê sorte!",
"Pode ser um bom momento.",
"Nem ruim, nem excelente: médio."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sorteforte":
{
let r = [
"SORTE ALTÍSSIMA HOJE 🍀🔥",
"Tudo vai dar certo!",
"Você tá brilhando hoje!",
"O universo te favorece agora."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "luz":
{
let r = [
"Você ilumina onde passa.",
"Sua luz é única.",
"Continue brilhando.",
"Luz atrai luz."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sombra":
{
let r = [
"Tem algo nas sombras…",
"Cuidado onde pisa.",
"Sinto uma presença estranha.",
"Sombra se movendo por perto."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "brilho":
{
let r = [
"Seu brilho incomoda alguns.",
"Brilha mesmo, sem medo.",
"Você nasceu pra brilhar.",
"Brilho natural detectado."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "gloria":
{
let r = [
"Sua glória tá vindo.",
"Você será exaltado(a).",
"Vitória grande te espera.",
"A glória chega pra quem não desiste."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "fracasso":
{
let r = [
"Fracasso não te define.",
"Falhar é aprendizado.",
"Levante-se, tente de novo.",
"Você já superou coisas piores."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "objetivogrande":
{
let r = [
"Sonhe alto!",
"Objetivo grande? Você consegue.",
"Nada é impossível pra você.",
"Vai fundo no seu sonho."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "coracao":
{
let r = [
"Seu coração é enorme.",
"Você sente mais do que mostra.",
"Seu coração é puro.",
"Você tem um coração raro."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "espada":
{
let r = [
"⚔️ Você está pronto pra batalha!",
"⚔️ Levante sua espada!",
"⚔️ Guerreiros não desistem.",
"⚔️ A luta te fortalece."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "escudo":
{
let r = [
"🛡️ Proteção ativada!",
"🛡️ Você está protegido(a).",
"🛡️ Nada vai te atingir agora.",
"🛡️ Confie no seu escudo."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "conquista":
{
let r = [
"A conquista é sua!",
"Parabéns pela vitória!",
"Você conquistou algo importante.",
"Sinta orgulho do que conquistou."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "derrotado":
{
let r = [
"Você perdeu… mas não acabou!",
"Derrota temporária, aprendizado eterno.",
"Todo guerreiro cai às vezes.",
"Levante-se, ainda não acabou."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "risos":
{
let r = [
"kkkkkkkkkkkk",
"😂😂😂😂😂",
"🤣🤣🤣🤣",
"😹😹😹😹"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "fofoca":
{
let r = [
"Meninaaaaa, sentei pra te contar!",
"Tá sabendo da fofoca?",
"Isso aqui tá melhor que novela!",
"VISHHH… segura essa fofoca 👀"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "dramagamer":
{
let r = [
"VOCÊ ERROU A PLAY! 💀",
"Lag te matou, né?",
"Culpa do ping, com certeza.",
"Se tivesse clicado antes, ganhava 😂"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "animevibe":
{
let r = [
"Você tem aura de protagonista de anime.",
"Um arco novo começa na sua vida.",
"Parece até que você tem um power-up chegando.",
"Hoje você tá no modo shonen!"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "otaku":
{
let r = [
"Otaku detected 👀",
"Hora do anime!",
"Sugoiii ~",
"Precisa tomar banho, hein 😭"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "gamer":
{
let r = [
"Gamer raiz.",
"Pro player detectado.",
"Jogador caro!",
"O dono da gameplay chegou 😎"
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "sabedoriaancestral":
{
let r = [
"O tempo revela tudo.",
"Cada escolha ecoa na eternidade.",
"A paciência é uma arma poderosa.",
"A sabedoria vem com experiência."
];
reply(r[Math.floor(Math.random() * r.length)]);
}
break;

case "tapa":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(
"Marque o alvo que você quer da um tapa, a mensagem ou o @."
);
await carol.sendMessage(
from,
{
video: { url: tapacmd },
gifPlayback: true,
caption: `Você acabou de da um tapa na raba da *@${menc_os2.split("@")[0]}*. 😼`,
mentions: [menc_os2],
},
{ quoted: selo }
);
break;

case "chute":
case "chutar":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(
"Marque o alvo que você quer da um chute, a mensagem ou o @"
);
await carol.sendMessage(
from,
{
video: { url: chutecmd },
gifPlayback: true,
caption: `Você acabou de dar um chute em *@${menc_os2.split("@")[0]}*.`,
mentions: [menc_os2],
},
{ quoted: selo }
);
break;

case "dogolpe":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(
"Marque a mensagem com o comando ou marque o @ do usuário.."
);
randomF = [
"em iludir pessoas",
"em ferir os sentimentos",
"em dar chifre",
];
await carol.sendMessage(
from,
{
text: `♥️☠️ *@${menc_os2.split("@")[0]}* é especialista *${randomF[Math.floor(Math.random() * randomF.length)]}*.`,
mentions: [menc_os2],
},
{ quoted: selo }
);
break;

case "shipo":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
if (!menc_os2)
return reply(
"Marque uma pessoa do grupo para encontrar o par dela."
);
await mention(
`♥️ Eu shipo *@${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split("@")[0]} & @${menc_os2.split("@")[0]}* com uma porcentagem de *${Math.floor(Math.random() * 100) + "%"}*.`
);
break;

case "casal":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await reagir(from, "💘");
var m1 =
groupMembers[Math.floor(Math.random() * groupMembers.length)].id;
var m2 =
groupMembers[Math.floor(Math.random() * groupMembers.length)].id;
try {
ppimg = await carol.profilePictureUrl(m1);
} catch (erro) {
ppimg = "https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg";
}
try {
ppimg2 = await carol.profilePictureUrl(m2);
} catch (erro) {
ppimg2 = "https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg";
}
p1 = await axios.get(
`https://tinyurl.com/api-create.php?url=${ppimg}`
);
p2 = await axios.get(
`https://tinyurl.com/api-create.php?url=${ppimg2}`
);
random = Math.floor(Math.random() * 100);
await carol
.sendMessage(
from,
{
image: {
url:
API_URL +
`/api/canvas/ship?foto1=${p1.data}&foto2=${p2.data}&mat=${random}&fundo=https://telegra.ph/file/b41f8e7f2ca966c8a6667.jpg`,
},
caption: `❪👩🏼‍❤️‍💋‍👨🏻ꦿฺ - Sinto que esses dois formariam um par perfeito juntos:\n*•〔@${m1.split("@")[0]}〕&〔@${m2.split("@")[0]}〕*\n*•*Com uma expectativa de sucesso de:*『${random + "%"}』*`,
mentions: [m1, m2],
},
{ quoted: selo }
)
.catch((error) => {
reply(mess.error());
});
break;

case "rankativos":
case "rankativo":
if (!isGroup) return reply(mess.onlyGroup());
var i3 = countMessage.map((i) => i.groupId).indexOf(from);
var blue = countMessage[i3].numbers.map((i) => i);
blue.sort((a, b) =>
(a.figus == undefined
? (a.figus = 0)
: a.figus + a.messages + a.cmd_messages) <
(b.figus == undefined
? (b.figus = 0)
: b.figus + b.cmd_messages + b.messages)
? 0
: -1
);
menc = [];
blad = `*🏆 Rank dos mais ativos no grupo:* ${groupName}\n`;
for (i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
if (i != null)
blad += `\n*🏅 ${i + 1}º Lugar:* @${blue[i].id.split("@")[0]}\n• Quantidade de mensagens encaminhadas: *${blue[i].messages}*\n• Quantidade de comandos executados pelo usuário(a): *${blue[i].cmd_messages}*\n• Usuário está conectado em um dispositivo: *${blue[i].aparelho}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${blue[i].figus}*\n`;
menc.push(blue[i].id);
}
await mentions(blad, menc, true);
break;

case "rankinativo":
case "rankinativos":
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
await ClearMembersInactive();
bule = [];
bule2 = [];
mentioned_jid = [];
for (cag of countMessage[ind].numbers) {
bule2.push(cag.id);
if (cag.messages <= 1) {
bule.push(cag);
}
}
bule.sort((a, b) =>
a.messages + a.cmd_messages < b.cmd_messages + b.messages ? 0 : -1
);
boardi = `🗑 *Rank dos mais inativos do grupo:* ${groupName}\n-\n`;
if (bule.length == 0)
boardi +=
"❌ Nenhum usuário inativo foi encontrado neste grupo.️";
for (i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
if (i != null)
boardi += `*🏅 ${i + 1}º Lugar:* @${bule[i].id.split("@")[0]}\n• Quantidade de mensagens enviadas pelo usuário(a): *${bule[i].messages}*\n• Quantidade de comandos executados pelo usuário(a): *${bule[i].cmd_messages}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${bule[i].aparelho}*\n\n`;
mentioned_jid.push(bule[i].id);
}
await mentions(boardi, mentioned_jid, true);
break;

case "vab":
case "vcprefere":
case "voceprefere":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await reagir(
from,
"😸"
); /* Reação à mensagem, quando solicitar a execução do comando. */
await psycatgames()
.then(async (array) => {
const { nsfw, questions } =
array[Math.floor(Math.random() * array.length)];
const { pergunta1, pergunta2 } =
questions[Math.floor(Math.random() * questions.length)];
await sendPoll(carol,from, "Você prefere...", [
pergunta1,
pergunta2,
]); /* Enviar a enquete com as preferências sorteadas. */
})
.catch(async (error) => {
await replyWithReaction(mess.error(), {
react: { text: "😿", key: info.key },
});
});
break;

case "eununca":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await reagir(
from,
"🤔"
); /* Reação à mensagem, quando solicitar a execução do comando. */
await sendPoll(
carol,
from,
tools.iNever[Math.floor(Math.random() * tools.iNever.length)],
["Eu nunca", "Eu já"]
).catch(async (error) => {
await replyWithReaction(mess.error(), {
react: { text: "😭", key: info.key },
});
});
break;

case "conselhobiblico":
case "conselhosbiblico":
case "conselhosb":
case "conselhob":
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
advices.biblicalAdvice[
Math.floor(Math.random() * advices.biblicalAdvice.length)
],
{ react: { text: "😌", key: info.key } }
).catch(async (error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
mess.error(),
{ react: { text: "😿", key: info.key } }
);
});
break;

case "conselhos":
case "conselho":
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
advices.commonAdvices[
Math.floor(Math.random() * advices.commonAdvices.length)
],
{ react: { text: "😌", key: info.key } }
).catch(async (error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
mess.error(),
{ react: { text: "😿", key: info.key } }
);
});
break;

case "cantadas":
case "cantada":
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
tools.Cantadas[Math.floor(Math.random() * tools.Cantadas.length)],
{ react: { text: "😼", key: info.key } }
).catch(async (error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
mess.error(),
{ react: { text: "😿", key: info.key } }
);
});
break;

case "fatos":
case "curiosidades":
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
tools.curiousFacts[
Math.floor(Math.random() * tools.curiousFacts.length)
],
{ react: { text: "🙀", key: info.key } }
).catch(async (error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(
mess.error(),
{ react: { text: "😿", key: info.key } }
);
});
break;

case "rankgay":
case "rankgays":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `🏳️‍🌈 *RANK DOS 5 MAIS GAYS DO GRUPO!*\n—\n`;
TMGAYS = [
"Esse aí gosta de cheirar banana até umas horas kakak",
"Gosta de ser dominado e chicoteado.",
"Viadinho gente boa, nada contra os veados.",
"Esse aí roda mais que roda de caminhão.",
"Mapoa é você meu amor?",
"Esse aí ainda tá no armário, a franga tá presa!",
"Profissional na garganta profunda!",
"Essa bicha é finíssima!",
"Essa aí precisa sair do closet ainda!",
"Vixi esse aí e vitaminado!",
"Vixi um gay vulgo irene!",
"Poc fechosa, amo tu mona!",
];
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGAYS[Math.floor(Math.random() * TMGAYS.length)]} )\n`;
}
await mencionarIMG(ABC, rnkgay);
break;
case "rankfiel":
case "rankfieis":
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));

let ABC = `💖 *RANK DOS 5 MAIS FIÉIS DO GRUPO!*\n—\n`;
let TMFIÉIS = [
"Esse aí nunca trai nem no zap!",
"Companheiro fiel até no silêncio.",
"Não larga da parceira(o), lealdade total!",
"Confiança é a palavra dele(a)!",
"Exemplo de fidelidade para o grupo.",
"Sempre presente, nunca decepciona!",
"Amor sincero e inabalável!",
"Pode confiar, nunca te deixa na mão!",
"Coração puro, fiel até o fim!",
"Esse aí é hard level fidelidade!",
];

for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMFIÉIS[Math.floor(Math.random() * TMFIÉIS.length)]} )\n`;
}

await mencionarIMG(ABC, rnkfiel); // ou rnkgay se for função já criada
}
break;

case "rankinfiel":
case "rankinfieis":
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));

let ABC = `💔 *RANK DOS 5 MAIS INFIEIS DO GRUPO!*\n—\n`;
let TMINFIEIS = [
"Esse aí muda de crush todo dia!",
"Cuidado, coração volúvel demais!",
"Não segura ninguém, sempre traindo!",
"Segue o fluxo, ninguém segura!",
"Amor passageiro é seu lema!",
"Já foi de todos os grupos, cuidado!",
"O famoso coração quebrado andando!",
"Se apaixonar? Só por 5 minutos!",
"Desleal mas carismático(a)!",
"Sempre um romance novo na manga!",
];

for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMINFIEIS[Math.floor(Math.random() * TMINFIEIS.length)]} )\n`;
}

await mencionarIMG(ABC, rnkinfiel);
}
break;

case "rankgado":
case "rankgados":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `🐂 *RANK DOS 5 MAIS GADO DO GRUPO:*\n—\n`;
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
}
await mencionarIMG(ABC, rnkgado);
break;

case "rankcorno":
case "rankcornos":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `🐂 *RANK DOS 5 MAIS CORNOS DO GRUPO!*\n—\n`;
TMCRN = [
"Familiar, leva até chifre com os parentes!",
"Masoquista, leva chifre mas não larga a mulher!",
"Atéu, leva chifre e não acredita!",
"Político, só faz promessa e não cumpre o que fala!",
"Esse é que leva chifres, vai embora e volta por causa das crianças.",
"Xuxa, o que não larga a mulher por causa dos baixinhos.",
"Famoso, aquele que por onde passa é reconhecido como tal.",
"Inflação, a cada dia que passa o chifre aumenta.",
];
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMCRN[Math.floor(Math.random() * TMCRN.length)]} )\n`;
}
await mencionarIMG(ABC, rnkcorno);
break;

case "surubao":
case "suruba":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
if (!q)
return reply(`Eita, coloque o número de pessoas após o comando.`);
if (Number(q) > 5)
return reply("Coloque um número menor, ou seja, abaixo de *5*.");
emojiskk = ["🥵", "😈", "🫣", "😏"];
emojis = emojiskk[Math.floor(Math.random() * emojiskk.length)];
frasekk = [
`tá querendo relações sexuais a ${q}, topa?`,
`quer que *${q}* pessoas venham de *chicote, algema e corda de alpinista*.`,
`quer que ${q} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`,
];
context = frasekk[Math.floor(Math.random() * frasekk.length)];
ABC = `${emojis} @${sender.split("@")[0]} ${context}\n\n`;
for (var i = 0; i < q; i++) {
ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
}
await mention(ABC);
break;

case "rankgostosos":
case "rankgostoso":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `*RANK DOS 5 MAIS GOSTOSOS DO GRUPO* 😏🔥\n—\n`;
TMGSTS = [
"Você tá olhando para um semi Deus!",
"Mds, me apaixonei! Passa o insta gatinho?",
"Ei ei gatinhas, o gostosão do grupo chegou!",
"Gostoso? É, pena que é homem galinha!",
"Não sei se comparo esse gostoso com o Ares Ridalgo!",
"Cruz credo, porque tu tá aqui? Tu é feio desgraça!",
];
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGSTS[Math.floor(Math.random() * TMGSTS.length)]} )\n`;
}
await mencionarIMG(ABC, rnkgostoso);
break;

case "rankgostosas":
case "rankgostosa":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `*RANK DAS 5 MAIS GOSTOSAS DO GRUPO* 😏🔥\n—\n`;
TMGSTS = [
"Calma novinha, assim eu não resisto!!",
"Mds, me apaixonei no sorriso dessa gata!!",
"Eita gatinha, Passa o insta quando? rs",
"Credo, sai daqui dragão!",
"Ui gata, que rabão ein!!",
];
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGSTS[Math.floor(Math.random() * TMGSTS.length)]} )\n`;
}
await mencionarIMG(ABC, rnkgostosa);
break;

case "ranknazista":
case "ranknazistas":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n—\n`;
TMNZTS = [
"Soldado nazista, marcha com estilo.‍",
"Comandante implacável, lidera com rigor.️",
"Nazista estrategista, conquista territórios.️",
"Mestre da ordem, disciplina em primeiro lugar.",
"Soldado de elite, Nazista hardcore.",
"General invencível, domina as batalhas.",
"Nazista disciplinado, fiel à causa.",
"Líder autoritário, impõe respeito.️",
"Soldado feroz, nazismo no coração.",
"Mestre da propaganda, convence com palavras.️",
"Nazista moderno, tecnologia na guerra.",
"Máquina de guerra, implacável e eficiente.️",
"Comandante supremo, nazismo eterno.",
"Soldado leal, marcha em nome da ideologia.",
"Nazista clássico, revive o passado.",
"General poderoso, Nazista do século XXI.",
"Comandante inabalável, Nazista de honra.",
"Soldado devoto, nazismo no sangue.",
"Mestre da retórica nazista, convence a todos.",
"Nazista visionário, futuro sob a suástica.",
];
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMNZTS[Math.floor(Math.random() * TMNZTS.length)]} )\n`;
}
await mencionarIMG(ABC, rnknazista);
break;

case "rankotaku":
case "rankotakus":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `*㊙ RANK DOS 5 MAIS OTAKU DO GRUPO ( ˶•̀ _•́ ˶)*\n—\n`;
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
}
await mencionarIMG(ABC, rnkotaku);
break;

case "ranksigma":
case "ranksigmas":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `RANK DOS 5 MAIS SIGMAS DO GRUPO 🗿🍷\n\n`;
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
}
await mencionarIMG(ABC, rnksigma);
break;

case "rankbeta":
case "rankbetas":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `RANK DOS 5 MAIS BETAS DO GRUPO 🫵🏽😂\n\n`;
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
}
await mencionarIMG(ABC, rnkbeta);
break;

case "rankbaiano":
case "rankbaianos":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `RANK DOS 5 MAIS BAIANOS DO GRUPO 😴💤\n\n`;
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
}
await mencionarIMG(ABC, rnkbaiano);
break;

case "rankbaiana":
case "rankbaianas":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `RANK DAS 5 MAIS BAIANAS DO GRUPO 😴💤\n\n`;
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
}
await mencionarIMG(ABC, rnkbaiana);
break;

case "rankcarioca":
case "rankcariocas":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `RANK DOS 5 MAIS CARIOCAS DO GRUPO 🔫🔥\n\n`;
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
}
await mencionarIMG(ABC, rnkcarioca);
break;

case "ranklouco":
case "rankloucos":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `RANK DOS 5 MAIS LOUCOS DO GRUPO 💀\n\n`;
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
}
await mencionarIMG(ABC, rnklouco);
break;

case "ranklouca":
case "rankloucas":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `RANK DAS 5 MAIS LOUCAS DO GRUPO 💀\n\n`;
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
}
await mencionarIMG(ABC, rnklouca);
break;

case "ranksafada":
case "ranksafadas":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `RANK DAS 5 MAIS SAFADAS DO GRUPO 😏🔥\n\n`;
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
}
await mencionarIMG(ABC, rnksafada);
break;

case "ranksafado":
case "ranksafados":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `RANK DOS 5 MAIS SAFADOS DO GRUPO 🥵🔥\n\n`;
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
}
await mencionarIMG(ABC, rnksafado);
break;

case "rankmacaco":
case "rankmacacos":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `RANK DOS 5 MAIS MACACOS DO GRUPO 🐒\n\n`;
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
}
await mencionarIMG(ABC, rnkmacaco);
break;

case "rankmacaca":
case "rankmacacas":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `RANK DAS 5 MAIS MACACAS DO GRUPO 🐒\n\n`;
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
}
await mencionarIMG(ABC, rnkmacaca);
break;

case "rankputa":
case "rankputas":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `RANK DAS 5 MAIS PUTAS DO GRUPO 😈🔥\n\n`;
for (var i = 0; i < 5; i++) {
ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
}
await mencionarIMG(ABC, rnkputa);
break;

case "rankpau":
if (!isGroup) return reply(mess.onlyGroup());
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n—\n`;
TMPAU = [
"Pequeno pra cact, se mata maluco",
`Pequenininho chega ser até fofo`,
`Menor que meu dedo mindinho pequeno demais`,
`Até que dá sentir, tá na média`,
`Até que é grandinho`,
`Grande até!`,
`Gigantesco igual meu braço`,
`Enorme quase chega no útero`,
`Grandão demais em, e uii`,
`Vara de pegar manga, grande demais, como sai na rua assim??`,
"Que grandão em, nasceu metade animal",
];
for (var i = 0; i < 5; i++) {
ABC += `• *${i + 1}°* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMPAU[Math.floor(Math.random() * TMPAU.length)]} )\n`;
}
await mencionarIMG(ABC, rnkpau);
break;

case "mencionar":
if (!q)
return reply(
`Você usou o comando de forma incorreta, use a correta: ${prefix}mencionar corno`
);
if (!isGroup)
return reply(`Esta brincadeira só funciona em grupos.`);
if (!isModobn) return reply(mess.onlyGroupFun(prefix));
await mention(
`Estou mencionando o *${q}* do grupo: *@${groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)].id.split("@")[0]}*`
);
break;

case "ppt":
if (args.length < 1)
return reply(
`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`
);
ppt = ["pedra", "papel", "tesoura"];
ppy = ppt[Math.floor(Math.random() * ppt.length)];
ppg = Math.floor(Math.random() * 1) + 10;
pptb = ppy;
if (
(pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")
) {
var vit = "vitoria";
} else if (
(pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")
) {
var vit = "derrota";
} else if (
(pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")
) {
var vit = "empate";
} else if ((vit = "undefined")) {
return reply(
`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`
);
}
if (vit == "vitoria") {
var tes = "Vitória do jogador";
}
if (vit == "derrota") {
var tes = "A vitória é do BOT";
}
if (vit == "empate") {
var tes = "O jogo terminou em empate";
}
reply(
`*${NomeDoBot}* jogou ${pptb}, o jogador jogou: ${args} -> *${tes}*`
);
break;

case "icms":
txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|");
var [result1, result2] = txt.split("|");
if (!q.includes("|")) return reply(mess.syntaxIcms(prefix));
data = await fetchJson(
API_URL +
`/api/outros/icms?valor=${encodeURIComponent(result1)}&ddd=${encodeURIComponent(result2)}&apikey=` +
API_KEY_CAROL
);
await carol
.sendMessage(
from,
{ text: mess.icmsResult(data) },
{ quoted: selo }
)
.catch(async (error) => {
return reply(mess.error());
});
break;

case "bot":
soundft = await fetch(qviado).then((v) => v.buffer());
await carol.sendMessage(
from,
{ audio: soundft, mimetype: "audio/mpeg", ptt: false },
{ quoted: selo }
);
break;

case 'revelar':
case 'revertervisu':
case 'revertvisu': {
await reagir(from, '⏳');
try {
const quoted = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
const imgMsg = quoted?.imageMessage || quoted?.viewOnceMessageV2?.message?.imageMessage || quoted?.viewOnceMessage?.message?.imageMessage;
const vidMsg = quoted?.videoMessage || quoted?.viewOnceMessageV2?.message?.videoMessage || quoted?.viewOnceMessage?.message?.videoMessage;
if (!imgMsg && !vidMsg) {
await reply('Marque uma *visualização única* (imagem ou vídeo) e use o comando novamente.');
}
if (imgMsg) {
const buffer = await getFileBuffer(imgMsg, 'image');
await carol.sendMessage(from, {image: buffer}, {quoted: selo});
await reagir(from, '✅');
} else if (vidMsg) {
const buffer = await getFileBuffer(vidMsg, 'video');
await carol.sendMessage(from, {video: buffer, mimetype: 'video/mp4'}, {quoted: selo});
await reagir(from, '✅');
}
} catch (err) {
console.error('Erro em revertervisu:', err);
await reagir(from, '❌');
reply('Ocorreu um erro ao reverter a visualização única. Tente novamente mais tarde.');
}
}
break;

case "videocontrario":
case "reversevid":
if (
((isMedia && info.message.videoMessage) || !isQuotedImage) &&
!q.length <= 1
) {
await reagir(from, '✅');
encmedia = isQuotedVideo
? info.message.extendedTextMessage.contextInfo.quotedMessage
.videoMessage
: info.message.videoMessage;
rane = getRandom("." + (await getExtension(encmedia.mimetype)));
buffimg = await getFileBuffer(encmedia, "video");
fs.writeFileSync(rane, buffimg);
media = rane;
ran = getRandom(".mp4");
exec(
`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`,
async (err) => {
await DLT_FL(media);
if (err) return reply(`Err: ${err}`);
buffer453 = fs.readFileSync(ran);
await carol.sendMessage(
from,
{ video: buffer453, mimetype: "video/mp4" },
{ quoted: selo }
);
DLT_FL(ran);
}
);
} else {
reply("Marque um vídeo..");
}
break;

case "videolento":
case "slowvid":
if (
((isMedia && info.message.videoMessage) || !isQuotedImage) &&
!q.length <= 1
) {
await reagir(from, '✅');
encmedia = isQuotedVideo
? info.message.extendedTextMessage.contextInfo.quotedMessage
.videoMessage
: info.message.videoMessage;
rane = getRandom("." + (await getExtension(encmedia.mimetype)));
buffimg = await getFileBuffer(encmedia, "video");
fs.writeFileSync(rane, buffimg);
media = rane;
ran = getRandom(".mp4");
exec(
`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
async (err) => {
await DLT_FL(media);
if (err) return reply(`Error: ${err}`);
buffer453 = fs.readFileSync(ran);
await carol.sendMessage(
from,
{ video: buffer453, mimetype: "video/mp4" },
{ quoted: selo }
);
await DLT_FL(ran);
}
);
} else {
reply("Marque um vídeo..");
}
break;

case "videorapido":
case "fastvid":
if (
((isMedia && info.message.videoMessage) || !isQuotedImage) &&
!q.length <= 1
) {
await reagir(from, '✅');
encmedia = isQuotedVideo
? info.message.extendedTextMessage.contextInfo.quotedMessage
.videoMessage
: info.message.videoMessage;
rane = getRandom("." + (await getExtension(encmedia.mimetype)));
buffimg = await getFileBuffer(encmedia, "video");
fs.writeFileSync(rane, buffimg);
media = rane;
ran = getRandom(".mp4");
exec(
`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
async (err) => {
await DLT_FL(media);
if (err) return reply(`Err: ${err}`);
buffer453 = fs.readFileSync(ran);
await carol.sendMessage(
from,
{ video: buffer453, mimetype: "video/mp4" },
{ quoted: selo }
);
await DLT_FL(ran);
}
);
} else {
reply("Marque o vídeo..");
}
break;

case "grave2":
if (
(isMedia &&
!info.message.imageMessage &&
!info.message.videoMessage) ||
isQuotedAudio
) {
await reagir(from, '✅');
muk = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage
.audioMessage
: info.message.audioMessage;
rane = getRandom("." + (await getExtension(muk.mimetype)));
buffimg = await getFileBuffer(muk, "audio");
fs.writeFileSync(rane, buffimg);
gem = rane;
ran = getRandom(".mp3");
exec(
`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`,
async (err, stderr, stdout) => {
await DLT_FL(gem);
if (err)
return reply(
"Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
);
hah = fs.readFileSync(ran);
await carol.sendMessage(
from,
{ audio: hah, mimetype: "audio/mpeg", ptt: false },
{ quoted: selo }
);
await DLT_FL(ran);
}
);
} else {
reply("Marque o áudio..");
}
break;

case "grave":
if (
(isMedia &&
!info.message.imageMessage &&
!info.message.videoMessage) ||
isQuotedAudio
) {
await reagir(from, '✅');
muk = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage
.audioMessage
: info.message.audioMessage;
rane = getRandom("." + (await getExtension(muk.mimetype)));
buffimg = await getFileBuffer(muk, "audio");
fs.writeFileSync(rane, buffimg);
gem = rane;
ran = getRandom(".mp3");
exec(
`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`,
async (err, stderr, stdout) => {
await DLT_FL(gem);
if (err)
return reply(
"Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
);
hah = fs.readFileSync(ran);
await carol.sendMessage(
from,
{ audio: hah, mimetype: "audio/mpeg", ptt: false },
{ quoted: selo }
);
await DLT_FL(ran);
}
);
} else {
reply("Marque o áudio..");
}
break;

case "adolesc":
case "vozmenino":
if (
(isMedia &&
!info.message.imageMessage &&
!info.message.videoMessage) ||
isQuotedAudio
) {
await reagir(from, '✅');
muk = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage
.audioMessage
: info.message.audioMessage;
rane = getRandom("." + (await getExtension(muk.mimetype)));
buffimg = await getFileBuffer(muk, "audio");
fs.writeFileSync(rane, buffimg);
gem = rane;
ran = getRandom(".mp3");
exec(
`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`,
async (err, stderr, stdout) => {
await DLT_FL(gem);
if (err)
return reply(
"Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
);
hah = fs.readFileSync(ran);
await carol.sendMessage(
from,
{ audio: hah, mimetype: "audio/mpeg", ptt: false },
{ quoted: selo }
);
await DLT_FL(ran);
}
);
} else {
reply("Marque o áudio..");
}
break;

case "tomp3":
if ((isMedia && !info.message.imageMessage) || isQuotedVideo) {
post = isQuotedImage
? JSON.parse(JSON.stringify(info).replace("quotedM", "m"))
.message.extendedTextMessage.contextInfo.message
.imageMessage
: info.message.videoMessage;
await reagir(from, '✅');
encmedia = isQuotedVideo
? info.message.extendedTextMessage.contextInfo.quotedMessage
.videoMessage
: info.message.videoMessage;
rane = getRandom("." + (await getExtension(encmedia.mimetype)));
buffimg = await getFileBuffer(encmedia, "video");
fs.writeFileSync(rane, buffimg);
media = rane;
ran = getRandom(".mp4");
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
await DLT_FL(media);
if (err)
return reply(
"Ocorreu uma falha ao fazer a conversão do vídeo para mp3."
);
buffer = fs.readFileSync(ran);
await carol.sendMessage(
from,
{ audio: buffer, mimetype: "audio/mpeg" },
{ quoted: selo }
);
await DLT_FL(ran);
});
} else {
reply("Marque o vídeo para transformar em áudio por favor...");
}
break;

case "bass3":
if (
(isMedia &&
!info.message.imageMessage &&
!info.message.videoMessage) ||
isQuotedAudio
) {
await reagir(from, '✅');
muk = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage
.audioMessage
: info.message.audioMessage;
rane = getRandom("." + (await getExtension(muk.mimetype)));
buffimg = await getFileBuffer(muk, "audio");
fs.writeFileSync(rane, buffimg);
gem = rane;
ran = getRandom(".mp3");
exec(
`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`,
async (err, stderr, stdout) => {
await DLT_FL(gem);
if (err)
return reply(
"Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
);
hah = fs.readFileSync(ran);
await carol.sendMessage(
from,
{ audio: hah, mimetype: "audio/mpeg", ptt: false },
{ quoted: selo }
);
await DLT_FL(ran);
}
);
} else {
reply("Marque o áudio..");
}
break;

case "bass":
if (
(isMedia &&
!info.message.imageMessage &&
!info.message.videoMessage) ||
isQuotedAudio
) {
await reagir(from, '✅');
muk = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage
.audioMessage
: info.message.audioMessage;
rane = getRandom("." + (await getExtension(muk.mimetype)));
buffimg = await getFileBuffer(muk, "audio");
fs.writeFileSync(rane, buffimg);
gem = rane;
ran = getRandom(".mp3");
exec(
`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`,
async (err, stderr, stdout) => {
await DLT_FL(gem);
if (err)
return reply(
"Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
);
hah = fs.readFileSync(ran);
await carol.sendMessage(
from,
{ audio: hah, mimetype: "audio/mpeg", ptt: false },
{ quoted: selo }
);
await DLT_FL(ran);
}
);
} else {
reply("Marque o áudio...");
}
break;

case "bass2":
if (
(isMedia &&
!info.message.imageMessage &&
!info.message.videoMessage) ||
isQuotedAudio
) {
await reagir(from, '✅');
muk = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage
.audioMessage
: info.message.audioMessage;
rane = getRandom("." + (await getExtension(muk.mimetype)));
buffimg = await getFileBuffer(muk, "audio");
fs.writeFileSync(rane, buffimg);
gem = rane;
ran = getRandom(".mp3");
exec(
`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`,
async (err, stderr, stdout) => {
await DLT_FL(gem);
if (err)
return reply(
"Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
);
hah = fs.readFileSync(ran);
await carol.sendMessage(
from,
{ audio: hah, mimetype: "audio/mpeg", ptt: false },
{ quoted: selo }
);
await DLT_FL(ran);
}
);
} else {
reply("Marque o áudio..");
}
break;

case "estourar":
if (
(isMedia &&
!info.message.imageMessage &&
!info.message.videoMessage) ||
isQuotedAudio
) {
await reagir(from, '✅');
muk = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage
.audioMessage
: info.message.audioMessage;
rane = getRandom("." + (await getExtension(muk.mimetype)));
buffimg = await getFileBuffer(muk, "audio");
fs.writeFileSync(rane, buffimg);
gem = rane;
ran = getRandom(".mp3");
exec(
`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`,
async (err, stderr, stdout) => {
await DLT_FL(gem);
if (err)
return reply(
"Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
);
hah = fs.readFileSync(ran);
await carol.sendMessage(
from,
{ audio: hah, mimetype: "audio/mpeg", ptt: false },
{ quoted: selo }
);
await DLT_FL(ran);
}
);
} else {
reply("Marque o áudio..");
}
break;

case "fast":
case "audiorapido":
if (
(isMedia &&
!info.message.imageMessage &&
!info.message.videoMessage) ||
isQuotedAudio
) {
await reagir(from, '✅');
muk = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage
.audioMessage
: info.message.audioMessage;
rane = getRandom("." + (await getExtension(muk.mimetype)));
buffimg = await getFileBuffer(muk, "audio");
fs.writeFileSync(rane, buffimg);
gem = rane;
ran = getRandom(".mp3");
exec(
`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`,
async (err, stderr, stdout) => {
await DLT_FL(gem);
if (err)
return reply(
"Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
);
hah = fs.readFileSync(ran);
await carol.sendMessage(
from,
{ audio: hah, mimetype: "audio/mpeg", ptt: false },
{ quoted: selo }
);
await DLT_FL(ran);
}
);
} else {
reply("Marque o áudio...");
}
break;

case "esquilo":
if (
(isMedia &&
!info.message.imageMessage &&
!info.message.videoMessage) ||
isQuotedAudio
) {
await reagir(from, '✅');
muk = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage
.audioMessage
: info.message.audioMessage;
rane = getRandom("." + (await getExtension(muk.mimetype)));
buffimg = await getFileBuffer(muk, "audio");
fs.writeFileSync(rane, buffimg);
gem = rane;
ran = getRandom(".mp3");
exec(
`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`,
async (err, stderr, stdout) => {
DLT_FL(gem);
if (err)
return reply(
"Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
);
hah = fs.readFileSync(ran);
await carol.sendMessage(
from,
{ audio: hah, mimetype: "audio/mpeg", ptt: false },
{ quoted: selo }
);
await DLT_FL(ran);
}
);
} else {
reply("Marque o áudio...");
}
break;

case "audiolento":
case "slow":
if (
(isMedia &&
!info.message.imageMessage &&
!info.message.videoMessage) ||
isQuotedAudio
) {
await reagir(from, '✅');
muk = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage
.audioMessage
: info.message.audioMessage;
rane = getRandom("." + (await getExtension(muk.mimetype)));
buffimg = await getFileBuffer(muk, "audio");
fs.writeFileSync(rane, buffimg);
gem = rane;
ran = getRandom(".mp3");
exec(
`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`,
async (err, stderr, stdout) => {
DLT_FL(gem);
if (err)
return reply(
"Ocorreu um erro ao adicionar o *efeito sonoro* no áudio."
);
hah = fs.readFileSync(ran);
await carol.sendMessage(
from,
{ audio: hah, mimetype: "audio/mpeg", ptt: false },
{ quoted: selo }
);
await DLT_FL(ran);
}
);
} else {
reply("Marque o áudio..");
}
break;

//COMANDOS BÁSICOS DE LOGOS
case 'angelwing':case 'hackneon': case 'fpsmascote': 
case 'equipemascote': case 'txtquadrinhos': case 'ffavatar':
case 'mascotegame': case 'angelglx': case 'gizquadro': 
case 'wingeffect': case 'blackpink': case 'metalgold':
case 'girlmascote': case 'logogame':
try {
if(!q.trim()) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);
await reagir(from, "🖼️");
reply("Aguarde um momento..");
var XERECA = await fetchJson(`${API_URL2}/api-bronxys/logos_EPH?texto=${q}&category=${command}&apikey=${API_KEY_BRONXYS}`);
await carol.sendMessage(from, {image: {url: XERECA.resultado}}, {quoted: selo});
} catch (e) {
return reply("Deu erro na criação da imagem.");
}
break;

case 'shadow': case 'metalgold': case 'cup': case 'txtborboleta':
case 'cemiterio': case 'efeitoneon': case 'harryp':
case 'lobometal': case 'neon2': case 'madeira': case 'lovemsg3':
case 'coffecup': case 'coffecup2': case 'florwooden':
case 'narutologo': case 'fire': case 'romantic': case 'smoke':
case 'papel': case 'lovemsg': case 'lovemsg2':
try {
if(!q.trim()) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);
await reagir(from, "🖼️");
reply("Aguarde um momento..");
var PEITO = await fetchJson(`${API_URL2}/api-bronxys/logos_PHT?texto=${q}&category=${command}&apikey=${API_KEY_BRONXYS}`);
await carol.sendMessage(from, {image: {url: PEITO.resultado.imageUrl}}, {quoted: selo});
} catch (e) {
return reply("Deu erro na criação da imagem.");
}
break;

case "convite":
if (!budy.includes("chat.whatsapp.com"))
return reply("Cadê o link do grupo que você deseja que eu entre?");
cnvt = args.join(" ");
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`);
await carol.sendMessage(SoDono, {text: mess.groupInvitation(sender, cnvt, prefix)}, {quoted: selo});
break;

case "recusar":
if (!SoDono) return reply(mess.onlyOwner());
await carol.sendMessage(`${q}@s.whatsapp.net`, {text: `Olá amigo(a), sinto muito dizer, mas seu convite foi recusado.`}, {quoted: selo});
break;

case "join":
case "entrar":
if (!SoDono) return reply(mess.onlyOwner);
string = args.join(" ");
if (!string)
return reply("Insira um link de convite ao lado do comando.");
if (
string.includes("chat.whatsapp.com/") ||
reply("Ops, verifique o link que você inseriu.")
) {
link = string.split("app.com/")[1];
try {
carol.groupAcceptInvite(`${link}`);
} catch (erro) {
if (String(erro).includes("resource-limit")) {
reply("O grupo já está com o alcance de 257 membros.");
}
if (String(erro).includes("not-authorized")) {
reply("Não foi possível entrar no grupo.\nMotivo: Banimento.");
}
}
}
break;

case "sip":
case "ip":
if (!q)
return reply(
`Informe o ip que você deseja! *Exemplo:* ${prefix + command} 8.8.8.8`
);
try {
ip = await axios.get(
`https://ipwhois.app/json/${encodeURIComponent(q)}`
);
await carol.sendMessage(
from,
{
image: {
url: `https://maps.googleapis.com/maps/api/streetview?size=1400x1400&location=${ip.data.latitude},%20${ip.data.longitude}&sensor=false&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`,
},
caption: mess.searchIpAdress(ip),
},
{ quoted: selo }
);
await carol.sendMessage(
from,
{
location: {
degreesLatitude: ip.data.latitude,
degreesLongitude: ip.data.longitude,
addrees: "",
},
},
{ quoted: selo }
);
} catch (error) {
reply(mess.error());
}
break;

case "cep":
case "scep":
if (!q) return reply(`Cadê o cep?`);
try {
res = await fetchJson(
API_URL + `/api/outros/cep?code=${q}&apikey=` + API_KEY_CAROL
);
await reply(mess.searchCep(res));
} catch (error) {
await reply(mess.error());
}
break;

default:
// IF DOS ANTIs - (LOCALIZAÇÃO - CONTATO - CATALOGO)

if (IsAutofigu && isGroup) {
async function autofiguf() {
await setTimeout(async () => {
if (type === "imageMessage") {
rane = getRandom(
"." +
(await getExtension(info.message.imageMessage.mimetype))
);
buffimg = await getFileBuffer(
info.message.imageMessage,
"image"
);
fs.writeFileSync(rane, buffimg);
const media = rane;
rano = getRandom(".webp");
exec(
`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`,
(err) => {
fs.unlinkSync(media);
buffer = fs.readFileSync(rano);
carol.sendMessage(
from,
{ sticker: buffer },
{ quoted: selo }
);
fs.unlinkSync(rano);
}
);
}
}, 1000);
}
autofiguf().catch((e) => {
console.log(e);
});
}

if (isGroup && isBotGroupAdmins && !isGroupAdmins) {
if (isAntiCtt || Antiloc || isAnticatalogo) {
if (
type === "contactMessage" ||
type === "contactsArrayMessage" ||
type === "locationMessage" ||
type === "productMessage"
) {
if (isGroupAdmins)
return await carol.sendMessage(
from,
{ text: mess.antisRandomMessage() },
{ quoted: selo }
);
if (IS_DELETE) {
setTimeout(async () => {
await carol.sendMessage(from, {
delete: {
remoteJid: from,
fromMe: false,
id: info.key.id,
participant: sender,
},
});
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender)) return;
await carol.groupParticipantsUpdate(from, [sender], "remove");
await carol.sendMessage(from, {
text: `🗑${"\n".repeat(255)}🗑️\n✅️ A limpeza de chat foi concluída com sucesso.`,
contextInfo: { forwardingScore: 500, isForwarded: false },
});
await carol.sendMessage(from, {
text: "Por favor, reporte aos adminstradores do grupo sobre o ocorrido.",
mentions: groupAdmins,
});
}
}
}

if (
isGroup &&
isAntiFlood &&
!SoDono &&
!isVip &&
!isnit &&
isBotGroupAdmins &&
!isGroupAdmins &&
!isBot
) {
if (isLimitec == null) {
var limitefl = limitefll.limitefl;
} else {
var limitefl = isLimitec;
}
if (budy.length >= limitefl) {
setTimeout(async () => {
reply(mess.charactersAnti());
console.log(
colors.red(`[SPAM DETECTED IN THE GROUP]`),
"Grupo:",
colors.yellow(`${groupName}`),
colors.white(`Ocorrência: ${hourofc} ${dattofc}`)
);
}, 100);
setTimeout(async () => {
if (IS_DELETE) {
setTimeout(async () => {
carol.sendMessage(from, {
delete: {
remoteJid: from,
fromMe: false,
id: info.key.id,
participant: sender,
},
});
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender)) return;
await carol.groupParticipantsUpdate(from, [sender], "remove");
}, 1000);
}
}

if (
budy2 === `abrir` &&
isGroup &&
isGroupAdmins &&
isBotGroupAdmins &&
groupMetadata.announce == true
) {
setTimeout(() => {
reagir(from, "✅");
}, 300);
carol.groupSettingUpdate(from, "not_announcement");
reply(`✅ *${tempo} à todos... O grupo foi aberto novamente*`);
}

if (
budy2 === `fechar` &&
isGroup &&
isGroupAdmins &&
isBotGroupAdmins &&
groupMetadata.announce == false
) {
setTimeout(() => {
reagir(from, "🚫");
}, 300);
carol.groupSettingUpdate(from, "announcement");
reply(`🚫 *Grupo fechado... As suas ordens vossa senhoria*`);
}
if (budy2.toLowerCase() === "Carol") {
reagir(from, "💜");
await carol.sendMessage(from, {sticker: {url: "https://files.catbox.moe/0s1a8b.webp"}}, {quoted: info});
}
if (budy2.toLowerCase() === "carol") {
reagir(from, "💜");
await carol.sendMessage(from, {sticker: {url: "https://files.catbox.moe/0s1a8b.webp"}}, {quoted: info});
}
if (budy2.toLowerCase() === "Carol?") {
reagir(from, "💜");
await carol.sendMessage(from, {sticker: {url: "https://files.catbox.moe/0s1a8b.webp"}}, {quoted: info});
}
if (budy2.toLowerCase() === "carol?") {
reagir(from, "💜");
await carol.sendMessage(from, {sticker: {url: "https://files.catbox.moe/0s1a8b.webp"}}, {quoted: info});
}
if (isAutorepo) {
if (budy2 === "bot") {
reply(mess.chamandoBot(pushname, tempo));
}

if (budy2.includes("bot corno")) {
if (info.key.fromMe) return;
reply("Corno é você, seu animal!");
}

if (
budy2.includes("adivinha meu celular") ||
budy2.includes("bot qual meu celular")
) {
carol.sendMessage(from, { text: adivinha }, { quoted: selo });
}

if (budy2.includes("boa noite")) {
tujuh = await fetch(boa_noite).then((v) => v.buffer());
await carol.sendMessage(from, {audio: tujuh, mimetype: "audio/mpeg", ptt: false}, {quoted: selo});
}

if (budy2.includes("boa tarde")) {
tujuh = await fetch(boa_tarde).then((v) => v.buffer());
await carol.sendMessage(from, {audio: tujuh, mimetype: "audio/mpeg", ptt: false}, {quoted: selo});
}

if (budy2.includes("bom dia")) {
tujuh = await fetch(bom_dia).then((v) => v.buffer());
await carol.sendMessage(from, {audio: tujuh, mimetype: "audio/mpeg", ptt: false}, {quoted: selo});
};

if (budy2.includes("corno")) {
tujuh = await fetch(corno).then((v) => v.buffer());
await carol.sendMessage(from, {audio: tujuh, mimetype: "audio/mpeg", ptt: false}, {quoted: selo});
};
}

//=[ ANTI PALAVRAS - (🤖) - GRUPOS ]=\\
if (isGroup && isPalavrao && isBotGroupAdmins && !SoDono && !isGroupAdmins) {
if (dataGp[0].antipalavrao.palavras.some((i) =>
budy2.includes(i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))) {
setTimeout(() => {
if (!JSON.stringify(groupMembers).includes(sender)) return;
carol.groupParticipantsUpdate(from, [sender], "remove");
setTimeout(() => {
carol.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}, 2000);
carol.sendMessage(from, {text: mess.permissionDenied_rUser()}, {quoted: selo});
}
}

if (isGroup && isSimi && budy != undefined) {
if (type == "imageMessage") return;
if (type == "audioMessage") return;
if (type == "stickerMessage") return;
if (info.key.fromMe) return;
emojisList = ["🤠", "💅🏻", "🦸‍♀️", "👮‍♀️", "😹", "😸"];
await reagir(from, emojisList[Math.floor(Math.random() * emojisList.length)]);
muehe = await simih(budy);
await carol.sendMessage(from, {text: muehe}, {quoted: selo}).catch(async (e) => {
reply(mess.errorResponseSimi());
});
}

//============(AUTO DOWNLOAD)============\\

 if (isAutodown && !jaProcessou(info.key.id)) {
marcarComoProcessado(info.key.id);

const dominioinsta = ["instagram.com/reel", "instagram.com/share/reel"];
const dominioTikTok = ["tiktok.com", "https://vm.tiktok.com", "www.tiktok.com"];
const dominioFacebook = ["https://facebook.com", "facebook.com", "fb.com", "www.facebook.com"];
const dominioKwai = ["kwai.com", "www.kwai.com", "s.kw.ai"];
const dominioYouTube = ["youtube.com", "www.youtube.com", "youtu.be"];
const dominioPinterest = ["pinterest.com", "pin.it"];

const link = (texto) => {
const start = texto.indexOf("https://");
const end = texto.indexOf(" ", start) !== -1 ? texto.indexOf(" ", start) : texto.length;
return texto.substring(start, end);
};

try {
if (dominioinsta.some((d) => budy.includes(d))) {
const instagramLink = link(budy);
if (instagramLink) {
reagir(from, '🎬');
await DownMp4(instagramLink, from);
reagir(from, "✅");
}
}

if (dominioTikTok.some((d) => budy.includes(d))) {
const TikTokLink = link(budy);
if (TikTokLink) {
await reagir(from, '🎬');
await DownMp4(TikTokLink, from);
await reagir(from, "✅");
}
}

if (dominioFacebook.some((d) => budy.includes(d))) {
const FacebookLink = link(budy);
if (FacebookLink) {
reagir(from, '🎬');
await DownMp4(FacebookLink, from);
reagir(from, "✅");
}
}

if (dominioKwai.some((d) => budy.includes(d))) {
const KwaiLink = link(budy);
if (KwaiLink) {
reagir(from, '🎬');
ABC = await fetchJson(`${API_URL}/api/kwai/video?url=${KwaiLink}&apikey=${API_KEY_CAROL}`);
carol.sendMessage(from, {video: {url: ABC.resultados.video}, mimetype: "video/mp4"}, {quoted: selo});
reagir(from, "✅");
}
}

if (dominioYouTube.some((d) => budy.includes(d))) {
const YouTubeLink = link(budy);
if (YouTubeLink) {
reagir(from, '🎬');
await DownMp4(YouTubeLink, from);
reagir(from, "✅");
}
}

if (dominioPinterest.some((d) => budy.includes(d))) {
const PinterestLink = link(budy);
if (PinterestLink) {
reagir(from, '🎬');
await DownMp4(PinterestLink, from);
reagir(from, "✅");
}
}

} catch (error) {
console.error(error);
reply("⚠️ Ocorreu um erro, o módulo caiu ou veja se o link é realmente de um video e não imagem.");
reagir(from, "❌")
}
};

//=====================================\\

// COMANDO ERRADO

hora2 = moment.tz("America/Sao_Paulo").format("HH:mm:ss");

const privateCmd = ( id, prefix, hora2, date, pc, cmd, porcentagem, instaCriador) => {
notcmd = `—\n░⃟⃛♥️ *𝐌𝐞𝐮 𝐩𝐫𝐞𝐟𝐢𝐱𝐨:*『 ${prefix} 』
░⃟⃛💚 *𝐇𝐨𝐫𝐚 𝐚𝐭𝐮𝐚𝐥:* ${hora2}
░⃟⃛💛 *𝐃𝐚𝐭𝐚 𝐚𝐭𝐮𝐚𝐥:* ${date}
░⃟⃛💜 *𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐮𝐬𝐚𝐝𝐨:* ${pc}
░⃟⃛🧡 *𝐏𝐚𝐫𝐞𝐜𝐢𝐝𝐨:* ${cmd}
░⃟⃛🩷 *𝐏𝐨𝐫𝐜𝐞𝐧𝐭𝐚𝐠𝐞𝐦:* ${porcentagem}%
> 𝙲𝚘𝚖𝚊𝚗𝚍𝚘 𝚎𝚛𝚛𝚊𝚍𝚘.`;
return notcmd;
};
if (isCmd) {
setTimeout(() => {
reagir(from, "❌");
}, 1);
ABC = similarityCmd(command);
notcmd = privateCmd(sender, prefix, hora2, date, prefix + command, ABC[0].comando, ABC[0].porcentagem);
carol.sendMessage(from, {text: notcmd}, {quoted: selo});
}
}
}
}
//=================

async function forTemporaryVip() {
if (vip.length > 0) {
for (y of vip) {
if (y.save != Number(moment.tz("America/Sao_Paulo").format("DD"))) {
y.save = Number(moment.tz("America/Sao_Paulo").format("DD"));
fs.writeFileSync("./bunker/database/usuarios/vip.json", JSON.stringify(vip));
if (y.infinito == false) {
if (y.dias > 1) {
y.dias -= 1;
fs.writeFileSync("./bunker/database/usuarios/vip.json", JSON.stringify(vip));
} else {
carol.sendMessage(y.id, {text: `⚠️ *ATENÇÃO!* Seus dias como usuário vip acabam de terminar, para realizar a renovação entre em contato com o número abaixo:\n• Contato: *http://wa.me/${SoDono.split("@")[0]}*\n––\n• Desde já muito obrigado pela atenção, desculpe-me o incômodo.\n• *Essa mensagem é automática*, caso seja um engano entre em contato com número acima e saiba mais!`});
AB = vip.map((b) => b.id).indexOf(y.id);
vip.splice(AB, 1);
fs.writeFileSync("./bunker/database/usuarios/vip.json", JSON.stringify(vip));
}
}
}
}
}
}

forTemporaryVip().catch((error) => { console.log(error) });

async function timeRentOficial() {
if (aluguel.length > 0) {
for (x of aluguel) {
if (
x.save != Number(moment.tz("America/Sao_Paulo").format("DD")) &&
x.cortesia == false
) {
if (x.tempo > 1) {
if (
Number(x.tempo) === 8 ||
Number(x.tempo) === 4 ||
Number(x.tempo) === 3 ||
Number(x.tempo) === 2
)
return carol.sendMessage(x.cliente, {text: `😿⚠️ Olá, acabo de verificar que nosso contrato no grupo *${aluguel[aluguel.map((m) => m.id).indexOf(x.id)].nome}* termina em ${Number(x.tempo) === 8 ? `1 semana (7 dias)` : Number(x.tempo) !== 2 ? `${x.tempo - 1} dias` : `24 horas (amanhã)`}...\n• Não deixe de fechar contrato novamente com nossa equipe! *Qualquer dúvida, entre em contato com meu proprietário.*`});
x.save = Number(moment.tz("America/Sao_Paulo").format("DD"));
x.tempo -= 1;
fs.writeFileSync("./bunker/database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));
} else {
carol.sendMessage(x.id, {text: `*O tempo limite deste grupo acabou!😿💔* Para a renovação do contrato entre em contato com o meu dono: *wa.me/${SoDono.split("@")[0]}*`});
carol.sendMessage(SoDono, {text: `🤓🗑️ Só passando pra avisar que o tempo limite do grupo *${x.nome}* expirou agora... Visto que o(a) *@${x.cliente.split("@")[0]}* não renovou o contrato, eu saí do grupo dele(a) e apaguei os registros! ♥️`, mentions: [x.cliente]});
findGroupRG = grupos.map((i) => i.id).indexOf(x.id);
grupos.splice(findGroupRG, 1);
fs.writeFileSync("./bunker/database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2));
findGroupRent = aluguel.map((i) => i.id).indexOf(x.id);
aluguel.splice(findGroupRent, 1);
fs.writeFileSync("./bunker/database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));
await sleep(4000);
await carol.groupLeave(x.id);
}
}
}
}
}

timeRentOficial().catch((error) => {
console.log(error);
});

async function forRentCourtesy() {
if (aluguel.length > 0) {
for (x of aluguel) {
if (
x.save != Number(moment.tz("America/Sao_Paulo").format("HH")) &&
x.cortesia == true
) {
if (x.tempo > 0) {
x.save = Number(moment.tz("America/Sao_Paulo").format("HH"));
x.tempo -= 1;
fs.writeFileSync("./bunker/database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));
} else {
carol.sendMessage(x.id, {text: `♥️💳 *O cartão cortesia 24h deste grupo expirou!* Caso se veja interessado em nossos serviços, favor entrar em contato com meu dono: *wa.me/${setting.ownerNumber}*`});
carol.sendMessage(SoDono, {text: `🤓🗑️Só passando pra avisar que o cartão cortesia do grupo *${x.nome}* expirou agora... Visto que não houve alteração em meus registros, eu saí do grupo e apaguei os dados! ♥️`});
grupos.splice(grupos.map((i) => i.id).indexOf(x.id), 1);
fs.writeFileSync("./bunker/database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2));
aluguel.splice(aluguel.map((i) => i.id).indexOf(x.id), 1);
fs.writeFileSync("./bunker/database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));
await sleep(4000);
await carol.groupLeave(x.id);
}}}}};

forRentCourtesy().catch((error) => {
console.log(error);
});

startFunctionCarol();
};

module.exports = startcarol;

/* Atualizar o arquivo de forma automática. */

fs.watchFile(require.resolve(__filename), () => {
fs.unwatchFile(require.resolve(__filename));
console.log(colors.red(`Alterações salvas - '${__filename}'`));
// recarregar com timeout para evitar race
setTimeout(() => {
delete require.cache[require.resolve(__filename)];
try { require(require.resolve(__filename)); } catch (e) { console.error(e); }
}, 200);
});