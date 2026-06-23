/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deployed on Hostinger's GitHub-connected Next.js hosting, which runs the
  // app as a Node server (`next build` + `next start`). Do NOT use
  // `output: "export"` here — `next start` cannot run a static export, which
  // leaves the server serving a stale build with mismatched asset hashes.
  reactStrictMode: true,
  images: {
    // Keep image optimization off so images serve directly without needing
    // `sharp` on the Hostinger Node runtime.
    unoptimized: true,
  },
  // The HTML document is otherwise cached for a full year by the CDN
  // (s-maxage=31536000), so after a deploy stale pages keep serving and
  // reference asset hashes that no longer exist. Cache it briefly instead and
  // revalidate, so new deploys go live within ~a minute. Hashed /_next/static
  // assets keep their own immutable long-cache untouched.
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=60, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
