import type { Metadata } from "next";
import { BringuePressKit } from "@/components/BringuePressKit";

export const metadata: Metadata = {
  title: "La Bringue — La plus grosse soirée réservée aux femmes",
  description:
    "La Bringue c'est la soirée pensée pour les femmes et par les femmes : un moment entre filles dans un espace safe pour danser, chanter, s'amuser et rencontrer d'autres Bringueuses !",
  openGraph: {
    title: "La Bringue — La plus grosse soirée réservée aux femmes",
    description:
      "Soirées en non-mixité depuis 2019. Un espace safe pour faire la fête librement.",
    type: "website",
  },
};

export default function Home() {
  return <BringuePressKit />;
}
