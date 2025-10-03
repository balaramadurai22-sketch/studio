
"use client";
import * as React from "react";
import ChatHeader from "./chat-header";
import ChatMessages from "./chat-messages";
import ChatInput from "./chat-input";
import { type Chat } from "@/lib/data";

type ChatContainerProps = {
  chat: Chat | null;
  onSend: (text: string) => void;
};

export default function ChatContainer({ chat, onSend }: ChatContainerProps) {
  const [isStreaming, setIsStreaming] = React.useState(false);

  const handleSend = async (text: string) => {
    setIsStreaming(true);
    await onSend(text);
    setIsStreaming(false);
  };
  
  const handleNewChat = () => {
    // This will now be handled by the parent
  };

  return (
    <div className="flex flex-1 flex-col">
      <ChatHeader onNewChat={handleNewChat} title={chat?.title} />
      <ChatMessages messages={chat?.messages || []} isStreaming={isStreaming} />
      <ChatInput onSend={handleSend} isStreaming={isStreaming} />
    </div>
  );
}
