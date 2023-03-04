import { Link } from '@remix-run/react'
import * as React from 'react'

interface NavLink {
  link: {
    href: any
    label: any
    icon: any
    trailingAccessory: any
    trailingAction: any
    isActive?: boolean
    isExternal: any
    onClickFn: any
  }
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export function NavigationLink({
  link: {
    href,
    label,
    icon: Icon,
    trailingAccessory: Accessory,
    trailingAction: Action,
    isActive,
    isExternal,
    onClickFn,
  },
}: NavLink) {
  return (
    <li>
      {!isExternal ? (
        <Link
          to={href}
          onClick={onClickFn}
          className={classNames(
            isActive
              ? ' border-b-2 border-white text-white'
              : ' text-white hover:border-b-2 hover:border-white ',
            'text-md flex flex-1 items-center space-x-2 px-2 py-1.5 ',
          )}
        >
          <span className="w-4 items-center justify-center text-white">
            {Icon && <Icon />}
          </span>
          <span className="font-semibold">{label}</span>
          {Accessory && (
            <span className=" w-4 items-center justify-center text-black text-opacity-40 dark:text-white">
              <Accessory />
            </span>
          )}
        </Link>
      ) : null}
      {Action ? <Action /> : null}
    </li>
  )
}
