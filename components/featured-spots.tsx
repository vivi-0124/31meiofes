"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const artists = [
  {
    id: 1,
    name: 'ORANGE RANGE',
    description: '沖縄県出身のロックバンド。代表曲に「上海ハニー」「花」など。',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b',
  },
  {
    id: 2,
    name: 'HY',
    description: '沖縄県出身のロックバンド。代表曲に「NAO」「モノクローム」など。',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
  },
  {
    id: 3,
    name: 'BEGIN',
    description: '沖縄県出身のフォークバンド。代表曲に「島人ぬ宝」「涙そうそう」など。',
    image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c',
  },
];

export function FeaturedSpots() {
  return (
    <section id="artists" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">出演アーティスト</h2>
          <p className="text-gray-600">豪華アーティストが名護に集結</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
                <p className="text-gray-600">{artist.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}