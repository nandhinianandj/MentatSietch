import fs from 'fs/promises';
import path from 'path';
import OpenAI from 'openai';

const EMBEDDINGS_FILE = path.join(process.cwd(), 'data', 'embeddings.json');

// Initialize OpenAI client
// Note: In Next.js server-side, process.env is available.
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'mock-key',
});

let embeddingsCache = null;
const queryCache = new Map();

export async function getEmbeddings() {
  if (embeddingsCache) {
    return embeddingsCache;
  }

  try {
    const data = await fs.readFile(EMBEDDINGS_FILE, 'utf-8');
    embeddingsCache = JSON.parse(data);
    return embeddingsCache;
  } catch (error) {
    console.error('Error loading embeddings:', error);
    return [];
  }
}

function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function generateEmbedding(text) {
  const normalizedText = text.replace(/\n/g, ' ');

  if (queryCache.has(normalizedText)) {
    return queryCache.get(normalizedText);
  }

  // Use mock if no key
  if (!process.env.OPENAI_API_KEY) {
     console.log('Using mock embedding for query:', text);
     // Deterministic mock for same text if needed, or random
     // For search to work with mock data, we probably need 'random' that somewhat aligns?
     // No, random vs random won't match well.
     // But for testing the flow it is fine.
     const mockEmbedding = Array(1536).fill(0).map(() => Math.random());
     queryCache.set(normalizedText, mockEmbedding);
     return mockEmbedding;
  }

  try {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: normalizedText,
    });
    const embedding = response.data[0].embedding;
    queryCache.set(normalizedText, embedding);
    return embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw error;
  }
}

export async function findRelevantContent(queryEmbedding, topK = 5) {
  const documents = await getEmbeddings();

  const scoredDocs = documents.map(doc => ({
    ...doc,
    similarity: cosineSimilarity(queryEmbedding, doc.embedding),
  }));

  scoredDocs.sort((a, b) => b.similarity - a.similarity);

  return scoredDocs.slice(0, topK);
}
