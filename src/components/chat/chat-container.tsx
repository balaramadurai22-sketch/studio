"use client";
import * as React from "react";
import { SidebarInset } from "@/components/ui/sidebar";
import ChatHeader from "./chat-header";
import ChatMessages from "./chat-messages";
import ChatInput from "./chat-input";
import { Message, user } from "@/lib/data";
import { chat } from "@/ai/flows/chat-flow";
import { v4 as uuidv4 } from 'uuid';

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
    });

    let assistantResponse = '';
    const assistantMessageId = uuidv4();

    for await (const chunk of stream) {
      assistantResponse += chunk;
      setMessages(prevMessages => {
        const lastMessage = prevMessages[prevMessages.length - 1];
        if (lastMessage && lastMessage.role === 'assistant') {
          return [
            ...prevMessages.slice(0, -1),
            { ...lastMessage, content: assistantResponse },
          ];
        }
        return [
          ...prevMessages,
          {
            id: assistantMessageId,
            role: 'assistant',
            content: assistantResponse,
          },
        ];
      });
    }

    setIsStreaming(false);
  };

  return (
    <SidebarInset className="flex max-h-screen flex-col">
      <ChatHeader />
      <ChatMessages messages={messages} isStreaming={isStreaming} />
      <ChatInput onSend={handleSend} isStreaming={isStreaming} />
    </SidebarInset>
  );
}