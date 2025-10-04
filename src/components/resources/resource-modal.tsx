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
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import type { AIResource } from "@/lib/resources-data";

type ResourceModalProps = {
  resource: AIResource | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ResourceModal({ resource, isOpen, onClose }: ResourceModalProps) {
  if (!resource) {
    return null;
  }

  const { Icon } = resource;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-background text-foreground border-foreground">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-foreground">
              {Icon && <Icon className="h-6 w-6 text-foreground" />}
            </div>
            <DialogTitle className="text-2xl font-bold font-headline">{resource.title}</DialogTitle>
          </div>
        </DialogHeader>
        <Separator className="bg-foreground" />
        <div className="py-4 space-y-2">
            <p className="text-muted-foreground">{resource.description}</p>
        </div>
        <Separator className="bg-foreground" />
        <Button asChild onClick={onClose} variant="outline" className="border-foreground hover:bg-foreground hover:text-background">
          <Link href={`/resources/${resource.id}`}>
            View More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
