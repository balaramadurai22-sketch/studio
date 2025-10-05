import { notFound } from "next/navigation";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { resources, type AIResource } from "@/lib/resources-data";
import { Separator } from "@/components/ui/separator";

export default function ResourceDetailPage({ params }: { params: { id: string } }) {
  const resource = resources.find((p) => p.id === params.id);

  if (!resource) {
    notFound();
  }

  const { Icon } = resource;

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <article className="container mx-auto max-w-3xl">
          <header className="mb-8 flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-foreground mb-6">
                {Icon && <Icon className="h-12 w-12 text-foreground" />}
            </div>
            <h1 className="font-headline text-4xl font-bold md:text-5xl">
              {resource.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {resource.description}
            </p>
          </header>

          <Separator className="my-8 bg-foreground" />
          
          <div className="prose prose-lg max-w-none mx-auto text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground">
            <h2 className="font-headline text-center">Full Details</h2>
            <p className="text-justify">{resource.fullDetails}</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
    return resources.map((resource) => ({
      id: resource.id,
    }));
}
