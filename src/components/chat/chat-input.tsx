"use client";
import * as React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Paperclip, Mic, Send } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type ChatInputProps = {
  onSend: (text: string) => void;
  isStreaming: boolean;
};

export default function ChatInput({ onSend, isStreaming }: ChatInputProps) {
  const [text, setText] = React.useState('');

  const handleSend = () => {
    if (text.trim() && !isStreaming) {
      onSend(text);
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t bg-card p-4">
      <div className="mx-auto max-w-4xl">
        <div className="relative">
          <Textarea
            placeholder="Type your message..."
            className="min-h-[60px] w-full resize-none pr-32"
            rows={1}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isStreaming}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={isStreaming}>
                    <Paperclip className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Attach file</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={isStreaming}>
                    <Mic className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Use microphone</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button
              size="icon"
              onClick={handleSend}
              disabled={isStreaming}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
