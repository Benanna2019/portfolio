import { json, LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import ArticleDetail from '~/components/Article/ArticleDetail'
import { Post } from '~/lib/post-validator'
import { getPostBySlug } from '~/models/post.server'

export const loader = async ({ request, params }: LoaderArgs) => {
  const { slug } = params
  const post = await getPostBySlug(slug as string)
  return json(post)
}

export default function PostPage() {
  let data = useLoaderData() as Post[]

  return <ArticleDetail post={data[0]} />
}
