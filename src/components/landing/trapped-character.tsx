"use client";
import { cn } from "@/lib/utils";

const SNAKE_LENGTH = 30;

export default function TrappedCharacter() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <div className="animate-slither">
        <div className="relative h-4 w-4">
          {Array.from({ length: SNAKE_LENGTH }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute h-12 w-12 rounded-full bg-gradient-to-br from-white via-gray-500 to-black opacity-80 blur-sm shadow-lg shadow-gray-500/20",
              )}
              style={{
                animation: `slither 25s linear ${i * -0.08}s infinite`,
                transformOrigin: "center",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
