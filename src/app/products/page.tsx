"use client";

import * as React from "react";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { products, type Product } from "@/lib/products-data";
import ProductCard from "@/components/products/product-card";
import ProductModal from "@/components/products/product-modal";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto py-20 text-center">
          <h1 className="font-headline text-5xl font-bold">Our Products</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Discover our suite of AI-powered tools designed to enhance your productivity and creativity.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        </section>
      </main>
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <Footer />
    </div>
  );
}
