import { GlobalConfig } from "payload";

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const About: GlobalConfig = {
  slug: 'about',
  label: 'Sobre',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nome",
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Dados',
          fields: [
            {
              name: "photo",
              label: "Foto",
              type: "upload",
              relationTo: "media"
            },
            {
              name: "sumary",
              label: "Descrição",
              type: "richText",
              required: true,
              localized: true
            },
          ],
        },
        {
          fields: [
           {
              name: "career",
              type: "array",
              label: "Carreira",
              fields: [
                { name: "title", type: "text", label: "Cargo", localized: true },
                { name: "company", type: "text", label: "Empresa", localized: true },
                { name: "period", type: "text", label: "Período", localized: true },
                { name: "description", type: "richText", label: "Descrição", localized: true },
              ],
            },
          ],
          label: 'Carreira',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            
            MetaTitleField({
              hasGenerateFn: true,
              overrides: {
                label: 'Title'
              }
            }),
            MetaDescriptionField({
              hasGenerateFn: true,
            }),
            {
              name: 'keywords',
              label: 'Keywords (Palavras-chave)',
              type: 'array',
              minRows: 0,
              maxRows: 20,
              localized: true,
              fields: [
                {
                  name: 'keyword',
                  label: 'Palavra-chave',
                  type: 'text',
                  required: true,
                },
              ],
            },
            MetaImageField({
              relationTo: 'media'
            }),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            })
          ],
        },
      ],
    },
  ],
};