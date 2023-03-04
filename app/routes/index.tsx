import { MetaFunction } from '@remix-run/node'
import { HomePage } from '~/components/PageContent/Home'

export const meta: MetaFunction = () => ({
  title: 'Ben A. Patton',
  description: 'Ben A. Patton is a software engineer and writer.',
})

export default function Index() {
  return (
    <>
      <HomePage />
    </>
  )
}
