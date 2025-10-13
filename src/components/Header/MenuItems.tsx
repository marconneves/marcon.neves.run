import { aboutPageFlag, blogPageFlag, contactPageFlag, newsletterPageFlag, projectsPageFlag } from "@/flags"
import Link from "next/link";

const menuItems = [
  {label: 'Sobre', to: '/sobre', isActive: aboutPageFlag },
  {label: 'Projetos', to: '/projetos', isActive: projectsPageFlag },
  {label: 'Contato', to: '/contato', isActive: contactPageFlag },
  {label: 'Blog', to: '/blog', isActive: blogPageFlag },
  {label: 'Newsletter', to: '/newsletter', isActive: newsletterPageFlag }
];

export default async function MenuItems() {
  const menuItensAfterPromise = await Promise.all(
    menuItems.map(async (item) => ({
      ...item,
      available: item?.isActive ? await item?.isActive() : true
    }))
  );

  const menuItensAvailables = menuItensAfterPromise.filter(item => item.available);
    
  if(menuItensAvailables.length === 0) {
    return <></>;
  }

  return (
      <ul className="flex gap-8">
        {menuItensAvailables.map(item => (<li key={item.to} className="transition-transform hover:scale-105 hover:cursor-pointer"><Link href={item.to} prefetch>{item.label}</Link></li>))}
      </ul>
  )
}