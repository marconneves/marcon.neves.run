import type { MetadataRoute } from 'next'
 
function generateLink(path?: string): string {
  return `https://marcon.neves.run${path || ''}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: generateLink(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: generateLink('/sobre'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}