import type { Metadata } from 'next';

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Marcon Neves',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Logo Padrão do Site',
    },
  ],
};

export const mergeOpenGraph = (
  og?: Metadata['openGraph'],
): Metadata['openGraph'] => {
  if (!og) return defaultOpenGraph;

  return {
    ...defaultOpenGraph,
    ...og,
    images: og.images || defaultOpenGraph?.images,
  };
};