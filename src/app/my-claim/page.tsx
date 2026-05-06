import type { Metadata } from "next";
import Link from "next/link";
import MyClaimClient from "./MyClaimClient";
import AuthorBlock from "@/components/AuthorBlock";

export const metadata: Metadata = {
  title: "My Claim: Track Your Unemployment Benefits Week by Week",
  description:
    "A free personal dashboard for your unemployment claim. Enter your filing date and state once. See where you are in the journey, what's normal at this stage, and what to do next. All data stays in your browser.",
};

export default function MyClaimPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          All States
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">My Claim</span>
      </nav>

      <AuthorBlock variant="compact" />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          My Claim
        </h1>
        <p className="text-lg text-gray-600">
          A simple personal dashboard for your unemployment claim. Enter your
          filing date and state once. See where you are, what&apos;s normal at
          this stage, and what to do next.
        </p>
      </header>

      <MyClaimClient />

      <section className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-2">
          About this tracker
        </h2>
        <p className="text-sm text-gray-700 mb-2">
          The unemployment process is opaque from the inside. State portals
          show you cryptic statuses with no context. This tracker lives at the
          one question every claimant asks every week: <em>is this
          normal, and what now?</em>
        </p>
        <p className="text-sm text-gray-700">
          All data is stored only in your browser via{" "}
          <code className="text-xs bg-white px-1 py-0.5 border border-gray-200 rounded">
            localStorage
          </code>
          . We have no servers, no accounts, and no analytics on what you
          enter. Clearing your browser data, or clicking <em>Forget my
          claim</em>, removes it permanently.
        </p>
      </section>
    </div>
  );
}
