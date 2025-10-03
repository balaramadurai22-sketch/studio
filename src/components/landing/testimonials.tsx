import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Sarah L.",
    role: "Software Engineer",
    quote: "Mistral Next has become an indispensable part of my coding workflow. The code generation is top-notch and the explanations are incredibly clear. It's like having a senior dev pair-programming with me 24/7.",
  },
  {
    id: "testimonial-2",
    name: "Mike R.",
    role: "Product Manager",
    quote: "I use this AI for everything from drafting project specs to brainstorming marketing copy. The ability to upload documents and have them summarized saves me hours every week. A total game-changer for productivity.",
  },
  {
    id: "testimonial-3",
    name: "The Dev Team at InnovateCo",
    role: "Startup",
    quote: "We've integrated Mistral Next into our team's Slack. It helps with research, answers technical questions, and even helps onboard new team members. It has significantly boosted our team's efficiency.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 md:py-32 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col items-center text-center px-4 md:px-8 lg:px-0">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Loved by Professionals and Teams
          </h2>
          <p className="mt-4 text-muted-foreground">
            Don't just take our word for it. Here's what our users are saying.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === testimonial.id
            );
            return (
              <Card
                key={testimonial.id}
                className="flex flex-col items-center text-center w-full max-w-sm"
              >
                <CardHeader>
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                </CardHeader>
                <CardFooter className="mt-auto flex flex-col items-center gap-4">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={40}
                      height={40}
                      className="rounded-full"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
