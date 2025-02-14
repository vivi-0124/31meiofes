import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://31meiofes.vercel.app'
  
  // 2025年2月14日の日付を設定
  const lastModified = new Date('2025-02-14T09:00:00+09:00')

  return [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date('2025-02-14T10:04:36+09:00'),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/timetable`,
      lastModified: new Date('2025-02-14T09:51:40+09:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
