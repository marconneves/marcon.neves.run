export default function Header() {
  return (
    <>
      <header className="py-8 px-10 flex justify-between font-sans text-white shadow-lg">
        <h2 className="ml-4 text-xl font-bold">
          Marcon Neves
        </h2>
        <ul className="flex gap-8">
          {['Sobre', 'Projetos', 'Contato'].map(item => (<li key={item} className="transition-transform hover:scale-105 hover:cursor-pointer">{item}</li>))}
        </ul>
      </header>
    </>
  )
}
