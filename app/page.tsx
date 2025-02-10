import { Hero } from '@/components/hero';
import { FeaturedSpots } from '@/components/featured-spots';
import { EventsSection } from '@/components/events-section';
import { GourmetSection } from '@/components/gourmet-section';
import { NewsSection } from '@/components/news-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedSpots />
      <EventsSection />
      <GourmetSection />
      <NewsSection />
    </div>
  );
}