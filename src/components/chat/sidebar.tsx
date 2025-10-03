"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import {
  MessageSquare,
  Pin,
  PlusCircle,
  Search,
  Settings,
  Shield,
  Star,
} from "lucide-react";
import UserProfile from "./user-profile";
import { Button } from "../ui/button";
import { chats } from "@/lib/data";
import { Input } from "../ui/input";
import Logo from "../shared/logo";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";

export default function ChatSidebar() {
  const handleNewChat = () => {
    console.log("New chat started");
  };

  return (
    <div className="hidden h-screen w-80 flex-col border-r bg-background md:flex">
      <div className="flex h-16 items-center justify-between border-b px-4">
        <Logo />
      </div>

      <div className="p-4">
        <Button className="w-full" onClick={handleNewChat}>
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
                variant={chat.id === "2" ? "secondary" : "ghost"}
                className={cn("w-full justify-start", chat.id === "2" && "font-bold")}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                <span className="truncate flex-1 text-left">{chat.title}</span>
                {chat.pinned && <Pin className="ml-2 h-4 w-4 text-muted-foreground" />}
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
      
      <div className="border-t p-4">
        <Button variant="outline" className="w-full justify-start text-muted-foreground">
            <Star className="mr-2 h-4 w-4" />
            Upgrade to Premium
        </Button>
      </div>

      <div className="border-t p-2">
        <UserProfile />
      </div>
    </div>
  );
}
