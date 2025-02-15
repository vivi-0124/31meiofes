/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ビルド時のESLintチェックを無効化（開発時のみチェック）
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
};

module.exports = nextConfig;
