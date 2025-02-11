"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Header() {
  const pathname = usePathname();
  const isTopPage = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(!isTopPage);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const links = [
    { href: "/news", label: "NEWS", isPage: true },
    { href: "#artists", label: "ARTIST" },
    { href: "/timetable", label: "TIMETABLE", isPage: true },
    { href: "#information", label: "INFORMATION" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className={`font-bold text-lg ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={handleLinkClick}
          >
            第31回名桜大学祭
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.isPage ? link.href : isTopPage ? link.href : `/${link.href}`}
                className={`transition-colors hover:text-blue-400 ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* モバイルナビゲーション */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className={`md:hidden ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[280px] sm:w-[320px] bg-white/80 backdrop-blur-sm">
              <nav className="flex flex-col space-y-4 mt-8">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.isPage ? link.href : isTopPage ? link.href : `/${link.href}`}
                    className="text-lg text-black"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}