import { notFound } from "next/navigation";
import { projectsPageFlag } from "../../flags";
import ProjectsScreen from "@/features/projects/screen/ProjectsScreen";
 

export default async function Page() {
  const projectsPageAvaliable = await projectsPageFlag();

  if(!projectsPageAvaliable) {
    notFound(); 
  }

  return <ProjectsScreen />
}