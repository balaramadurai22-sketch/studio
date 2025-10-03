"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Paperclip, Mic, Send, CornerDownLeft } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const promptSuggestions = ["Summarize this", "Explain simply", "Show code example"];

export default function ChatInput() {
  return (
    <div className="border-t bg-card p-4">
      <div className="mx-auto max-w-4xl">
        <div className="mb-2 flex gap-2">
            {promptSuggestions.map(prompt => (
                <Button key={prompt} variant="outline" size="sm" className="text-muted-foreground">
                    {prompt}
                </Button>
            ))}
        </div>
        <div className="relative">
          <Textarea
            placeholder="Type your message here... (Shift+Enter for new line)"
            className="min-h-[60px] w-full resize-none pr-36"
            rows={1}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Paperclip className="h-5 w-5" />
                    </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Attach file</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Mic className="h-5 w-5" />
                    </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Use microphone</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <Button size="icon" style={{ backgroundColor: "hsl(var(--accent))", color: "hsl(var(--accent-foreground))" }}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
            <CornerDownLeft className="h-3 w-3" />
            Enter to send
        </p>
      </div>
    </div>
  );
}
