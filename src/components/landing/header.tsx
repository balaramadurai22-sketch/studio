import Link from "next/link";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex flex-1 items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/chat">Sign In</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
