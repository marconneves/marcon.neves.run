import SmartCursor from "@/components/SmartCursor";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { RichText } from '@payloadcms/richtext-lexical/react'
import { About, Media } from "../../../../payload-types";

export default async function AboutScreen() {
    const res = await fetch(`${process.env.PAYLOAD_URL}/api/globals/about`, {
    next: { revalidate: 60 },
  });

  const about: About = await res.json();

  return (
    <main id="about" className="flex flex-col max-w-[1080px] px-10 items-center justify-center min-h-screen gap-20 cursor-none m-auto mt-25">
      <SmartCursor areaId="about" />

      <div className="flex gap-10 flex-col md:gap-12 md:flex-row">
        <Avatar className="border-solid border-4 border-primary size-full max-w-[300px] size-[300px] " >
          <AvatarImage src={String((about.photo as Media)?.url)} />
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>
        <div className="w-full md:w-2/3 text-left">
          <h1 className="text-3xl md:text-4xl font-heading font-bold font-sans tracking-tighter">Sou <span className="text-5xl md:text-6xl text-primary font-bold">{about.name}</span></h1>
          <div className="mt-4 text-base text-secondary">
            <RichText data={about.sumary} />
          </div>
          
        </div>
      </div>

      <section className="w-full flex flex-col gap-12">
        <h3 className="text-3xl font-sans font-bold">Carreira</h3>

        <div className="flex flex-col gap-8">
          {about.career?.map((career, index) => (
            <div key={index} className="font-mono text-base font-regular text-secondary">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex flex-col gap-1 md:gap-2">
                  <h4 className="text-lg font-medium text-white">{career.title}</h4>
                  <span>{career.company}</span>
                  <span className="text-sm">{career.period}</span>
                </div>
                {career.description && (
                  <div className="flex flex-col mt-3 md:mt-0 md:flex-row md:items-center text-sm md:max-w-[500px]">
                    <RichText data={career.description} />
                  </div>
                )}
              </div>

              <Separator className="mt-8 bg-secondary-foreground" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
