import { notFound } from "next/navigation";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { pricingPlans } from "@/lib/pricing-data";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PricingDetailPage({ params }: { params: { id: string } }) {
  const plan = pricingPlans.find((p) => p.id === params.id);

  if (!plan) {
    notFound();
  }

  const { Icon } = plan;

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
              {plan.name}
            </h1>
            <div className="mt-4 flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold tracking-tight text-foreground">{plan.price}</span>
                <span className="text-xl font-semibold text-muted-foreground">{plan.priceAnnotation}</span>
            </div>
          </header>

          <Separator className="my-8 bg-foreground" />
          
          <div className="prose prose-lg max-w-none mx-auto text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground">
            <h2 className="font-headline text-center">Full Plan Details</h2>
            <p className="text-justify">{plan.fullDetails}</p>
            
            <h2 className="font-headline mt-12 text-center">All Features Included</h2>
             <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-foreground mt-1 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                    </li>
                ))}
            </ul>
          </div>

          <Separator className="my-12 bg-foreground" />

          <div className="text-center">
            <Button size="lg" asChild>
                <Link href="#">Choose Plan</Link>
            </Button>
          </div>

        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
    return pricingPlans.map((plan) => ({
      id: plan.id,
    }));
}
