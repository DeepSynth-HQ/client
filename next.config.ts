import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

// Define the base nextConfig
const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
};

// Apply withBundleAnalyzer plugin based on the ANALYZE environment variable
const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// Merge both configurations
export default withBundleAnalyzerConfig(nextConfig);
