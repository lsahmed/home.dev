"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ProjectCard from "./project-card"

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api")
        const data = await response.json()
        const projectData = data.projects || []
        const featuredProjects = projectData.filter((p) => p.featured)
        setProjects(featuredProjects)
      } catch (error) {
        console.error("Failed to fetch projects:", error)
        // Fallback to empty projects
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

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
          {loading ? (
            <div className="col-span-2 text-center py-8">
              <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
            </div>
          ) : projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard key={index} project={project} featured={true} />
            ))
          ) : (
            <div className="col-span-2 text-center py-8">
              <p className="text-gray-600 dark:text-gray-400">No featured projects available yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
