import type { MetadataRoute } from "next";
import { profileData } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profileData.websiteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
