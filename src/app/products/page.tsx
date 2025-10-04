"use client";

import React, { useState } from "react";
import { products, Product } from "@/lib/products-data";
import ProductCard from "@/components/products/product-card";
import ProductModal from "@/components/products/product-modal";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="w-full bg-background text-foreground min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-headline text-5xl font-bold tracking-tight">
            Our AI-Powered Products
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our suite of intelligent tools designed to revolutionize
            your workflow and drive innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
      </main>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
}
