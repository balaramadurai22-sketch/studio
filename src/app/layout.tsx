import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Inter, Space_Grotesk, Source_Code_Pro } from "next/font/google";

const fontBody = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fontHeadline = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const fontCode = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

export const metadata: Metadata = {
  title: "Mistral Next",
  description: "The next generation AI assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-body antialiased",
          fontBody.variable,
          fontHeadline.variable,
          fontCode.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
