"use client";
import { cn } from "@/lib/utils";

const SNAKE_LENGTH = 20;

export default function TrappedCharacter() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <div className="animate-slither">
        <div className="relative h-4 w-4">
          {Array.from({ length: SNAKE_LENGTH }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute h-10 w-10 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-600 to-black opacity-80 blur-sm",
              )}
              style={{
                animation: `slither 20s linear ${i * -0.1}s infinite`,
                transformOrigin: "center",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
