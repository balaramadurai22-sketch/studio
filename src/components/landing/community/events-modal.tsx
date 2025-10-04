"use client";

import * as React from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, ArrowRight } from "lucide-react";
import { events } from "@/lib/events-data";
import { ScrollArea } from "@/components/ui/scroll-area";

type EventsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function EventsModal({ isOpen, onClose }: EventsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
            <div className="flex items-center gap-4 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-foreground">
                    <Calendar className="h-6 w-6 text-foreground" />
                </div>
                <div>
                    <DialogTitle className="text-2xl font-bold font-headline">Upcoming Events</DialogTitle>
                    <DialogDescription>Join our webinars, workshops, and hackathons.</DialogDescription>
                </div>
            </div>
        </DialogHeader>
        <Separator />
        <ScrollArea className="max-h-[60vh] pr-4">
            <div className="space-y-6 py-4">
                {events.map((event) => (
                    <div key={event.id} className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="flex flex-col items-center justify-center rounded-md border p-2 text-center">
                            <span className="text-sm font-bold uppercase text-muted-foreground">{event.date.toLocaleDateString('en-US', { month: 'short' })}</span>
                            <span className="text-2xl font-bold font-headline">{event.date.toLocaleDateString('en-US', { day: '2-digit' })}</span>
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="font-bold font-headline">{event.name}</h3>
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                         <Button variant="outline" size="sm" asChild>
                            <Link href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                                Register <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                ))}
            </div>
        </ScrollArea>
        <Separator />
        <Button variant="outline" onClick={onClose}>Close</Button>
      </DialogContent>
    </Dialog>
  );
}
