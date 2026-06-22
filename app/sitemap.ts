import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.deevysigns.com";
  // Single-page site — only the canonical homepage is a real, indexable URL.
  // (In-page anchors like #services are sections, not separate pages.)
  return [
    {
      url: `${base}/`,
      lastModified: new Date("2026-06-22"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
