export function Hero(){
  return (<div className="flex flex-col gap-5">
    <div className="flex flex-col gap-2">
      <h1 className="font-extrabold font-sans text-7xl text-white ">
        Marcon Neves
      </h1>
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
      <li><a href="https://github.com/marconneves/" target="_blank">
          Github
        </a>
      </li>
    </ul>
  </div>)
}