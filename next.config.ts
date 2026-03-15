import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/backup_portfolio",
  assetPrefix: "/backup_portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
