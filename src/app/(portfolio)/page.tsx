import { Metadata } from "next";

import HomeScreen from "@/features/home/screen/HomeScreen";
import { fetchHomeData } from "@/features/home/services/fetchHomeData";
import { mergeOpenGraph } from "@/lib/seo";

import { Media } from "../../../payload-types";

 export async function generateMetadata(): Promise<Metadata> {
  try {
    const home = await fetchHomeData();
    const seoData = home.meta;

    if (!seoData) {
        return { title: 'Marcon Neves', description: 'Portifólio de um desenvolvedor.' };
    }

    return {
      title: seoData.title,
      description: seoData.description,
      openGraph: mergeOpenGraph({
        title: String(seoData.title),
        description: String(seoData.description),
        url: '/',
        images: seoData.image ? [
            { url: (seoData.image as Media)?.url || '' }
        ] : [],
      }),
    };
  } catch {
    return { title: 'Sobre Mim - Erro' };
  }
}

export default function Home() {
  return (<HomeScreen />);
}
