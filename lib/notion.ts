import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export type NewsPost = {
  id: string;
  title: string;
  summary: string;
  date: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
};

export async function getNews(count?: number): Promise<NewsPost[]> {
  const databaseId = process.env.NOTION_DATABASE_ID as string;
  
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
      page_size: count,
    });

    // デバッグ用のログ
    console.log('Notion Response:', JSON.stringify(response.results[0], null, 2));

    const news = await Promise.all(
      response.results.map(async (page: any) => {
        const properties = page.properties;
        
        // デバッグ用のログ
        console.log('Tags property:', JSON.stringify(properties.Tags, null, 2));
        // セレクトの場合の処理を、マルチセレクトの処理に変更
        const tags = properties.Tags?.multi_select?.map((tag: { name: string; color: string }) => ({
          name: tag.name,
          color: tag.color
        })) || [];

        return {
          id: page.id,
          title: properties.Title?.title[0]?.plain_text || '無題',
          summary: properties.Summary?.rich_text[0]?.plain_text || '',
          date: properties.Date?.date?.start || new Date().toISOString(),
          tags: tags,
        };
      })
    );

    // 最終的なニュースデータのログ
    console.log('Processed news:', news);

    return news;
  } catch (error) {
    console.error('Error fetching news from Notion:', error);
    return [];
  }
} 