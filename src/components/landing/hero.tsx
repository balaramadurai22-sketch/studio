import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-chat-mockup");

  return (
    <section className="py-20 md:py-32">
      <div className="container text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Meet Your Next-Gen AI Co-pilot
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Transform your workflow with an intelligent assistant that helps
            with coding, research, business ideation, and more.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild style={{ backgroundColor: "hsl(var(--accent))", color: "hsl(var(--accent-foreground))" }}>
            <Link href="/chat">Launch Now</Link>
          </Button>
        </div>

        <div className="mt-16">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={1200}
                  height={800}
                  className="w-full"
                  data-ai-hint={heroImage.imageHint}
                  priority
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
