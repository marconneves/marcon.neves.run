import SmartCursor from "@/components/SmartCursor";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutScreen() {
  return (
    <main id="about" className="flex flex-col max-w-[1080px] px-10 items-center justify-center min-h-screen gap-20 cursor-none m-auto">
      <SmartCursor areaId="about" />

      <div className="flex gap-10 md:gap-12">
        <Avatar>
          <AvatarImage src="https://github.com/marconneves.png" />
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>
        <div className="w-full md:w-2/3 text-left">
          <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tighter">Sou <span className="text-5xl md:text-6xl text-primary">Marcon Willian</span></h1>
          <p className="mt-4 text-lg">Fundador e CTO da cod.gital. Com mais de 10 anos de experiência em desenvolvimento de software e liderança técnica, minha paixão é construir produtos inovadores e equipes de alta performance.</p>
        </div>
      </div>

      <section className="w-full">
        <h3>Carreira</h3>
        
        <div>
          <div>
            <h4>Fundador & CTO</h4>
            <span>cod.gital</span><span>2023 - Presente</span>
          </div>
          <p>Responsável pela visão tecnológica e liderança da equipe de engenharia.</p>
        </div>
        <div>
          <div>
            <h4>Fundador & CTO</h4>
            <span>cod.gital</span><span>2023 - Presente</span>
          </div>
          <p>Responsável pela visão tecnológica e liderança da equipe de engenharia.</p>
        </div>
        <div>
          <div>
            <h4>Fundador & CTO</h4>
            <span>cod.gital</span><span>2023 - Presente</span>
          </div>
          <p>Responsável pela visão tecnológica e liderança da equipe de engenharia.</p>
        </div>
        <div>
          <div>
            <h4>Fundador & CTO</h4>
            <span>cod.gital</span><span>2023 - Presente</span>
          </div>
          <p>Responsável pela visão tecnológica e liderança da equipe de engenharia.</p>
        </div>
        <div>
          <div>
            <h4>Fundador & CTO</h4>
            <span>cod.gital</span><span>2023 - Presente</span>
          </div>
          <p>Responsável pela visão tecnológica e liderança da equipe de engenharia.</p>
        </div>
      </section>
    </main>
  )
}
