import { Link } from '@remix-run/react'
import { Detail } from '../ListDetail/Detail'

export function SectionTitle(props: any) {
  return (
    <h4
      className="col-span-2 pt-8 text-lg font-extrabold md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40"
      {...props}
    />
  )
}

export function SectionContent(props: any) {
  return <div className="col-span-10" {...props} />
}

export interface TableRowProps {
  href: string
  title: string
  date: string
  subtitle?: string
}

export function TableRow({ href, title, subtitle, date }: TableRowProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="group flex items-center space-x-4"
    >
      <strong className="flex-none font-medium group-hover:underline">
        {title}
      </strong>
      <span className="w-full shrink border-t border-dashed border-gray-300" />
      {subtitle && <span className="text-tertiary flex-none">{subtitle}</span>}
      {date && (
        <span className="text-quaternary flex-none font-mono">{date}</span>
      )}
    </a>
  )
}

export function SectionContainer(props: any) {
  return <div className="grid grid-cols-1 gap-6 md:grid-cols-12" {...props} />
}

export function HomePage() {
  return (
    <Detail.Container data-cy="home-intro">
      <Detail.ContentContainer>
        <div className="space-y-8 pb-24 md:space-y-16">
          <SectionContainer className="mx-auto">
            <SectionContent>
              <div className="prose mx-auto">
                <h1 className=" text-blue-500">Ben Patton</h1>
                <p>
                  I&apos;m a developer and{' '}
                  <Link to="/writing">
                    <span>writer</span>
                  </Link>
                  . I am currently writing a{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://careerchangers.co"
                  >
                    newsletter{' '}
                  </a>
                  for those thinking about or in process of changing careers to
                  software developers.
                </p>
                <p>
                  I love all things javascript and occassionally dabble with
                  other languages, Go, Rust, Elixir and only watch videos about
                  C++.
                </p>
                <p>
                  Right now I am loving typescript/jsdoc, incrementally using
                  functional programming libraries (ramda and lodash), and
                  expanding my cloud knowledge.
                </p>
                <p>
                  My aim in life is to care for and love others and to use code,
                  writing, time, etc to that end.
                </p>

                <p>
                  Before becoming a software developer I worked in non-profit. I
                  made a living off of fundraising and was able to work with
                  people in all stages of life. The last year and a half of
                  non-profit work was spent working with Senior Adults. My
                  non-profit days are the catalyst for much of my thinking and
                  how I hope to impact the world through software.
                </p>
              </div>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
