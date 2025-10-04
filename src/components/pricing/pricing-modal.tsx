"use client";

import * as React from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { PricingPlan } from "@/lib/pricing-data";

type PricingModalProps = {
  plan: PricingPlan | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function PricingModal({ plan, isOpen, onClose }: PricingModalProps) {
  if (!plan) {
    return null;
  }

  const { Icon } = plan;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-background text-foreground border-foreground">
        <DialogHeader className="text-left">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-foreground">
              {Icon && <Icon className="h-6 w-6 text-foreground" />}
            </div>
            <div>
                <DialogTitle className="text-2xl font-bold font-headline">{plan.name}</DialogTitle>
                <DialogDescription className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold tracking-tight text-foreground">{plan.price}</span>
                    <span className="text-sm font-semibold text-muted-foreground">{plan.priceAnnotation}</span>
                </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <Separator className="bg-foreground" />
        <div className="py-4 space-y-4">
            <h3 className="font-semibold text-lg font-headline">Key Features</h3>
            <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-foreground mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
        <Separator className="bg-foreground" />
        <Button asChild onClick={onClose} variant="outline" className="border-foreground hover:bg-foreground hover:text-background">
          <Link href={`/pricing/${plan.id}`}>
            View Full Plan Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
