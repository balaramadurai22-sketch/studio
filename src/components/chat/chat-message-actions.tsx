"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Copy, RefreshCw, ThumbsDown, ThumbsUp } from "lucide-react";

type ChatMessageActionsProps = {
  role: "user" | "assistant";
  className?: string;
};

export default function ChatMessageActions({
  role,
  className,
}: ChatMessageActionsProps) {
  return (
    <div
      className={cn(
        "absolute -top-6 flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100",
        role === "user" ? "right-10" : "left-10",
        className
      )}
    >
      <Button variant="ghost" size="icon" className="h-7 w-7">
        <Copy className="h-4 w-4" />
      </Button>
      {role === "assistant" && (
        <>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ThumbsUp className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ThumbsDown className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  );
}
