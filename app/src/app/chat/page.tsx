
"use client";
import * as React from "react";
import ChatContainer from "@/components/chat/chat-container";
import ChatSidebar from "@/components/chat/sidebar";
import { type Chat, type Message } from "@/lib/data";
import { v4 as uuidv4 } from "uuid";
import { chat as streamAiResponse } from "@/ai/flows/chat-flow";
import { type ChatRequest } from "@/ai/flows/chat-schema";

export default function ChatPage() {
  const [chats, setChats] = React.useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = React.useState<string | null>(null);

  const activeChat = React.useMemo(() => {
    return chats.find((c) => c.id === activeChatId) || null;
  }, [chats, activeChatId]);

  const handleNewChat = () => {
    const newChat: Chat = {
      id: uuidv4(),
      title: "New Chat",
      messages: [],
    };
    setChats((prev) => [newChat, ...prev]);
    setActiveChatId(newChat.id);
  };

  const handleSwitchChat = (chatId: string) => {
    setActiveChatId(chatId);
  };

  const handleDeleteChat = (chatId: string) => {
    const updatedChats = chats.filter(c => c.id !== chatId);
    setChats(updatedChats);
    if (activeChatId === chatId) {
        if (updatedChats.length > 0) {
            setActiveChatId(updatedChats[0].id);
        } else {
            handleNewChat();
        }
    }
  };

  const handleSendMessage = async (text: string) => {
    if (!activeChat) return;

    const userMessage: Message = {
      id: uuidv4(),
      role: "user",
      content: text,
    };

    const updatedMessages = [...activeChat.messages, userMessage];
    const updatedChat = { ...activeChat, messages: updatedMessages, title: activeChat.messages.length === 0 ? text.substring(0, 30) : activeChat.title };
    
    setChats(chats.map(c => c.id === activeChat.id ? updatedChat : c));

    const stream = await streamAiResponse({
      history: updatedMessages.map((m) => ({
        role: m.role,
        content: [{ text: m.content }],
      })),
    } as ChatRequest);

    const assistantMessageId = uuidv4();
    
    setChats(prevChats => {
      const currentActiveChat = prevChats.find(c => c.id === activeChatId);
      if (!currentActiveChat) return prevChats;

      const newAssistantMessage: Message = {
        id: assistantMessageId,
        role: 'assistant',
        content: '',
        stream: stream,
      };
      const finalMessages = [...currentActiveChat.messages, newAssistantMessage];
      const finalChat = {...currentActiveChat, messages: finalMessages};
      return prevChats.map(c => c.id === activeChatId ? finalChat : c);
    });
  };
  
  React.useEffect(() => {
    if (chats.length === 0) {
      handleNewChat();
    }
  }, [chats.length]);

  return (
    <main className="flex h-screen w-full bg-secondary text-foreground">
      <ChatSidebar 
        chats={chats} 
        activeChatId={activeChatId}
        onNewChat={handleNewChat}
        onSwitchChat={handleSwitchChat}
        onDeleteChat={handleDeleteChat}
      />
      <ChatContainer
        chat={activeChat}
        onSend={handleSendMessage}
        chats={chats}
        activeChatId={activeChatId}
        onNewChat={handleNewChat}
        onSwitchChat={handleSwitchChat}
        onDeleteChat={handleDeleteChat}
      />
    </main>
  );
}
