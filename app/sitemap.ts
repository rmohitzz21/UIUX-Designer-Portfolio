import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { posts } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zulaprajapati.design";

  return [
    { url: base, priority: 1 },
    { url: `${base}/projects`, priority: 0.8 },
    { url: `${base}/journal`, priority: 0.5 },
    ...projects.map((p) => ({ url: `${base}/projects/${p.id}`, priority: 0.7 })),
    ...posts.map((p) => ({ url: `${base}/journal/${p.slug}`, priority: 0.4 })),
  ];
}
