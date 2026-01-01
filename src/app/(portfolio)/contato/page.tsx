import { notFound } from "next/navigation";
import { contactPageFlag } from "../../../flags";
import ContactScreen from "@/features/contact/screen/ContactScreen";
 

export default async function Page() {
  const contactPageAvaliable = await contactPageFlag();

  if(!contactPageAvaliable) {
    notFound(); 
  }

  return <ContactScreen />
}