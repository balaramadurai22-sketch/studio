"use client";

import * as React from "react";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { pricingPlans, type PricingPlan } from "@/lib/pricing-data";
import PricingCard from "@/components/pricing/pricing-card";
import PricingModal from "@/components/pricing/pricing-modal";

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = React.useState<PricingPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handlePlanClick = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto py-20 text-center">
          <h1 className="font-headline text-5xl font-bold">Futuristic Pricing for Visionary AI</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Choose a plan that scales with your ambition. Pure, powerful AI, priced for innovation.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                onClick={() => handlePlanClick(plan)}
              />
            ))}
          </div>
        </section>
      </main>
      <PricingModal
        plan={selectedPlan}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <Footer />
    </div>
  );
}
