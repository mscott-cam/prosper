import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Prosper Plantscapes — Boutique Plant Design Studio",
  description:
    "Living rooms for working. A boutique plant design studio bringing curated botanical installations to Austin's offices, hospitality, and homes.",
  keywords:
    "plant design, botanical curation, office plants, Austin Texas, plant maintenance, interior plants",
  openGraph: {
    title: "Prosper Plantscapes — Boutique Plant Design Studio",
    description:
      "Living rooms for working. Boutique botanical installations in Austin, Texas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${fraunces.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
