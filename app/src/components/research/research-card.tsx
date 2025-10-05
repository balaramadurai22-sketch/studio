"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ResearchProject } from "@/lib/research-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type ResearchCardProps = {
  project: ResearchProject;
  onClick: () => void;
};

export default function ResearchCard({ project, onClick }: ResearchCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === project.imageId);

  return (
    <Card
      className="flex cursor-pointer flex-col overflow-hidden text-left transition-all hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      {image && (
        <Image
          src={image.imageUrl}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-40 object-cover"
          data-ai-hint={image.imageHint}
        />
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl leading-tight">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{project.abstract}</p>
      </CardContent>
    </Card>
  );
}
