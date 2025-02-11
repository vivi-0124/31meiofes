"use client";

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    id: "item-1",
    question: "入場料について",
    answer: "本大学祭は、地域に寄り添った大学祭を理念に掲げているためアーティストライブは入場無料とさせて頂いております。"
  },
  {
    id: "item-2",
    question: "座席について",
    answer: "席の指定、予約等はできません。また、ライブ前のステージでは学生主体の企画やパフォーマンスがありますので、ライブのための席取りなどもお控えください。そのような行為が見受けられたときには、スタッフがお声かけさせていただく場合がございます。"
  },
  {
    id: "item-3",
    question: "中止・延期について",
    answer: "興行の中止や延期の場合でも旅費などの補償はできかねますのでご了承ください。"
  },
  {
    id: "item-4",
    question: "入場制限について",
    answer: "会場内で係員の指示及び注意事項に従わない場合、入場をお断りすることがございます。また開演中の入場については、制限させていただくことがあります。なお、体調不良者の入場はお断りしております。"
  },
  {
    id: "item-5",
    question: "免責事項",
    answer: "会場内で係員の指示及び注意事項に従わずに生じた事故については、主催者は一切責任を負いません。"
  },
  {
    id: "item-6",
    question: "持ち込み制限について",
    answer: "酒類、危険物等を持ち込むことはできません。また、犬同伴も不可能です（盲導犬を除く）。暴力団関係者の入場をお断りします。"
  },
  {
    id: "item-7",
    question: "駐車場について",
    answer: "近隣住宅への駐車及び路上駐車はお控えいただきますようよろしくお願いいたします。大学祭期間中は学内駐車場に限りがあるため、ネオパークの駐車場をご利用ください。いずれも満車の場合は、コインパーキングをご利用ください。"
  },
  {
    id: "item-8",
    question: "お問い合わせについて",
    answer: "お問い合わせは下記のメールアドレス及びインスタグラムのみで受け付けます。大学へのお問い合わせはご遠慮ください。"
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="pt-14 pb-12 scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">FAQ</h2>
          <p className="text-gray-700 text-sm sm:text-base">ご来場の前にご確認ください</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-4 sm:p-6">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="border rounded-lg px-4 data-[state=open]:bg-gray-50/50"
                >
                  <AccordionTrigger className="text-left py-4 text-sm sm:text-base hover:no-underline text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-sm pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
} 