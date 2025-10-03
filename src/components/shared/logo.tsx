import { Bot } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-lg font-bold font-headline tracking-tighter",
        className
      )}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <Bot className="h-5 w-5" />
      </div>
      <span className="text-foreground">
        Mistral Next
      </span>
    </div>
  );
}
