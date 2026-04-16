import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/blog/calling-unemployment-office", destination: "/posts/blog-post-10-calling-unemployment-office.html" },
        { source: "/blog/cobra-vs-marketplace", destination: "/posts/blog-post-7-cobra-vs-marketplace.html" },
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
    ];
  },
};

export default nextConfig;
