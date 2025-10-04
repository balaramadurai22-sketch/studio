"use client";
import * as React from "react";
import { user } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, User as UserIcon, Bug, Lightbulb } from "lucide-react";
import BugReportForm from "./bug-report-form";
import FeatureRequestForm from "./feature-request-form";

export default function UserProfile() {
  const [isBugReportOpen, setIsBugReportOpen] = React.useState(false);
  const [isFeatureRequestOpen, setIsFeatureRequestOpen] = React.useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex w-full items-center justify-start gap-2 p-2 text-left">
            <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            <div className="flex flex-col">
              <span className="truncate font-medium">{user.name}</span>
              <span className="text-xs text-muted-foreground">Free Plan</span>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" align="start" className="w-64">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsBugReportOpen(true)}>
            <Bug className="mr-2 h-4 w-4" />
            <span>Bug Report</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsFeatureRequestOpen(true)}>
            <Lightbulb className="mr-2 h-4 w-4" />
            <span>Feature Request</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <BugReportForm 
        isOpen={isBugReportOpen}
        onClose={() => setIsBugReportOpen(false)}
      />

      <FeatureRequestForm
        isOpen={isFeatureRequestOpen}
        onClose={() => setIsFeatureRequestOpen(false)}
      />
    </>
  );
}
