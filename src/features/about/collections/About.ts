import { GlobalConfig } from "payload";

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
      name: "photo",
      type: "upload",
      relationTo: "media",
      label: "Foto",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Descrição",
    },
    {
      name: "career",
      type: "array",
      label: "Carreira",
      fields: [
        { name: "title", type: "text", label: "Cargo" },
        { name: "company", type: "text", label: "Empresa" },
        { name: "period", type: "text", label: "Período" },
        { name: "description", type: "text", label: "Descrição" },
      ],
    },
  ],
};

interface CareerItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface AboutData {
  name: string;
  description: string;
  photo?: { url: string };
  career: CareerItem[];
}
