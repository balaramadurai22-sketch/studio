"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInput,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Logo from "@/components/shared/logo";
import { chats, agents, tools, projects } from "@/lib/data";
import {
  MessageSquare,
  Pin,
  ChevronDown,
  Icon,
  PlusCircle,
} from "lucide-react";
import UserProfile from "./user-profile";

const iconMap: { [key: string]: React.ElementType } = {
  PenSquare: dynamic(() => import("lucide-react").then((mod) => mod.PenSquare)),
  CodeXml: dynamic(() => import("lucide-react").then((mod) => mod.CodeXml)),
  Library: dynamic(() => import("lucide-react").then((mod) => mod.Library)),
  Globe: dynamic(() => import("lucide-react").then((mod) => mod.Globe)),
  FileText: dynamic(() => import("lucide-react").then((mod) => mod.FileText)),
};

export default function ChatSidebar() {

  const handleNewChat = () => {
    // This logic should be handled in the parent component, 
    // potentially lifting state up or using a global state manager.
    // For now, we can just log to the console.
    console.log("New chat started");
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between p-2">
          <Logo />
          <SidebarTrigger />
        </div>
        <div className="p-2">
          <SidebarMenuButton className="w-full justify-start" onClick={handleNewChat}>
            <PlusCircle />
            <span>New Chat</span>
          </SidebarMenuButton>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chats</SidebarGroupLabel>
          <SidebarMenu>
            {chats.map((chat) => (
              <SidebarMenuItem key={chat.id}>
                <SidebarMenuButton
                  tooltip={chat.title}
                  isActive={chat.id === "2"}
                >
                  <MessageSquare />
                  <span>{chat.title}</span>
                  {chat.pinned && <Pin className="ml-auto text-muted-foreground" />}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center">
            <span>Agents</span>
            <ChevronDown className="ml-auto h-4 w-4" />
          </SidebarGroupLabel>
          <SidebarMenu>
            {agents.map((agent) => {
              const IconComponent = iconMap[agent.icon];
              return (
                <SidebarMenuItem key={agent.id}>
                  <SidebarMenuButton tooltip={agent.name}>
                    {IconComponent ? <IconComponent /> : null}
                    <span>{agent.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center">
            <span>Tools</span>
             <ChevronDown className="ml-auto h-4 w-4" />
          </SidebarGroupLabel>
          <SidebarMenu>
            {tools.map((tool) => {
              const IconComponent = iconMap[tool.icon];
              return (
                <SidebarMenuItem key={tool.id}>
                  <SidebarMenuButton tooltip={tool.name}>
                    {IconComponent ? <IconComponent /> : null}
                    <span>{tool.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center">
            <span>Projects</span>
            <ChevronDown className="ml-auto h-4 w-4" />
          </SidebarGroupLabel>
          <SidebarMenu>
            {projects.map((project) => (
              <SidebarMenuItem key={project.id}>
                <SidebarMenuButton tooltip={project.name}>
                  <MessageSquare />
                  <span>{project.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <UserProfile />
      </SidebarFooter>
    </Sidebar>
  );
}
