"use client";

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const timetableDay1 = [
  {
    id: 1,
    time: "11:00",
    artist: "吹奏楽部"
  },
  {
    id: 2,
    time: "11:20",
    artist: "オープニング"
  },
  {
    id: 3,
    time: "11:35",
    artist: "社交ダンス部"
  },
  {
    id: 4,
    time: "11:55",
    artist: "カラオケ大会 第1部"
  },
  {
    id: 5,
    time: "13:15",
    artist: "筋肉グランプリ"
  },
  {
    id: 6,
    time: "14:25",
    artist: "ミュージックサークル"
  },
  {
    id: 7,
    time: "15:35",
    artist: "Meio Collection 第1部"
  },
  {
    id: 8,
    time: "16:15",
    artist: "抽選会 第1部"
  },
  {
    id: 9,
    time: "16:55",
    artist: "Solseamery"
  },
  {
    id: 10,
    time: "17:30",
    artist: "名桜エイサー"
  },
  {
    id: 11,
    time: "18:00",
    artist: "ダンスコラボ"
  },
  {
    id: 12,
    time: "18:40",
    artist: "MIKKO"
  },
  {
    id: 13,
    time: "18:50",
    artist: "Leonald"
  },
  {
    id: 14,
    time: "19:30",
    artist: "YOSHIKI EZAKI"
  },
  {
    id: 15,
    time: "19:50",
    artist: "1日目閉会式"
  },
  {
    id: 16,
    time: "20:00",
    artist: "1日目終了"
  },
];

const timetableDay2 = [
  {
    id: 17,
    time: "11:00",
    artist: "オープニング"
  },
  {
    id: 18,
    time: "11:10",
    artist: "吹奏楽部コラボ"
  },
  {
    id: 19,
    time: "11:50",
    artist: "K-POP サークル"
  },
  {
    id: 20,
    time: "12:25",
    artist: "借りだせ！やんばるの森"
  },
  {
    id: 21,
    time: "13:25",
    artist: "カラオケ大会 第2部"
  },
  {
    id: 22,
    time: "14:25",
    artist: "Meio Collection 第2部"
  },
  {
    id: 23,
    time: "15:15",
    artist: "Y-1 グランプリ結果発表"
  },
  {
    id: 24,
    time: "15:35",
    artist: "抽選会 第2部"
  },
  {
    id: 25,
    time: "16:25",
    artist: "ミュージックサークル"
  },
  {
    id: 26,
    time: "17:05",
    artist: "HIPHOP サークル"
  },
  {
    id: 27,
    time: "17:30",
    artist: "K-POP サークル"
  },
  {
    id: 28,
    time: "17:55",
    artist: "名桜エイサー"
  },
  {
    id: 29,
    time: "18:45",
    artist: "D-51"
  },
  {
    id: 30,
    time: "19:40",
    artist: "花火"
  },
  {
    id: 31,
    time: "19:45",
    artist: "フィナーレ・カチャーシー"
  },
  {
    id: 32,
    time: "20:00",
    artist: "第31回名桜大学祭終了"
  },
];

export function TimetableSection() {
  return (
    <section id="timetable" className="pt-14 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">TIMETABLE</h2>
          <p className="text-gray-600 mb-8">2024年11月23日（土）・24日（日）</p>

          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
              <TabsTrigger value="day1">1日目 (11/23)</TabsTrigger>
              <TabsTrigger value="day2">2日目 (11/24)</TabsTrigger>
            </TabsList>
            {["day1", "day2"].map((day) => (
              <TabsContent key={day} value={day}>
                <div className="grid gap-1.5 max-w-2xl mx-auto">
                  {(day === "day1" ? timetableDay1 : timetableDay2).map((event) => (
                    <Card key={event.id} className="hover:bg-accent/50 transition-colors">
                      <CardContent className="p-2.5 sm:p-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center w-16 sm:w-20 shrink-0">
                            <Clock className="w-3.5 h-3.5 text-muted-foreground mr-1.5" />
                            <time className="text-sm text-muted-foreground">{event.time}</time>
                          </div>
                          <h3 className="text-sm sm:text-base font-medium truncate">
                            {event.artist}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
} 