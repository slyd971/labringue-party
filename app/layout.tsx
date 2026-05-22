import type { Metadata } from "next";
import { Anton, Bebas_Neue, Inter, Oswald } from "next/font/google";
import "./globals.css";

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

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap"
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://afrogroovers.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AFROGROOVERS — Afrobeat & Groove Social Experience",
    template: "%s | AFROGROOVERS"
  },
  description:
    "AFROGROOVERS est une expérience afro premium mêlant afrobeats, networking chic, lifestyle et outdoor summer vibes. Soirées afro à Paris et en France.",
  keywords: [
    "AFROGROOVERS", "afrobeats", "afrobeat", "amapiano", "afro-house", "afro-funk",
    "soirée afro", "soirée afrobeats Paris", "événement afro", "afroswing",
    "networking chic", "rooftop", "open air", "party Paris", "highlife",
    "afropop", "afro-rave", "groove", "dancefloor", "expérience afro"
  ],
  authors: [{ name: "AFROGROOVERS" }],
  creator: "AFROGROOVERS",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "AFROGROOVERS — Afrobeat & Groove Social Experience",
    description:
      "Une expérience afro premium, solaire et conviviale qui mixe musique, lifestyle, rencontres et outdoor summer vibes.",
    url: siteUrl,
    siteName: "AFROGROOVERS",
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AFROGROOVERS — Afrobeat & Groove Social Experience",
    description:
      "Une expérience afro premium mêlant afrobeats, networking chic et outdoor summer vibes. Soirées afro à Paris."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${anton.variable} ${inter.variable} ${bebas.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
