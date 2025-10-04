"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import type { PricingPlan } from "@/lib/pricing-data";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

type PricingCardProps = {
  plan: PricingPlan;
  onClick: () => void;
};

export default function PricingCard({ plan, onClick }: PricingCardProps) {
  const { Icon } = plan;

  return (
    <Card
      className="group flex cursor-pointer flex-col overflow-hidden text-center transition-all duration-300 ease-in-out hover:bg-foreground hover:text-background border-foreground"
      onClick={onClick}
    >
      <CardHeader className="p-6">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-transparent border-2 border-foreground group-hover:border-background transition-colors">
          {Icon && <Icon className="h-6 w-6 text-foreground group-hover:text-background transition-colors" />}
        </div>
        <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
        <CardDescription className="flex items-baseline justify-center gap-1 pt-2">
            <span className="text-4xl font-bold tracking-tight text-foreground group-hover:text-background">{plan.price}</span>
            <span className="text-sm font-semibold text-muted-foreground group-hover:text-background/70">{plan.priceAnnotation}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between p-6 pt-0">
        <ul className="space-y-3 text-sm text-muted-foreground group-hover:text-background/80 text-left">
            {plan.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-foreground group-hover:text-background" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6">
        <Button variant="outline" className="w-full border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background group-hover:bg-background group-hover:text-foreground">
            Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
