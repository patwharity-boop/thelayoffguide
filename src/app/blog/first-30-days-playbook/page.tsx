import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "The First 30 Days After a Layoff — A Day-by-Day Playbook",
  description: "A complete day-by-day guide for your first month after losing your job. What to do on day 1, week 1, week 2, and beyond. The playbook I wish I had.",
  keywords: ["first 30 days after layoff", "layoff playbook", "what to do after losing job", "first month unemployed guide"],
};

export default function Page() { redirect("/posts/blog-post-13-first-30-days-playbook.html"); }
