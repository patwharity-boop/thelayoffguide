import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/blog/calling-unemployment-office", destination: "/posts/blog-post-10-calling-unemployment-office.html" },
        { source: "/blog/cobra-vs-marketplace", destination: "/posts/blog-post-7-cobra-vs-marketplace.html" },
        { source: "/blog/unemployment-and-taxes", destination: "/posts/blog-post-14-unemployment-taxes-1099-g.html" },
        { source: "/blog/negotiate-severance", destination: "/posts/blog-post-15-negotiate-severance.html" },
        { source: "/blog/explain-layoff-interview", destination: "/posts/blog-post-8-explain-layoff-interview.html" },
        { source: "/blog/hidden-benefits", destination: "/posts/blog-post-9-hidden-benefits.html" },
        { source: "/blog/remote-jobs-no-experience", destination: "/posts/blog-post-12-remote-jobs-no-experience.html" },
        { source: "/blog/first-30-days-playbook", destination: "/posts/blog-post-13-first-30-days-playbook.html" },
        { source: "/blog/employer-contests-claim", destination: "/posts/blog-post-11-employer-contests-claim.html" },
        { source: "/blog/subscription-purge", destination: "/posts/blog-post-6-subscription-purge.html" },
        { source: "/blog/fired-unemployment", destination: "/posts/blog-post-5-fired-unemployment.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    return [
      { source: "/blog/fast-track-careers", destination: "/fast-track-careers", permanent: true },
      // Forum removed 2026-05-06 (zero signups, generated thin-content URLs
      // that hurt AdSense scoring). 301 redirect any indexed forum URL to
      // homepage so Google deindexes them cleanly.
      { source: "/community", destination: "/", permanent: true },
      { source: "/community/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
