"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen -mt-16">
      <Image
        src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea"
        alt="第31回名桜大学祭のメインビジュアル"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h2 className="text-lg md:text-xl font-medium mb-4 tracking-wider">
            MEIO UNIVERSITY FESTIVAL 2024
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            第31回
            <br className="sm:hidden" />
            名桜大学祭
          </h1>
          <div className="space-y-3 text-lg sm:text-xl md:text-2xl font-medium opacity-90">
            <p className="flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-white hidden sm:block" />
              2024年11月23日（土）・24日（日）
              <span className="w-8 h-[1px] bg-white hidden sm:block" />
            </p>
            <p className="flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-white hidden sm:block" />
              名桜大学
              <span className="w-8 h-[1px] bg-white hidden sm:block" />
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="animate-bounce flex flex-col items-center gap-2">
          <span className="text-sm font-medium tracking-wider opacity-80">SCROLL</span>
          <ChevronDown className="w-6 h-6 opacity-80" />
        </div>
      </motion.div>
    </div>
  );
}