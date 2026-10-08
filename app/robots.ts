import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://monro2casino.vercel.app/sitemap.xml',
    host: 'https://monro2casino.vercel.app',
  }
}
