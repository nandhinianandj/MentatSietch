import fs from 'fs/promises';
import path from 'path';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'mock-key',
});

const MARKDOWN_DIR = path.join(process.cwd(), 'markdowns');
const OUTPUT_FILE = path.join(process.cwd(), 'data', 'embeddings.json');

async function getMarkdownFiles() {
  const files = await fs.readdir(MARKDOWN_DIR);
  return files.filter(file => file.endsWith('.md')).map(file => path.join(MARKDOWN_DIR, file));
}

function chunkText(text, maxChars = 1000) {
  const chunks = [];
  let currentChunk = '';

  const paragraphs = text.split(/\n\s*\n/);

  for (const para of paragraphs) {
    if ((currentChunk + para).length > maxChars && currentChunk.length > 0) {
      chunks.push(currentChunk.trim());
      currentChunk = '';
    }
    currentChunk += para + '\n\n';
  }

  if (currentChunk.trim().length > 0) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}

async function generateEmbedding(text) {
  if (!process.env.OPENAI_API_KEY) {
     console.log('Using mock embedding for: ' + text.substring(0, 20) + '...');
     return Array(1536).fill(0).map(() => Math.random());
  }
  try {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: text.replace(/\n/g, ' '),
    });
    return response.data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    return null;
  }
}

async function main() {
  console.log('Starting indexing...');

  // Ensure data dir exists
  const dataDir = path.dirname(OUTPUT_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }

  const files = await getMarkdownFiles();
  const documents = [];

  for (const file of files) {
    console.log(`Processing ${path.basename(file)}...`);
    const content = await fs.readFile(file, 'utf-8');
    const chunks = chunkText(content);

    for (const chunk of chunks) {
      if (chunk.length < 20) continue; // Skip very small chunks

      const embedding = await generateEmbedding(chunk);
      if (embedding) {
        let normSq = 0;
        for (let i = 0; i < embedding.length; i++) {
          normSq += embedding[i] * embedding[i];
        }
        documents.push({
          source: path.basename(file),
          content: chunk,
          embedding,
          norm: Math.sqrt(normSq),
        });
      }
    }
  }

  await fs.writeFile(OUTPUT_FILE, JSON.stringify(documents, null, 2));
  console.log(`Indexed ${documents.length} chunks to ${OUTPUT_FILE}`);
}

main().catch(console.error);
