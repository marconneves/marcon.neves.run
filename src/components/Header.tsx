export default function Header() {
  return (
    <header className="py-8 px-10 flex justify-between font-sans text-white shadow-lg absolute w-full flex-wrap">
      <h2 className="hidden md:block ml-4 text-xl font-bold">
        Marcon Neves
      </h2>
      <h3 className="block md:hidden ml-4 text-xl font-bold">
        M
      </h3>
      <ul className="flex gap-8">
        {[].map(item => (<li key={item} className="transition-transform hover:scale-105 hover:cursor-pointer">{item}</li>))}
      </ul>
    </header>
  )
}