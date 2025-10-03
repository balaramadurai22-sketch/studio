import Link from "next/link";
import Logo from "@/components/shared/logo";

const footerLinks = [
  { name: "About", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Documentation", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Terms of Service", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Logo />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mistral Next. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
