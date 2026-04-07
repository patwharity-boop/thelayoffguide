import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "What to Do When Your Employer Contests Your Unemployment Claim",
  description: "Your employer contested your claim — now what? Don't panic. Here's how the appeal process works, what to expect at the hearing, and how to win.",
  keywords: ["employer contests unemployment", "unemployment appeal", "unemployment hearing", "employer fought unemployment claim"],
};

export default function Page() { redirect("/posts/blog-post-11-employer-contests-claim.html"); }
