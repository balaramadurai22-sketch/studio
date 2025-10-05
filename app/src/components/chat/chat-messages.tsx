
"use client";
import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { user, type Message } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { Button } from "../ui/button";
import { Copy, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const useTypewriter = (text: string | ReadableStream<string> | undefined, onDone: () => void) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const isStream = text instanceof ReadableStream;

  React.useEffect(() => {
    if (!text) {
        setDisplayedText("");
        onDone();
        return;
    };
    
    if (isStream) {
      let currentText = "";
      const reader = text.getReader();
      const decoder = new TextDecoder();
      let done = false;

      const read = async () => {
        while (!done) {
          try {
            const { value, done: readerDone } = await reader.read();
            done = readerDone;
            if (value) {
              currentText += decoder.decode(value, { stream: true });
              setDisplayedText(currentText);
            }
          } catch (error) {
            console.error("Error reading stream:", error);
            done = true;
          }
        }
        onDone();
      };
      read();
      
      return () => {
        reader.cancel();
      }
    } else {
      setDisplayedText(text);
      onDone();
    }
  }, [text, isStream, onDone]);

  return displayedText;
};


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
    <div className="relative my-4 rounded-lg bg-background font-code">
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

const ChatMessage = ({ message, isLastMessage, isStreaming, onStreamingDone }: { message: Message, isLastMessage: boolean, isStreaming: boolean, onStreamingDone: () => void }) => {
  const { toast } = useToast();
  const content = useTypewriter(
    isLastMessage && isStreaming && message.stream ? message.stream : message.content, 
    onStreamingDone
  );
  
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
  
  const contentToRender = content || message.content;

  while ((match = codeBlockRegex.exec(contentToRender)) !== null) {
    const [fullMatch, lang, code] = match;
    const textBefore = contentToRender.slice(lastIndex, match.index);
    if (textBefore) {
      parts.push({ type: "text", content: textBefore });
    }
    parts.push({ type: "code", content: code, lang });
    lastIndex = match.index + fullMatch.length;
  }

  const textAfter = contentToRender.slice(lastIndex);
  if (textAfter) {
    parts.push({ type: "text", content: textAfter });
  }

  return (
    <div
      className={cn(
        "group relative flex items-start gap-3 animate-fade-in py-4",
        message.role === "user" ? "justify-end" : ""
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
          "max-w-[80%] rounded-lg p-3 prose-p:text-foreground/80",
          message.role === "user"
            ? "bg-primary text-primary-foreground prose-p:text-primary-foreground/90"
            : "bg-secondary"
        )}
      >
        <div className="prose prose-sm max-w-none prose-p:leading-normal prose-p:text-inherit">
          {parts.map((part, index) => {
            if (part.type === 'code') {
              return <CodeBlock key={index} lang={part.lang} code={part.content} onCopy={() => onCopy(part.content)} />
            }
            return <MemoizedReactMarkdown key={index} className="text-justify">{part.content}</MemoizedReactMarkdown>
          })}
           {isStreaming && isLastMessage && message.role === 'assistant' && contentToRender.length === 0 && (
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
           )}
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
    </div>
  );
};


export default function ChatMessages({ messages, isStreaming }: { messages: Message[], isStreaming: boolean }) {
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = React.useState(isStreaming);

  React.useEffect(() => {
    setIsTyping(isStreaming);
  }, [isStreaming]);

  const handleStreamingDone = React.useCallback(() => {
    setIsTyping(false);
  }, []);
  
  const contentOfLastMessage = messages.length > 0 ? messages[messages.length-1].content : '';

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, isTyping, contentOfLastMessage]);
  
  return (
    <ScrollArea className="flex-1 bg-background" ref={scrollAreaRef}>
      <div className="container py-8">
        <div className="mx-auto max-w-4xl">
          {messages.map((message: Message, index: number) => (
            <ChatMessage 
              key={message.id} 
              message={message}
              isLastMessage={index === messages.length - 1}
              isStreaming={isStreaming}
              onStreamingDone={handleStreamingDone}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </ScrollArea>
  );
}
