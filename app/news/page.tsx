"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const allNews = [
  {
    id: 1,
    date: "2024.03.15",
    category: "お知らせ",
    title: "第31回名桜大学祭の開催が決定しました",
  },
  {
    id: 2,
    date: "2024.03.15",
    category: "重要",
    title: "入場料について",
  },
  {
    id: 3,
    date: "2024.03.15",
    category: "出展",
    title: "出展者募集開始",
  },
  {
    id: 4,
    date: "2024.03.14",
    category: "お知らせ",
    title: "ボランティアスタッフ募集",
  },
  {
    id: 5,
    date: "2024.03.13",
    category: "重要",
    title: "新型コロナウイルス感染症対策について",
  },
  {
    id: 6,
    date: "2024.03.12",
    category: "出展",
    title: "フードブース出店者募集",
  },
  {
    id: 7,
    date: "2024.03.11",
    category: "お知らせ",
    title: "公式SNSアカウント開設",
  },
  {
    id: 8,
    date: "2024.03.10",
    category: "重要",
    title: "シャトルバス運行について",
  }
];

export default function NewsPage() {
  return (
      <div className="container mx-auto px-4 pt-8 pb-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold">NEWS</h1>
          </motion.div>

          <Card>
            <CardContent className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {allNews.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4 min-w-[240px]">
                      <time className="text-sm text-muted-foreground">{item.date}</time>
                      <span className="px-3 py-1 text-xs font-medium tracking-wider bg-black text-white rounded">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base">{item.title}</p>
                  </div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
      </div>
  );
} 