// Backend seguro do Bola na Rede: mantém a chave GNews fora do navegador.
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = Number(process.env.PORT || 3000);
const API_KEY = process.env.GNEWS_API_KEY;
const cache = new Map();
const CACHE_TTL_MS = 10 * 60 * 1000;

app.use(express.static(path.join(__dirname)));

app.get('/api/news', async (req, res) => {
  if (!API_KEY) {
    return res.status(503).json({
      error: 'A chave da GNews ainda não foi configurada. Crie o arquivo .env a partir de .env.example e informe GNEWS_API_KEY.'
    });
  }

  const team = String(req.query.team || 'futebol').trim().slice(0, 80);
  const query = team.toLowerCase() === 'futebol' ? 'futebol OR soccer' : `"${team}" AND (futebol OR futebolista OR soccer)`;
  const cacheKey = query.toLowerCase();
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.savedAt < CACHE_TTL_MS) {
    return res.json({ ...cached.data, cached: true });
  }

  try {
    const params = new URLSearchParams({
      q: query,
      lang: 'pt',
      max: '10',
      sortby: 'publishedAt',
      apikey: API_KEY
    });
    const apiResponse = await fetch(`https://gnews.io/api/v4/search?${params.toString()}`);
    const payload = await apiResponse.json().catch(() => ({}));

    if (!apiResponse.ok) {
      const message = apiResponse.status === 403
        ? 'A GNews recusou a consulta. Confira o limite diário e o plano da sua chave.'
        : apiResponse.status === 401
          ? 'Chave GNews inválida. Confira o valor de GNEWS_API_KEY no arquivo .env.'
          : `A GNews retornou um erro (${apiResponse.status}).`;
      return res.status(apiResponse.status === 429 ? 429 : 502).json({ error: message });
    }

    const articles = (payload.articles || []).map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.image,
      publishedAt: article.publishedAt,
      source: article.source?.name || 'GNews'
    }));
    const result = { totalArticles: payload.totalArticles || articles.length, articles };
    cache.set(cacheKey, { savedAt: Date.now(), data: result });
    return res.json(result);
  } catch (error) {
    console.error('Erro ao consultar GNews:', error.message);
    return res.status(502).json({ error: 'Não foi possível conectar à GNews agora. Tente novamente em alguns minutos.' });
  }
});

app.listen(PORT, () => {
  console.log(`Bola na Rede disponível em http://localhost:${PORT}`);
});
