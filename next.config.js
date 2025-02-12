const fs = require('fs');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    // ビルド時のESLintチェックを無効化（開発時のみチェック）
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
};

// サイトマップ生成関数
const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://31meiofes.vercel.app/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://31meiofes.vercel.app/news</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://31meiofes.vercel.app/timetable</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  // publicディレクトリが存在しない場合は作成
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // サイトマップを書き出し
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
};

module.exports = {
  ...nextConfig,
  // ビルド時にサイトマップを生成
  webpack: (config, { isServer }) => {
    if (isServer) {
      generateSitemap();
    }
    return config;
  },
};
