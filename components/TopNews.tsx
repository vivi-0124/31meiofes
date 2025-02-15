"use client";

import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ChevronRight } from "lucide-react";
import type { NewsPost } from '@/lib/notion';

type TopNewsProps = {
  news: NewsPost[];
};

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

export function TopNews({ news }: TopNewsProps) {
  return (
    <section id="news" className="pt-14 pb-12 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold">NEWS</h2>
          </motion.div>

          <Card>
            <CardContent className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {news.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4 min-w-[240px]">
                      <time className="text-sm text-muted-foreground">
                        {format(new Date(item.date), 'yyyy.MM.dd', { locale: ja })}
                      </time>
                      {item.tags.map((tag) => (
                        <span
                          key={tag.name}
                          className={`px-3 py-1 text-xs font-medium tracking-wider text-white rounded ${getTagColorClass(tag.color)}`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm sm:text-base">
                      {item.title}
                    </p>
                  </div>
                ))}
              </motion.div>
            </CardContent>
            <CardFooter className="flex justify-end p-6 pt-0">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/news" className="text-muted-foreground hover:text-foreground">
                  VIEW ALL
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
} 