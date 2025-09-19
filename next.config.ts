import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages用の設定
  output: 'export',
  basePath: '/dooodle-support',
  assetPrefix: '/dooodle-support/',
  
  // 静的サイト生成
  trailingSlash: true,
  
  // 画像最適化を無効（GitHub Pagesでは使用不可）
  images: {
    unoptimized: true
  },
  
  // 出力ディレクトリ（明示的に指定）
  distDir: '.next',
  
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
