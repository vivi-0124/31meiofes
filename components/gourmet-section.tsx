"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const tickets = [
  {
    id: 1,
    title: '一般チケット',
    category: '前売り',
    price: '4,000円',
    description: '一般の方向けのチケットです。',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
  },
  {
    id: 2,
    title: '学生チケット',
    category: '前売り',
    price: '3,000円',
    description: '学生証の提示が必要です。',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
  },
  {
    id: 3,
    title: '当日チケット',
    category: '当日',
    price: '5,000円',
    description: '当日会場でご購入いただけます。',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14',
  },
];

export function GourmetSection() {
  return (
    <section id="ticket" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">チケット</h2>
          <p className="text-gray-600">チケットは各プレイガイドで発売中</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={ticket.image}
                  alt={ticket.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">
                  {ticket.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-2">{ticket.title}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">{ticket.price}</p>
                <p className="text-gray-600">{ticket.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}