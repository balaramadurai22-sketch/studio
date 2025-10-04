
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const impactStories = [
  {
    id: "impact-1",
    title: "Revolutionizing Healthcare Diagnostics",
    description: "Our AI models are helping doctors detect diseases earlier and more accurately than ever before, leading to better patient outcomes. By analyzing medical images with superhuman precision, we're reducing diagnostic errors and saving lives.",
    imageId: "impact-1",
    link: "#",
  },
  {
    id: "impact-2",
    title: "Accelerating Climate Change Solutions",
    description: "We're using AI to model complex climate data, helping scientists understand environmental changes and develop effective strategies. From optimizing renewable energy grids to monitoring deforestation, our technology is making a tangible impact.",
    imageId: "impact-2",
    link: "#",
  },
];

export default function AiImpact() {
  return (
    <section id="ai-impact" className="w-full bg-card py-20 md:py-32">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            AI with Global Impact
          </h2>
          <p className="mt-4 text-muted-foreground">
            Highlighting real-world applications where our AI has solved complex problems and innovated processes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {impactStories.map((story, index) => {
            const image = PlaceHolderImages.find((img) => img.id === story.imageId);
            return (
              <div
                key={story.id}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <div
                  className={`relative h-80 w-full rounded-lg overflow-hidden ${
                    index % 2 === 1 ? "md:order-last" : ""
                  }`}
                >
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={story.title}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <h3 className="font-headline text-2xl font-bold">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground">{story.description}</p>
                  <Button variant="link" className="px-0">
                    Read the Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
