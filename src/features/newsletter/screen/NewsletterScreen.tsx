import SmartCursor from "@/components/SmartCursor";
import { Button } from "@/components/ui/button";

export default function NewsletterScreen() {
  return (
    <main id="contact" className="flex px-10 items-center justify-center min-h-screen gap-20 cursor-none">
      <SmartCursor areaId="contact" />


      <div>
        <h1>Junte-se à minha newsletter</h1>
        <p>Receba as últimas novidades, artigos e dicas sobre tecnologia e desenvolvimento diretamente na sua caixa de entrada.</p>

        <div>
          <input type="text" placeholder="Seu melhor e-mail" />
          <Button>Inscrever-se</Button>
        </div>
      </div>
    </main>
  )
}
