import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.deevysigns.com";
  return ["", "#services", "#projects", "#about", "#contact"].map((path) => ({
    url: `${base}/${path}`,
    lastModified: new Date("2026-06-22"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
