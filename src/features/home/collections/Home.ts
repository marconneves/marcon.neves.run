import { GlobalConfig } from "payload";
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from "@payloadcms/plugin-seo/fields";

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Home',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Base',
          fields: [
            {
              name: "shortDescription",
              type: "text",
              maxLength: 36,
              required: true,
              label: "Descrição Curta",
              localized: true
            },
            {
              name: "links",
              type: "array",
              maxRows: 2,
              minRows: 2,
              required: true,
              label: "Links",
              fields: [
                { name: "title", type: "text", label: "Titulo", required: true },
                { name: "link", type: "text", label: "Link", required: true }
              ],
            },
          ],
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