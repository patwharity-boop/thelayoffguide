import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Unemployment Tips, Guides & Advice",
  description:
    "Practical advice for navigating unemployment. Tips on filing, appealing denials, side hustles, and getting back on your feet.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Blog</h1>
      <p className="text-lg text-gray-600 mb-10">
        Practical advice from people who&apos;ve been through it. No corporate
        fluff — just what you actually need to know.
      </p>

      {/* Ad Placeholder */}
      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 mb-10 text-center text-sm text-gray-400">
        Advertisement
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-700">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-3">{post.description}</p>
            <div className="flex items-center justify-between">
              <time className="text-sm text-gray-400">{post.date}</time>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Read more &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
