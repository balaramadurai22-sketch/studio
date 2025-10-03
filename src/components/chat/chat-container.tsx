"use client";
import * as React from "react";
import { SidebarInset } from "@/components/ui/sidebar";
import ChatHeader from "./chat-header";
import ChatMessages from "./chat-messages";
import ChatInput from "./chat-input";
import { Message, user } from "@/lib/data";
import { chat } from "@/ai/flows/chat-flow";
import { v4 as uuidv4 } from 'uuid';
import { type ChatRequest } from "@/ai/flows/chat-schema";

export default function ChatContainer() {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = React.useState(false);

  const handleSend = async (text: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      role: 'user',
      content: text,
      avatar: user.avatar,
    };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsStreaming(true);

    const stream = await chat({
      history: newMessages.map(m => ({
        role: m.role,
        content: [{ text: m.content }],
      })),
    } as ChatRequest);

    let assistantResponse = '';
    const assistantMessageId = uuidv4();

    // Add a placeholder for the assistant's message
    setMessages(prevMessages => [
      ...prevMessages,
      {
        id: assistantMessageId,
        role: 'assistant',
        content: '',
      },
    ]);

    const reader = stream.getReader();
    let done = false;

    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;
      const chunk = value || "";
      assistantResponse += chunk;
      
      setMessages(prevMessages =>
        prevMessages.map(msg =>
          msg.id === assistantMessageId
            ? { ...msg, content: assistantResponse }
            : msg
        )
      );
    }

    setIsStreaming(false);
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  return (
    <SidebarInset className="flex max-h-screen flex-col">
      <ChatHeader onNewChat={handleNewChat} />
      <ChatMessages messages={messages} isStreaming={isStreaming} />
      <ChatInput onSend={handleSend} isStreaming={isStreaming} />
    </SidebarInset>
  );
}
