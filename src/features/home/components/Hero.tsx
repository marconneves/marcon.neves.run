import { BubbleText } from "./BubbleText";

export function Hero(){
  return (
    <div className="flex-1 w-full m-auto inline-flex justify-center md:justify-end">
      <section id="hero"  className="w-full max-w-[550px] flex-1 flex flex-col gap-5 items-center md:items-start">
        <div className="flex flex-col gap-2 items-center md:items-start ">
          <BubbleText>Marcon Neves</BubbleText>
          <h2 className="font-mono text-secondary text-xl">
            Founder & CTO at cod.gital
          </h2>
        </div>
        <ul className="flex gap-3 font-mono text-secondary text-base underline">
          <li className="transition-transform hover:scale-105">
            <a href="https://www.linkedin.com/in/marconneves/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li className="transition-transform hover:scale-105">
            <a href="https://github.com/marconneves/" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}