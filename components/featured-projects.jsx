import Link from "next/link"
import ProjectCard from "./project-card"

export default async function FeaturedProjects() {
  const response = await fetch("http://localhost:3000/api");
  const data = await response.json();
  const projectData = data.projects;
  const projects = projectData.filter((p)=>p.featured)

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            View all projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} featured={true} />
          ))}
        </div>
      </div>
    </section>
  )
}
