import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/fm-portfolio",
  assetPrefix: "/fm-portfolio/",
};

export default nextConfig;
