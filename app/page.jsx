import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import RecentPosts from "@/components/recent-posts"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Hero />
      <FeaturedProjects />
      <RecentPosts />
      <Footer />
    </div>
  )
}
