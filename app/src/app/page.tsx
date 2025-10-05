import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import AiInAction from "@/components/landing/ai-in-action";
import InnovationHub from "@/components/landing/innovation-hub";
import AiImpact from "@/components/landing/ai-impact";
import JoinCommunity from "@/components/landing/join-community";
import Footer from "@/components/landing/footer";
import BlogSection from "@/components/landing/blog-section";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <AiInAction />
        <InnovationHub />
        <BlogSection />
        <AiImpact />
        <JoinCommunity />
      </main>
      <Footer />
    </div>
  );
}
