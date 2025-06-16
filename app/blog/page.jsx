"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogCard from "@/components/blog-card"

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Use relative URL instead of localhost
        const response = await fetch("/api", { method: "GET" })
        const data = await response.json()
        setPosts(data.posts || [])
      } catch (error) {
        console.error("Failed to fetch posts:", error)
        // Fallback to empty posts or static content
        setPosts([])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Thoughts on software development, web technologies, and lessons learned from building products. I write
              about React, Next.js, TypeScript, and other tools I use daily.
            </p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-8">
            {loading ? (
              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400">Loading posts...</p>
              </div>
            ) : posts.length > 0 ? (
              posts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400">No blog posts available yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
