"use client";

import * as React from "react";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { companyInitiatives, teamMembers, type CompanyInitiative } from "@/lib/company-data";
import InitiativeCard from "@/components/company/initiative-card";
import TeamMemberCard from "@/components/company/team-member-card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CompanyPage() {
  const founder = teamMembers.find(m => m.id === 'founder-bala');
  const coreTeam = teamMembers.filter(m => m.id !== 'founder-bala');

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto py-20 text-center">
          <h1 className="font-headline text-5xl font-bold tracking-tight">
            TECHISMUST Innovation Lab
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Established 2021
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-foreground/80 leading-relaxed">
            Our mission is to harness the power of artificial intelligence to build a more creative, equitable, and sustainable future. We are pioneers, inventors, and artists, united by a vision to solve humanity's greatest challenges through groundbreaking technology and sophisticated design.
          </p>
        </section>

        <Separator className="my-8" />
        
        {/* Founder & Team Section */}
        <section className="container mx-auto py-20 text-center">
          <h2 className="font-headline text-4xl font-bold">Roots of Innovation</h2>
          {founder && (
            <div className="mt-12 flex flex-col items-center">
              <TeamMemberCard member={founder} isFounder />
            </div>
          )}
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {coreTeam.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Initiatives Section */}
        <section className="container mx-auto py-20 text-center">
          <h2 className="font-headline text-4xl font-bold">Our Core Initiatives</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Explore the divisions and projects driving the future of AI.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {companyInitiatives.map((initiative) => (
              <Link href={`/company/${initiative.id}`} key={initiative.id}>
                  <InitiativeCard initiative={initiative} />
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
