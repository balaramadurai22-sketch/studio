"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

type TeamMember = {
    id: string;
    name: string;
    role: string;
};

type TeamMemberCardProps = {
  member: TeamMember;
  isFounder?: boolean;
};

export default function TeamMemberCard({ member, isFounder = false }: TeamMemberCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === member.id);

  return (
    <div className={cn("flex flex-col items-center text-center transition-transform duration-300 hover:scale-105", isFounder && "w-full")}>
      {image && (
        <Image
          src={image.imageUrl}
          alt={`Portrait of ${member.name}`}
          width={isFounder ? 160 : 120}
          height={isFounder ? 160 : 120}
          className="rounded-full object-cover shadow-lg border-4 border-background"
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="mt-4">
        <h3 className={cn("font-headline font-bold", isFounder ? "text-2xl" : "text-lg")}>{member.name}</h3>
        <p className="text-sm text-muted-foreground">{member.role}</p>
      </div>
    </div>
  );
}
