"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function InformationSection() {
  return (
    <section id="information" className="pt-14 pb-12 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold">INFORMATION</h2>
          </motion.div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-8">
                {/* 日時 */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="min-w-[120px] font-bold">日時</div>
                  <div>
                    <div>2024年11月23日（土）・24日（日）</div>
                    <div className="text-muted-foreground">10:30 開場 | 11:00 開演</div>
                  </div>
                </div>

                {/* 会場 */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="min-w-[120px] font-bold">会場</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span>名桜大学</span>
                      <Link 
                        href="https://maps.google.com/?q=名桜大学"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="text-muted-foreground">
                      〒905-8585 沖縄県名護市字為又1220-1
                    </div>
                  </div>
                </div>

                {/* 主催 */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="min-w-[120px] font-bold">主催</div>
                  <div>
                    第31回名桜大学祭実行委員会
                  </div>
                </div>

                {/* Google Maps */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="aspect-video w-full mt-8 rounded-lg overflow-hidden shadow-lg"
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 