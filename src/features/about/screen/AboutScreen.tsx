import SmartCursor from "@/components/SmartCursor";
import Image from "next/image";

export default function AboutScreen() {
  return (
    <main id="about" className="flex px-10 items-center justify-center min-h-screen gap-20 cursor-none">
      <SmartCursor areaId="about" />

      <div>
        <Image src="https://github.com/marconneves.png" alt="Foto do Marcon Neves" />
        <p>
          <span>Sou</span> <h2>Marcon Neves</h2> Fundador e CTO da cod.gital. Com mais de 10 anos de experiência em desenvoolvimento de software e liderança técnica, minha paixão construir produtos inovadores e equipes de alta performance.
        </p>
      </div>
      <section>
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
