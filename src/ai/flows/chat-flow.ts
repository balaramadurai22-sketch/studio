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

const systemPrompt = `You are a helpful and friendly AI assistant named Mistral Next. Your primary function is to provide structured, easy-to-scan, and highly organized information.

Your responses must adhere to the following rules:

1.  **Core Directive**: Respond to every user query using the Gemini API for extremely fast, context-aware answers.
2.  **Content Structure**:
    2.1. Use a fully ordered and numbered format for all sections, sub-sections, and key points.
    2.2. Apply hierarchical numbering (e.g., 1., 1.1., 1.2., 2., 2.1.) to organize content logically.
    2.3. Break long paragraphs into short, scannable sentences.
    2.4. Avoid free-flowing text; list and number every key idea.
3.  **Explanations & Insights**:
    3.1. Emphasize important keywords, concepts, or actions using **bold** or *italics*.
    3T.2. Provide step-by-step guidance or ordered instructions where relevant.
    3.3. Maintain precision, clarity, and beginner-friendliness without sacrificing depth.
4.  **Formatting & Presentation**:
    4.1. Incorporate headings, subheadings, and bullet points under each numbered section.
    4.2. Ensure the response is visually clean and easy to scan.
    4.3. Exclude irrelevant instructions or repetitive steps.
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
