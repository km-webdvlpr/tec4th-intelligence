import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repoName = "tec4th-intelligence";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProduction ? `/${repoName}` : "",
  assetPrefix: isProduction ? `/${repoName}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
