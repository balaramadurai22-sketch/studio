import Link from "next/link";
import Logo from "@/components/shared/logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About", href: "/company" },
      { name: "Research", href: "/research" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "API", href: "#" },
      { name: "Pricing", href: "/pricing" },
      { name: "Docs", href: "#" },
      { name: "Security", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Community", href: "#" },
      { name: "Events", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Support", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background text-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-20 md:grid-cols-12 md:px-8">
        {/* Newsletter Section */}
        <div className="col-span-1 flex flex-col items-center text-center md:col-span-5 md:items-start md:text-left">
          <h3 className="font-headline text-xl font-bold">
            Stay Ahead of the Curve
          </h3>
          <p className="mt-2 text-muted-foreground">
            Subscribe to our newsletter for the latest on AI breakthroughs and
            early access to new features.
          </p>
          <div className="mt-6 flex w-full max-w-sm items-center space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button type="submit" variant="outline">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Links Section */}
        <div className="col-span-1 grid grid-cols-2 gap-8 text-center md:col-span-7 md:grid-cols-3 md:text-left">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-headline font-semibold">{section.title}</h4>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row">
            <Logo />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mistral Next. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
