"use client";

import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
}

export default function NewPostPage() {
  const { data: session, status } = useSession();
  const [categories, setCategories] = useState<Category[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("/api/community/categories")
      .then((r) => r.json())
      .then(setCategories)
      .catch(() => {});
  }, []);

  if (status === "loading") {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center text-gray-500">
        Loading...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="mx-auto max-w-md px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Sign In to Post</h1>
        <p className="text-gray-600 mb-6">
          You need to be signed in to start a discussion.
        </p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/community/new" })}
          className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 rounded-lg px-6 py-4 font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continue with Google
        </button>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !content || !categoryId) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/community/threads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content,
          categoryId: parseInt(categoryId),
          displayName: session!.user?.name || "Anonymous",
          email: session!.user?.email,
        }),
      });
      if (res.ok) setSubmitted(true);
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
            Your post has been submitted for review. A moderator will approve it shortly.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/community" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800">
              Back to Community
            </Link>
            <button
              onClick={() => { setSubmitted(false); setTitle(""); setContent(""); setCategoryId(""); }}
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

      <div className="flex items-center gap-3 mb-6">
        {session.user?.image && (
          <img src={session.user.image} alt="" className="w-10 h-10 rounded-full" />
        )}
        <div>
          <div className="font-medium text-gray-900">{session.user?.name}</div>
          <div className="text-xs text-gray-500">Posting as {session.user?.email}</div>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">Start a Discussion</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a category...</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Post</label>
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
          <p className="text-xs text-gray-400">Posts are reviewed by moderators before appearing.</p>
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
