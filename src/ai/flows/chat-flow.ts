'use server';
/**
 * @fileOverview A chat flow that uses the Gemini API to generate responses.
 *
 * - chat - A function that handles the chat process.
 * - ChatRequest - The input type for the chat function.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ContentPartSchema = z.object({
  text: z.string().optional(),
  // You can add other content part types here, like media.
});

const RoleSchema = z.enum(['user', 'model', 'tool', 'system']);

const MessageSchema = z.object({
  role: RoleSchema,
  content: z.array(ContentPartSchema),
});

export const ChatRequestSchema = z.object({
  history: z.array(MessageSchema),
});
export type ChatRequest = z.infer<typeof ChatRequestSchema>;

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatRequestSchema,
    outputSchema: z.string(),
  },
  async (payload) => {
    const { stream } = ai.generateStream({
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


export async function chat(payload: ChatRequest): Promise<ReadableStream<string>> {
  const { stream } = ai.generateStream({
    prompt: {
        messages: payload.history,
    },
    history: payload.history,
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