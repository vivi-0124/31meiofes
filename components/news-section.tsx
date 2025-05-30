"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from 'next/link';

const news = [
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

export function NewsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const initialNews = news.slice(0, 3);
  const remainingNews = news.slice(3);

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