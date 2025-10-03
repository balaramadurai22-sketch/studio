import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {dev} from 'node:console';

export const ai = genkit({
  plugins: [googleAI({apiKey: process.env.GEMINI_API_KEY})],
  model: 'googleai/gemini-2.5-flash',
});
