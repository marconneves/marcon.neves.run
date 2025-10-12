import { notFound } from "next/navigation";
import { blogPageFlag } from "../../flags";
import BlogScreen from "@/features/blog/screen/BlogScreen";
 

export default async function Page() {
  const blogPageAvaliable = await blogPageFlag();

  if(!blogPageAvaliable) {
    notFound(); 
  }

  return <BlogScreen />
}