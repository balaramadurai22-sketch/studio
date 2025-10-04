"use client";

import React from "react";
import { type Product } from "@/lib/products-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { Icon } = product;
  return (
    <Card
      className="flex flex-col items-center text-center w-full bg-card hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="flex flex-col items-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="font-headline text-2xl">
          {product.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{product.shortDescription}</p>
        <Button variant="link" className="mt-4">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;