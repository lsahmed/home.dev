import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogCard from "@/components/blog-card"

export default async function Blog() {
 const response = await fetch("http://localhost:3000/api", {method: "GET"});
 const data = await response.json();
 const posts = data.posts || [];


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
            {posts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
