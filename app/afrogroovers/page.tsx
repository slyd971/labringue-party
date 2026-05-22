import type { Metadata } from "next";
import { AfrogrooversPressKit } from "@/components/AfrogrooversPressKit";

export const metadata: Metadata = {
  title: "AFROGROOVERS — Afrobeat & Groove Social Experience",
  description:
    "AFROGROOVERS est une experience afro premium melant afrobeats, networking chic, lifestyle et vibes outdoor.",
  openGraph: {
    title: "AFROGROOVERS — Afrobeat & Groove Social Experience",
    description: "Afro luxury summer aesthetic, DJ lineup, events, videos and gallery.",
    type: "website"
  }
};

export default function AfrogrooversPage() {
  return <AfrogrooversPressKit />;
}
