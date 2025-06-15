import Link from "next/link"

export default function BlogCard({ post }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span className="mx-2">•</span>
        <span>{post.readTime}</span>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>

      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
