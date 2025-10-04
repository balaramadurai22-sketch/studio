"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { CompanyInitiative } from "@/lib/company-data";

type InitiativeCardProps = {
  initiative: CompanyInitiative;
  onClick: () => void;
};

export default function InitiativeCard({ initiative, onClick }: InitiativeCardProps) {
  const { Icon } = initiative;

  return (
    <Card
      className="group flex cursor-pointer flex-col overflow-hidden text-center transition-all duration-300 ease-in-out hover:bg-foreground hover:text-background border-foreground hover:shadow-2xl"
      onClick={onClick}
    >
      <CardHeader className="flex flex-col items-center p-6">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-transparent border-2 border-foreground group-hover:border-background transition-colors duration-300">
          {Icon && <Icon className="h-8 w-8 text-foreground group-hover:text-background transition-colors duration-300" />}
        </div>
        <CardTitle className="font-headline text-xl">{initiative.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 px-6 pb-6">
        <p className="text-muted-foreground group-hover:text-background/80">{initiative.description}</p>
      </CardContent>
    </Card>
  );
}
