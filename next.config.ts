import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/dooodle-support',
  assetPrefix: '/dooodle-support/',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  
  async rewrites() {
    return [
      {
        "source": "!.well-known/**",
        "destination": "index.html"
      },
      {
        "source": ".well-known/apple-app-site-association",
        "destination": ".well-known/apple-app-site-association.json"
      }
    ]
  },

  async headers() {
    return [
      {
        source: '/dooodle-support/.well-known/apple-app-site-association.json',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ]
  },

  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
