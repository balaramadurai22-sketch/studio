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
    <footer className="w-full border-t bg-background">
      <div className="w-full flex flex-col items-center justify-center py-12 px-4 md:px-8 lg:px-0">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mistral Next. All rights reserved.
          </p>
        </div>

        {/* Footer Navigation */}
        <nav className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
