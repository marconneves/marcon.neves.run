import Link from "next/link";
import MenuItems from "./MenuItems";

export default function Header() {
  
  return (
    <header className="py-8 px-10 flex justify-between font-sans text-white shadow-lg absolute w-full flex-wrap">
      <h2 className="hidden md:block ml-4 text-xl font-bold">
        <Link href='/' prefetch>Marcon Neves</Link>
      </h2>
      <h3 className="block md:hidden ml-4 text-xl font-bold">
        M
      </h3>
      <MenuItems />
    </header>
  )
}