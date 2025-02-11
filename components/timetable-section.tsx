"use client";

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const timetableDay1 = [
  {
    id: 1,
    time: "11:00-11:30",
    artist: "吹奏楽部"
  },
  {
    id: 2,
    time: "11:30-12:00",
    artist: "オープニング"
  },
  {
    id: 3,
    time: "12:00-12:30",
    artist: "社交ダンス部"
  },
  {
    id: 4,
    time: "12:30-13:30",
    artist: "カラオケ大会 第1部"
  },
  {
    id: 5,
    time: "13:30-14:30",
    artist: "筋肉グランプリ"
  },
  {
    id: 6,
    time: "14:30-15:30",
    artist: "ミュージックサークル"
  },
  {
    id: 7,
    time: "15:30-16:15",
    artist: "Meio Collection 第1部"
  },
  {
    id: 8,
    time: "16:15-16:45",
    artist: "抽選会 第1部"
  },
  {
    id: 9,
    time: "16:45-17:30",
    artist: "Solseamery"
  },
  {
    id: 10,
    time: "17:30-18:00",
    artist: "名桜エイサー"
  },
  {
    id: 11,
    time: "18:00-18:40",
    artist: "ダンスコラボ"
  },
  {
    id: 12,
    time: "18:40-19:20",
    artist: "MIKKO"
  },
  {
    id: 13,
    time: "19:20-20:00",
    artist: "Leonald"
  },
  {
    id: 14,
    time: "20:00-20:30",
    artist: "YOSHIKI EZAKI"
  },
  {
    id: 15,
    time: "20:30-20:45",
    artist: "1日目閉会式"
  }
];

const timetableDay2 = [
  {
    id: 16,
    time: "11:00-11:30",
    artist: "オープニング"
  },
  {
    id: 17,
    time: "11:30-12:00",
    artist: "吹奏楽部コラボ"
  },
  {
    id: 18,
    time: "12:00-12:30",
    artist: "K-POP サークル"
  },
  {
    id: 19,
    time: "12:30-13:30",
    artist: "借りだせ！やんばるの森"
  },
  {
    id: 20,
    time: "13:30-14:30",
    artist: "カラオケ大会 第2部"
  },
  {
    id: 21,
    time: "14:30-15:30",
    artist: "Meio Collection 第2部"
  },
  {
    id: 22,
    time: "15:30-16:00",
    artist: "Y-1 グランプリ結果発表"
  },
  {
    id: 23,
    time: "16:00-16:30",
    artist: "抽選会 第2部"
  },
  {
    id: 24,
    time: "16:30-17:15",
    artist: "ミュージックサークル"
  },
  {
    id: 25,
    time: "17:15-17:45",
    artist: "HIPHOP サークル"
  },
  {
    id: 26,
    time: "17:45-18:15",
    artist: "K-POP サークル"
  },
  {
    id: 27,
    time: "18:15-19:00",
    artist: "名桜エイサー"
  },
  {
    id: 28,
    time: "19:00-19:45",
    artist: "D-51"
  },
  {
    id: 29,
    time: "19:45-20:00",
    artist: "花火"
  },
  {
    id: 30,
    time: "20:00-20:15",
    artist: "フィナーレ・カチャーシー"
  }
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
                          <div className="flex items-center w-32 sm:w-36 shrink-0">
                            <Clock className="w-3.5 h-3.5 text-muted-foreground mr-1.5" />
                            <time className="text-sm text-muted-foreground font-mono">{event.time}</time>
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