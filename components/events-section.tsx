"use client";

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const timetable = [
  {
    id: 1,
    time: '12:00',
    artist: 'BEGIN',
    stage: 'メインステージ',
    description: 'オープニングアクト',
  },
  {
    id: 2,
    time: '14:00',
    artist: 'HY',
    stage: 'メインステージ',
    description: 'スペシャルライブ',
  },
  {
    id: 3,
    time: '16:00',
    artist: 'ORANGE RANGE',
    stage: 'メインステージ',
    description: 'ヘッドライナー',
  },
];

export function EventsSection() {
  return (
    <section id="timetable" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">タイムテーブル</h2>
          <p className="text-gray-600">2024年3月31日（日）</p>
        </motion.div>

        <div className="grid gap-8">
          {timetable.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <div className="flex items-center md:w-48 shrink-0">
                  <Clock className="w-6 h-6 text-blue-600 mr-2" />
                  <time className="text-gray-600">{event.time}</time>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{event.artist}</h3>
                  <p className="text-gray-600 mb-2">ステージ: {event.stage}</p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}