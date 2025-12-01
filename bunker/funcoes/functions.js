const fetch = (...args) =>
import("node-fetch").then(({ default: fetch }) => fetch(...args));
const fs = require("fs");
const axios = require("axios");
const cfonts = require("cfonts");
const Crypto = require("crypto");
const chalk = require("chalk");
const exec = require("child_process").exec;
const log = console.debug;
const mimetype = require("mime-types");
const cheerio = require("cheerio");
const { spawn } = require("child_process");
const FormData = require("form-data");
const { fileTypeFromBuffer } = require('file-type');
const qs = require("qs");
const toMs = require("ms");
const request = require("request");
const ffmpeg = require("fluent-ffmpeg");
const moment = require("moment-timezone");

// NORMALIZAR O LID //
function normalizeJid(jid) {
if (!jid) return null;
let id = jid.replace(/:.*(?=@)/, '');
if (id.endsWith('@lid')) {
 id = id.replace('@lid', '@s.whatsapp.net');
} else if (!id.endsWith('@s.whatsapp.net')) {
 id = id + '@s.whatsapp.net';
}
  return id;
};

const colors = {
  corzinhas: [
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "redBright",
    "greenBright",
    "yellowBright",
    "blueBright",
    "magentaBright",
    "cyanBright",
    "whiteBright",
  ],
  getRandomColor: () =>
    colors.corzinhas[Math.floor(Math.random() * colors.corzinhas.length)],
};

const ceemde = JSON.parse(
  fs.readFileSync("./bunker/database/data/totalcmd.json")
);

const getpc = async function (totalchat) {
  pc = [];
  a = [];
  b = [];
  for (var c of totalchat) {
    a.push(c.id);
  }
  for (var d of a) {
    if (d && !d.includes("g.us")) {
      b.push(d);
    }
  }
  return b;
};

// === UPLOAD CATBOX === //
async function upload(midia) {
try {
const type = await fileTypeFromBuffer(midia);
const ext = type?.ext || "jpg";
const form = new FormData();
form.append("reqtype", "fileupload");
form.append("fileToUpload", midia, `upload.${ext}`);
const uploadRes = await fetch("https://catbox.moe/user/api.php", {
method: "POST",
body: form,
headers: form.getHeaders()
});
if (!uploadRes.ok) {
const text = await uploadRes.text();
throw new Error(`HTTP ${uploadRes.status}: ${text}`);
}
const url = await uploadRes.text();
if (!url.startsWith("http")) {
throw new Error("Falha upload Catbox: " + url);
}
return url;
} catch (erro) {
console.error("Erro upload Catbox:", erro.message);
throw erro;
}
};

function convertSticker(base64, author, pack) {
  return new Promise((resolve, reject) => {
    axios("https://sticker-api-tpe3wet7da-uc.a.run.app/prepareWebp", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=utf-8",
        "User-Agent": "axios/0.21.1",
        "Content-Length": 151330,
      },
      data: `{"image": "${base64}","stickerMetadata":{"author":"${author}","pack":"${pack}","keepScale":true,"removebg":"HQ"},"sessionInfo":{"WA_VERSION":"2.2106.5","PAGE_UA":"WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36","WA_AUTOMATE_VERSION":"3.6.10 UPDATE AVAILABLE: 3.6.11","BROWSER_VERSION":"HeadlessChrome/88.0.4324.190","OS":"Windows Server 2016","START_TS":1614310326309,"NUM":"6247","LAUNCH_TIME_MS":7934,"PHONE_VERSION":"2.20.205.16"},"config":{"sessionId":"session","headless":true,"qrTimeout":20,"authTimeout":0,"cacheEnabled":false,"useChrome":true,"killProcessOnBrowserClose":true,"throwErrorOnTosBlock":false,"chromiumArgs":["--no-sandbox","--disable-setuid-sandbox","--aggressive-cache-discard","--disable-cache","--disable-application-cache","--disable-offline-load-stale-cache","--disk-cache-size=0"],"executablePath":"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe","skipBrokenMethodsCheck":true,"stickerServerEndpoint":true}}`,
    })
      .then(({ data }) => {
        resolve(data.webpBase64);
      })
      .catch(reject);
  });
}

exports.fetchJson = fetchJson = (url, options) =>
  new Promise(async (resolve, reject) => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json)
        resolve(json);
      })
      .catch((err) => {
        reject(err);
      });
  });

exports.fetchText = fetchText = (url, options) =>
  new Promise(async (resolve, reject) => {
    fetch(url, options)
      .then((response) => response.text())
      .then((text) => {
        // console.log(text)
        resolve(text);
      })
      .catch((err) => {
        reject(err);
      });
  });

exports.createExif = (pack, auth) => {
  const code = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00];
  const exif = {
    "sticker-pack-id": "com.client.tech",
    "sticker-pack-name": pack,
    "sticker-pack-publisher": auth,
    "android-app-store-link":
      "https://play.google.com/store/apps/details?id=com.termux",
    "ios-app-store-link":
      "https://itunes.apple.com/app/sticker-maker-studio/id1443326857",
  };
  let len = JSON.stringify(exif).length;
  if (len > 256) {
    len = len - 256;
    code.unshift(0x01);
  } else {
    code.unshift(0x00);
  }
  if (len < 16) {
    len = len.toString(16);
    len = "0" + len;
  } else {
    len = len.toString(16);
  }
  const _ = Buffer.from([
    0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57,
    0x07, 0x00,
  ]);
  const __ = Buffer.from(len, "hex");
  const ___ = Buffer.from(code);
  const ____ = Buffer.from(JSON.stringify(exif));
  fs.writeFileSync(
    "./bunker/sticker/data.exif",
    Buffer.concat([_, __, ___, ____]),
    function (err) {
      console.log(err);
      if (err) return console.error(err);
      return `./arquivos/sticker/data.exif`;
    }
  );
};

const getBuffer = async (url, opcoes) => {
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

const randomBytes = (length) => {
  return Crypto.randomBytes(length);
};

const generateMessageID = () => {
  return randomBytes(10).toString("hex").toUpperCase();
};

const getExtension = async (type) => {
  return await mimetype.extension(type);
};

function getGroupAdmins(participants) {
return participants.filter(p => p.admin === "admin" || p.admin === "superadmin")
.map(p => {
let base = p.phoneNumber ?? p.id;
if (!base) return null;
if (base.endsWith("@lid") && p.phoneNumber) {
 base = p.phoneNumber;
}
return base;
}).filter(Boolean);
};

function getMembros(participants) {
return participants.filter(p => !p.admin)
.map(p => {
let raw = p.phoneNumber ?? p.id;
if (!raw) return null;
if (raw.endsWith("@lid") && p.phoneNumber) {
 raw = p.phoneNumber;
}
return raw;
}).filter(Boolean);
};

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};

const banner2 = cfonts.render(("DONO: ZENODEXX"), {
    font: 'console',
    align: 'center', 
    gradient: ['red', 'magenta'],
});
 
const banner3 = cfonts.render(("CAROL|BETA"), {
  font: 'block',
  align: "center",
  gradient: ["red", "magenta"]
});

function temporizador(segundos) {
  function tempo(s) {
    return (s < 10 ? "0" : "") + s;
  }
  var horas = Math.floor(segundos / (60 * 60));
  var minutos = Math.floor((segundos % (60 * 60)) / 60);
  var segundos = Math.floor(segundos % 60);
  return `${tempo(horas)}:${tempo(minutos)}:${tempo(segundos)}`;
}

const color = (text, color) => {
  return !color ? chalk.green(text) : chalk.keyword(color)(text);
};

const bgcolor = (text, bgcolor) => {
  return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text);
};

function recognize(filename, config = {}) {
  const options = getOptions(config);
  const binary = config.binary || "tesseract";
  const command = [binary, `"${filename}"`, "stdout", ...options].join(" ");
  if (config.debug) log("command", command);
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (config.debug) log(stderr);
      if (error) reject(error);
      resolve(stdout);
    });
  });
}

function getOptions(config) {
  const ocrOptions = [
    "tessdata-dir",
    "user-words",
    "user-patterns",
    "psm",
    "oem",
    "dpi",
  ];
  return Object.entries(config)
    .map(([key, value]) => {
      if (["debug", "presets", "binary"].includes(key)) return;
      if (key === "lang") return `-l ${value}`;
      if (ocrOptions.includes(key)) return `--${key} ${value}`;
      return `-c ${key}=${value}`;
    })
    .concat(config.presets)
    .filter(Boolean);
}

const authorname = "Kasane-betav3";
const packname = "Criador: dylan Modz";

const chyt = ["554699887263@s.whatsapp.net", `.@lid`];

const nit = ["554699887263@s.whatsapp.net", `.@lid`];

const supre = ["554699887263@s.whatsapp.net", `.@lid`];

const usedCommandRecently = new Set();
const isFiltered = (from) => !!usedCommandRecently.has(from);
const addFilter = (from) => {
  usedCommandRecently.add(from);
  setTimeout(() => usedCommandRecently.delete(from), 5000);
};

module.exports = {
  getBuffer,
  fetchJson,
  fetchText,
  generateMessageID,
  getGroupAdmins,
  getMembros,
  getRandom,
  banner2,
  temporizador,
  color,
  recognize,
  bgcolor,
  isFiltered,
  addFilter,
  banner3,
  chyt,
  getExtension,
  convertSticker,
  upload,
  nit,
  getpc,
  supre,
};
