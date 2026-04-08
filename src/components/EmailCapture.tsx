"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-blue-700 text-white">
        <div className="mx-auto max-w-4xl px-4 py-6 text-center">
          <p className="font-medium">You&apos;re in! We&apos;ll email you when your state updates its benefits or we add new resources.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-700 text-white">
      <div className="mx-auto max-w-4xl px-4 py-6">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-3">
          <div className="text-center md:text-left">
            <p className="font-semibold text-sm md:text-base">Get alerted when your state updates its unemployment benefits</p>
            <p className="text-blue-200 text-xs md:text-sm">No spam. Just updates that actually help.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="px-4 py-2 rounded-lg text-gray-900 text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-5 py-2 bg-white text-blue-700 font-semibold rounded-lg text-sm hover:bg-blue-50 transition-colors shrink-0 disabled:opacity-50"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </div>
          {status === "error" && (
            <p className="text-red-200 text-xs">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
