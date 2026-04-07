import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "How to Explain a Layoff in a Job Interview (Without Sounding Desperate)",
  description:
    "The dreaded 'why did you leave your last job?' question. Here's exactly what to say, what not to say, and how to turn a layoff into a strength in interviews.",
  keywords: ["explain layoff interview", "how to talk about layoff", "job interview after layoff", "why did you leave your last job", "laid off interview question"],
  openGraph: {
    title: "How to Explain a Layoff in a Job Interview",
    description: "The dreaded question — here's exactly what to say and what not to say.",
    type: "article",
  },
};

export default function Page() {
  redirect("/posts/blog-post-8-explain-layoff-interview.html");
}
