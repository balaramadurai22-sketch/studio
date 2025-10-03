import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-24 md:py-40 text-center">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-headline text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Frontier AI. In Your Hands.
          </h1>
        </div>
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