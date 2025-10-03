"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { user, type Message } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import ChatMessageActions from "./chat-message-actions";
import { Button } from "../ui/button";
import { Copy, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g;

const CodeBlock = ({
  lang,
  code,
  onCopy,
}: {
  lang: string;
  code: string;
  onCopy: () => void;
}) => {
  return (
    <div className="relative my-4 rounded-lg bg-secondary/50 font-code">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <span className="text-xs text-muted-foreground">
          {lang || "code"}
        </span>
        <Button variant="ghost" size="icon" onClick={onCopy}>
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <div className="overflow-x-auto p-4 text-sm">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

const MemoizedReactMarkdown = React.memo(
  ReactMarkdown,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
);

const ChatMessage = ({ message }: { message: Message }) => {
  const { toast } = useToast();

  const onCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied.",
    });
  };

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(message.content)) !== null) {
    const [fullMatch, lang, code] = match;
    const textBefore = message.content.slice(lastIndex, match.index);
    if (textBefore) {
      parts.push({ type: "text", content: textBefore });
    }
    parts.push({ type: "code", content: code, lang });
    lastIndex = match.index + fullMatch.length;
  }

  const textAfter = message.content.slice(lastIndex);
  if (textAfter) {
    parts.push({ type: "text", content: textAfter });
  }

  return (
    <div
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
          message.role === "user" ? "bg-primary/10" : "bg-card"
        )}
      >
        <div className="prose prose-sm max-w-none prose-p:leading-normal">
          {parts.map((part, index) => {
            if (part.type === 'code') {
              return <CodeBlock key={index} lang={part.lang} code={part.content} onCopy={() => onCopy(part.content)} />
            }
            return <MemoizedReactMarkdown key={index}>{part.content}</MemoizedReactMarkdown>
          })}
        </div>
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
  );
};


export default function ChatMessages({ messages, isStreaming }: { messages: Message[], isStreaming: boolean }) {
  return (
    <ScrollArea className="flex-1">
      <div className="container py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {messages.map((message: Message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
           {isStreaming && messages[messages.length - 1]?.role === 'user' && (
            <div className="flex items-start gap-4">
              <Avatar className="h-8 w-8 shrink-0">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Bot className="h-5 w-5" />
                </div>
              </Avatar>
              <div className="flex items-center gap-2 rounded-lg bg-card p-4">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span className="text-sm text-muted-foreground">Thinking...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </ScrollArea>
  );
}