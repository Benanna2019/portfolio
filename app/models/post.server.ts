import { Posts } from '~/lib/post-validator'
import Sanity from '~/models/sanity.server'

const sanity = Sanity()

export async function getPosts(): Promise<Posts> {
  const posts: Posts = await sanity.getAllPosts()
  return posts
}

export async function getPostBySlug(slug: string) {
  const post = await sanity.getPostBySlug(slug)
  return post
}

export async function getFeaturedArticles() {
  const featuredArticles = await sanity.getFeaturedArticles()
  return featuredArticles
}

export async function getLinks() {
  const links = await sanity.getAllLinks()
  return links
}

export async function getLinkBySlug(slug: string) {
  const link = await sanity.getLinkBySlug(slug)
  return link
}

export async function getLinkByHost(host: string) {
  const link = await sanity.getLinkByHost(host)
  return link
}

export async function getTags() {
  const tags = await sanity.getAllTags()
  return tags
}
