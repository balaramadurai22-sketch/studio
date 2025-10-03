import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Testimonials from "@/components/landing/testimonials";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background text-foreground">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center">
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
