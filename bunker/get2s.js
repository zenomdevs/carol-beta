const axios = require('axios')
const mimetype = require('mime-types')
const chalk = require('chalk')
const FormData = require("form-data");
const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
/*
const {
downloadContentFromMessage, proto, delay, getContentType
} = require('@WhiskeySockets/baileys')
*/
const Random = Math.random(10)

const getExtension = async (type) => {
return await mimetype.extension(type)
}

exports.fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})


module.exports = { getFileBuffer, getBuffer, getExtension, Random }