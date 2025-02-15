import { getNews } from '@/lib/notion';
import { Hero } from '@/components/hero';
import { TopNews } from '@/components/TopNews';
import { FeaturedSpots } from '@/components/featured-spots';
import { FaqSection } from '@/components/faq-section';
import { InformationSection } from '@/components/information-section';

export default async function Home() {
  const news = await getNews(5); // 最新5件のみ取得
  
  return (
    <div className="min-h-screen">
      <Hero />
      <div>
        <TopNews news={news} />
        <FeaturedSpots />
        <InformationSection />
        <FaqSection />
      </div>
    </div>
  );
}