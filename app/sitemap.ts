import type { MetadataRoute } from "next";
import { pressKit } from "@/data/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://labringue-party.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), priority: 1, changeFrequency: "weekly" },
    ...pressKit.cities.map((city) => ({
      url: `${siteUrl}/cities/${city.slug}`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly" as const
    }))
  ];
}
