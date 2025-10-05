import "./chat-theme.css";

export default function ChatAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="dark flex h-screen w-full flex-row bg-background text-foreground">{children}</div>;
}
