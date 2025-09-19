import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages用の静的エクスポート設定
  output: 'export',
  
  // GitHub Pagesのリポジトリ名に合わせたパス設定
  basePath: '/dooodle-support',
  assetPrefix: '/dooodle-support/',
  
  // 静的ファイル生成のための設定
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // 画像最適化を無効（GitHub Pagesでは使用不可）
  images: {
    unoptimized: true,
  },
  
  // 静的エクスポート時に必要な設定
  experimental: {
    // 必要に応じて追加
  },
  
  // TypeScript設定
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint設定
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
