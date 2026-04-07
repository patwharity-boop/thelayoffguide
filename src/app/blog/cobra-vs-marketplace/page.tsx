import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "COBRA vs Marketplace — Which Health Insurance Should You Pick After a Layoff?",
  description:
    "Lost your job and health insurance? COBRA keeps your current plan but costs a fortune. Marketplace might be cheaper. Here's how to decide — with real numbers.",
  keywords: ["COBRA vs marketplace", "health insurance after layoff", "COBRA cost", "ACA marketplace unemployment", "lost job health insurance"],
  openGraph: {
    title: "COBRA vs Marketplace — Which Health Insurance After a Layoff?",
    description: "COBRA keeps your plan but costs a fortune. Marketplace might be cheaper. Here's how to decide.",
    type: "article",
  },
};

export default function Page() {
  redirect("/posts/blog-post-7-cobra-vs-marketplace.html");
}
