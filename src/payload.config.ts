import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import { About } from './features/about/collections/About'
import { Media } from './features/media/collections/Media'
import { seoPlugin } from '@payloadcms/plugin-seo';

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Media],
  globals: [About],
  secret: process.env.PAYLOAD_SECRET || '',
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  plugins: [
    seoPlugin({
      collections: [
        'pages',
      ],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `${doc.title} // Marcon Neves`,
      generateDescription: ({ doc }) => doc.excerpt
    })
  ]
})
