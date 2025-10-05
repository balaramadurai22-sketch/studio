"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Code, Users } from "lucide-react";
import Link from "next/link";
import ForumModal from "./community/forum-modal";
import EventsModal from "./community/events-modal";

const communityLinks = [
  {
    id: "forum",
    icon: <Users />,
    title: "Join our Forum",
    description: "Engage with a vibrant community of AI developers and enthusiasts. Ask questions, share projects, and collaborate.",
    buttonText: "Visit Forum",
  },
  {
    id: "events",
    icon: <Calendar />,
    title: "Upcoming Events",
    description: "Check out our schedule of webinars, workshops, and hackathons. Learn from experts and network with peers.",
    buttonText: "View Events",
  },
  {
    id: "github",
    icon: <Code />,
    title: "Contribute on GitHub",
    description: "Explore our open-source projects, contribute to the codebase, and help us build the future of AI.",
    buttonText: "Go to GitHub",
    href: "https://github.com",
  },
];

export default function JoinCommunity() {
  const [isForumModalOpen, setIsForumModalOpen] = React.useState(false);
  const [isEventsModalOpen, setIsEventsModalOpen] = React.useState(false);

  const handleButtonClick = (id: string) => {
    if (id === 'forum') {
      setIsForumModalOpen(true);
    } else if (id === 'events') {
      setIsEventsModalOpen(true);
    }
  };


  return (
    <>
      <section id="community" className="w-full py-20 md:py-32">
        <div className="container mx-auto flex flex-col items-center text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Community & Collaboration
            </h2>
            <p className="mt-4 text-muted-foreground">
              Connect with fellow techies, contribute to open-source projects, and join our events to learn and grow.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {communityLinks.map((link) => (
              <Card key={link.title} className="flex flex-col items-center text-center">
                <CardHeader className="flex flex-col items-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg border bg-background">
                    <div className="h-8 w-8 text-foreground">{link.icon}</div>
                  </div>
                  <CardTitle className="font-headline">{link.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{link.description}</p>
                </CardContent>
                <div className="p-6 pt-0 w-full">
                  {link.href ? (
                     <Button variant="outline" className="w-full" asChild>
                        <Link href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.buttonText}
                        </Link>
                     </Button>
                  ) : (
                    <Button variant="outline" className="w-full" onClick={() => handleButtonClick(link.id)}>
                      {link.buttonText}
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <ForumModal isOpen={isForumModalOpen} onClose={() => setIsForumModalOpen(false)} />
      <EventsModal isOpen={isEventsModalOpen} onClose={() => setIsEventsModalOpen(false)} />
    </>
  );
}
