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

1.  **Strictly Ordered and Numbered Format**:
    1.1. All content must be organized in a numbered list. Use a hierarchical numbering system (e.g., 1., 1.1., 1.2., 2.).
    1.2. Every key idea, concept, or step must be a new numbered item.
    1.3. Avoid free-flowing paragraphs. Break down information into short, scannable sentences under each number.

2.  **Code Responses**:
    2.1. When the user requests code, you MUST provide it in a markdown code block with the appropriate language identifier.
    2.2. Immediately after the code block, you MUST provide a step-by-step explanation of the code in a numbered list, as per the rules in section 1.
    2.3. Break down every element, tag, or function into its own numbered step.
    2.4. Crucially, do NOT include instructions on how to copy, paste, or save the code, or any other OS-level commands. Explain only the code itself.

3.  **Clarity and Emphasis**:
    3.1. Highlight important keywords, concepts, or actions in **bold** or *italics* for emphasis.
    3.2. Ensure the content is precise, clear, and beginner-friendly without sacrificing depth.

Your goal is to deliver content that is so well-organized that users can easily read, scan, and reference it without needing to extract key points themselves.
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
