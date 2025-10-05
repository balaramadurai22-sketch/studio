
"use client";
import * as React from "react";
import { MessageSquare, PlusCircle, Search, Bug, Lightbulb, MoreHorizontal, FileText, Share2, Trash2 } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

type ChatSidebarProps = {
  chats: Chat[];
  activeChatId: string | null;
  onNewChat: () => void;
  onSwitchChat: (chatId: string) => void;
  onDeleteChat: (chatId: string) => void;
  isMobile?: boolean;
};

export default function ChatSidebar({ chats, activeChatId, onNewChat, onSwitchChat, onDeleteChat, isMobile }: ChatSidebarProps) {
  const [isBugReportOpen, setIsBugReportOpen] = React.useState(false);
  const [isFeatureRequestOpen, setIsFeatureRequestOpen] = React.useState(false);
  const [chatToDelete, setChatToDelete] = React.useState<string | null>(null);

  const handleDeleteConfirm = () => {
    if (chatToDelete) {
      onDeleteChat(chatToDelete);
      setChatToDelete(null);
    }
  };

  return (
    <>
      <div className={cn("h-screen w-80 flex-col border-r border-border bg-secondary", isMobile ? "flex" : "hidden md:flex")}>
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <Logo />
        </div>

        <div className="p-4">
          <Button variant="outline" className="w-full bg-transparent border-muted-foreground hover:bg-muted-foreground/20" onClick={onNewChat}>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Chat
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <div className="space-y-4 p-4">
            <div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search chats..." className="pl-9 bg-background" />
              </div>
            </div>
            
            <div className="space-y-1">
              <h3 className="px-2 text-xs font-medium text-muted-foreground">
                Chat History
              </h3>
              {chats.map((chat) => (
                <div key={chat.id} className="group relative flex items-center">
                  <Button
                    variant={chat.id === activeChatId ? "secondary" : "ghost"}
                    className={cn(
                        "w-full justify-start pr-8", 
                        chat.id === activeChatId && "font-bold"
                    )}
                    onClick={() => onSwitchChat(chat.id)}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span className="truncate flex-1 text-left">{chat.title}</span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="absolute right-1 h-7 w-7 opacity-0 group-hover:opacity-100">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <FileText className="mr-2 h-4 w-4" />
                        Export (Word)
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-destructive"
                        onClick={() => setChatToDelete(chat.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
        
        <div className="border-t border-border p-2 space-y-1">
            <Button variant="ghost" className="w-full justify-start text-sm" onClick={() => setIsBugReportOpen(true)}>
                <Bug className="mr-2 h-4 w-4" />
                Bug Report
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm" onClick={() => setIsFeatureRequestOpen(true)}>
                <Lightbulb className="mr-2 h-4 w-4" />
                Feature Request
            </Button>
          <Separator className="my-1" />
          <UserProfile />
        </div>
      </div>

      <AlertDialog open={!!chatToDelete} onOpenChange={(open) => !open && setChatToDelete(null)}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete this chat history.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setChatToDelete(null)}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteConfirm} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                    Delete
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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
