"use client";

import React, { useState } from "react";
import { Product } from "@/lib/products-data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { Icon } = product;

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-background text-foreground">
        <DialogHeader className="text-center items-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Icon className="h-10 w-10 text-primary" />
          </div>
          <DialogTitle className="font-headline text-3xl">
            {product.name}
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground pt-2">
            {product.shortDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="py-6 text-left">
          <p
            className={`text-foreground transition-all duration-300 ${
              showFullDescription ? "max-h-full" : "max-h-20 overflow-hidden"
            }`}
          >
            {product.longDescription}
          </p>
        </div>
        <div className="flex justify-end">
          {!showFullDescription && (
            <Button onClick={() => setShowFullDescription(true)}>
              View More
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;