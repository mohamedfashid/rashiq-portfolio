import type { NextConfig } from "next";

// Only use basePath when NOT on Vercel
// This allows the site to work at root on Vercel, but with /Resume-Nextjs on GitHub Pages
const isVercel = process.env.VERCEL === "1";
const basePath = isVercel ? "" : "/Resume-Nextjs";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;