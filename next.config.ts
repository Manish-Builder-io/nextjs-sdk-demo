import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  /* config options here */
  transpilePackages: ["@builder.io/sdk-react-nextjs"],
});

export default nextConfig;
