import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The Layoff Guide (thelayoffguide.com).",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 7, 2026</p>

      <div className="text-gray-700 leading-relaxed space-y-6">
        <h2 className="text-xl font-bold text-gray-900 mt-8">Overview</h2>
        <p>
          The Layoff Guide (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
          operates thelayoffguide.com. This page informs you of our policies regarding
          the collection, use, and disclosure of personal information when you use our site.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">Information We Collect</h2>
        <p>
          We do not directly collect personal information from visitors. However, third-party
          services we use may collect information automatically:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Google AdSense:</strong> Displays advertisements on our site. Google may use cookies
            and similar technologies to serve ads based on your prior visits to this or other websites.
            You can opt out of personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>.</li>
          <li><strong>Vercel Analytics:</strong> Our hosting provider may collect anonymous usage data
            such as page views, device type, and geographic region.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8">Cookies</h2>
        <p>
          Third-party vendors, including Google, use cookies to serve ads based on a
          user&apos;s prior visits to this website or other websites. Google&apos;s use of
          advertising cookies enables it and its partners to serve ads to users based on
          their visit to this site and/or other sites on the Internet.
        </p>
        <p>
          You may opt out of personalized advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>. Alternatively, you can opt out of third-party vendor cookies by visiting{" "}
          <a href="https://optout.aboutads.info/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            aboutads.info
          </a>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">External Links</h2>
        <p>
          Our site contains links to external websites (government unemployment offices,
          job boards, training programs, etc.). We are not responsible for the privacy
          practices of these external sites. We encourage you to review the privacy
          policies of any site you visit.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">Children&apos;s Privacy</h2>
        <p>
          Our site is not directed at children under 13. We do not knowingly collect
          personal information from children under 13.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be posted
          on this page with an updated date.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">Contact</h2>
        <p>
          If you have questions about this privacy policy, please visit our{" "}
          <Link href="/about" className="text-blue-600 underline">About page</Link>.
        </p>
      </div>
    </div>
  );
}
