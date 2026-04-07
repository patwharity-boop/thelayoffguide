import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "The Subscription Purge: How I Saved $347/Month in One Afternoon",
  description: "Most people are paying $200-400/month in subscriptions they forgot about. Here's how to find and cancel them all — and what that money looks like over 6 months.",
  keywords: ["cancel subscriptions save money", "subscription audit", "save money after layoff", "cut expenses unemployment"],
};

export default function Page() { redirect("/posts/blog-post-6-subscription-purge.html"); }
