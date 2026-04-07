import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "The Hidden Benefits You're Probably Not Claiming",
  description: "SNAP, WIC, LIHEAP, Lifeline, Medicaid — most people don't know they qualify for these programs after a layoff. Here's what you're missing and how to apply.",
  keywords: ["hidden benefits unemployment", "SNAP after layoff", "government assistance programs", "benefits you dont know about"],
};

export default function Page() { redirect("/posts/blog-post-9-hidden-benefits.html"); }
