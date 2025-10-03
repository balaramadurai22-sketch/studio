import { SidebarProvider } from "@/components/ui/sidebar";

export default function ChatAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider
      defaultOpen
      collapsible="icon"
      variant="sidebar"
      side="left"
    >
      {children}
    </SidebarProvider>
  );
}
