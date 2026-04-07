import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Remote Jobs That Don't Require Experience — 15 Legit Options Hiring Now",
  description: "15 real remote jobs you can get with no prior experience. Customer service, data entry, virtual assistant, and more. No scams, just legitimate opportunities.",
  keywords: ["remote jobs no experience", "work from home jobs hiring", "entry level remote jobs", "remote jobs after layoff"],
};

export default function Page() { redirect("/posts/blog-post-12-remote-jobs-no-experience.html"); }
