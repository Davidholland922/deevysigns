/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — outputs a plain `out/` folder that any host
  // (Hostinger shared hosting, etc.) can serve. No Node.js server required.
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    // The Next.js image optimizer needs a server, so disable it for static export.
    unoptimized: true,
  },
};

module.exports = nextConfig;
