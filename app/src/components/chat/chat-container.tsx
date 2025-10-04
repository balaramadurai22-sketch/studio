
"use client";
import * as React from "react";
import ChatHeader from "./chat-header";
import ChatMessages from "./chat-messages";
import ChatInput from "./chat-input";
import { type Chat } from "@/lib/data";

type ChatContainerProps = {
  chat: Chat | null;
  onSend: (text: string) => void;
  chats: Chat[];
  activeChatId: string | null;
  onNewChat: () => void;
  onSwitchChat: (id: string) => void;
  onDeleteChat: (id: string) => void;
};

export default function ChatContainer({ 
    chat, 
    onSend,
    chats,
    activeChatId,
    onNewChat,
    onSwitchChat,
    onDeleteChat
}: ChatContainerProps) {
  const [isStreaming, setIsStreaming] = React.useState(false);

  const handleSend = async (text: string) => {
    setIsStreaming(true);
    await onSend(text);
    setIsStreaming(false);
  };
  
  const handleClearChat = () => {
    // This will now be handled by the parent
  };

  const isLastMessageStreaming = chat?.messages[chat.messages.length - 1]?.stream !== undefined;

  return (
    <div className="flex flex-1 flex-col bg-background">
      <ChatHeader 
        onNewChat={handleClearChat} 
        title={chat?.title}
        chats={chats}
        activeChatId={activeChatId}
        onSwitchChat={onSwitchChat}
        onDeleteChat={onDeleteChat}
       />
      <ChatMessages messages={chat?.messages || []} isStreaming={isStreaming && isLastMessageStreaming} />
      <ChatInput onSend={handleSend} isStreaming={isStreaming} />
    </div>
  );
}
