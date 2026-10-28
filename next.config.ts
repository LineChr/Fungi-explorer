import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/jrowinski3d/mushroom-tracker-data-cdn/**",
      },
      {
        protocol: "https",
        hostname: "mushroomobserver.org",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "commons.wikimedia.org",
      }
    ],
  },
};

export default nextConfig;
