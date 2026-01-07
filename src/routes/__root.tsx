import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'
import Footer from '../components/Footer'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Superior Glass & Aluminum Inc. | 20 Years of Chicago Excellence',
      },
      {
        name: 'description',
        content:
          'Chicago\'s trusted glass and aluminum specialists since 2006. Commercial storefronts, curtain walls, residential glass doors, shower enclosures, and custom fabrication. CT International Aluminum & Doors22 authorized dealer.',
      },
      {
        name: 'keywords',
        content:
          'glass installation Chicago, aluminum framing Chicago, storefront systems, curtain walls, commercial glass, residential glass doors, shower enclosures, CT International, Doors22, glass contractor Illinois',
      },
      {
        property: 'og:title',
        content: 'Superior Glass & Aluminum Inc. | 20 Years of Chicago Excellence',
      },
      {
        property: 'og:description',
        content:
          'Chicago\'s trusted glass and aluminum specialists since 2006. Commercial and residential solutions.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'theme-color',
        content: '#121212',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        <main style={{ paddingTop: '80px' }}>{children}</main>
        <Footer />
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
        <Scripts />
      </body>
    </html>
  )
}
