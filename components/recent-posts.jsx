"use client"

import Link from "next/link"
import BlogCard from "./blog-card"
import { useEffect, useState } from "react"

export default function RecentPosts() {
  const [posts, setPosts] = useState([]);
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
      }
    }
    fetchPosts()
  }, [])


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
