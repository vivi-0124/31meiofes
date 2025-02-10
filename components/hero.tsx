"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea"
        alt="めいおフェスのメインビジュアル"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            めいおフェス
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            2024年3月31日（日）
          </p>
          <p className="text-xl md:text-2xl">
            名護市民会館
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}