import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: '第31回名桜大学祭 | 沖縄県名護市の大学祭',
  description: '沖縄県名護市で開催される「第31回名桜大学祭」の公式サイト。2024年11月23日（土）・24日（日）に名桜大学で開催。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}