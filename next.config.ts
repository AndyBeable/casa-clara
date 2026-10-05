import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/y8mvqdizqkqy/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
