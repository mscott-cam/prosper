import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Prosper Plantscapes - Boutique Plant Design Studio",
  description: "Professional botanical curation for Austin's most important spaces. We create custom plant installations for homes and businesses.",
  keywords: "plant design, botanical curation, office plants, Austin Texas, plant maintenance, interior plants",
  openGraph: {
    title: "Prosper Plantscapes - Boutique Plant Design Studio",
    description: "Professional botanical curation for Austin's most important spaces",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
