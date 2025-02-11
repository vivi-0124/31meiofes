import { Hero } from '@/components/hero';
import { NewsSection } from '@/components/news-section';
import { FeaturedSpots } from '@/components/featured-spots';
import { FaqSection } from '@/components/faq-section';
import { InformationSection } from '@/components/information-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div>
        <NewsSection />
        <FeaturedSpots />
        <InformationSection />
        <FaqSection />
      </div>
    </div>
  );
}
