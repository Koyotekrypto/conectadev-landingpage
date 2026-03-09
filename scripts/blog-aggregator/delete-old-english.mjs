/**
 * Remove do Sanity os blogPost de fontes em inglês (TechCrunch, dev.to, etc.)
 * para que o blog exiba apenas posts em português.
 * Executar uma vez: node scripts/blog-aggregator/delete-old-english.mjs
 */
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { createClient } from '@sanity/client';

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, '../../.env') });

const OLD_ENGLISH_SOURCES = ['TechCrunch', 'dev.to', 'GitHub Blog', 'Stack Overflow Blog'];

async function main() {
  const projectId = process.env.SANITY_PROJECT_ID || 's2g38qvd';
  const dataset = process.env.SANITY_DATASET || 'production';
  const token = process.env.SANITY_API_TOKEN;
  if (!token) {
    console.error('Defina SANITY_API_TOKEN no .env');
    process.exit(1);
  }
  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-03-01',
    token,
    useCdn: false,
  });
  const ids = await client.fetch(
    `*[_type == "blogPost" && sourceName in $sources]._id`,
    { sources: OLD_ENGLISH_SOURCES }
  );
  if (ids.length === 0) {
    console.log('Nenhum post antigo em inglês encontrado.');
    return;
  }
  const tx = client.transaction();
  ids.forEach((id) => tx.delete(id));
  await tx.commit();
  console.log('Removidos', ids.length, 'posts em inglês (fontes:', OLD_ENGLISH_SOURCES.join(', '), ').');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
