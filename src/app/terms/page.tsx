import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Terms of Use",
  description: "Terms of use for The Layoff Guide (thelayoffguide.com).",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Use</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 7, 2026</p>

      <div className="text-gray-700 leading-relaxed space-y-6">
        <h2 className="text-xl font-bold text-gray-900 mt-8">Acceptance of Terms</h2>
        <p>
          By accessing and using The Layoff Guide (thelayoffguide.com), you accept and
          agree to be bound by these terms. If you do not agree, please do not use the site.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">General Information Only</h2>
        <p>
          The information provided on this site is for general informational purposes only.
          It is not intended as legal, financial, or professional advice. While we strive
          to keep information accurate and up to date, we make no guarantees about the
          completeness, accuracy, or reliability of the content.
        </p>
        <p>
          <strong>Always verify information with your state&apos;s official unemployment
          office.</strong> Unemployment rules, benefit amounts, and procedures change
          frequently. Our guides are starting points, not replacements for official sources.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">Not a Government Site</h2>
        <p>
          The Layoff Guide is not affiliated with, endorsed by, or sponsored by any
          federal, state, or local government agency. We are an independent resource
          created to help people navigate the unemployment process.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">External Links</h2>
        <p>
          Our site contains links to external websites including government agencies,
          job boards, training programs, and other resources. We do not control these
          external sites and are not responsible for their content, accuracy, or
          availability.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">No Warranties</h2>
        <p>
          This site is provided &ldquo;as is&rdquo; without warranties of any kind, either
          express or implied. We do not warrant that the site will be uninterrupted,
          error-free, or free of viruses or other harmful components.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">Limitation of Liability</h2>
        <p>
          In no event shall The Layoff Guide or its creators be liable for any direct,
          indirect, incidental, consequential, or punitive damages arising from your
          use of the site or reliance on any information provided.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">Changes to Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the site after
          changes are posted constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">Contact</h2>
        <p>
          If you have questions about these terms, please visit our{" "}
          <Link href="/about" className="text-blue-600 underline">About page</Link>.
        </p>
      </div>
    </div>
  );
}
