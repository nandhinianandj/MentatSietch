import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { generateEmbedding, findRelevantContent } from '../../../lib/rag';

export async function POST(req) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1];
  const userQuery = lastMessage.content;

  try {
    // 1. Generate embedding for user query
    const queryEmbedding = await generateEmbedding(userQuery);

    // 2. Retrieve relevant content
    const relevantContent = await findRelevantContent(queryEmbedding);

    // 3. Construct context string
    const context = relevantContent
      .map((doc) => `Source: ${doc.source}\nContent: ${doc.content}`)
      .join('\n\n');

    // 4. Create system message with context
    const systemMessage = `You are a helpful assistant for Mentat Commons.
    Use the following pieces of context to answer the user's question.
    If you don't know the answer, just say that you don't know, don't try to make up an answer.

    Context:
    ${context}`;

    // 5. Stream response
    const result = await streamText({
      model: openai('gpt-3.5-turbo'),
      messages: [
        { role: 'system', content: systemMessage },
        ...messages,
      ],
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Error in chat route:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
