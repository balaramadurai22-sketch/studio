
"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ChevronDown,
  Download,
  FilePenLine,
  Trash2,
  PanelLeft,
  Menu,
} from "lucide-react";
import ChatSidebar from "./sidebar";
import { type Chat } from "@/lib/data";
import * as React from "react";

type ChatHeaderProps = {
  onNewChat: () => void;
  title?: string;
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
  chats: Chat[];
  activeChatId: string | null;
  onSwitchChat: (chatId: string) => void;
  onDeleteChat: (chatId: string) => void;
};

export default function ChatHeader({ 
    onNewChat, 
    title,
    chats,
    activeChatId,
    onSwitchChat,
    onDeleteChat
}: ChatHeaderProps) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);

  return (
    <div className="flex h-16 items-center justify-between border-b border-border bg-background px-4">
       <div className="flex items-center gap-2 md:hidden">
        <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0 border-r-0">
             <ChatSidebar
                chats={chats}
                activeChatId={activeChatId}
                onNewChat={() => {
                    onNewChat();
                    setIsMobileSidebarOpen(false);
                }}
                onSwitchChat={(id) => {
                    onSwitchChat(id);
                    setIsMobileSidebarOpen(false);
                }}
                onDeleteChat={onDeleteChat}
                isMobile
            />
          </SheetContent>
        </Sheet>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-lg font-medium">
            <span className="truncate max-w-xs">{title || "New Chat"}</span>
            <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>
            <FilePenLine className="mr-2 h-4 w-4" />
            Rename
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Download className="mr-2 h-4 w-4" />
            Export
          </DropdownMenuItem>
          <DropdownMenuItem className="text-destructive" onClick={onNewChat}>
            <Trash2 className="mr-2 h-4 w-4" />
            Clear Chat
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Open utility panel</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Utility Panel</SheetTitle>
              <SheetDescription>
                Conversation outline, context notes, and related documents will appear here.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
