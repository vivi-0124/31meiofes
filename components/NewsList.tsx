"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import type { NewsPost } from '@/lib/notion';

type NewsListProps = {
  news: NewsPost[];
};

const ITEMS_PER_PAGE = 10;

// Notionのカラー名をTailwindのクラスに変換
const getTagColorClass = (color: string) => {
  const colorMap: { [key: string]: string } = {
    brown: 'bg-amber-800',
    red: 'bg-red-600',
    orange: 'bg-orange-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-600',
    blue: 'bg-blue-600',
    purple: 'bg-purple-600',
    pink: 'bg-pink-600',
    gray: 'bg-gray-600',
    default: 'bg-gray-900'
  };
  return colorMap[color] || colorMap.default;
};

export function NewsList({ news }: NewsListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);
  
  const paginatedNews = news.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">NEWS</h1>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm border"
          >
            <div className="divide-y divide-gray-100">
              {paginatedNews.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <time 
                        className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded" 
                        dateTime={item.date}
                      >
                        {format(new Date(item.date), 'yyyy.MM.dd', { locale: ja })}
                      </time>
                      {item.tags.map((tag) => (
                        <span
                          key={tag.name}
                          className={`px-2 py-1 text-xs font-medium tracking-wider text-white rounded ${getTagColorClass(tag.color)}`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {totalPages > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === i + 1
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 