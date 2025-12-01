
const { 'default': makeWASocket,downloadContentFromMessage, fetchLatestBaileysVersion, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, MessageType, Presence, Mimetype, Browsers, delay, MessageRetryMap } = require('@whiskeysockets/baileys');

// Módulos:
const { Boom }  = require('@hapi/boom');
const axios = require('axios');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const crypto = require('crypto');
const util = require('util');
const { randomBytes } = require("crypto");
const { emoji } = require("scr-emoji");
const P = require('pino');
const NodeCache = require("node-cache");
const linkfy = require('linkifyjs');
const request = require('request');
const ms = require('ms');
const os = require('os');
const ffmpeg = require('fluent-ffmpeg');
const fetch = require('node-fetch');
const qrterminal = require('qrcode-terminal');
const { exec, spawn, execSync } = require('child_process');
const moment = require('moment-timezone');
const colors = require("colors");
const readline = require('readline');

// Data & Hora:
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');

// Funções:
const { awaitMessage } = require('../../bunker//funcoes/awaitMessage.js');
const { extractMetadata } = require('../../bunker//funcoes/extractMetadata.js')
const LoggerB = require('@whiskeysockets/baileys/lib/Utils/logger').default;
const packname = JSON.parse(fs.readFileSync('./package.json'));
const { arcloud } = require('../../bunker//js/arcc.js');
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("../../bunker//js/banned.js");
const namoro1 = JSON.parse(fs.readFileSync("./bunker/database/func/namoro1.json"));
const namoro2 = JSON.parse(fs.readFileSync("./bunker/database/func/namoro2.json"));
const { validmove, setGame } = require('../../bunker//tictactoe/index.js');
const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('../../bunker//js/addcmd.js');
const { palavrasANA, quizanimais, enigmaArchive, garticArchives, whatMusicAr, quizFutebol } = require('../../bunker//js/jogos.js');
const { wait, getExtension, generateMessageID, getMembros, getGroupAdmins, getRandom, banner, banner2, banner3, temporizador, chyt, getBuffer, fetchJson, fetchText, createExif, getBase64, convertSticker, upload, nit, getpc, supre, recognize } = require('../../bunker//funcoes/functions.js'); // É necessário para algumas funções funcionar perfeitamente.
const { writeExifImg } = require('../../bunker//sticker/exif.js')
const { writeExif2 } = require('../../bunker//sticker/exif2.js')
const { isFiltered, addFilter } = require('../../bunker//funcoes/functions.js');
// [JSON] - Funções Abaixo >>> :
const pushnames = JSON.parse(fs.readFileSync('./bunker/database/usuarios/users.json'));
const rgtake = JSON.parse(fs.readFileSync('./bunker/database/usuarios/take.json'));
const sotoy = JSON.parse(fs.readFileSync('./bunker//json/sotoy.json'));
const countMessage = JSON.parse(fs.readFileSync('./configs/media/countmsg.json'));
const comandos = JSON.parse(fs.readFileSync('./configs/media/comandos.json'));
const daily = JSON.parse(fs.readFileSync('./bunker/database/usuarios/diario.json'));
const nescessario = JSON.parse(fs.readFileSync('./configs/nescessario.json'));
const vip = JSON.parse(fs.readFileSync('./bunker/database/usuarios/vip.json'));
const ban = JSON.parse(fs.readFileSync('./bunker/database/usuarios/banned.json'));
const muted = JSON.parse(fs.readFileSync('./bunker/database/grupos/muted.json'))
const limitefll = JSON.parse(fs.readFileSync('./bunker/database/usuarios/flood.json'));
const aluguel = JSON.parse(fs.readFileSync("./bunker/database/grupos/aluguel/aluguel.json"))
const grupos = JSON.parse(fs.readFileSync("./bunker/database/grupos/aluguel/grupos.json"))
const chaves = JSON.parse(fs.readFileSync("./bunker/database/grupos/aluguel/chaves.json"))
const antispam = JSON.parse(fs.readFileSync('./configs/media/antispam.json'));
const anotar = JSON.parse(fs.readFileSync("./bunker/database/func/anotar.json"));
const setting = JSON.parse(fs.readFileSync('./configs/settings.json'));
const logoslink = JSON.parse(fs.readFileSync('./configs/links_img.json'));
const Limit_CMD = JSON.parse(fs.readFileSync("./bunker/database/func/limitarcmd.json"))
const ftmenu = JSON.parse(fs.readFileSync("./configs/logos.json"));
const tools = JSON.parse(fs.readFileSync('./bunker//json/tools.json'));
const advices = JSON.parse(fs.readFileSync('./bunker//json/advices.json'));

// Arquivos - JS - Menus / Informações:
const { linguagem, mess, getInfo } = require('../lib/index.js');
const { psycatgames, vyroEngine } = require('../../bunker//funcoes/scrapper.js');
const { destrava, destrava2 } = require('../../bunker//funcoes/destrava.js');
const { tabela } = require('../../bunker//js/tabela.js');

// Deletar Arquivos:
function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

// Template - Definição para o uso do botões:
if(!nescessario.botoes_) {
var EnvBotao = async (id, MR, akame, text1, desc1, X) => {
if(X.split("|")[1] != "0") {
akame.sendMessage(id, {image: {url: X.split("|")[1]}, caption: text1, mentions: [MR]})} else {akame.sendMessage(id, {text: text1, mentions: [MR]})}}
} else {
var EnvBotao = async(id, MR, akame, text1, desc1, X, TXT = [], vr) => {
var DMN_ = X.split("|")[0].charAt(0);
var QNT_B = DMN_ == "1" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}] : DMN_ == "2" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}, {buttonId: TXT[2], buttonText: {displayText: TXT[3]}, type: 1}] : DMN_ == "3" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}, {buttonId: TXT[2], buttonText: {displayText: TXT[3]}, type: 1}, {buttonId: TXT[4], buttonText: {displayText: TXT[5]}, type: 1}]: "";
if(X.split("|")[1] == "0" && !X.split("|")[0].includes("v")) {
var buttonMessage = {
text: text1, footer: desc1,
buttons: QNT_B, headerType: 1, mentions: [MR]};
} else if(X.split("|")[1] != "0" && !X.split("|")[0].includes("v")) {
var buttonMessage = {
image: {url: X.split("|")[1]},
caption: text1, footer: desc1, buttons: QNT_B, 
headerType: 1, mentions: [MR]};
} else if(X.split("|")[1] != "0" && X.split("|")[0].includes("v")) {
var buttonMessage = {
video: {url: X.split("|")[1]},
caption: text1, footer: desc1,
buttons: QNT_B, headerType: 1, mentions: [ME]}}
akame.sendMessage(id, buttonMessage, {quoted: vr}).catch(e => {
return console.log("Erro no botão, Tente novamente ou avalie o que pode está errando.. "+e);
})}}

// CONVERTER BYTES EM KB / MB / GB / TB
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
if(bytes == 0) {
return "n/a";
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
if(i == 0) {
return bytes + " " + sizes[i];
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
};

const getName = (number) => {
  ps = number.includes(`@s.whatsapp.net`) ? number : number.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
  returnPush = JSON.stringify(pushnames).includes(ps) ? pushnames[pushnames.map(i => i.id).indexOf(ps)].nick : "usuário(a)"
  return returnPush /* Créditos: @Matheus */
}

// ANTI NOME MODIFICADA / EMOJI
function ANT_LTR_MD_EMJ(str) {
for (let i = 0, n = str.length; i < n; i++) {
if(str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}
/* Essa função serve para transformar segundos em hora, minutos e segundos... */
function kyun(seconds){
function pad(s){return (s < 10 ? "0" : "") + s};
var horas = Math.floor(seconds / (60*60) % (24));
var minutos = Math.floor(seconds % (60*60) / 60);
var segundos = Math.floor(seconds % 60);
return `${pad(horas)} horas, ${pad(minutos)} minutos e ${pad(segundos)} segundos.`;
}

/* Função para transformar segundos em dia, hora, minutos e segundos... */
function TimeCount(seconds){
function pad(s){return (s < 10 ? "0" : "") + s};
var dias = Math.floor(seconds / (60*60) / (24));
var horas = Math.floor(seconds / (60*60) % (24));
var minutos = Math.floor(seconds % (60*60) / 60);
var segundos = Math.floor(seconds % 60);
return `${pad(dias)}d, ${pad(horas)}h, ${pad(minutos)}m e ${pad(segundos)}s.`;
}

/* Função usada para embalharar palavras.. */
const shuffle = (palavraOriginal) => {
palavra = `${palavraOriginal} `; armax = []
for(i = 0; i < palavra.length; i++) {armax.push({l: palavra.split(palavra.slice(i+1))[0].slice(i)})}
shuffleProcess = ""; total_armax = armax.length
for(a = 0; a < total_armax; a++) {
toDoRandom = Math.floor(Math.random()*armax.length)
shuffleProcess += armax[toDoRandom].l
armax.splice(toDoRandom, 1) /* Apagar o registro da palavra digitada anteriormente */
}
return shuffleProcess
}

// FUNÇÃO DO BAILEYS PRA PUXAR MÍDIA ENVIADA, E EXECUTAR AÇÃO...
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType);
let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};

// Tudo abaixo await sleep(1000) vai demorar 1 segundo pra funcionar, 1000 é igual 1 segundo..
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

// ENVIAR FIGU EM URL
const enviarfiguUrl = async (akame, from, link, mr) => {
ranp = getRandom('.gif');
rano = getRandom('.webp');
ini_buffer = `${link}`;
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
DLT_FL(ranp);
buff = fs.readFileSync(rano);
akame.sendMessage(from, {sticker: buff}, {quoted: mr}).catch(() => {
return console.log("Erro..");
});
DLT_FL(rano);
});
};

// FUNCAO PARA TIRAR O PESO DO QR CODE 
const RSM_FUNC = async(akame, nmrdn_dono2, hora120, upsert) => {
switch(hora120) {
case "02:00:00": case "04:00:00":
case "07:00:00": case "10:00:00":  
case "13:00:00": case "15:00:00":
case "18:00:00": case "22:00:00":
exec("database/qr-code && rm -rf pre-key* sender* session*");
setTimeout(async () => {
file = require.resolve("./connect.js");
delete require.cache[file];
require(file);
}, 1200);
console.log(colors.blue("Reiniciando para diminuir o peso do qrcode.."))
break;
}
}

const sendPoll = (akame, id, name = '', values = [], selectableCount = 1) => { 
return akame.sendMessage(id, {poll: {name, values, selectableCount}, messageContextInfo: { messageSecret: randomBytes(32)}}, {id, options: {userJid: akame?.user?.id}}).catch(() => {
return console.log(console.error);
});
}

// Simih:
const simih = async (text) => {
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+text+"&lc=pt"})
return datasimi.message
} catch (e){
return
}}

function obeso(peso, altura) {
 return Number(parseFloat(peso) / (parseFloat(altura) ** 2)).toFixed(2)
}

function capitalizeFirstLetter(string) {
 return string.charAt(0).toUpperCase() + string.substring(1)
}

const countDays = (date1, date2) => {
if (!(date1 || date2)) return 0
date1 = new Date(date1[1]+"/"+date1[0]+"/"+date1[2])
date2 = new Date(date2[1]+"/"+date2[0]+"/"+date2[2])
const timeDiff = Math.abs(date2.getTime() - date1.getTime());
const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
return diffDays || 0
}

const timeDate = (tempo, now, x = true) => {
if (Number(now) && x) return moment(now * 1000).tz('America/Sao_Paulo').format(tempo)
if (Number(now)) return moment(now).tz('America/Sao_Paulo').format(tempo)
return moment.tz('America/Sao_Paulo').format(tempo)
}

const formatNumber = (number) => {
if (number >= 1e9) return (number / 1e9).toFixed(1) + 'B'; /* Retorna a quantidade na faixa dos bilhões, então já tá claro. */
if (number >= 1e6) return (number / 1e6).toFixed(1) + 'M'; /*Retorna a quantidade na casa dos milhões. */
if (number >= 1e5) return (number / 1e3).toFixed(1) + 'K'; /* Retorna a quantidade na casa acima de 100mil até 999.9mil. */
if (number >= 1e4) return (number / 1e3).toFixed(1) + 'K'; /* Retorna a quantidade na casa acima de 10mil até 99.9mil. */
if (number >= 1e3) return (number / 1e3).toFixed(1) + 'K'; /* Retorna a quantidade na casa acima de mil até 9.9mil. */
return number;
}

const formatNumberDecimal = (num) => { 
  return (num).toLocaleString('pt-BR'); 
}

function formatDateOriginal(number, locale = 'pt') {
  let dateInformation = new Date(number);
  return dateInformation.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long', 
        year: 'numeric'
     }) 
  }

// [INICIO] - Similaridade de Comandos:
function fuzzySimilarity(word1, word2) {
      function generateNGrams(word, n) {
          const nGrams = [];
          for (let i = 0; i < word.length - n + 1; i++) {
              nGrams.push(word.slice(i, i + n));
          }
          return nGrams;
      }
  
      const nGrams1 = generateNGrams(word1, 2);
      const nGrams2 = generateNGrams(word2, 2);
      const commonNGrams = nGrams1.filter(nGram => nGrams2.includes(nGram));
      const similarity = Math.round((2 * commonNGrams.length) / (nGrams1.length + nGrams2.length) * 100);
      
      return similarity;
  }
  
const listCommands = (targetWord) => {
      const fileContent = fs.readFileSync("index.js", "utf8");
      const commandsRegex = /case\s+['"](.+?)['"]/g;
      let mostSimilarCommand = "";
      let highestSimilarity = -1;
      let match;
  
      while ((match = commandsRegex.exec(fileContent)) !== null) {
          const extractedCommand = match[1];
          const similarity = fuzzySimilarity(targetWord, extractedCommand);
          if (similarity > highestSimilarity) {
              highestSimilarity = similarity;
              mostSimilarCommand = extractedCommand;
          }
      }
  
      return {
          command: mostSimilarCommand, 
          similarity: highestSimilarity
      };
  };

  function extractStateFromDDD(ddd) {
    const dddList = {"11": "São Paulo (SP)", "12": "São Paulo (SP)", "13": "São Paulo (SP)", "14": "São Paulo (SP)", "15": "São Paulo (SP)", "16": "São Paulo (SP)", "17": "São Paulo (SP)", "18": "São Paulo (SP)", "19": "São Paulo (SP)", "21": "Rio de Janeiro (RJ)", "22": "Rio de Janeiro (RJ)", "24": "Rio de Janeiro (RJ)", "27": "Espírito Santo (ES)", "28": "Espírito Santo (ES)", "31": "Minas Gerais (MG)", "32": "Minas Gerais (MG)", "33": "Minas Gerais (MG)", "34": "Minas Gerais (MG)", "35": "Minas Gerais (MG)", "37": "Minas Gerais (MG)", "38": "Minas Gerais (MG)", "41": "Paraná (PR)", "42": "Paraná (PR)", "43": "Paraná (PR)", "44": "Paraná (PR)", "45": "Paraná (PR)", "46": "Paraná (PR)", "47": "Santa Catarina (SC)", "48": "Santa Catarina (SC)", "49": "Santa Catarina (SC)", "51": "Rio Grande do Sul (RS)", "53": "Rio Grande do Sul (RS)", "54": "Rio Grande do Sul (RS)", "55": "Rio Grande do Sul (RS)", "61": "Distrito Federal (DF)", "62": "Goiás (GO)", "63": "Tocantins (TO)", "64": "Goiás (GO)", "65": "Mato Grosso (MT)", "66": "Mato Grosso (MT)", "67": "Mato Grosso do Sul (MS)", "68": "Acre (AC)", "69": "Rondônia (RO)", "71": "Bahia (BA)", "73": "Bahia (BA)", "74": "Bahia (BA)", "75": "Bahia (BA)", "77": "Bahia (BA)", "79": "Sergipe (SE)", "81": "Pernambuco (PE)", "82": "Alagoas (AL)", "83": "Paraíba (PB)", "84": "Rio Grande do Norte (RN)", "85": "Ceará (CE)", "86": "Piauí (PI)", "87": "Pernambuco (PE)", "88": "Ceará (CE)", "89": "Piauí (PI)", "91": "Pará (PA)", "93": "Pará (PA)", "94": "Pará (PA)", "95": "Roraima (RR)", "96": "Amapá (AP)", "97": "Amazonas (AM)", "98": "Maranhão (MA)", "99": "Maranhão (MA)"};
    return dddList[ddd] || "";
}

function extractStateFromNumber(phoneNumber) {
    const numericOnly = phoneNumber.replace(/\D/g, '');
    if (numericOnly.startsWith(55) && numericOnly.length === 12 || numericOnly.length === 13) {
        const ddd = numericOnly.substring(2, 4);
        return extractStateFromDDD(ddd) || "Números de fora do Brasil, os estados não é possível identificar.";
    } else {
        return "Números de fora do Brasil, os estados não é possível identificar.";
    }
}

function extractDDD(phoneNumber) {
    const numericOnly = phoneNumber.replace(/\D/g, '');
    if (numericOnly.startsWith(55) && numericOnly.length === 12 || numericOnly.length === 13) {
        return numericOnly.substring(2, 4);
    } else {
        return null
    }
}

const rmLetras = (txt) => {
  return txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

module.exports = { extractDDD, rmLetras, rgtake, extractStateFromNumber, extractStateFromDDD, formatDateOriginal, awaitMessage, LoggerB, readline, P, fs, util, Boom, axios, linkfy, request, ms, ffmpeg, fetch, qrterminal, exec, extractMetadata, spawn, execSync, limitefll, moment, time, hora, date, os, getBuffer, convertSticker, fetchJson, fetchText, getBase64, createExif, writeExifImg, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, getRandom, banner, banner2, banner3, temporizador, chyt, simih, antispam, anotar, sotoy, countMessage, comandos, daily, muted, nescessario, vip, ban, setting, logoslink, ftmenu, linguagem, getInfo, mess, destrava, destrava2, tabela, recognize, colors, cheerio, NodeCache, kyun, TimeCount, enviarfiguUrl, sendPoll, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, convertBytes, arcloud, os, garticArchives, enigmaArchive, isFiltered, addFilter, psycatgames, vyroEngine, whatMusicAr, quizFutebol, chaves, grupos, aluguel, obeso, countDays, timeDate, writeExif2, Limit_CMD, capitalizeFirstLetter, emoji, formatNumber, formatNumberDecimal, pushnames, shuffle, packname, advices, tools, getName, listCommands, namoro1, namoro2 }