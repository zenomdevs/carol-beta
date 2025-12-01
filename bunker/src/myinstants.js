// Arquivo: ./src/myinstants.js (Versão Corrigida)

const axios = require('axios');
const cheerio = require('cheerio');

const BASE_URL = "https://www.myinstants.com";

async function AudioMeme(query) {
    try {
        const searchUrl = `${BASE_URL}/en/search/?name=${encodeURIComponent(query)}`;
        const { data: html } = await axios.get(searchUrl);
        const $ = cheerio.load(html);

        const sounds = [];

        $('div.instant').each((index, element) => {
            const instantLinkEl = $(element).find('a.instant-link');
            const buttonEl = $(element).find('button.small-button');

            const title = instantLinkEl.text();
            const relativeUrl = instantLinkEl.attr('href');
            const onclickAttr = buttonEl.attr('onclick');

            if (title && relativeUrl && onclickAttr) {
                
                // >>> A MUDANÇA PRINCIPAL ESTÁ AQUI <<<
                const mp3Match = onclickAttr.match(/play\('([^']+)'/);

                if (mp3Match && mp3Match[1]) {
                    const mp3Path = mp3Match[1];
                    
                    sounds.push({
                        id: relativeUrl.replace('/en/instant/', ''),
                        title,
                        url: `${BASE_URL}${relativeUrl}`,
                        mp3: `${BASE_URL}${mp3Path}`,
                    });
                }
            }
        });

        return sounds;
    } catch (error) {
        console.error("Erro ao buscar no MyInstants:", error.message);
        throw new Error("Não foi possível buscar os áudios. Tente novamente.");
    }
}
(async function() {
    try {
        const results = await AudioMeme('lula');
        return console.log(results);
    } catch (error) {
        console.error("Erro ao buscar os áudios:", error.message);
        throw error;
    }
})
module.exports = AudioMeme;