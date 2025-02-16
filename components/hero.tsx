"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          第31回名桜大学祭
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          2024.5.18-19
        </p>
      </motion.div>

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