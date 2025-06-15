"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"

export default async function Projects() {
  const response = await fetch("http://localhost:3000/api");
  const data = await response.json();
  const projects = data.projects;


  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              A collection of projects I've worked on, ranging from web applications to open-source contributions. Each
              project represents a learning journey and a step forward in my development career.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} featured={true} />
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Other Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} project={project} featured={false} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
