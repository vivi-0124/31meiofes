import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: '第31回名桜大学祭',
    template: '%s | 名桜大学祭',
  },
  description: '沖縄県名護市で開催される「第31回名桜大学祭」の公式サイト。2024年11月23日（土）・24日（日）に名桜大学で開催。',
  verification: {
    google: '68LxJFsEAfu4-6KglvNuGn8GGJ5SFjIjZv-J5WtoTIs',
  },
  robots: {
    'max-image-preview': 'large',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}