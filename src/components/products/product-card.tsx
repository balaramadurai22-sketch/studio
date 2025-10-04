"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/lib/products-data";

type ProductCardProps = {
  product: Product;
  onClick: () => void;
};

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const { Icon } = product;

  return (
    <Card
      className="flex cursor-pointer flex-col items-center text-center transition-all hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      <CardHeader className="flex flex-col items-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          {Icon && <Icon className="h-8 w-8 text-primary" />}
        </div>
        <CardTitle className="font-headline text-2xl">
          {product.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{product.description}</p>
      </CardContent>
    </Card>
  );
}
