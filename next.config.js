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
};

module.exports = nextConfig;
