import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Testimonials from "@/components/landing/testimonials";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background text-foreground">
      {/* Header */}
      <Header className="w-full flex justify-center" />

      {/* Main Content */}
      <main className="flex flex-col w-full flex-1 items-center justify-center text-center">
        <Hero className="w-full flex justify-center text-center" />
        <Features className="w-full flex justify-center text-center" />
        <Testimonials className="w-full flex justify-center text-center" />
      </main>

      {/* Footer */}
      <Footer className="w-full flex justify-center text-center" />
    </div>
  );
}
