import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repoName = "tec4th-intelligence";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProduction ? `/${repoName}` : "",
  assetPrefix: isProduction ? `/${repoName}/` : "",
};

export default nextConfig;
