/**
 * @fileOverview Schemas for the chat flow.
 */
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
