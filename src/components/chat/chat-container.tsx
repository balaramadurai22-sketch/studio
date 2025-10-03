"use client";
import * as React from "react";
import { SidebarInset } from "@/components/ui/sidebar";
import ChatHeader from "./chat-header";
import ChatMessages from "./chat-messages";
import ChatInput from "./chat-input";

export default function ChatContainer() {
  return (
    <SidebarInset className="flex max-h-screen flex-col">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </SidebarInset>
  );
}
