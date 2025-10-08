import { TanStackDevtools } from '@tanstack/react-devtools'
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import Header from '../components/Header'

export const Route = createRootRoute({
  head: () => ({
    title: 'Marcon Neves',
    meta: [
      {
        name: 'description',
        content: 'Portfolio pessoal de Marcon Neves - Desenvolvedor Full Stack',
      },
      // Open Graph
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://marcon.neves.run',
      },
      {
        property: 'og:title',
        content: 'Marcon Neves',
      },
      {
        property: 'og:description',
        content: 'Portfolio pessoal de Marcon Neves - Desenvolvedor Full Stack',
      },
      {
        property: 'og:image',
        content: 'https://marcon.neves.run/og-image.png',
      },
      {
        property: 'og:site_name',
        content: 'Marcon Neves',
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:url',
        content: 'https://marcon.neves.run',
      },
      {
        name: 'twitter:title',
        content: 'Marcon Neves',
      },
      {
        name: 'twitter:description',
        content: 'Portfolio pessoal de Marcon Neves - Desenvolvedor Full Stack',
      },
      {
        name: 'twitter:image',
        content: 'https://marcon.neves.run/og-image.png',
      },
    ],
  }),
  component: () => (<>
      <HeadContent />
      <div className='min-h-screen relative flex flex-col'>
        <Header />
        <Outlet />
        <div />
      </div>
      <Scripts />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
})
