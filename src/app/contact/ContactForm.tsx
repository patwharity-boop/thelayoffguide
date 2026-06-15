"use client";

import { useState } from "react";

// Web3Forms access key. This is PUBLIC by design: it only permits submitting a
// message to the destination Gmail configured on the Web3Forms account. It cannot
// read submissions or be used to spam the inbox, so it is safe to ship in the client.
const ACCESS_KEY = "19491550-419d-45c6-9ea6-ffa45d3c6889";

const CATEGORIES = [
  "Something's broken (a bug)",
  "Feature or improvement idea",
  "Site info correction (wrong/outdated)",
  "Something else",
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState(""); // honeypot: humans leave this empty
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `[The Layoff Guide] ${category || "Contact form"}`,
          from_name: name ? `${name} (Layoff Guide)` : "Layoff Guide visitor",
          category,
          name,
          email,
          message,
          page_url:
            typeof window !== "undefined" ? window.location.href : "",
          botcheck,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-teal-200 bg-teal-50 p-6 text-gray-800">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Thanks, got it.</h2>
        <p className="leading-relaxed">
          Your message is on its way and a real person will read it. If you left
          an email, we may reply. Appreciate you taking the time to make the site
          better.
        </p>
      </div>
    );
  }

  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";
  const fieldClass =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-base text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* honeypot: hidden from people, tempting to bots; if filled, Web3Forms drops it */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        value={botcheck}
        onChange={(e) => setBotcheck(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="category" className={labelClass}>
          What&apos;s this about?
        </label>
        <select
          id="category"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={fieldClass}
        >
          <option value="" disabled>
            Choose one&hellip;
          </option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Your message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what's broken, what you'd add, or what looks outdated. The more specific, the better (a page link helps)."
          className={fieldClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email{" "}
            <span className="font-normal text-gray-400">
              (optional, so we can reply)
            </span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending that. Please try again in a moment.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-block rounded-lg bg-teal-500 px-8 py-3 font-semibold text-gray-900 transition-colors hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
