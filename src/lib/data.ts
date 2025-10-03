
import type { LucideIcon } from "lucide-react";
import { PlaceHolderImages } from "./placeholder-images";

const userAvatar = PlaceHolderImages.find((img) => img.id === "user-avatar");

export const user = {
  name: "Alex Duran",
  avatar: userAvatar?.imageUrl || "https://picsum.photos/seed/user/100/100",
};

export type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  avatar?: string;
  stream?: ReadableStream<string>;
};

export type Chat = {
  id: string;
  title: string;
  messages: Message[];
};

export const chats: Chat[] = [
  { 
    id: "1", 
    title: "Project Plan for Q3", 
    messages: [
      { id: "1-1", role: "user", content: "What's the plan for Q3?" },
      { id: "1-2", role: "assistant", content: "The plan is to launch the new feature." },
    ]
  },
  { 
    id: "2", 
    title: "React component brainstorming",
    messages: [
      { id: "2-1", role: "user", content: "Let's brainstorm some React components." },
      { id: "2-2", role: "assistant", content: "Sure, how about a calendar component?" },
    ]
  },
];
