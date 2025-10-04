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
    <div className={cn("flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 group", isFounder && "w-full")}>
      {image && (
        <div className="overflow-hidden rounded-full border-4 border-background shadow-lg">
          <Image
            src={image.imageUrl}
            alt={`Symbol for ${member.name}: ${image.imageHint}`}
            width={isFounder ? 160 : 120}
            height={isFounder ? 160 : 120}
            className="object-cover grayscale transition-transform duration-300 group-hover:scale-110"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <div className="mt-4">
        <h3 className={cn("font-headline font-bold", isFounder ? "text-2xl" : "text-lg")}>{member.name}</h3>
        <p className="text-sm text-muted-foreground">{member.role}</p>
      </div>
    </div>
  );
}