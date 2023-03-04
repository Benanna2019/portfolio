import { useLocation } from '@remix-run/react'

import { HomeIcon, WritingIcon, NewsletterIcon } from '../Icon'
import { NavigationLink } from './NavigationLink'

export function SidebarNavigation() {
  const location = useLocation()

  const sections = [
    {
      items: [
        {
          href: '/',
          label: 'Home',
          icon: HomeIcon,
          trailingAccessory: null,
          isActive: location.pathname === '/',
          trailingAction: null,
          isExternal: false,
          onClickFn: null,
        },

        {
          href: '/about',
          label: 'About',
          icon: WritingIcon,
          trailingAccessory: null,
          isActive: location.pathname === '/about',
          trailingAction: null,
          isExternal: false,
          onClickFn: null,
        },

        {
          href: '/articles',
          label: 'Articles',
          icon: WritingIcon,
          trailingAccessory: null,
          isActive:
            location.pathname === '/articles' ||
            location.pathname.includes('/articles/'),
          trailingAction: null,
          isExternal: false,
          onClickFn: null,
        },
      ],
    },
  ]

  return (
    <div className="w-full space-y-1 px-3 py-3">
      {sections.map((section: any, i: number) => {
        return (
          <ul key={i} className="flex justify-start space-x-4 pl-8">
            {section.items.map((item: any, j: number) => (
              <NavigationLink key={j} link={item} />
            ))}
          </ul>
        )
      })}
    </div>
  )
}
