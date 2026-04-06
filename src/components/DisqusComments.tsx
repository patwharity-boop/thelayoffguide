"use client";

import { useEffect } from "react";

interface DisqusCommentsProps {
  identifier: string;
  title: string;
  url?: string;
}

export default function DisqusComments({
  identifier,
  title,
}: DisqusCommentsProps) {
  useEffect(() => {
    // Reset Disqus if it's already loaded
    if (typeof window !== "undefined" && (window as any).DISQUS) {
      (window as any).DISQUS.reset({
        reload: true,
        config: function (this: any) {
          this.page.identifier = identifier;
          this.page.title = title;
        },
      });
      return;
    }

    // Load Disqus
    const d = document;
    const s = d.createElement("script");
    s.src = "https://thelayoffguide.disqus.com/embed.js";
    s.setAttribute("data-timestamp", String(+new Date()));
    (d.head || d.body).appendChild(s);

    // Set Disqus config
    (window as any).disqus_config = function (this: any) {
      this.page.identifier = identifier;
      this.page.title = title;
    };
  }, [identifier, title]);

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Share Your Experience
      </h2>
      <p className="text-gray-600 mb-6 text-sm">
        Filed for unemployment in this state? Share tips, ask questions, or help
        others navigate the process.
      </p>
      <div id="disqus_thread"></div>
      <noscript>Please enable JavaScript to view the comments.</noscript>
    </section>
  );
}
