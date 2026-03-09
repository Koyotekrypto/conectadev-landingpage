/**
 * Blog aggregator: fetch RSS feeds → filter by relevance → create blogPost in Sanity.
 * Run: node scripts/blog-aggregator/run.mjs
 * Requires: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_TOKEN (write), and rss-parser (npm install rss-parser --save-dev)
 */
import Parser from 'rss-parser';
import { createClient } from '@sanity/client';

const MAX_POSTS_PER_RUN = 10;
const KEYWORDS = [
  'software', 'development', 'dev', 'tech', 'AI', 'machine learning', 'engineer',
  'SaaS', 'cloud', 'DevOps', 'startup', 'code', 'programming', 'API', 'dados',
  'automação', 'inovação', 'tendências', 'arquitetura', 'segurança'
];

const FEEDS = [
  { url: 'https://techcrunch.com/feed/', name: 'TechCrunch' },
  { url: 'https://dev.to/feed', name: 'dev.to' },
  { url: 'https://github.blog/feed/', name: 'GitHub Blog' },
  { url: 'https://stackoverflow.blog/feed/', name: 'Stack Overflow Blog' },
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

  const parser = new Parser();
  const seen = new Set();
  const toCreate = [];

  for (const feed of FEEDS) {
    try {
      const parsed = await parser.parseURL(feed.url);
      const items = parsed.items || [];
      for (const item of items) {
        if (toCreate.length >= MAX_POSTS_PER_RUN) break;
        const link = item.link || item.guid;
        if (!link || seen.has(link)) continue;
        const title = (item.title || '').trim();
        const description = (item.contentSnippet || item.content || item.summary || '').slice(0, 300);
        if (!title || !isRelevant(title, description)) continue;
        seen.add(link);
        const date = parseDate(item.pubDate || item.isoDate);
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
