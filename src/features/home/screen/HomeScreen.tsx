import { Button } from "@/components/ui/button";

export default function HomeScreen() {
  return (
    <div className="text-center">
      <Button>Click me</Button>

      <p className="font-sans text-foreground">The quick brown fox ...</p>
      <p className="font-mono text-foreground">The quick brown fox ...</p>
      <p className="font-code text-foreground">The quick brown fox ...</p>
    </div>
  )
}
