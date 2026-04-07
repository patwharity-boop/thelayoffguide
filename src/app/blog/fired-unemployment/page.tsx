import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Can I Get Unemployment If I Was Fired?",
  description:
    "Yes, sometimes. If you were fired for misconduct, probably not. If you were let go for performance, you may still qualify. Here's exactly how it works and what to do.",
  keywords: ["fired unemployment", "can I get unemployment if fired", "unemployment after termination", "fired for cause unemployment"],
  openGraph: {
    title: "Can I Get Unemployment If I Was Fired?",
    description: "It depends on why. Here's exactly how it works.",
    type: "article",
  },
};

export default function Page() {
  redirect("/posts/blog-post-5-fired-unemployment.html");
}
