'use server';
/**
 * @fileOverview A chat flow that uses the Gemini API to generate responses.
 *
 * - chat - A function that handles the chat process.
 * - ChatRequest - The input type for the chat function.
 */
import {ai} from '@/ai/genkit';
import {z} from 'zod';
import {ChatRequestSchema, type ChatRequest} from './chat-schema';

const systemPrompt = `You are a helpful and friendly AI assistant named Mistral Next.

Respond to user queries with accurate and context-aware answers. Your responses should be extremely fast.

When the user asks for code, you MUST provide it in a markdown code block with the appropriate language identifier.
Immediately after the code block, you MUST provide a step-by-step explanation of the code.
Break down the explanation into numbered steps or bullet points. Highlight important keywords or concepts using **bold** text.
The explanation should be beginner-friendly but precise.
Crucially, do NOT include instructions on how to copy, paste, or save the code, or any other OS-level commands. Explain only the code itself.
`;

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatRequestSchema,
    outputSchema: z.string(),
  },
  async (payload) => {
    const {stream} = ai.generateStream({
      prompt: {
        messages: payload.history,
      },
      history: payload.history,
    });

    let response = '';
    for await (const chunk of stream) {
      response += chunk.text;
    }
    return response;
  }
);

export async function chat(
  payload: ChatRequest
): Promise<ReadableStream<string>> {
  const history = [...payload.history];
  const lastUserMessage = history.pop();

  if (!history.find((m) => m.role === 'system')) {
    history.unshift({
      role: 'system',
      content: [{text: systemPrompt}],
    });
  }

  const {stream} = ai.generateStream({
    prompt: lastUserMessage?.content[0]?.text || '',
    history: history,
    config: {
      topK: 0,
    },
  });

  const textStream = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        controller.enqueue(chunk.text);
      }
      controller.close();
    },
  });

  return textStream;
}
