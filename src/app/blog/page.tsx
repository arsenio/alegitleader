import Link from 'next/link'
import { sanityFetch } from '@/sanity/lib/live'
import { allPostsQuery, type PostSummary } from '@/sanity/lib/queries'

export const metadata = {
  title: 'Blog | A Legit Leader',
  description: 'Leadership insights, coaching tips, and thoughts on building better teams.',
}

export default async function BlogPage() {
  const { data } = await sanityFetch({ query: allPostsQuery })
  const posts = data as PostSummary[]

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      <ul className="space-y-10">
        {posts.map((post) => (
          <li key={post._id} className="border-b pb-10">
            <Link href={`/blog/${post.slug?.current}`} className="group">
              <h2 className="text-2xl font-semibold group-hover:underline mb-2">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-500 mb-3">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              {post.readTime ? ` · ${post.readTime} min read` : ''}
            </p>
            {post.excerpt && <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>}
            <Link
              href={`/blog/${post.slug?.current}`}
              className="inline-block mt-4 text-sm font-medium underline"
            >
              Read more
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
