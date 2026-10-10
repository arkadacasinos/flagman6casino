import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://flagman6casino.vercel.app/',
      lastModified: new Date('2026-10-10T00:00:00.000Z'),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}
