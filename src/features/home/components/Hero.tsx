import { fetchHomeData } from "../services/fetchHomeData";
import { BubbleText } from "./BubbleText";

export async function Hero(){
  const home = await fetchHomeData();

  return (
    <div className="flex-1 w-full m-auto inline-flex justify-center md:justify-end">
      <section id="hero"  className="w-full max-w-[550px] flex-1 flex flex-col gap-5 items-center md:items-start">
        <div className="flex flex-col gap-2 items-center md:items-start ">
          <BubbleText>Marcon Neves</BubbleText>
          <h2 className="font-mono text-secondary text-xl">
            {home.shortDescription}
          </h2>
        </div>
        <ul className="flex gap-3 font-mono text-secondary text-base underline">
          {home.links.map(link => (
            <li key={link.id} className="transition-transform hover:scale-105">
              <a href={link.link} target="_blank">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}