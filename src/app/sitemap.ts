import type { MetadataRoute } from 'next'

import { fetchAboutData } from '@/features/about/services/fetchAboutData';
import { fetchHomeData } from '@/features/home/services/fetchHomeData';

function generateLink(path?: string): string {
  return `https://marcon.neves.run${path || ''}`
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const home = await fetchHomeData().catch(() => undefined);
  const about = await fetchAboutData().catch(() => undefined);


  return [
    {
      url: generateLink(),
      lastModified: home?.updatedAt ? new Date(home.updatedAt) : new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: generateLink('/sobre'),
      lastModified: about?.updatedAt ? new Date(about.updatedAt) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}