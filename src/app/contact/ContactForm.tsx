"use client";

import { useEffect, useState } from "react";

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
  // When a reader clicks "Report a correction" from a state or blog page, we deep
  // link here with ?category=correction&ref=/nevada. Read those on mount (via
  // window.location to avoid a useSearchParams Suspense boundary on this static
  // page): pre-select the correction category and remember which page they were
  // on, so the emailed report says exactly what page is wrong. No email needed
  // from the reader.
  const [reportedPage, setReportedPage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("category") === "correction") {
      setCategory("Site info correction (wrong/outdated)");
    }
    const ref = params.get("ref");
    if (ref && ref.startsWith("/")) setReportedPage(ref);
  }, []);

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
          reported_page: reportedPage,
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

      {reportedPage && (
        <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-gray-800">
          You&apos;re reporting a possible issue on{" "}
          <span className="font-semibold">{reportedPage}</span>. Tell us what looks
          wrong or outdated below, and a link to the correct info if you have one.
          No email needed unless you&apos;d like a reply.
        </div>
      )}

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
