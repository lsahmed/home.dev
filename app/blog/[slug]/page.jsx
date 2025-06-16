'use client'

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

export default function Page() {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const slug = params.slug

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch("/api")
        const data = await response.json()
        const posts = data.posts || []
        const foundPost = posts.find((p) => p.slug === slug)
        setPost(foundPost || null)
      } catch (error) {
        console.log("Failed to fetch post", error)
        setPost(null)
      } finally {
        setLoading(false)
      }
    }
    
    if (slug) {
      fetchPost()
    }
  }, [slug])
  

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="container mx-auto px-6 pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300">Loading post...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="container mx-auto px-6 pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog Link */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Article Meta */}
            <div className="px-8 pt-8 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center mr-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Article Content */}
            <div className="px-8 py-8">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  This is where the full blog post content would go. In a real implementation, you would fetch the full content from your CMS or markdown files.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Introduction</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Key Points</h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-2">
                  <li>First important point about the topic</li>
                  <li>Second key insight worth noting</li>
                  <li>Third valuable takeaway for readers</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Conclusion</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </article>

          {/* Related Posts or Navigation */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Continue Reading</h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Interested in more content like this? Check out our other blog posts or explore our projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/blog"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  View All Posts
                </Link>
                <Link 
                  href="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}