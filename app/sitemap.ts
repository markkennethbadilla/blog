import type { MetadataRoute } from "next"
import { articles } from "@/lib/articles"

const BASE = "https://blog.elunari.uk"

export default function sitemap(): MetadataRoute.Sitemap {
  const articleEntries = articles.map((a) => ({
    url: `${BASE}/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...articleEntries,
  ]
}
