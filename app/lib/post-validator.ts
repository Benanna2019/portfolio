import { z } from 'zod'
import { Categories } from './category-validator'

export const SinglePost = z.object({
  _id: z.string(),
  author: z.object({
    name: z.string(),
    picture: z.string().nullish(),
  }),
  mainImage: z.string().nullish(),
  categories: Categories,
  body: z.string(),
  date: z.string(),
  excerpt: z.string(),
  readingTime: z.string(),
  slug: z.string(),
  title: z.string(),
  featuredArticle: z.boolean().nullish(),
})

export const PostSchema = z.array(SinglePost)

export type Post = z.infer<typeof SinglePost>

export type Posts = z.infer<typeof PostSchema>
