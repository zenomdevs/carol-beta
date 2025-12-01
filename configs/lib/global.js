exports.ErrorBaileys401 = () => {
  response = [
    "💙 Ops! Minha conexão caiu, preciso que você escaneie o QR novamente para voltarmos a conversar.",
    "🔄 Desconectei do WhatsApp, que tal reconectar escaneando o QR code? Já estou gerando um novo.",
    "⚡ Parece que alguém me desconectou... Vamos refazer nossa conexão? Escaneie o novo QR que estou criando.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.ErrorBaileys_408 = () => {
  response = [
    "⏰ Eita! Demorei demais para responder e a sessão expirou. Já estou recarregando tudo.",
    "🔄 O tempo limite foi atingido, mas calma que já estou reiniciando nossa conexão.",
    "⚡ Timeout detectado! Estou recarregando o sistema para voltarmos ao normal.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.ErrorBaileys_411 = () => {
  response = [
    "🔧 Algo deu errado com minha sessão salva... Estou corrigindo isso automaticamente.",
    "⚙️ Detectei incompatibilidade na sessão, mas já estou ajustando para funcionar perfeitamente.",
    "🛠️ Parece que meus arquivos de sessão estão desatualizados. Corrigindo agora mesmo.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.ErrorBaileys_428 = () => {
  response = [
    "📶 Ops! Parece que sua internet deu uma oscilada. Estou tentando reconectar automaticamente.",
    "🌐 A conexão com o WhatsApp foi perdida, mas não se preocupe, já estou restabelecendo.",
    "🔄 Detectei instabilidade na rede... Reconectando para manter nossa conversa fluindo.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.ErrorBaileys_440 = () => {
  response = [
    "⚠️ Detectei múltiplas sessões do WhatsApp Web no meu número. Por favor, feche as outras abas.",
    "🚫 Parece que você tem outro WhatsApp Web aberto comigo. Feche para eu funcionar corretamente.",
    "📱 Muitas conexões simultâneas detectadas! Deixe apenas uma sessão ativa para eu operar.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.ErrorBaileys_500 = () => {
  response = [
    "🔧 Algo não estava configurado corretamente... Já estou ajustando automaticamente.",
    "⚙️ Detectei erro interno na sessão. Iniciando processo de correção automática.",
    "🛠️ Configuração inconsistente detectada! Reinicializando para resolver o problema.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.ErrorBaileys_515 = () => {
  response = [
    "🔄 O sistema solicitou uma atualização. Reiniciando para aplicar melhorias.",
    "⬆️ Atualização necessária detectada! Já estou reiniciando com as novidades.",
    "🚀 Hora de uma atualização! Reiniciando para trazer recursos ainda melhores.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.open = () => {
  response = [
    "✅ Perfeito! Estou online e conectada com sucesso ao WhatsApp Web! Vamos conversar?.",
    "🎉 Conexão estabelecida com êxito! Estou pronta para te ajudar no que precisar.",
    "💙 Online e operacional! Sessão carregada perfeitamente, estou à sua disposição.",
    "⚡ Conexão estabilizada! Sistema carregado e pronto para atender você.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.connecting = () => {
  response = [
    "🔄 Inicializando meus sistemas... Em breve estarei pronta para conversar.",
    "⚡ Carregando todas as funcionalidades... Aguarde só um pouquinho.",
    "🚀 Preparando tudo para te oferecer a melhor experiência... Quase lá.",
    "💙 Oi! Estou acordando e configurando tudo... Logo estaremos conversando.",
    "🎯 Sincronizando dados e carregando recursos... Preparando surpresas para você.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.blackList = (GroupMetadata_, naga2) => {
  participant = naga2.participants[0].split("@")[0];
  response = [
    `🚫 *@${participant}* foi removido do *${GroupMetadata_.subject}* por estar na minha lista negra.`,
    `👀 Olha quem tentou voltar! *@${participant}*, achou que eu não lembraria de você? Tchau.`,
    `⚠️ *@${participant}* tentou se infiltrar, mas meu sistema de segurança já removeu.`,
    `🛡️ Proteção ativada! *@${participant}* foi banido automaticamente por estar na blacklist.`,
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.phrasesLeft = (getName, numeroParticipante, encodeURIComponent) => {
  response = [
    "Se foi mais um membro, que volte algum dia no futuro.",
    "Alguem decidiu partir, desejo boa sorte na jornada e felicidades.",
    "Que pena, Perdemos um membro da família. sentirei saudades!",
    `${encodeURIComponent(getName(numeroParticipante))} saiu do grupo, sentiremos muito sua falta! volte logo.`,
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.phrasesWelcome = (mdata_2, getName, numeroParticipante, encodeURIComponent) => {
  response = [
    `Bem-vindo(a) ao ${encodeURIComponent(mdata_2.subject)}! Divirta-se conosco.`,
    `${encodeURIComponent(getName(numeroParticipante))} chegou de paraquedas no grupo! Seja bem-vindo(a).`,
    "Leia as regras e aproveite nossa comunidade incrível.",
    "Mais uma pessoa especial se juntou à nossa família.",
    "Aceita um cafezinho enquanto conhece o pessoal?",
    "Olá! Sou a Carol, sua assistente virtual favorita neste grupo.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.wait = () => {
  response = [
    "👑 Em alguns segundos estará pronto.",
    "💙 Trabalhando na sua solicitação.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.onlyAdmins = () => {
  response = [
    "🔒 Este comando é exclusivo para administradores! Você ainda não possui essa autorização..",
    "👑 Apenas membros com poderes administrativos podem usar esta funcionalidade.",
    "⚠️ Acesso negado! Somente administradores do grupo têm permissão para este comando..",
    "🛡️ Função restrita! Este comando exige privilégios de administrador..",
    "🚫 Ops! Este é um comando especial apenas para a equipe administrativa..",
    "💼 Comando empresarial! Apenas gerentes (administradores) podem executar..",
    "🎖️ Este comando requer patente de administrador para ser utilizado.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.onlyOwner = () => {
  response = [
    "👨‍💻 Apenas meu criador tem autorização total para usar este comando.",
    "🔐 Área ultra restrita! Somente meu proprietário pode acessar esta funcionalidade.",
    "⚡ Este é um comando master! Apenas quem me criou pode utilizá-lo.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.onlyGroup = () => {
  response = [
    "👥 Este comando funciona apenas em grupos! Que tal me adicionar em um?.",
    "🏠 Comando exclusivo para grupos! No privado não rola essa função..",
    "🎪 Esta é uma função comunitária! Funciona somente em grupos..",
    "👫 Para usar este comando, preciso estar em um grupo! Me adicione em algum.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.onlyVipUser = () => {
  response = [
    "💎 Este comando é exclusivo para usuários VIP! Entre em contato com meu criador para adquirir.",
    "🌟 Função premium detectada! Apenas usuários VIP podem usar este comando especial.",
    "👑 Comando VIP! Para desbloquear, fale com meu proprietário sobre o acesso premium.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.onlyBotAdmin = () => {
  response = [
    "🛡️ Preciso ser administradora do grupo para executar comandos administrativos! Me promova.",
    "⚡ Para trabalhar na segurança do grupo, preciso ter poderes de admin! Me dê acesso.",
    "🎯 Não posso executar esta função sem ser administradora! Solicite minha promoção.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.onlyGroupFun = (prefixo) => {
  response = [
    `🎮 Para liberar comandos de diversão, ative o modo brincadeira com ${prefixo}modobrincadeira! (Apenas admins).`,
    `🎪 O modo diversão está desativado! Peça a um admin para usar: *${prefixo}modobrincadeiras 1*.`,
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.onlyPrivate = () => {
  response = [
    "🔒 Este comando funciona apenas em conversas privadas comigo.",
    "💬 Função exclusiva do privado! Chame-me no direct para usar este comando.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.bannedUser = () => {
  response = [
    "🚫 Você violou meus termos de uso e está banido de usar meus comandos.",
    "⛔ Acesso bloqueado! Você está impedido de usar minhas funcionalidades.",
    "🔒 Conta suspensa! Meu criador te baniu por alguma infração grave.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.forbiddenStateFromDDD = (mentionUser, whichState, extractDDD) => {
  response = [
    `⚠️ @${mentionUser.split("@")[0]}, você foi removido por ter DDD proibido neste grupo.`,
    `🚫 @${mentionUser.split("@")[0]}, infelizmente seu DDD não é permitido aqui. Até logo.`,
    `⛔ Números com DDD ${extractDDD(mentionUser.split("@")[0])} não são aceitos neste grupo.`,
    `🛡️ Sistema de proteção ativo! DDD ${extractDDD(mentionUser.split("@")[0])} está bloqueado.`,
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.errorConvertSticker = () => {
  return "❌ Falha ao processar a mídia para sticker! Tente novamente com outro arquivo.";
};

exports.errorCommandLink = () => {
  return "🔗 Verifique se o link está correto e tente novamente.";
};

exports.playResult = (data) => {
  return `      *🎵「CAROL PLAY ÁUDIO」🎵*

*📄 Título:* ${data.resultado[0].title}
*👤 Canal:* ${data.resultado[0].author.name}
*🕑 Duração:* ${data.resultado[0].timestamp}
*📁 Formato:* Mp3
*👀 Visualizações:* ${data.resultado[0].views}
*🤖 Bot:* Carol V1 Beta
*👨‍💻 Desenvolvido por:* GleysonDevs
*🖇 Link:* ${data.resultado[0].url}

| BY Carol V1 Beta`;
};

exports.playButtonsResult = (data) => {
  return `*🎵 Título:* ${data.resultado[0].title}\n*⏰ Duração:* ${data.resultado[0].timestamp} | ${data.resultado[0].seconds} segundos\n*📅 Postado:* ${data.resultado[0].ago}\n*📺 Canal:* ${data.resultado[0].author.name}\n*📝 Descrição:* ${data.resultado[0].description}\n\n| BY Carol V1 Beta`;
};

exports.playVideo = (data) => {
  return `      *🎬「CAROL PLAY VÍDEO」🎬*

*📄 Título:* ${data.resultado[0].title}
*👤 Canal:* ${data.resultado[0].author.name}
*🕑 Duração:* ${data.resultado[0].timestamp}
*📁 Formato:* Mp4
*👀 Visualizações:* ${data.resultado[0].views}
*🤖 Bot:* Carol V1 Beta
*👨‍💻 Desenvolvido por:* GleysonDevs
*🖇 Link:* ${data.resultado[0].url}

| BY Carol V1 Beta`;
};

exports.playVideo2 = (data) => {
  return `      *🎬「CAROL PLAY VÍDEO HD」🎬*

*📄 Título:* ${data.resultado[0].title}
*👤 Canal:* ${data.resultado[0].author.name}
*🕑 Duração:* ${data.resultado[0].timestamp}
*📁 Formato:* Mp4 HD
*👀 Visualizações:* ${data.resultado[0].views}
*🤖 Bot:* Carol V1 Beta
*👨‍💻 Desenvolvido por:* GleysonDevs
*🖇 Link:* ${data.resultado[0].url}

| BY Carol V1 Beta`;
};

exports.playDocumentResult = (data) => {
  return `      *📄「CAROL PLAY DOCUMENTO」📄*

*📄 Título:* ${data.resultado[0].title}
*👤 Canal:* ${data.resultado[0].author.name}
*🕑 Duração:* ${data.resultado[0].timestamp}
*📁 Formato:* Documento Mp3
*👀 Visualizações:* ${data.resultado[0].views}
*🤖 Bot:* Carol V1 Beta
*👨‍💻 Desenvolvido por:* GleysonDevs
*🖇 Link:* ${data.resultado[0].url}

| BY Carol V1 Beta`;
};

exports.shz = (data) => {
  return `🎵 *Música:* ${data.videos[0].title}\n📝 *Descrição:* ${data.videos[0].description || "Não Encontrado."}\n⏰ *Duração:* ${data.videos[0].timestamp}\n🔗 *Link:* ${data.videos[0].url}`;
};

exports.playmixResult = (data) => {
  return `*🎵 Carol Play Mix - 5 resultados da sua pesquisa:*

*1°* ${data.resultado[0].title}
⏰ *Duração:* ${data.resultado[0].timestamp} | ${data.resultado[0].seconds}s

*2°* ${data.resultado[1].title}
⏰ *Duração:* ${data.resultado[1].timestamp} | ${data.resultado[1].seconds}s

*3°* ${data.resultado[2].title}
⏰ *Duração:* ${data.resultado[2].timestamp} | ${data.resultado[2].seconds}s

*4°* ${data.resultado[3].title}
⏰ *Duração:* ${data.resultado[3].timestamp} | ${data.resultado[3].seconds}s

*5°* ${data.resultado[4].title}
⏰ *Duração:* ${data.resultado[4].timestamp} | ${data.resultado[4].seconds}s

| BY Carol V1 Beta`;
};

exports.syntaxDownloadMusic = () => {
  return `🎵 Por favor, digite o nome de uma música ou vídeo para buscar.`;
};

exports.syntaxPlayMix = () => {
  return `🎤 Digite o nome de um artista para obter os melhores resultados.`;
};

exports.InstaStalker = (data, formatNumber, formatNumberDecimal) => {
  return `📸 *Instagram Stalker*

• *Nome:* ${data.resultado.profileName || "Usuário"} *(@${data.resultado.username})*
• *Conta Privada:* ${data.resultado.accountPrivate === true ? "Sim" : "Não"}
• *Verificado:* ${data.resultado.accountVerified === true ? "Sim" : "Não"}
• *Link Externo:* ${data.resultado.externalUrl || "Nenhum"}
• *Posts:* ${formatNumberDecimal(data.resultado.mediaCount)}
• *Seguidores:* ${formatNumberDecimal(data.resultado.followersAmount)}
• *Seguindo:* ${formatNumberDecimal(data.resultado.followingAmount)}

📝 *Biografia:*
\`\`\`${data.resultado.biography || "❌ Sem biografia!"}\`\`\`

| BY Carol V1 Beta`;
};

exports.TiktokStalker = (data, formatNumberDecimal) => {
  return `🎵 *TikTok Stalker*

• *Nome:* ${data.resultado.users.nickname} | @${data.resultado.users.username}
• *URL:* https://tiktok.com/@${data.resultado.users.username}
• *Verificado:* ${data.resultado.users.verified === true ? "Sim" : "Não"}
• *Privado:* ${data.resultado.users.privateAccount === true ? "Sim" : "Não"}
• *Comercial:* ${data.resultado.users.commerceUser === true ? "Sim" : "Não"}
• *Região:* ${data.resultado.users.region}

📊 *Estatísticas:*
• *Seguidores:* ${formatNumberDecimal(data.resultado.stats.followerCount)}
• *Seguindo:* ${data.resultado.stats.followingCount}
• *Curtidas:* ${formatNumberDecimal(data.resultado.stats.heartCount)}
• *Vídeos:* ${formatNumberDecimal(data.resultado.stats.videoCount)}

📝 *Biografia:*
\`\`\`${data.resultado.users.signature.replaceAll(`\n\n`, `\n`)}\`\`\`

| BY Carol V1 Beta`;
};

exports.tiktokDownload = (data) => {
  return `🎵 *TikTok Download*

*👤 Usuário:* @${data.resultado.username}
*📝 Descrição:* ${data.resultado.description}

| BY Carol V1 Beta`;
};

exports.soundcloud = (data, tinyUrl) => {
  return `🎵 *SoundCloud Download*

• *Música:* ${data.resultado.titulo}
• *Downloads:* ${data.resultado.total_downloads}

📥 *Caso não envie automaticamente, use o link:* ${tinyUrl.data}

| BY Carol V1 Beta`;
};

exports.icmsResult = (data) => {
  return `💰 *Calculadora ICMS*

📊 *Taxa ICMS:* ${data.resultado.icms}%
💵 *Valor ICMS:* R$ ${data.resultado.icmsTotal}
💸 *Total BRL:* R$ ${data.resultado.total}
💲 *Total USD:* $ ${data.resultado.dolar}

ℹ️ *Observação:* Cálculo estimado baseado na alíquota do seu estado.

| BY Carol V1 Beta`;
};

exports.syntaxIcms = (prefix) => {
  return `💡 *Como usar o comando ICMS:*

*Exemplo:* ${prefix}icms 704|82

*Explicação:*
• *704* - Valor do produto
• *82* - DDD do seu estado

| BY Carol V1 Beta`;
};

exports.syntaxTrackParcels = (prefix) => {
  return `📦 *Como rastrear encomenda:*

*Exemplo:* ${prefix}rastrear PC123456789BR

ℹ️ *O código possui:* 9 números + 4 letras (2 no início + 2 no final)

| BY Carol V1 Beta`;
};

exports.invalidCodeRastrear = () => {
  return `❌ *Código inválido!*

✅ *Formato correto:* PC123456789BR
• 2 letras + 9 números + 2 letras

| BY Carol V1 Beta`;
};

exports.rastrearEncomenda = (dataResult, q) => {
  return (
    `📦 *Rastreamento de Encomenda*

*Código:* ${q}
*Última atualização:* ${dataResult.resultado[0].datePost} (${dataResult.resultado[0].timeCount})

📍 *Histórico:*
` +
    dataResult.resultado
      .map(
        (info, index) =>
          `${index + 1}. *${info.description}*\n📅 ${info.timeCount} (${info.datePost})`
      )
      .join("\n\n") +
    "\n\n| BY Carol V1 Beta"
  );
};

exports.lyrics = (data, II) => {
  return `🎵 *Letra da Música*

• *Título:* ${data.resultado.name}
• *Artista:* ${data.resultado.byArtist.name}
• *Descrição:* ${data.resultado.description}
• *URL:* ${data.resultado.url}

🎤 *Letra:*
${II}${data.resultado.lyricOriginal}${II}

| BY Carol V1 Beta`;
};

exports.result_APOD = (dataNaga, resultExp) => {
  return `🔭 *NASA - Imagem do Dia*

*Título:* ${dataNaga.nasa.title}

🌐 *Explicação:* ${resultExp.result}

| BY Carol V1 Beta`;
};

exports.searchBooks = (getBook) => {
  return `📚 *Busca de Livros*

• *Título:* ${getBook.data.volumeInfo.title}
• *Autor:* ${getBook.data.volumeInfo.authors[0]}
• *Publicado em:* ${getBook.data.volumeInfo.publishedDate}
• *Editora:* ${getBook.data.volumeInfo.publisher}
• *Páginas:* ${getBook.data.volumeInfo.pageCount}

📝 *Descrição:* ${getBook.data.volumeInfo.description}

👓 *Ler online:* ${getBook.data.accessInfo.webReaderLink}
➕ *Mais info:* ${getBook.data.volumeInfo.canonicalVolumeLink}

| BY Carol V1 Beta`;
};

exports.mediafireDownload = (ABC, encurt) => {
  return `📁 *MediaFire Download*

• *Nome:* ${ABC.resultado.nama}
• *Tamanho:* ${ABC.resultado.size}
• *Tipo:* ${ABC.resultado.mime}

⏳ *Enviando arquivo... Aguarde!*

💡 *Demorou?* Use o link: ${encurt.data}

| BY Carol V1 Beta`;
};

exports.horoscopo = (q, ABC) => {
  return `🔮 *Horóscopo*

*Signo:* ${q}
${ABC.resultado.inform}

| BY Carol V1 Beta`;
};

exports.respostaChatGPT = (dataResulted) => {
  return `🤖 *Carol IA*

${dataResulted.result}

| BY Carol V1 Beta`;
};

exports.respostaResumida = (dataResulted) => {
  return `📝 *Resumo*

${dataResulted.result}

| BY Carol V1 Beta`;
};

exports.respostaRedacao = (dataResulted) => {
  return `${dataResulted.result}`;
};

exports.wikiResposta = (wikis) => {
  return `${wikis.data.query.pages[Object.keys(wikis.data.query.pages)].extract}`;
};

exports.googleImage = (data) => {
  return `• Título: *${data.origin.title || "Não existe título na imagem."}*\n• URL: *${data.origin.website.url || "Sem URL."}* \n• Fonte: *${data.origin.website.name || "Sem informação."} _(${data.origin.website.domain || "Sem informação."})_*\n• Resolução: *${data.height || "0"} × ${data.width || "0"}*`;
};

exports.aptoide = (getApk, sizeApk, lnDown) => {
  return `• Nome: *${getApk.name}*\n• Pacote do aplicativo à ser enviado: *${getApk.package}*\n• Tamanho do arquivo à ser enviado por mim: *${sizeApk} MB*\n• Versão do aplicativo à ser enviada por mim: *${getApk.file.vername}*\n——\n• [📁] *Não baixou?* Clique no link abaixo e realize o processo:\n↳ ${lnDown.data}`;
};

exports.memesImages = (teks) => {
  return `${teks.titulo} (Baixado por Akame Supremacy)`;
};

exports.iFunnyVideo = (teks) => {
  return `${teks.titulo} (Baixado por Akame Supremacy)`;
};

exports.translator = (bla) => {
  return `Seu texto foi traduzido com sucesso: ${bla.result}`;
};

exports.smartphoneInfo = (smartInfo) => {
  return `• *Smartphone:* ${smartInfo.resultado.nomeCelular}\n• *Resumo:* ${smartInfo.resultado.informações}\n–\n• *Informações técnicas sobre o Smartphone:*\n\n${smartInfo.resultado.resumoExtra}`;
};

exports.clima = (wttrin) => {
  return `⚠️️ Sobre o clima de agora no local.\n–\n→ *Local:* ${wttrin.nearest_area
    .map(
      (j, i) =>
        j.areaName[i].value +
        ", " +
        j.region[i].value +
        ", " +
        j.country[i].value
    )
    .flat()
    .join(" | ")}\n→ *Temperatura atual:* ${wttrin.current_condition
    .map((j) => j.temp_C)
    .flat()
    .join(" | ")} C° - [${wttrin.current_condition
    .map((j) => j.temp_F)
    .flat()
    .join(" | ")} F°]\n→ *Sensação térmica:* ${wttrin.current_condition
    .map((j) => j.FeelsLikeC)
    .flat()
    .join(" | ")} C° = [${wttrin.current_condition
    .map((j) => j.FeelsLikeF)
    .flat()
    .join(" | ")} F°]\n→ *Umidade do Ar / Ventos:* ${wttrin.current_condition
    .map((j) => j.humidity)
    .flat()
    .join(" | ")}%\n→ *Chuva em polegadas:* ${wttrin.current_condition
    .map((j) => j.precipInches)
    .flat()
    .join(" | ")} Pol - [${wttrin.current_condition
    .map((j) => j.precipMM)
    .flat()
    .join(" | ")} MM]\n→ *Cobertura de nuvens:* ${wttrin.current_condition
    .map((j) => j.cloudcover)
    .flat()
    .join(" | ")}%\n→ *Indice de Ultra-Violeta (UV):* ${wttrin.current_condition
    .map((j) => j.uvIndex)
    .flat()
    .join(" | ")}\n→ *Nivel de visibilidade:* ${wttrin.current_condition
    .map((j) => j.visibility)
    .flat()
    .join(" | ")} KM - [${wttrin.current_condition
    .map((j) => j.visibilityMiles)
    .flat()
    .join(" | ")} M.]\n→ *Descrição do clima:* ${wttrin.current_condition
    .map((j) => j.weatherDesc)
    .flat()
    .map((j) => j.value)
    .flat()
    .join(", ")} - [ID #${wttrin.current_condition
    .map((j) => j.weatherCode)
    .flat()
    .join(" | ")}]\n→ *Direção do vento:* ${wttrin.current_condition
    .map((j) => j.winddir16Point)
    .flat()
    .join(", ")} - [${wttrin.current_condition
    .map((j) => j.winddirDegree)
    .flat()
    .join(", ")}°]\n→ *Velocidade dos ventos em KM:* ${wttrin.current_condition
    .map((j) => j.windspeedKmph)
    .flat()
    .join(", ")} KM - [${wttrin.current_condition
    .map((j) => j.windspeedMiles)
    .flat()
    .join(", ")} M.]\n→ *Pressão do ar:* ${wttrin.current_condition
    .map((j) => j.pressure)
    .flat()
    .join(" | ")} hPa - [${wttrin.current_condition
    .map((j) => j.pressureInches)
    .flat()
    .join(
      " | "
    )} mmHg]\n–\n️🏘 Algumas informações do local.\n–\n→ *Tipo de requisição:* ${wttrin.request
    .map((j) => j.type)
    .flat()
    .join(" | ")}\n→ *Local da requisição:* ${wttrin.request
    .map((j) => j.query)
    .flat()
    .join(" | ")}\n→ *Local mais aproximado:* ${wttrin.nearest_area
    .map((j) => j.latitude)
    .flat()
    .join(" | ")} Lat. | ${wttrin.nearest_area
    .map((j) => j.longitude)
    .flat()
    .join(" | ")} Lon.\n→ *Total de Habitantes:* ${wttrin.nearest_area
    .map((j) => j.population)
    .flat()
    .join(" | ")}\n→ *Data agora no local:* ${wttrin.current_condition
    .map((j) => j.localObsDateTime)
    .flat()
    .join(", ")}\n→ *Tempo de observação:* ${wttrin.current_condition
    .map((j) => j.observation_time)
    .flat()
    .join(", ")}`;
};

exports.movies = (movieInfo) => {
  return `• Título: *${movieInfo.data.results[0].title}* (${movieInfo.data.results[0].original_title})\n• Data de Lançamento: *${movieInfo.data.results[0].release_date}*\n• Avaliações: *${movieInfo.data.results[0].vote_average} - (${movieInfo.data.results[0].vote_count} Votos)*\n• Popularidade do Filme (%): *${movieInfo.data.results[0].popularity.toFixed(1)}%*\n• Classificação adulta? *${movieInfo.data.results[0].adult ? "Sim." : "Não."}*\n• Linguagem Oficial do Filme: *${movieInfo.data.results[0].original_language}*\n–\n• [🎬] *Sinopse do Filme:*\n↳ ${movieInfo.data.results[0].overview}`;
};

exports.series = (serieInfo) => {
  return `• Título: *${serieInfo.data.results[0].name}* (${serieInfo.data.results[0].original_name})\n• Data de Lançamento: *${serieInfo.data.results[0].first_air_date}*\n• Avaliações: *${serieInfo.data.results[0].vote_average} - (${serieInfo.data.results[0].vote_count} Votos)*\n• Popularidade da Série (%): *${serieInfo.data.results[0].popularity.toFixed(1)}%*\n• Classificação adulta? *${serieInfo.data.results[0].adult ? "Sim." : "Não."}*\n• Linguagem Oficial da Série: *${serieInfo.data.results[0].original_language}*\n–\n• [🌟] *Sinopse da Série:*\n↳ ${serieInfo.data.results[0].overview}`;
};

exports.searchIpAdress = (ip) => {
  return `*📡 Localizar + Informações ${ip.data.type}*\n–\n• *Código IP:* ${ip.data.ip}\n• *Tipo de Endereço IP:* ${ip.data.type}\n• *Província:* ${ip.data.region} / ${ip.data.city}\n• *Latitude:* ${ip.data.latitude}\n• *Longitude:* ${ip.data.longitude}\n• *Provedor Wi-Fi:* ${ip.data.isp}\n*Continente:* ${ip.data.continent} - ${ip.data.continent_code}\n• *País:* ${ip.data.country} - *DDI:* ${ip.data.country_phone}\n• *Sigla:* ${ip.data.country_code} - *Capital:* ${ip.data.country_capital}\n• *Fuso Horário:* ${ip.data.timezone} ${ip.data.timezone_name} ${ip.data.timezone_gmt}\n• *Moeda do País:* ${ip.data.currency} - ${ip.data.currency_code}`;
};

exports.searchCep = (res) => {
  return `🏠 *Consulta CEP:*\n–\n*Número informado:* ${res.cep}\n• *Logradouro:* ${res.street}\n• *Complemento:* Não encontrado.\n• *Código do DDD:* ${res.ddd}\n• *Bairro:* ${res.neighborhood}\n• *Cidade/Estado:* ${res.city} - ${res.state}\n• *Código do IBGE:* ${res.ibge}\n• *Código do Siafi:* ${res.siafi}`;
};

exports.noresult = () => {
  return `Desculpe, não consegui encontrar o que você procurava utilizando essa forma, pode tentar de outra maneira?`;
};

exports.profileInformation = (
  pushname,
  sender,
  info,
  isCargo,
  isChVip,
  putar,
  putar2,
  gostosurar,
  gostosurar2,
  nivelgador,
  nivelgado2r,
  programa,
  status,
  conselho
) => {
  return `ຊ 𝙽𝚘𝚖𝚎: *${pushname}*\nຊ 𝙽𝚞𝚖𝚎𝚛𝚘: *https://wa.me/${sender.split("@")[0]}*\nຊ 𝙲𝚊𝚛𝚐𝚘: *${isCargo}*\nຊ 𝙿𝚘𝚜𝚜𝚞í 𝚟𝚒𝚙?: *${isChVip}*\nຊ 𝙲𝚘𝚗𝚎𝚌𝚝𝚊𝚍𝚘(𝚊) 𝚎𝚖 𝚞𝚖 𝚍𝚒𝚜𝚙𝚘𝚜𝚒𝚝𝚒𝚟𝚘: ${info.key.id.length > 21 ? "*Android*" : info.key.id.substring(0, 2) == "3A" ? "*iOS*" : "*Windows/Linux*"}\nຊ 𝙱𝚒𝚘𝚐𝚛𝚊𝚏𝚒𝚊:\n*${status}*\n–\nຊ😈 𝚂𝚎𝚞 𝚗í𝚟𝚎𝚕 𝚍𝚎 𝚙𝚛𝚘𝚜𝚝𝚒𝚝𝚞𝚒çã𝚘: *${putar}${putar2}%*\nຊ😋 𝚂𝚎𝚞 𝚗í𝚟𝚎𝚕 𝚍𝚎 𝚐𝚘𝚜𝚝𝚘𝚜𝚞𝚛𝚊: *${gostosurar}${gostosurar2}%*\nຊ🐂 𝚂𝚎𝚞 𝚗í𝚟𝚎𝚕 𝚍𝚘 𝚐𝚊𝚍𝚘𝚖𝚎𝚝𝚛𝚘: *${nivelgador}${nivelgado2r}%*\nຊ🍼 𝚅𝚊𝚕𝚘𝚛 𝚍𝚘 𝚜𝚎𝚞 𝚙𝚛𝚘𝚐𝚛𝚊𝚖𝚊: *R$${programa}*\n–\n〘 𝙲𝙾𝙽𝚂𝙴𝙻𝙷𝙾 〙\n–\n• ${conselho}`;
};

exports.warningAdvertencia = (menc_os2, dfqn) => {
  return `Olá @${menc_os2.split("@")[0]} - Você foi advertido ${dfqn}/3, tome cuidado com 3 advertências, você será removido...`;
};

exports.finishAdvertencia = (menc_os2) => {
  return `Adeus usuário: @${menc_os2.split("@")[0]} - Você completou 3 advertências, fale com a administração do grupo para ter noção do que foi ocorrido.`;
};

exports.syntaxAnonymousMail = (prefix) => {
  return `*Para usar o correio elegante ou não*, pode ser uma indireta também.. 😬\n–\nVocê deve primeiramente copiar o número do seu crush ou inimigo(a), após isso, pense em uma mensagem.\n   • Exemplo: *${prefix}correio [número/msg]*\n   • Exemplo sendo usado em prática: *${prefix}correio +5565.../eu te amo*`;
};

exports.anonymousMail = (txt2) => {
  return (
    `📪 Você recebeu uma mensagem do maior correio anônimo do Brasil.\n–\n▶️ Quem te enviou? *Desconhecido*\n–\n` +
    "```" +
    txt2 +
    "```"
  );
};

exports.sucessAnonymousMail = () => {
  return `✅ O correio foi enviado para o remetente com sucesso.\n–\n• *Obs:* Ele(a) pode descobrir quem enviou. _Não me responsabilizo se você enviou mensagens desencorajadas._`;
};

exports.unbannedMessage = (blcp) => {
  return `@${blcp.split("@")[0]} foi desbanido e poderá novamente usar os comandos do bot.`;
};

exports.bannedMessage = (blcp) => {
  return `@${blcp.split("@")[0]} foi banido e não poderá mais usar os comandos do bot.`;
};

exports.ownersList = (
  NomeDoBot,
  jid_ofc,
  lid_ofc,
  jid1,
  lid1,
  jid2,
  lid2,
  jid3,
  lid3,
  jid4,
  lid4,
  jid5,
  lid5,
  jid6,
  lid6
) => {
  const formatDono = (id, jid, lid) => {
    if (jid.startsWith(".")) {
      return "";
    }

    const lidText = lid && !lid.startsWith(".") ? ` | LID: ${lid}` : "";

    return `Dono [ ${id} ] - wa.me/${jid}${lidText}\n`;
  };

  return `Olá, aqui está a lista de proprietários do bot: ${NomeDoBot}
–
*Dono Oficial:* wa.me/${jid_ofc} | LID: ${lid_ofc}
–
${formatDono(1, jid1, lid1)}
${formatDono(2, jid2, lid2)}
${formatDono(3, jid3, lid3)}
${formatDono(4, jid4, lid4)}
${formatDono(5, jid5, lid5)}
${formatDono(6, jid6, lid6)}`.trim();
};

exports.statusBot = (
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
  isSimi2,
  isAutofigu,
  isAutorepo,
  isModobn,
  isModoAluguel
) => {
  return `Status de funcionalidades ativaveis para proteger o grupo / se divertir com seus participantes.\nAs funcionalidades como *Anti Privado - Anti Ligação - Modo Aluguel*, são ativações que somente o dono, pode executar, _então caso esteja ativa você não poderá executar comandos no privado ou fazer ligações ao número do bot._\n–\n➱ Anti Ligação: ${isAnticall ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti PV Block: ${isAntiPv ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti PV (2) - Sem bloqueio de usuário(s): ${isAntiPv2 ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti PV (3) - Não responde ninguém no privado: ${isAntiPv3 ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Imagem: ${isAntiImg ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Vídeo: ${isAntiVid ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Áudio: ${isAntiAudio ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Sticker: ${isAntiSticker ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Documento: ${Antidoc ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Contato ${isAntiCtt ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Localização: ${Antiloc ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Link Grupo: ${isAntilinkgp ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Link Hard: ${isAntiLinkHard ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Link Easy: ${isAntiLinkEasy ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Fake: ${isAntifake ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Notas: ${isAntiNotas ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Catalogo: ${isAnticatalogo ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Palavrão: ${isPalavrao ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Limite Caracteres: ${isAntiFlood ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Bem Vindo 1: ${isWelkom ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Bem Vindo 2: ${isWelkom2 ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Simi 1: ${isSimi ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Simi 2: ${isSimi2 ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Auto Sticker: ${isAutofigu ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Auto Resposta: ${isAutorepo ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Modo Brincadeira: ${isModobn ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Modo Aluguel: ${isModoAluguel ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti DDD: ${isAntiDDD ? "✓ - Função ativa." : "✕ - Desativado."}`;
};

exports.errorUploadImage = () => {
  return `Ocorreu algum erro, desculpa! O limite do tamanho de vídeo que gero o link, é até 30 segundos.`;
};

exports.noArgsSearch = () => {
  return `Como deseja realizar uma pesquisa sem conter nenhum argumento? `;
};

exports.syntaxLogos = () => {
  return `Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`;
};

exports.playmixError = (n) => {
  return `Desculpe, ocorreu um erro ao enviar o resultado do ${n}° áudio..`;
};

exports.quoteCurrencies = (response) => {
  return `*[COTAÇÃO]* - Os dados informados são atualizados 24h por dia: 🗣💰\n–\n• Moeda: *${response.name}*\n• Valor da moeda mais alto em 24 horas: *R$ ${Number(reponse.high).toFixed(2)}*\n• Valor da moeda mais baixo em 24 horas: *R$ ${Number(repose.low).toFixed(2)}*\n• Valor da moeda atualizado agora no momento: *R$ ${Number(resposta.bid).toFixed(2)}*`;
};

exports.syntaxWebSticker = (prefix) => {
  return `🤖 *Como usar o comando 'figuweb'?*\n• *Função:* Criar uma figurinha com texto personalizado e fundo colorido.\n——\n• *Sintaxe do Comando:*\n\t- ${prefix}figuweb [texto]/[número da cor]\n• *Escolhendo a Cor de Fundo:*\n\t- Você pode escolher entre 4 cores diferentes para o fundo da sua figurinha. Basta adicionar o número correspondente à cor desejada após o texto, separado por uma barra (/).\n—\n• *Numerações das cores dos fundos da figurinha de texto:*\n\t- 1. Preto (Padrão), 2. Branco, 3. Vermelho, 4. Azul\n—\n• *Exemplos de usos:*\n \t- ${prefix}figuweb Olá, como vai?/1 (Fundo na cor Preto)\n\t- ${prefix}figuweb Bom dia!/2 (Fundo na cor Branco)\n\t- ${prefix}figuweb Boa tarde!/3 (Fundo na cor Vermelho)\n\t- ${prefix}figuweb Boa noite!/4 (Fundo na cor Azul)\n—\n• Se você não especificar uma cor, o fundo padrão (Preto) será usado.`;
};

exports.groupInvitation = (sender, cnvt, prefix) => {
  return `*[SOLICITAÇÃO]* - Foi enviado um convite para o bot entrar em um grupo.\n–\n⚙️ *Informações:*\n      • Número: *wa.me/${sender.split("@")[0]}*\n      • Link: *${cnvt}*\n–\n📑 *Como aceitar ou recusar o pedido?*\n      • Para aceitar o pedido é nescessario você usar o comando: ${prefix}entrar e o link do grupo do(a) solicitante.\n          Ex: *${prefix}entrar ${cnvt}*\n      • *Recusar o pedido é fácil!* Mas lembrando ele só serve para notificar o usuário que o pedido foi recusado.\n          Ex: *${prefix}recusar ${sender.split("@")[0]}*`;
};

exports.thinkingPrefix = (pushname, prefix) => {
  return `Olá ${pushname}, aqui está meu prefixo para uso dos meus comandos: ${prefix}`;
};

exports.chamandoBot = (pushname, tempo) => {
  const response = [
    `Olá ${pushname}, em que posso ajudar?`,
    `Olá meu amiguinho(a), tudo bem?`,
    `${tempo} ${pushname}, em que posso ajudar você?`,
    `Por qual motivo você me chamas? 🤔💭`,
  ];
  buffer = response[Math.floor(Math.random() * response.length)];
  return buffer;
};

exports.removeUserAntiPlvr = () => {
  return `*「 REMOVIDO(A) POR UTILIZAR UMA PALAVRA PROIBIDA 」*\nVocê será banido do grupo, na proxima veja as regras ao digitar qualquer palavra!`;
};

exports.permissionDenied_rUser = () => {
  return `Infelizmente, não sou um administrador, entt não posso te banir!`;
};

exports.antisRandomMessage = () => {
  return `Uma dessas opções estão ativada, mas por você ser adm, não será removido(a) _(ANTI CONTATO - ANTI CATALOGO - ANTI LOCALIZAÇÃO)_`;
};

exports.charactersAnti = () => {
  return `Muitos caracteres enviados, isto é contra as normas do grupo, por precaução, eu irei remover.`;
};

exports.markingAllMember = () => {
  return `*O participante foi removido do grupo* - Motivo: Membro comum com mensagem de marcação de todos do grupo, por conta disso irei remover do grupo, qualquer coisa entre em contato com um administrador...`;
};

exports.absenceRecordOwner = (NickDono, tabelin) => {
  return `Olá, o meu proprietário "${NickDono}" se encontra ausente no momento.\n↺Desde do Horário: ${tabelin.Ausente_Desde}\n–\n☇ Mensagem de Ausência: ${tabelin.Motivo_Da_Ausência}`;
};

exports.absenceRecordAdmin = (blak) => {
  return `*Registro de Ausência* - O adminstrador "@${blak.id.split("@")[0]}" se encontra *ausente* nesse momento.\n–\n☇ Mensagem: ${blak.msg}`;
};

exports.floodCommands = () => {
  return `Espere *5s* para usar outro comando ou executar o mesmo...`;
};

exports.timeRequired = () => {
  return `Não é possível realizar download de áudios ou vídeos acima de *20 minutos*.`;
};

exports.error = () => {
  return `Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`;
};

exports.messageProhibitedDetAdmin = () => {
  return `Mensagem proibida detectada, porém é admin logo a punição será anulada.`;
};

exports.messageProhibitedDetUser = () => {
  return `Mensagem proibida detectada, banindo o infrator...`;
};

exports.antiCalls = () => {
  return `Olá amigo, o anti ligar está ativo no momento, ou seja, estou recebendo as ordens de bloquear aqueles que efetuarem ligações para mim.`;
};

exports.helpGroupSettings = (prefix, sender) => {
  return `🤠 Olá administrador(a) *@${sender.split("@")[0]}*! Tudo bem?\n- Seja bem vindo(a), ao menu de ajuda do comando *'grupo'*:\n–\n1. _${prefix}grupo_ *-open* _→_ Permite o envio das mensagens por todos os participantes do grupo.\n\n2. _${prefix}grupo_ *-close* _→_ Permite o envio de mensagens apenas somente para administradores do grupo.\n\n3. _${prefix}grupo_ *-livre* _→_ Permite a todos os integrantes que editem os dados.\n\n4. _${prefix}grupo_ *-private* _→_ Só irá permitir que as alterações nos dados do grupo, sejam alteradas somente por administradores do mesmo.`;
};

exports.helpPhotoPrivacy = (prefix, sender) => {
  return `🤪 Olá proprietário(a) *@${sender.split("@")[0]}*! Tudo bem?\n- Seja bem vindo(a), ao menu de ajuda do comando *'wprivacyph'*:\n–\n1. _${prefix}wprivacyph_ *-cntt* _→_ Permite somente que os contatos salvos no dispositivo, vejam a foto de perfil.\n\n2. _${prefix}wprivacyph_ *-all* _→_ Permite que todos vejam a foto de perfil do bot.\n\n3. _${prefix}wprivacyph_ *-noall* _→_ Ninguém irá ver a foto de perfil colocada no bot, ou seja, até o proprietário está restrito(oculto) de ver.\n–\n📍 *Função:* O comando tem a função de alterar a privacidade da foto de perfil, ou seja, você tem como alterar diretamente do bot, sem a precisão abrir o numero do bot e mexer nas configurações.`;
};

exports.helpGroupPrivacy = (prefix, sender) => {
  return `🤪 Olá proprietário(a) *@${sender.split("@")[0]}*! Tudo bem?\n- Seja bem vindo(a), ao menu de ajuda do comando *'wprivacygp'*:\n–\n1. _${prefix}wprivacygp_ *-cntt* _→_ Permite somente que os contatos salvos no dispositivo, adicionem em grupo.\n\n2. _${prefix}wprivacygp_ *-all* _→_ Permite que todos os contatos adicionem no grupo, sem nenhuma interferência.\n\n3. _${prefix}wprivacygp_ *-noall* _→_ Ninguém conseguirá adicionar o bot em grupos, até o(a) dono(a) está restrito.\n–\n📍 *Função:* O comando tem a função de alterar a privacidade de todos os usuários adicionar o contato da bot em grupos, ou seja, você tem como alterar diretamente do bot, sem a precisão abrir o numero do bot e mexer nas configurações do número.`;
};

exports.errorResponseSimi = () => {
  response = [
    "Eu não entendo tudo senhor(a), sou uma simples simi! Me explique...",
    "Eu sei, eu sei! 👀 Não querendo abusar, o que é isso? Me ensina...",
    "Não me xinga amor! 😭 Eu ainda tenho muito à aprender...",
    "*An, oxe?* 🤷🏻‍♀ O que é isso? Poderia me explicar por favor humano(a)?",
    "Eu sou um(a) bot! 🤖 Mas eu não sei de tudo não! Me explica por favor?",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.GshowGE = (dataResult) => {
  return dataResult.resultado
    .map(
      (info, index) =>
        `${index + 1}. *${info.titulo || "Manchete sem título."}* - (${info.horarioPostagem || "Há X horas."})\n• ${info.trechoManchete || "Manchete sem descrição."}`
    )
    .join("\n–\n");
};

exports.helpNoticesG = (sender, prefix) => {
  return `😸 Olá @${sender.split("@")[0]}, seja bem-vindo ao menu de ajuda e tutoriais do comando: *'gamenews'* | *'gamesnews'*\n–\n# O comando possuí 11 argumentações de uso, cada uma tem um filtro de notícia. Lembrando, este comando é somente para notícias de jogos online! Para ver notícias de Time, use: _${prefix}esportenews_.\n–\n*01.* Call of Duty: ${prefix}gamenews -cod\n*02.* Counter-Strike: ${prefix}gamenews -csgo\n*03.* FIFA 2024: ${prefix}gamenews -fifa\n*04.* Fortnite: ${prefix}gamenews -fortnite\n*05.* GameXP: ${prefix}gamenews -gamexp\n*06.* PES 2024: ${prefix}gamenews -pes\n*07.* League of Legends: ${prefix}gamenews -lol\n*08.* Pokemon: ${prefix}gamenews -pokemon\n*09.* Rainbow 6: ${prefix}gamenews -r6\n*10.* Valorant: ${prefix}gamenews -valorant\n*11.* Pokemon TCG: ${prefix}gamenews -tcg`;
};

exports.helpNoticesEsporte = (sender, prefix) => {
  return `🌟 Olá @${sender.split("@")[0]}, seja bem-vindo ao menu de ajuda e tutoriais do comando: *'esporte_noticias'* | *'esportenews'*\n–\n# O comando possuí 18 argumentações de uso, cada uma tem um filtro de notícia. Lembrando, este comando é somente para notícias de esportes! Para ver notícias de jogos online, use: _${prefix}gamenews_.\n–\n*01.* Todas as categorias agrupadas à um só parâmetro: ${prefix}esportenews -all\n*02.* Futebol: ${prefix}esportenews -futebol\n*03.* Futsal: ${prefix}esportenews -futsal\n*04.* Skate: ${prefix}esportenews -skate\n*05.* Surfe: ${prefix}esportenews -surf\n*06.* Basquete: ${prefix}esportenews -basquete\n*07.* Vôlei: ${prefix}esportenews -volei\n*08.* Tênis: ${prefix}esportenews -tenis\n*09.* Atletismo: ${prefix}esportenews -atletismo\n*10.* Natação: ${prefix}esportenews -natacao\n*11.* Ciclismo: ${prefix}esportenews -ciclismo\n*12.* Boxe: ${prefix}esportenews -boxe\n*13.* Beisebol: ${prefix}esportenews -beisebol\n*14.* Futebol EUA: ${prefix}esportenews -futebol-eua\n*15.* Judô: ${prefix}esportenews -judo\n*16.* Ginástica: ${prefix}esportenews -ginastica\n*17.* Golfe: ${prefix}esportenews -golfe\n*18.* Fórmula 1: ${prefix}esportenews -f1`;
};
