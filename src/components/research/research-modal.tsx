"use client";

import * as React from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { ResearchProject } from "@/lib/research-data";
import { Separator } from "../ui/separator";
import { ArrowRight, CheckCircle } from "lucide-react";

type ResearchModalProps = {
  project: ResearchProject | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ResearchModal({ project, isOpen, onClose }: ResearchModalProps) {
  if (!project) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-headline">{project.title}</DialogTitle>
        </DialogHeader>
        <Separator />
        <div className="py-4 space-y-4">
            <h3 className="font-semibold text-lg">Key Insights</h3>
            <ul className="space-y-2">
                {project.keyInsights.map((insight, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{insight}</span>
                    </li>
                ))}
            </ul>
        </div>
        <Separator />
        <Button asChild onClick={onClose}>
          <Link href={`/research/${project.id}`}>
            View More Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
