import { defineQuery } from 'next-sanity'

export const allPostsQuery = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    readTime
  }
`)

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    readTime,
    body
  }
`)

export type PostSummary = {
  _id: string
  title: string
  slug: { current: string } | null
  publishedAt: string
  excerpt: string | null
  readTime: number | null
}

export type PostFull = PostSummary & {
  body: unknown[]
}
