import Link from "next/link";
import { Button } from "@/components/ui/button";
import TrappedCharacter from "./trapped-character";

export default function Hero({ className }: { className?: string }) {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center overflow-hidden bg-background py-24 text-center md:py-40">
      <TrappedCharacter />
      <div className="z-10 flex w-full flex-col items-center justify-center px-4 text-center md:px-8 lg:px-0">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl">
          Frontier AI. In Your Hands.
        </h1>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="outline" asChild>
            <Link href="/chat">Talk to Le Chat</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#">Get a demo</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="#">Start building</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
