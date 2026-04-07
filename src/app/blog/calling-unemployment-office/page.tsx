import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "I Spent 8 Hours Calling the Unemployment Office — Here's What Works",
  description: "Can't get through to the unemployment office? The Governor's office trick, best times to call, and other strategies that actually work. From someone who spent a week trying.",
  keywords: ["cant get through unemployment office", "unemployment office phone tips", "call governors office unemployment", "unemployment phone busy"],
};

export default function Page() { redirect("/posts/blog-post-10-calling-unemployment-office.html"); }
