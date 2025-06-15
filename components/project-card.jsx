import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectCard({ project, featured = false }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow ${featured ? "h-full" : ""}`}
    >
      <div className="relative object-contain">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.github}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Github className="w-4 h-4 mr-2" />
            Code
          </a>
          {project.demo ?  <a
            href={project.demo}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </a> : ""}
        </div>
      </div>
    </div>
  )
}
