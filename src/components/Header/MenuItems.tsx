import { aboutPageFlag, blogPageFlag, contactPageFlag, headerCode } from "@/flags"
import Link from "next/link";

const menuItems = [
  {label: 'Sobre', to: '/sobre', isActive: aboutPageFlag },
  {label: 'Projetos', to: '/projetos'},
  {label: 'Contato', to: '/contato', isActive: contactPageFlag },
  {label: 'Blog', to: '/blog', isActive: blogPageFlag },
  {label: 'Newsletter.', to: '/newsletter'}
];

export default async function MenuItems() {
  const header = await headerCode();

  const menuItensAvailables = await Promise.all(
    menuItems.map(async (item) => ({
      ...item,
      available: item?.isActive ? await item?.isActive() : true
    }))
  );
    
  if(!header) {
    return <></>;
  }

  return (
      <ul className="flex gap-8">
        {menuItensAvailables.filter(item => item.available).map(item => (<li key={item.to} className="transition-transform hover:scale-105 hover:cursor-pointer"><Link href={item.to} prefetch>{item.label}</Link></li>))}
      </ul>
  )
}