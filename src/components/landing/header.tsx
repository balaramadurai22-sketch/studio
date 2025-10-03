import Link from "next/link";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Products", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Research", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="flex items-center w-full">
            <Link href="/" className="mr-auto">
              <Logo />
            </Link>
          <nav className="hidden md:flex items-center justify-center gap-6 text-sm font-medium text-muted-foreground ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
             <Button variant="outline" asChild>
              <Link href="#">Try the API</Link>
            </Button>
            <Button asChild>
              <Link href="#">Talk to sales</Link>
            </Button>
          </nav>
          <div className="flex items-center justify-end gap-4 md:hidden">
             <Button variant="outline" asChild>
              <Link href="#">Try the API</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
