import SmartCursor from "~/components/SmartCursor";

import { Hero } from "../components/Hero";
import { Terminal } from "../components/Terminal";

export default function HomeScreen() {
  return (
    <main id="home" className="flex px-10 items-center justify-center min-h-screen gap-20 cursor-none">
      <SmartCursor areaId="home" />
      <Hero />
      <Terminal />
    </main>
  )
}
