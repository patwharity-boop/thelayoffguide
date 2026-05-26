import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thelayoffguide.com"),
  title: {
    default: "The Layoff Guide, Everything You Need After Losing Your Job",
    template: "%s | The Layoff Guide",
  },
  description:
    "Free unemployment filing guide for all 50 states. Step-by-step instructions, weekly benefit amounts, direct filing links, SNAP and health insurance resources, fast-track career paths, and more. No paywalls, no signup required.",
  openGraph: {
    type: "website",
    siteName: "The Layoff Guide",
    title:
      "The Layoff Guide, Everything You Need After Losing Your Job",
    description:
      "Free unemployment filing guide for all 50 states. Plain-English instructions, interactive benefit estimator, personal claim tracker, and field notes from people who've been through it.",
    url: "https://www.thelayoffguide.com",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "The Layoff Guide",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "The Layoff Guide",
    description:
      "Free unemployment filing guide for all 50 states. Built by someone who's been through it.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {/* Third-party scripts. next/script with strategy="afterInteractive"
            defers loading until after page interactivity, which lifts LCP
            without hurting GA pageview accuracy or AdSense fill rate. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-008LYB41HQ"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-008LYB41HQ');
          `}
        </Script>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5958895635970152"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-3 md:py-6 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">
            <Link href="/" className="hover:opacity-90 shrink-0">
              {/* Logo is a 1024x1024 PNG; Next/Image generates responsive
                  WebP variants and serves the right size for each viewport.
                  priority skips lazy-loading since the logo is above-the-fold
                  and contributes to LCP. */}
              <Image
                src="/logo.png"
                alt="The Layoff Guide"
                width={1024}
                height={1024}
                className="h-14 md:h-24 w-auto"
                priority
              />
            </Link>
            <nav className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                All States
              </Link>
              <Link href="/my-claim" className="text-gray-600 hover:text-gray-900">
                My Claim
              </Link>
              <Link href="/field-notes" className="text-gray-600 hover:text-gray-900">
                Field Notes
              </Link>
              <Link href="/fast-track-careers" className="text-gray-600 hover:text-gray-900">
                Careers
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-gray-900">
                Resources
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>
        <Analytics />

        <footer className="border-t border-gray-200 bg-gray-50 mt-16">
          <div className="mx-auto max-w-4xl px-4 py-8 text-center text-sm text-gray-500">
            <div className="flex justify-center gap-6 mb-4 flex-wrap">
              <Link href="/about" className="text-gray-500 hover:text-gray-700">About</Link>
              <Link href="/my-claim" className="text-gray-500 hover:text-gray-700">My Claim</Link>
              <Link href="/eligibility" className="text-gray-500 hover:text-gray-700">Eligibility</Link>
              <Link href="/timeline" className="text-gray-500 hover:text-gray-700">Timeline</Link>
              <Link href="/compare" className="text-gray-500 hover:text-gray-700">Compare States</Link>
              <Link href="/field-notes" className="text-gray-500 hover:text-gray-700">Field Notes</Link>
              <Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link>
              <Link href="/resources" className="text-gray-500 hover:text-gray-700">Resources</Link>
              <Link href="/fast-track-careers" className="text-gray-500 hover:text-gray-700">Careers</Link>
              <Link href="/budget-template" className="text-gray-500 hover:text-gray-700">Budget Template</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-700">Privacy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-700">Terms</Link>
            </div>
            <p>
              The Layoff Guide provides general information about unemployment
              benefits and post-layoff resources. This site is not affiliated with any government agency.
              Always verify information with your state&apos;s unemployment office.
            </p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} The Layoff Guide (thelayoffguide.com). All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
