"use client";

import * as React from "react";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { researchProjects, type ResearchProject } from "@/lib/research-data";
import ResearchCard from "@/components/research/research-card";
import ResearchModal from "@/components/research/research-modal";

export default function ResearchPage() {
  const [selectedProject, setSelectedProject] = React.useState<ResearchProject | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleProjectClick = (project: ResearchProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto py-20 text-center">
          <h1 className="font-headline text-5xl font-bold">Groundbreaking Research</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Exploring the frontiers of artificial intelligence and its impact on the world.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {researchProjects.map((project) => (
              <ResearchCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </section>
      </main>
      <ResearchModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <Footer />
    </div>
  );
}
