import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareText, FileCode, Images, BrainCircuit } from "lucide-react";

const features = [
  {
    icon: <MessageSquareText className="h-8 w-8 text-primary" />,
    title: "Natural Language Understanding",
    description: "Engage in fluid, human-like conversations. Our AI understands context, nuance, and intent to provide truly helpful responses.",
  },
  {
    icon: <Images className="h-8 w-8 text-primary" />,
    title: "Multimodal Support",
    description: "Go beyond text. Upload images, documents, and other files to get insights, summaries, and analysis across different media types.",
  },
  {
    icon: <FileCode className="h-8 w-8 text-primary" />,
    title: "Code Assistance",
    description: "Accelerate your development with an AI that can write, debug, and explain code in real-time. Includes syntax highlighting and execution.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Personalized Memory",
    description: "Our assistant remembers key details from your past conversations, providing a personalized and context-aware experience every time.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-card">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Powerful Features, Seamless Experience
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to supercharge your productivity and creativity.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
