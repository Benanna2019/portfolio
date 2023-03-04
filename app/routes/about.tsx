import { MetaFunction } from '@remix-run/node'
import { AboutPageContent } from '~/components/PageContent/About'

export const meta: MetaFunction = () => ({
  title: 'Ben A. Patton | About',
  description: 'About Ben',
})

export default function Index() {
  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col">
        <AboutPageContent />
      </div>
    </>
  )
}
