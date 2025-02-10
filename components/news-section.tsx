"use client";

import { motion } from 'framer-motion';
import { MapPin, Train, Bus, Car } from 'lucide-react';

export function NewsSection() {
  return (
    <section id="access" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">アクセス</h2>
          <p className="text-gray-600">名護市民会館へのアクセス方法</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">会場</h3>
                <p className="text-gray-600">
                  名護市民会館<br />
                  〒905-0011 沖縄県名護市宮里1-1-1
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-start gap-4">
                <Train className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-bold mb-2">電車でお越しの方</h4>
                  <p className="text-gray-600">
                    ゆいレール県庁前駅から高速バスで約2時間
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-start gap-4">
                <Bus className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-bold mb-2">バスでお越しの方</h4>
                  <p className="text-gray-600">
                    名護バスターミナルから徒歩10分
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-start gap-4">
                <Car className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-bold mb-2">車でお越しの方</h4>
                  <p className="text-gray-600">
                    那覇空港から沖縄自動車道経由で約1時間30分<br />
                    駐車場あり（500台）
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}