import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { sanityFetch } from '@/sanity/lib/live'
import { postBySlugQuery, allPostsQuery, type PostFull, type PostSummary } from '@/sanity/lib/queries'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = await client.fetch<PostSummary[]>(allPostsQuery)
  return posts.map((post) => ({ slug: post.slug?.current }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const { data } = await sanityFetch({ query: postBySlugQuery, params: { slug } })
  const post = data as PostFull | null
  if (!post) return {}
  return {
    title: `${post.title} | A Legit Leader`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const { data } = await sanityFetch({ query: postBySlugQuery, params: { slug } })
  const post = data as PostFull | null

  if (!post) notFound()

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          {post.readTime ? ` · ${post.readTime} min read` : ''}
        </p>
      </div>
      <article className="prose prose-gray max-w-none">
        {post.body && <PortableText value={post.body as Parameters<typeof PortableText>[0]['value']} />}
      </article>
    </main>
  )
}
