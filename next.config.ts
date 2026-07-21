import type { NextConfig } from "next";

// Detect if running inside GitHub Actions workflow
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
let repo = "";

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  // Extracts the repo name (e.g. 'vectr-landing-main') from 'owner/vectr-landing-main'
  repo = process.env.GITHUB_REPOSITORY.replace(/^.*?\//, "");
}

const nextConfig: NextConfig = {
  // Sets Next.js to export static assets to the /out folder
  output: "export",

  // Adjusts routing prefix when hosted under username.github.io/repo-name
  basePath: repo ? `/${repo}` : "",
  assetPrefix: repo ? `/${repo}/` : "",

  // GitHub Pages lacks Next.js Image Optimization server runtime support
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
