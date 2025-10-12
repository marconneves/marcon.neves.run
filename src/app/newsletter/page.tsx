import { notFound } from "next/navigation";
import { newsletterPageFlag } from "../../flags";
import NewsletterScreen from "@/features/newsletter/screen/NewsletterScreen";
 

export default async function Page() {
  const newsletterPageAvaliable = await newsletterPageFlag();

  if(!newsletterPageAvaliable) {
    notFound(); 
  }

  return <NewsletterScreen />
}