import { notFound } from "next/navigation";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { companyInitiatives } from "@/lib/company-data";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InitiativeDetailPage({ params }: { params: { id: string } }) {
  const initiative = companyInitiatives.find((p) => p.id === params.id);

  if (!initiative) {
    notFound();
  }

  const { Icon } = initiative;

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
              {initiative.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {initiative.description}
            </p>
          </header>

          <Separator className="my-8 bg-foreground" />
          
          <div className="prose prose-lg max-w-none mx-auto text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground">
            <h2 className="font-headline text-center">Detailed Insights</h2>
            <p className="text-justify">{initiative.fullDetails}</p>
          </div>

          <Separator className="my-12 bg-foreground" />

          <div className="text-center">
            <Button size="lg" asChild variant="outline">
                <Link href="/company">Back to Company Page</Link>
            </Button>
          </div>

        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
    return companyInitiatives.map((initiative) => ({
      id: initiative.id,
    }));
}
