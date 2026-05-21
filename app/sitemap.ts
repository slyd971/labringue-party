import type { MetadataRoute } from "next";
import { pressKit } from "@/data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://la-bringue.example.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1
    },
    ...pressKit.cities.map((city) => ({
      url: `${baseUrl}/cities/${city.slug}`,
      lastModified: new Date(),
      priority: 0.8
    }))
  ];
}
