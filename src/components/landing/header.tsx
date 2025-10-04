import Link from "next/link";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Products", href: "/products" },
  { name: "Research", href: "/research" },
  { name: "Resources", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-0">
        {/* Header Inner Container */}
        <div className="flex w-full max-w-screen-2xl items-center justify-center gap-10">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center justify-center gap-6 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="#">Try the API</Link>
            </Button>
            <Button asChild>
              <Link href="#">Talk to sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
