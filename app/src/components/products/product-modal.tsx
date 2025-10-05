"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products-data";
import { Separator } from "../ui/separator";

type ProductModalProps = {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [showMore, setShowMore] = React.useState(false);

  if (!product) {
    return null;
  }

  const { Icon } = product;

  const handleClose = () => {
    setShowMore(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              {Icon && <Icon className="h-6 w-6 text-primary" />}
            </div>
            <DialogTitle className="text-2xl font-bold font-headline">{product.name}</DialogTitle>
          </div>
        </DialogHeader>
        <Separator />
        <div className="py-4">
          <p className="text-muted-foreground">
            {product.description}
          </p>
          {showMore && (
            <div className="mt-4 animate-fade-in">
              <p className="text-muted-foreground">{product.fullDescription}</p>
            </div>
          )}
        </div>
        {!showMore && (
          <Button variant="outline" onClick={() => setShowMore(true)}>
            View More
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
}
