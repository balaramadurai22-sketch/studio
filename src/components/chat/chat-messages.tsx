"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { messages, user, type Message } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import ChatMessageActions from "./chat-message-actions";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CodeBlock = ({ codeString }: { codeString: string }) => {
  const { toast } = useToast();
  const onCopy = () => {
    navigator.clipboard.writeText(codeString);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied.",
    });
  };

  return (
    <div className="relative my-4 rounded-lg bg-secondary/50 font-code">
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <span className="text-xs text-muted-foreground">SQL</span>
        <Button variant="ghost" size="icon" onClick={onCopy}>
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4 overflow-x-auto text-sm">
        <pre><code>{codeString}</code></pre>
      </div>
    </div>
  );
};

export default function ChatMessages() {
  return (
    <ScrollArea className="flex-1">
      <div className="container py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {messages.map((message: Message) => (
            <div
              key={message.id}
              className={cn(
                "group relative flex items-start gap-4",
                message.role === "user" && "justify-end"
              )}
            >
              {message.role === "assistant" && (
                <Avatar className="h-8 w-8 shrink-0">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Bot className="h-5 w-5" />
                  </div>
                </Avatar>
              )}
              <div
                className={cn(
                  "max-w-[80%] rounded-lg p-4",
                  message.role === "user"
                    ? "bg-primary/10"
                    : "bg-card"
                )}
              >
                <div className="prose prose-sm max-w-none prose-p:leading-normal">
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
                 {message.code && <CodeBlock codeString={message.code} />}
              </div>
              {message.role === "user" && (
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarImage src={message.avatar} />
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
              )}
              <ChatMessageActions role={message.role} />
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
