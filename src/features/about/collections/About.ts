import { GlobalConfig } from "payload";
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
// import { lexicalEditor } from "@payloadcms/richtext-lexical";

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
              type: "upload",
              relationTo: "media",
              label: "Foto",
            },
            {
              name: "sumary",
              type: "richText",
              required: true,
              label: "Descrição",
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
                { name: "title", type: "text", label: "Cargo" },
                { name: "company", type: "text", label: "Empresa" },
                { name: "period", type: "text", label: "Período" },
                { name: "description", type: "richText", label: "Descrição" },
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

interface CareerItem {
  title: string;
  company: string;
  period: string;
  description: SerializedEditorState;
}

export interface AboutData {
  name: string;
  sumary: SerializedEditorState;
  photo?: { url: string };
  career: CareerItem[];
}
