import { Hero } from "../components/Hero";
import { Terminal } from "../components/Terminal";

export default function HomeScreen() {
  return (
    <main className="flex px-10 items-center justify-center min-h-screen gap-20">
      <Hero />
      <Terminal />
    </main>
  )
}
