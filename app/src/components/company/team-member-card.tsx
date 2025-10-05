"use client";

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
  return (
    <div className={cn("flex flex-col items-center text-center", isFounder && "w-full")}>
      <div className="mt-4">
        <h3 className={cn("font-headline font-bold", isFounder ? "text-2xl" : "text-lg")}>{member.name}</h3>
        <p className="text-sm text-muted-foreground">{member.role}</p>
      </div>
    </div>
  );
}
