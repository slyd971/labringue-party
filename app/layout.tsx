import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { BringueFooter } from "@/components/BringueFooter";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://labringue-party.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "La Bringue — Soirées Girls Only 100% Safe | Press Kit",
    template: "%s | La Bringue Girls Only Party"
  },
  description:
    "La Bringue : soirées 100% femmes, 100% fun, 100% safe. +125K abonnées, +200 soirées en 2025 dans plus de 10 villes en France, Belgique et Luxembourg. Press kit pour sponsors et partenaires.",
  keywords: [
    "La Bringue", "soirée girls only", "soirée femmes", "safe place", "nightlife",
    "Paris", "Lille", "Lyon", "Marseille", "Bordeaux", "Bruxelles", "Luxembourg",
    "press kit", "organisateur soirées", "concept féminin"
  ],
  authors: [{ name: "La Bringue" }],
  creator: "La Bringue",
  openGraph: {
    title: "La Bringue — Soirées Girls Only 100% Safe | Press Kit",
    description:
      "La Bringue : soirées 100% meufs, 100% fun, 100% safe. +125K abonnées, +200 soirées en 2025, présente dans plus de 10 villes en France, Belgique et Luxembourg.",
    url: siteUrl,
    siteName: "La Bringue",
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "La Bringue — Soirées Girls Only 100% Safe | Press Kit",
    description: "100% meufs. 100% fun. 100% safe. +10 villes, France, Belgique & Luxembourg.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${anton.variable} ${inter.variable}`}>
      <body>
        {children}
        <BringueFooter />
      </body>
    </html>
  );
}
