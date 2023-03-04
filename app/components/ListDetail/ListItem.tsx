import { Link } from '@remix-run/react'
import * as React from 'react'
import { getDate, parseISO, format } from 'date-fns'

interface Props {
  title?: string
  href: string
  description?: string | React.ReactElement | null
  byline: string | React.ReactElement
  leadingAccessory?: React.ReactElement
  onClick?: (e: any) => void
}

export function ListItem({
  title,
  description,
  byline,
  href,
  leadingAccessory,
  onClick,
}: Props) {
  const formattedDate = getDate(parseISO(byline as string))
  return (
    <Link to={href} prefetch="intent">
      <span
        onClick={onClick && onClick}
        className="flex space-x-3 border-b border-gray-100 py-3 px-3.5 text-sm  hover:rounded-md hover:bg-slate-100 lg:rounded-sm lg:border-none lg:py-2"
      >
        {leadingAccessory && <>{leadingAccessory}</>}
        <div
          className={`${
            byline && typeof byline === 'string'
              ? 'flex justify-between space-x-5 space-y-1'
              : 'flex flex-col justify-center'
          }`}
        >
          {byline && typeof byline === 'string' ? (
            <>
              <div className=" w-18 flex flex-col justify-center rounded-md border-2 border-slate-900 bg-slate-100 bg-opacity-25 text-center text-opacity-80">
                <div className="w-12 pt-2 text-xs text-slate-900">
                  {format(parseISO(byline), 'MMM')}
                </div>
                <div className="w-12 pb-2 text-2xl font-semibold text-slate-900">
                  {formattedDate}
                </div>
              </div>
              <div className="flex flex-col justify-center hover:underline">
                <div className="font-medium line-clamp-1">{title}</div>
                {description && (
                  <div className="text-opacity-80 line-clamp-1">
                    {description}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center">
                <div className="font-medium line-clamp-1">{title}</div>
                {description && (
                  <div className="text-opacity-60 line-clamp-1">
                    {description}
                  </div>
                )}
                <div className="text-opacity-40  line-clamp-1">{byline}</div>
              </div>
            </>
          )}
        </div>
      </span>
    </Link>
  )
}
