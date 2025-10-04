
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const demos = [
  {
    id: "action-1",
    title: "Live Data Visualization",
    description: "Watch our AI process and visualize complex data streams in real-time, revealing hidden patterns.",
    imageId: "action-1",
  },
  {
    id: "action-2",
    title: "Generative Art",
    description: "See how our models create unique, black-and-white art from simple text prompts and geometric shapes.",
    imageId: "action-2",
  },
  {
    id: "action-3",
    title: "Smart Automation",
    description: "A preview of how robotic hands and AI can automate and optimize complex digital workflows.",
    imageId: "action-3",
  },
];

export default function AiInAction() {
  return (
    <section id="ai-in-action" className="w-full bg-card py-20 md:py-32">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            AI in Action
          </h2>
          <p className="mt-4 text-muted-foreground">
            Highlighting real-time AI demos and simulations that users can interact with.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {demos.map((demo) => {
            const image = PlaceHolderImages.find((img) => img.id === demo.imageId);
            return (
              <Card
                key={demo.id}
                className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-lg text-left"
              >
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={demo.title}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <CardHeader className="relative z-10">
                  <CardTitle className="font-headline text-2xl text-background">
                    {demo.title}
                  </CardTitle>
                  <CardDescription className="text-background/80">
                    {demo.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <Button variant="outline">
                    <PlayCircle className="mr-2" />
                    Try Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
