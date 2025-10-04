
"use client";
import * as React from "react";
import { MessageSquare, Pin, PlusCircle, Search, Bug, Lightbulb } from "lucide-react";
import UserProfile from "./user-profile";
import { Button } from "../ui/button";
import { type Chat } from "@/lib/data";
import { Input } from "../ui/input";
import Logo from "../shared/logo";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";
import BugReportForm from "./bug-report-form";
import FeatureRequestForm from "./feature-request-form";
import { Separator } from "../ui/separator";

type ChatSidebarProps = {
  chats: Chat[];
  activeChatId: string | null;
  onNewChat: () => void;
  onSwitchChat: (chatId: string) => void;
};

export default function ChatSidebar({ chats, activeChatId, onNewChat, onSwitchChat }: ChatSidebarProps) {
  const [isBugReportOpen, setIsBugReportOpen] = React.useState(false);
  const [isFeatureRequestOpen, setIsFeatureRequestOpen] = React.useState(false);
  
  return (
    <>
      <div className="hidden h-screen w-80 flex-col border-r bg-background md:flex">
        <div className="flex h-16 items-center justify-between border-b px-4">
          <Logo />
        </div>

        <div className="p-4">
          <Button className="w-full" onClick={onNewChat}>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Chat
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <div className="space-y-4 p-4">
            <div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search chats" className="pl-9" />
              </div>
            </div>
            
            <div className="space-y-1">
              <h3 className="px-2 text-xs font-medium text-muted-foreground">
                Chat History
              </h3>
              {chats.map((chat) => (
                <Button
                  key={chat.id}
                  variant={chat.id === activeChatId ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", chat.id === activeChatId && "font-bold")}
                  onClick={() => onSwitchChat(chat.id)}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span className="truncate flex-1 text-left">{chat.title}</span>
                </Button>
              ))}
            </div>
          </div>
        </ScrollArea>
        
        <div className="border-t p-2 space-y-2">
            <Button variant="ghost" className="w-full justify-start" onClick={() => setIsBugReportOpen(true)}>
                <Bug className="mr-2 h-4 w-4" />
                Bug Report
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setIsFeatureRequestOpen(true)}>
                <Lightbulb className="mr-2 h-4 w-4" />
                Feature Request
            </Button>
          <Separator />
          <UserProfile />
        </div>
      </div>
      <BugReportForm 
        isOpen={isBugReportOpen}
        onClose={() => setIsBugReportOpen(false)}
      />

      <FeatureRequestForm
        isOpen={isFeatureRequestOpen}
        onClose={() => setIsFeatureRequestOpen(false)}
      />
    </>
  );
}
