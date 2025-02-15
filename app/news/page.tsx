import { getNews } from '@/lib/notion';
import { NewsList } from '@/components/NewsList';

export const revalidate = 3600; // 1時間ごとに再検証

export default async function NewsPage() {
  const news = await getNews();
  
  return <NewsList news={news} />;
} 