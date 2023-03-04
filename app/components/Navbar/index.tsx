import * as React from 'react'

import { SidebarNavigation } from './Navigation'

export function Sidebar({
  isOpen,
  children,
}: {
  isOpen?: boolean
  children?: React.ReactNode
}) {
  return (
    <>
      <nav className="flex h-20 w-full items-center justify-center border-gray-150 bg-black">
        <SidebarNavigation />
      </nav>
    </>
  )
}
