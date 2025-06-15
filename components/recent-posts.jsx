import Link from "next/link"
import BlogCard from "./blog-card"

export default function RecentPosts() {
  const posts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for structuring and scaling React applications as your team grows.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "Architecture"],
      slug: "building-scalable-react-applications",
    },
    {
      title: "The Complete Guide to Next.js App Router",
      excerpt: "Everything you need to know about Next.js 13+ App Router and its new features.",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["Next.js", "React"],
      slug: "complete-guide-nextjs-app-router",
    },
  ]

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Recent Posts</h2>
          <Link
            href="/blog"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            View all posts →
          </Link>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
