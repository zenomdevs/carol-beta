const axios = require('axios');
/*
/ SCRAPER FEITA POR PAULO MODS E APRIMORADA
/ E APRIMORADA POR GLEYSONDEVS, TOTAIS DIREITOS 
/ A AMBOS, E QUALQUER USO DE FORMA INDEVIDA
/ NOS NAO NOS RESPONSABILIZAREMOS.
/
/ ATENCIOSAMENTE 
/ GLEYSONDEVS | PAULO MODS
*/
const CarolPlay = {
    // APIs de fallback
    get fallbackApis() {
        return [
            {
                name: 'ssvid',
                baseUrl: 'https://ssvid.net',
                searchPath: '/api/ajax/search',
                convertPath: '/api/ajax/convert'
            },
            {
                name: 'y2mate',
                baseUrl: 'https://www.y2mate.com',
                searchPath: '/mates/analyze/ajax',
                convertPath: '/mates/convertV2/index'
            }
        ];
    },

    get baseUrl() {
        return {
            origin: 'https://ssvid.net'
        }
    },

    get baseHeaders() {
        return {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'origin': this.baseUrl.origin,
            'referer': this.baseUrl.origin + '/youtube-to-mp3',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    },

    validateFormat: function (userFormat) {
        const validFormat = ['mp3', '360p', '720p', '1080p'];
        if (!validFormat.includes(userFormat)) {
            throw Error(`Formato inválido! Formatos disponíveis: ${validFormat.join(', ')}`);
        }
    },

    handleFormat: function (userFormat, searchJson) {
        this.validateFormat(userFormat);
        let result;
        
        if (userFormat == 'mp3') {
            result = searchJson.links?.mp3?.mp3128?.k || searchJson.links?.mp3?.['128']?.k;
        } else {
            let selectedFormat;
            const allFormats = Object.entries(searchJson.links?.mp4 || {});
            const quality = allFormats
                .map(v => v[1].q)
                .filter(v => /\d+p/.test(v))
                .map(v => parseInt(v))
                .sort((a, b) => b - a)
                .map(v => v + 'p');
                
            if (!quality.includes(userFormat)) {
                selectedFormat = quality[0];
                console.log(`Formato ${userFormat} não disponível. Usando: ${selectedFormat}`);
            } else {
                selectedFormat = userFormat;
            }
            
            const find = allFormats.find(v => v[1].q == selectedFormat);
            result = find?.[1]?.k;
        }
        
        if (!result) throw Error(`${userFormat} não encontrado.`);
        return result;
    },

    hit: async function (path, payload, timeout = 10000, retries = 3) {
        for (let attempt = 1; attempt <= retries; attempt++) {
            try {
                const body = new URLSearchParams(payload);
                
                const response = await axios({
                    method: 'post',
                    url: `${this.baseUrl.origin}${path}`,
                    headers: this.baseHeaders,
                    data: body.toString(),
                    timeout: timeout,
                    validateStatus: function (status) {
                        return status < 500; // Aceita códigos < 500
                    }
                });
                
                console.log(`✓ hit ${path} - attempt ${attempt} - status: ${response.status}`);
                
                if (response.status >= 400) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                
                return response.data;
                
            } catch (error) {
                console.log(`✗ Tentativa ${attempt}/${retries} falhou para ${path}:`, error.message);
                
                if (attempt === retries) {
                    if (error.code === 'ECONNABORTED' || error.code === 'ETIMEDOUT') {
                        throw Error(`Timeout: O servidor demorou mais que ${timeout}ms para responder`);
                    } else if (error.response) {
                        throw Error(`${error.response.status} ${error.response.statusText}`);
                    } else if (error.request) {
                        throw Error(`Sem resposta do servidor: ${path}`);
                    } else {
                        throw Error(`${path}\n${error.message}`);
                    }
                }
                
                // Aguarda antes da próxima tentativa
                await new Promise(resolve => setTimeout(resolve, 2000 * attempt));
            }
        }
    },

    // Método alternativo usando diferentes APIs
    downloadWithFallback: async function (videoUrl, userFormat = 'mp3') {
        const apis = [
            {
                name: 'API 1 - Direct',
                url: `https://api.cobalt.tools/api/json`,
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                payload: { url: videoUrl, vCodec: 'h264', vQuality: userFormat === 'mp3' ? '720' : userFormat.replace('p', ''), aFormat: userFormat === 'mp3' ? 'mp3' : 'best' }
            }
        ];

        for (const api of apis) {
            try {
                console.log(`Tentando ${api.name}...`);
                const response = await axios({
                    method: 'post',
                    url: api.url,
                    headers: api.headers,
                    data: api.payload,
                    timeout: 15000
                });

                if (response.data && (response.data.url || response.data.audio)) {
                    return {
                        dlink: response.data.url || response.data.audio,
                        title: response.data.title || 'Áudio/Vídeo',
                        api: api.name
                    };
                }
            } catch (error) {
                console.log(`${api.name} falhou:`, error.message);
            }
        }
        
        throw new Error('Todas as APIs de fallback falharam');
    },

    download: async function (queryOrYtUrl, userFormat = 'mp3', timeout = 15000) {
        this.validateFormat(userFormat);
        
        try {
            console.log('Iniciando download com API principal...');
            
            let search = await this.hit('/api/ajax/search', {
                "query": queryOrYtUrl,
                "cf_token": "",
                "vt": "youtube"
            }, timeout);

            if (search.p == 'search') {
                if (!search?.items?.length) {
                    throw Error(`Nenhum resultado encontrado para ${queryOrYtUrl}`);
                }
                const { v, t } = search.items[0];
                const videoUrl = 'https://www.youtube.com/watch?v=' + v;
                console.log(`[found] title: ${t} | url: ${videoUrl}`);
                
                search = await this.hit('/api/ajax/search', {
                    "query": videoUrl,
                    "cf_token": "",
                    "vt": "youtube"
                }, timeout);
            }

            const vid = search.vid;
            const k = this.handleFormat(userFormat, search);
            
            console.log('Tentando converter...');
            const convert = await this.hit('/api/ajax/convert', { k, vid }, timeout);
            
            return convert;
            
        } catch (mainError) {
            console.log('API principal falhou:', mainError.message);
            console.log('Tentando APIs alternativas...');
            
            try {
                // Tenta extrair URL do YouTube se necessário
                let videoUrl = queryOrYtUrl;
                if (!queryOrYtUrl.includes('youtube.com') && !queryOrYtUrl.includes('youtu.be')) {
                    // Se não é uma URL, busca no YouTube
                    const yts = require('yt-search');
                    const searchResult = await yts(queryOrYtUrl);
                    if (searchResult.all && searchResult.all.length > 0) {
                        videoUrl = searchResult.all[0].url;
                        console.log(`Encontrado via yts: ${searchResult.all[0].title}`);
                    } else {
                        throw new Error('Nenhum vídeo encontrado');
                    }
                }
                
                return await this.downloadWithFallback(videoUrl, userFormat);
                
            } catch (fallbackError) {
                console.log('Todas as tentativas falharam:', fallbackError.message);
                throw new Error(`Falha no download: ${mainError.message}. Fallback também falhou: ${fallbackError.message}`);
            }
        }
    },

    // Método para verificar se o serviço está disponível
    checkService: async function () {
        try {
            const response = await axios({
                method: 'get',
                url: this.baseUrl.origin,
                timeout: 5000,
                validateStatus: function (status) {
                    return status < 500;
                }
            });
            return { available: true, status: response.status };
        } catch (error) {
            return { available: false, error: error.message };
        }
    }
};

module.exports = CarolPlay;