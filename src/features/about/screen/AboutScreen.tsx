import SmartCursor from "@/components/SmartCursor";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function AboutScreen() {
  return (
    <main id="about" className="flex flex-col max-w-[1080px] px-10 items-center justify-center min-h-screen gap-20 cursor-none m-auto mt-25">
      <SmartCursor areaId="about" />

      <div className="flex gap-10 flex-col md:gap-12 md:flex-row">
        <Avatar className="border-solid border-4 border-primary size-full max-w-[300px] md:size-[300px] " >
          <AvatarImage src="https://github.com/marconneves.png" />
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>
        <div className="w-full md:w-2/3 text-left">
          <h1 className="text-3xl md:text-4xl font-heading font-bold font-sans tracking-tighter">Sou <span className="text-5xl md:text-6xl text-primary font-bold">Marcon Willian</span></h1>
          <p className="mt-4 text-base text-secondary">Fundador e CTO da cod.gital. Com mais de 10 anos de experiência em desenvolvimento de software e liderança técnica, minha paixão é construir produtos inovadores e equipes de alta performance.</p>
        </div>
      </div>

      <section className="w-full flex flex-col gap-12">
        <h3 className="text-3xl font-sans font-bold">Carreira</h3>

        <div className="flex flex-col gap-8">
          {new Array(8).fill(true).map((_, index) => (
            <div key={index} className="font-mono text-base font-regular text-secondary">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-medium text-white">Fundador & CTO</h4>
                  <span>cod.gital</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
                  <span className="text-sm">2023 - Presente</span>
                  <p className="text-sm max-w-[350px]">Responsável pela visão tecnológica e liderança da equipe de engenharia.</p>
                </div>
              </div>

              <Separator className="mt-8 bg-secondary-foreground" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
