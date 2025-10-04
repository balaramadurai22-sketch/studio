import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { researchProjects } from "@/lib/research-data";

export default function InnovationHub() {
  return (
    <section id="innovation-hub" className="w-full py-20 md:py-32">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            From the Innovation Hub
          </h2>
          <p className="mt-4 text-muted-foreground">
            A glimpse into our latest cutting-edge research and breakthrough
            technologies emerging from the lab.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {researchProjects.slice(0, 4).map((project) => (
            <Link
              href={`/research/${project.id}`}
              key={project.id}
              className="group"
            >
              <Card className="flex h-full flex-col text-left transition-all duration-300 ease-in-out hover:border-foreground">
                <CardHeader>
                  <CardTitle className="font-headline text-xl leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    {project.abstract}
                  </p>
                </CardContent>
                <div className="flex items-center p-6 pt-0 text-sm font-semibold text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
