import { notFound } from "next/navigation";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { researchProjects, type ResearchProject } from "@/lib/research-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function ResearchDetailPage({ params }: { params: { id: string } }) {
  const project = researchProjects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === project.imageId);

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <article className="container mx-auto max-w-4xl">
          <header className="mb-8 text-center">
            <p className="text-sm text-muted-foreground">
              Published on {new Date(project.publicationDate).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <h1 className="mt-2 font-headline text-4xl font-bold md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-muted-foreground">
              By {project.authors.join(", ")}
            </p>
          </header>

          {image && (
            <div className="my-8 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={image.imageUrl}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full object-cover"
                data-ai-hint={image.imageHint}
              />
            </div>
          )}
          
          <div className="prose prose-lg max-w-none mx-auto text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground">
            <p className="lead text-xl italic text-foreground">
              {project.abstract}
            </p>
            <Separator className="my-8" />
            
            <h2 className="font-headline">Full Details</h2>
            <p>{project.fullDetails}</p>
            
            <h2 className="font-headline mt-8">Key Insights</h2>
            <ul className="list-disc pl-5 space-y-2">
                {project.keyInsights.map((insight, index) => (
                    <li key={index}>{insight}</li>
                ))}
            </ul>

          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
    return researchProjects.map((project) => ({
      id: project.id,
    }));
}
