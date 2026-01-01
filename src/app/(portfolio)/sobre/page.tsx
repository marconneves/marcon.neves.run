import AboutScreen from "@/features/about/screen/AboutScreen";
import { fetchAboutData } from "@/features/about/services/fetchAboutData";
import { mergeOpenGraph } from "@/lib/seo";
import { Metadata } from "next";
import { Media } from "../../../../payload-types";

 export async function generateMetadata(): Promise<Metadata> {
  try {
    const about = await fetchAboutData();
    const seoData = about.meta;

    if (!seoData) {
        return { title: 'Sobre Mim', description: 'Página de informações sobre o autor do site.' };
    }

    return {
      title: seoData.title,
      description: seoData.description,
      openGraph: mergeOpenGraph({
        title: String(seoData.title),
        description: String(seoData.description),
        url: '/sobre',
        images: seoData.image ? [
            { url: (seoData.image as Media)?.url || '' }
        ] : [],
      }),
    };
  } catch {
    return { title: 'Sobre Mim - Erro' };
  }
}


export default async function Page() {
  return <AboutScreen />
}