import type {
  LinksFunction,
  MetaFunction,
  SerializeFrom,
} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import { Analytics } from '@vercel/analytics/react'
import { Sidebar } from './components/Navbar'

import tailwindStylesheetUrl from './styles/tailwind.css'
import draculaStylesUrl from './styles/dracula.css'
import proseStylesUrl from './styles/prose-styles.css'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindStylesheetUrl },
    { rel: 'stylesheet', href: draculaStylesUrl },
    { rel: 'stylesheet', href: proseStylesUrl },
    { rel: 'icon', href: '/favicon.ico' },
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Ben A. Patton',
  viewport: 'width=device-width,initial-scale=1',
})

export const loader = () => {
  return {
    ENV: {
      VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID,
    },
  }
}

declare global {
  interface Window {
    ENV: SerializeFrom<typeof loader>['ENV']
  }
}

export default function App() {
  const { ENV } = useLoaderData<typeof loader>()

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Sidebar />
        <Outlet />
        <Analytics />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {/* 👇 Write the ENV values to the window */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
      </body>
    </html>
  )
}
