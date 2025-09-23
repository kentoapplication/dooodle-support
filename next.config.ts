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
  
  async headers() {
  return [
    {
      source: '/dooodle-support/.well-known/apple-app-site-association',
      headers: [
        {
          key: 'Content-Type',
          value: 'application/json',
        },
      ],
    },]
  },

  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
