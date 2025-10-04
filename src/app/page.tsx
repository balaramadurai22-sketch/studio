import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import AiInAction from "@/components/landing/ai-in-action";
import InnovationHub from "@/components/landing/innovation-hub";
import AiImpact from "@/components/landing/ai-impact";
import JoinCommunity from "@/components/landing/join-community";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <Hero />
        <AiInAction />
        <InnovationHub />
        <AiImpact />
        <JoinCommunity />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
