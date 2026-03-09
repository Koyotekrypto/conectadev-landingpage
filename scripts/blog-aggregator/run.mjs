/**
 * Blog aggregator: fetch RSS feeds → filter by relevance → create blogPost in Sanity.
 * Run: node scripts/blog-aggregator/run.mjs  (ou: npm run blog:aggregate)
 * Lê SANITY_API_TOKEN do .env na raiz do projeto, ou das variáveis de ambiente.
 */
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import Parser from 'rss-parser';
import { createClient } from '@sanity/client';

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, '../../.env') });

const MAX_POSTS_PER_RUN = 45;
const DAYS_WINDOW = 7;
const KEYWORDS = [
  'software', 'development', 'dev', 'tech', 'AI', 'machine learning', 'engineer',
  'SaaS', 'cloud', 'DevOps', 'startup', 'code', 'programming', 'API', 'dados',
  'automação', 'inovação', 'tendências', 'arquitetura', 'segurança'
];

// Fontes em português, de confiança (Brasil)
const FEEDS = [
  { url: 'https://tecnoblog.net/feed/', name: 'Tecnoblog' },
  { url: 'https://feeds.feedburner.com/canaltechbr', name: 'Canaltech' },
  { url: 'https://www.inovacaotecnologica.com.br/boletim/rss.xml', name: 'Inovação Tecnológica' },
  { url: 'https://feeds.feedburner.com/oficinadanet_rss', name: 'Oficina da Net' },
  { url: 'https://www.tudocelular.com/feed/', name: 'Tudo Celular' },
  { url: 'https://butecotecnologico.com.br/index.xml', name: 'Buteco Tecnológico' },
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
}

function isRelevant(title = '', description = '') {
  const text = `${(title || '').toLowerCase()} ${(description || '').toLowerCase()}`;
  return KEYWORDS.some(kw => text.includes(kw.toLowerCase()));
}

function parseDate(pubDate) {
  if (!pubDate) return new Date();
  const d = new Date(pubDate);
  return isNaN(d.getTime()) ? new Date() : d;
}

/** Extrai URL da imagem do item RSS (media:content, media:thumbnail, enclosure, primeiro img) */
function getImageUrl(item) {
  const mediaContent = item['media:content'] ?? item.mediaContent;
  if (mediaContent) {
    const arr = Array.isArray(mediaContent) ? mediaContent : [mediaContent];
    const url = arr.find((x) => x?.$?.url)?.$?.url ?? arr[0]?.$?.url ?? arr[0]?.url;
    if (url && /\.(jpe?g|png|gif|webp)/i.test(url)) return url;
  }
  const mediaThumb = item['media:thumbnail'] ?? item.mediaThumbnail;
  if (mediaThumb) {
    const arr = Array.isArray(mediaThumb) ? mediaThumb : [mediaThumb];
    const url = arr[0]?.$?.url ?? arr[0]?.url;
    if (url) return url;
  }
  if (item.enclosure?.url && /image/i.test(item.enclosure.type || '')) return item.enclosure.url;
  const html = item.content || item['content:encoded'] || item.summary || '';
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : '';
}

const LIBRE_TRANSLATE_URL = process.env.LIBRE_TRANSLATE_URL || 'https://libretranslate.com/translate';

/** Indica se o texto parece estar em inglês (heurística simples). */
function looksLikeEnglish(text) {
  if (!text || text.length < 20) return false;
  const t = text.toLowerCase();
  const en = /\b(the|and|to|for|with|this|that|are|was|have|has|will|can|from)\b/.test(t);
  const pt = /\b(de|em|para|com|que|uma|por|como|mais|sobre)\b/.test(t);
  return en && !pt;
}

/** Traduz texto para português via LibreTranslate (API gratuita). Em falha, retorna o original. */
async function translateToPortuguese(text) {
  if (!text || typeof text !== 'string' || text.length > 5000) return text;
  try {
    const res = await fetch(LIBRE_TRANSLATE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text.slice(0, 5000),
        source: 'auto',
        target: 'pt',
        format: 'text',
      }),
    });
    if (!res.ok) return text;
    const data = await res.json();
    if (data.translatedText) return data.translatedText;
    return text;
  } catch (e) {
    return text;
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const projectId = process.env.SANITY_PROJECT_ID || 's2g38qvd';
  const dataset = process.env.SANITY_DATASET || 'production';
  const token = process.env.SANITY_API_TOKEN;

  if (!token) {
    console.error('Missing SANITY_API_TOKEN. Set it to a token with write access.');
    process.exit(1);
  }

  const sanity = createClient({
    projectId,
    dataset,
    apiVersion: '2024-03-01',
    token,
    useCdn: false,
  });

  const parser = new Parser({
    customFields: {
      item: [
        ['media:content', 'media:content'],
        ['media:thumbnail', 'media:thumbnail'],
      ],
    },
  });
  const seen = new Set();
  const toCreate = [];
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - DAYS_WINDOW);
  cutoff.setHours(0, 0, 0, 0);

  for (const feed of FEEDS) {
    try {
      const parsed = await parser.parseURL(feed.url);
      const items = parsed.items || [];
      for (const item of items) {
        if (toCreate.length >= MAX_POSTS_PER_RUN) break;
        const link = item.link || item.guid;
        if (!link || seen.has(link)) continue;
        const date = parseDate(item.pubDate || item.isoDate);
        if (date < cutoff) continue;
        let title = (item.title || '').trim();
        let description = (item.contentSnippet || item.content || item.summary || '').slice(0, 300);
        if (!title || !isRelevant(title, description)) continue;
        seen.add(link);
        const imageUrl = getImageUrl(item) || undefined;
        try {
          if (looksLikeEnglish(title)) {
            title = await translateToPortuguese(title);
            await sleep(500);
          }
          if (looksLikeEnglish(description)) {
            description = await translateToPortuguese(description || title);
            await sleep(500);
          }
        } catch (_) {}
        toCreate.push({
          _type: 'blogPost',
          title,
          slug: { _type: 'slug', current: slugify(title) + '-' + Date.now().toString(36) },
          description: description || title,
          date: date.toISOString(),
          category: 'Tendências',
          author: feed.name,
          sourceUrl: link,
          sourceName: feed.name,
          imageUrl: imageUrl || undefined,
          isAggregated: true,
        });
      }
    } catch (err) {
      console.warn('Feed error', feed.url, err.message);
    }
  }

  for (const doc of toCreate) {
    try {
      await sanity.create(doc);
      console.log('Created:', doc.title);
    } catch (e) {
      console.warn('Create failed', doc.title, e.message);
    }
  }

  console.log('Done. Created', toCreate.length, 'posts.');
}

main();
