"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Newspaper, Music, Calendar, HelpCircle, Info } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';

export function Header() {
  const pathname = usePathname();
  const isTopPage = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(!isTopPage);

  useEffect(() => {
    const handleScroll = () => {
      if (isTopPage) {
        setIsScrolled(window.scrollY > 0);
      }
    };

    if (isTopPage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isTopPage]);

  // モバイル・タブレットナビゲーション用のアイテム
  const mobileNavItems = [
    { name: 'HOME', url: isTopPage ? '#top' : '/', icon: Home },
    { name: 'NEWS', url: '/news', icon: Newspaper },
    { name: 'ARTIST', url: isTopPage ? '#artists' : '/#artists', icon: Music },
    { name: 'TIMETABLE', url: '/timetable', icon: Calendar },
    { name: 'INFO', url: isTopPage ? '#information' : '/#information', icon: Info },
    { name: 'FAQ', url: isTopPage ? '#faq' : '/#faq', icon: HelpCircle },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/" 
              className={`font-bold text-lg ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              第31回名桜大学祭
            </Link>
            
            {/* デスクトップナビゲーション */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/news"
                className={`transition-colors hover:text-blue-400 ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                NEWS
              </Link>
              <Link
                href={isTopPage ? "#artists" : "/#artists"}
                className={`transition-colors hover:text-blue-400 ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                ARTIST
              </Link>
              <Link
                href="/timetable"
                className={`transition-colors hover:text-blue-400 ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                TIMETABLE
              </Link>
              <Link
                href={isTopPage ? "#information" : "/#information"}
                className={`transition-colors hover:text-blue-400 ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                INFORMATION
              </Link>
              <Link
                href={isTopPage ? "#faq" : "/#faq"}
                className={`transition-colors hover:text-blue-400 ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* モバイル・タブレットナビゲーション */}
      <div className="lg:hidden">
        <NavBar items={mobileNavItems} className="mb-8" />
      </div>
    </>
  );
}