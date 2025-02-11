"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';

const artists = [
  {
    id: 1,
    name: 'Leonald',
    description: '沖縄を拠点に活動するシンガーソングライター。力強い歌声と心に響く楽曲で注目を集める。',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
  },
  {
    id: 2,
    name: 'YOSHIKI EZAKI',
    description: '独特の世界観と透明感のある歌声で魅了する実力派アーティスト。',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
  },
  {
    id: 3,
    name: 'D-51',
    description: '沖縄出身の実力派デュオ。代表曲「NO MORE CRY」など数々のヒット曲で知られる。',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b',
  },
];

export function FeaturedSpots() {
  return (
    <section id="artists" className="pt-14 pb-12 bg-white scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">ARTIST</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {artists.map((artist) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:-translate-y-1 h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{artist.name}</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-700">{artist.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* タイムテーブルカード */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link href="/timetable">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:-translate-y-1 h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Clock className="w-24 h-24 text-white opacity-20" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">タイムテーブル</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-700">
                    出演アーティストのステージスケジュールをチェック
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}