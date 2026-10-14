import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/jrowinski3d/mushroom-tracker-data-cdn/**",
      },
    ],
  },
};

export default nextConfig;
