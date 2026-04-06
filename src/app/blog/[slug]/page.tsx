import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { posts, getPostBySlug, getAllPostSlugs } from "@/data/blog";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

function renderMarkdown(content: string) {
  // Simple markdown-to-HTML for our blog content
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl font-bold text-gray-900 mt-8 mb-4"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="text-xl font-bold text-gray-900 mt-6 mb-3"
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- **")) {
      elements.push(
        <li key={i} className="ml-6 mb-2 text-gray-700 list-disc">
          <span
            dangerouslySetInnerHTML={{
              __html: line
                .slice(2)
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        </li>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-6 mb-2 text-gray-700 list-disc">
          {line.slice(2)}
        </li>
      );
    } else if (line.startsWith("---")) {
      elements.push(
        <hr key={i} className="my-8 border-gray-200" />
      );
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p
          key={i}
          className="text-gray-700 mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replace(
                /\[(.*?)\]\((.*?)\)/g,
                '<a href="$2" class="text-blue-600 hover:text-blue-800 underline">$1</a>'
              ),
          }}
        />
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Find prev/next posts
  const allSlugs = getAllPostSlugs();
  const currentIndex = allSlugs.indexOf(slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{post.title}</span>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {post.title}
          </h1>
          <time className="text-sm text-gray-400">{post.date}</time>
        </header>

        {/* Ad Placeholder */}
        <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 mb-8 text-center text-sm text-gray-400">
          Advertisement
        </div>

        <div className="prose-custom">{renderMarkdown(post.content)}</div>

        {/* Ad Placeholder */}
        <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-4 mt-8 mb-8 text-center text-sm text-gray-400">
          Advertisement
        </div>
      </article>

      {/* Disqus Comments */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Discussion</h2>
        <div id="disqus_thread"></div>
        <noscript>
          Please enable JavaScript to view the comments.
        </noscript>
      </section>

      {/* Post Navigation */}
      <nav className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            &larr; {prevPost.title}
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            {nextPost.title} &rarr;
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
