import type { Metadata } from "next";
import { AfrogrooversPressKit } from "@/components/AfrogrooversPressKit";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://afrogroovers.vercel.app";

export const metadata: Metadata = {
  title: "AFROGROOVERS — Afrobeat & Groove Social Experience",
  description:
    "AFROGROOVERS est une expérience afro premium mêlant afrobeats, networking chic, lifestyle et outdoor summer vibes. Soirées afro à Paris et en France.",
  keywords: [
    "AFROGROOVERS", "afrobeats", "afrobeat", "amapiano", "afro-house", "afro-funk",
    "soirée afro", "soirée afrobeats Paris", "événement afro", "afroswing",
    "networking chic", "rooftop", "open air", "party Paris", "highlife",
    "afropop", "afro-rave", "groove", "dancefloor", "expérience afro"
  ],
  alternates: { canonical: `${siteUrl}/afrogroovers` },
  openGraph: {
    title: "AFROGROOVERS — Afrobeat & Groove Social Experience",
    description:
      "Une expérience afro premium, solaire et conviviale qui mixe musique, lifestyle, rencontres et outdoor summer vibes.",
    url: `${siteUrl}/afrogroovers`,
    siteName: "AFROGROOVERS",
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AFROGROOVERS — Afrobeat & Groove Social Experience",
    description:
      "Une expérience afro premium mêlant afrobeats, networking chic et outdoor summer vibes. Soirées afro à Paris."
  }
};

export default function AfrogrooversPage() {
  return <AfrogrooversPressKit />;
}
