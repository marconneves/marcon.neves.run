import { headerCode } from "@/flags"
import Link from "next/link";

const menuItems = [
  {label: 'Sobre', to: '/sobre'},
  {label: 'Projetos', to: '/projetos'},
  {label: 'Contato', to: '/contato'},
  {label: 'Blog', to: '/blog'},
  {label: 'Newsletter.', to: '/newsletter'}
];

export default async function MenuItems() {
  const header = await headerCode();
  
  if(!header) {
    return <></>;
  }

  return (
      <ul className="flex gap-8">
        {menuItems.map(item => (<li key={item.to} className="transition-transform hover:scale-105 hover:cursor-pointer"><Link href={item.to} prefetch>{item.label}</Link></li>))}
      </ul>
  )
}