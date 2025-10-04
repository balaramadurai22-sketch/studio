"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AIResource } from "@/lib/resources-data";

type ResourceCardProps = {
  resource: AIResource;
  onClick: () => void;
};

export default function ResourceCard({ resource, onClick }: ResourceCardProps) {
  const { Icon } = resource;

  return (
    <Card
      className="group flex cursor-pointer flex-col overflow-hidden text-center transition-all duration-300 ease-in-out hover:bg-foreground hover:text-background border-foreground"
      onClick={onClick}
    >
      <CardHeader className="flex flex-col items-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-transparent border-2 border-foreground group-hover:border-background">
          {Icon && <Icon className="h-8 w-8 text-foreground group-hover:text-background" />}
        </div>
        <CardTitle className="font-headline text-2xl">{resource.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground group-hover:text-background/80">{resource.description}</p>
      </CardContent>
    </Card>
  );
}
