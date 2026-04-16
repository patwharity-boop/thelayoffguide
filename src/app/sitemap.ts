import type { MetadataRoute } from "next";
import { states } from "@/data/states";
import { posts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thelayoffguide.com";

  const staticPages = [
    { url: baseUrl, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/resources`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/fast-track-careers`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/budget-template`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/compare`, changeFrequency: "monthly" as const, priority: 0.5 },
    // Blog series
    { url: `${baseUrl}/blog/take-a-breath`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/the-money-talk`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/file-for-unemployment-today`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/long-term-unemployment-rising`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/fired-unemployment`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/cobra-vs-marketplace`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/explain-layoff-interview`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/subscription-purge`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/hidden-benefits`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/calling-unemployment-office`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/employer-contests-claim`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/remote-jobs-no-experience`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog/first-30-days-playbook`, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const statePages = states.map((state) => ({
    url: `${baseUrl}/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages.map((page) => ({
      ...page,
      lastModified: new Date(),
    })),
    ...statePages,
    ...blogPages,
  ];
}
