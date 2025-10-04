"use client";

import * as React from "react";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { resources, type AIResource } from "@/lib/resources-data";
import ResourceCard from "@/components/resources/resource-card";
import ResourceModal from "@/components/resources/resource-modal";

export default function ResourcesPage() {
  const [selectedResource, setSelectedResource] = React.useState<AIResource | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleResourceClick = (resource: AIResource) => {
    setSelectedResource(resource);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedResource(null);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto py-20 text-center">
          <h1 className="font-headline text-5xl font-bold">Unimaginable AI Resources</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A curated collection of futuristic tools and concepts to expand your digital consciousness.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                onClick={() => handleResourceClick(resource)}
              />
            ))}
          </div>
        </section>
      </main>
      <ResourceModal
        resource={selectedResource}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <Footer />
    </div>
  );
}
