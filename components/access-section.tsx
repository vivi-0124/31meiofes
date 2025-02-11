"use client";

import { motion } from 'framer-motion';
import { MapPin, Train, Bus } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export function AccessSection() {
  return (
    <section id="access" className="py-12">
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

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="aspect-video w-full mb-12 rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.750226235934!2d127.97129837542944!3d26.62445177682011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e4f8a943c7f5bb%3A0x6b901e4404efc3db!2z5ZCN5qGc5aSn5a2m!5e0!3m2!1sja!2sjp!4v1739152462407!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">会場</h3>
                    <p className="text-gray-600 mb-4">
                      名護市民会館<br />
                      〒905-0011 沖縄県名護市宮里1-1-1
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Train className="w-6 h-6 text-blue-600 shrink-0" />
                    <div>
                      <h4 className="font-bold mb-2">電車でお越しの方</h4>
                      <p className="text-gray-600">
                        ゆいレール県庁前駅から高速バスで約2時間
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Bus className="w-6 h-6 text-blue-600 shrink-0" />
                    <div>
                      <h4 className="font-bold mb-2">バスでお越しの方</h4>
                      <p className="text-gray-600">
                        名護バスターミナルから徒歩10分
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 