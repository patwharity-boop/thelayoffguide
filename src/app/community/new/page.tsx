"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
}

export default function NewPostPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Load saved user info
    const savedName = localStorage.getItem("tlg_name") || "";
    const savedEmail = localStorage.getItem("tlg_email") || "";
    setDisplayName(savedName);
    setEmail(savedEmail);

    // Fetch categories
    fetch("/api/community/categories")
      .then((r) => r.json())
      .then(setCategories)
      .catch(() => {});
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !content || !categoryId || !displayName || !email) return;

    setSubmitting(true);

    // Save user info for next time
    localStorage.setItem("tlg_name", displayName);
    localStorage.setItem("tlg_email", email);

    try {
      const res = await fetch("/api/community/threads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content,
          categoryId: parseInt(categoryId),
          displayName,
          email,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <div className="bg-green-50 border border-green-200 rounded-xl p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Post Submitted!</h1>
          <p className="text-gray-600 mb-6">
            Your post has been submitted for review. A moderator will approve it
            shortly. Thanks for contributing to the community!
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/community"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800"
            >
              Back to Community
            </Link>
            <button
              onClick={() => {
                setSubmitted(false);
                setTitle("");
                setContent("");
                setCategoryId("");
              }}
              className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50"
            >
              Write Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/community" className="hover:text-blue-600">Community</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">New Post</span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">Start a Discussion</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* User Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="How you want to appear"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-gray-400">(not shown publicly)</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a category...</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's on your mind?"
            required
            maxLength={255}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Body */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Post
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your experience, ask a question, or help someone out..."
            required
            rows={8}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">
            Posts are reviewed by moderators before appearing.
          </p>
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit Post"}
          </button>
        </div>
      </form>
    </div>
  );
}
