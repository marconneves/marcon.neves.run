import { notFound } from "next/navigation";
import { blogPageFlag } from "../../../flags";
import BlogArticleScreen from "@/features/blog/screen/BlogArticleScreen";
 

export default async function Page() {
  const blogPageAvaliable = await blogPageFlag();

  if(!blogPageAvaliable) {
    notFound(); 
  }

  return <BlogArticleScreen />
}