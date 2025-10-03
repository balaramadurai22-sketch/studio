export default function ChatAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex h-screen w-full">{children}</div>;
}
