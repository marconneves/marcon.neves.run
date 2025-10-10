import { notFound } from "next/navigation";
import { aboutPageFlag } from "../../flags";
import AboutScreen from "@/features/about/screen/AboutScreen";
 

export default async function Page() {
  const aboutPageAvaliable = await aboutPageFlag();

  if(!aboutPageAvaliable) {
    notFound(); 
  }

  return <AboutScreen />
}