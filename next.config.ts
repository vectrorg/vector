import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sets Next.js to export static assets to the /out folder
  output: "export",

  // Hardcoded for GitHub Pages: vectrorg.github.io/vector
  basePath: "/vector",
  assetPrefix: "/vector/",

  // GitHub Pages lacks Next.js Image Optimization server runtime support
  images: {
    unoptimized: true,
  },
};

export default nextConfig;