import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "You Don't Need a Degree — 15 High-Paying Careers You Can Start in 12 Weeks or Less",
  description:
    "15 careers that pay $40K-$95K+ with training times from 1 day to 12 weeks. Phlebotomist, CDL driver, insurance adjuster, drone pilot, and more. No degree required.",
  keywords: ["high paying jobs no degree", "quick certifications", "careers after layoff", "fast track careers", "jobs 12 weeks training"],
  openGraph: {
    title: "You Don't Need a Degree — 15 High-Paying Careers in 12 Weeks or Less",
    description: "15 careers that pay well with short training. No degree required.",
    type: "article",
    images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"],
  },
};

export default function Page() {
  redirect("/posts/blog-post-4-fast-track-careers.html");
}
