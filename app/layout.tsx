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

export const metadata: Metadata = {
  metadataBase: new URL("https://la-bringue.example.com"),
  title: {
    default: "La Bringue — Press Kit Organisateur de Soirées Premium",
    template: "%s — La Bringue"
  },
  description:
    "Press kit premium et immersif pour La Bringue, concept girls-only nightlife pensé pour sponsors, investisseurs, lieux et partenaires médias.",
  openGraph: {
    title: "La Bringue — Press Kit Organisateur de Soirées Premium",
    description:
      "Un mini-site éditorial, cinématographique et premium pour présenter un concept de soirée girls-only.",
    url: "https://la-bringue.example.com",
    siteName: "La Bringue",
    images: [
      {
        url: "/charte%20graphique/charte-graphique-2.jpeg",
        width: 740,
        height: 1600,
        alt: "La Bringue visual identity"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "La Bringue — Press Kit Organisateur de Soirées Premium",
    description: "Concept girls-only nightlife premium, Paris et international.",
    images: ["/charte%20graphique/charte-graphique-2.jpeg"]
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
