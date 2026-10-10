import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://flagman6casino.vercel.app/sitemap.xml',
    host: 'https://flagman6casino.vercel.app',
  }
}
