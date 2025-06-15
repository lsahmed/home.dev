import { NextResponse } from 'next/server'
import { title } from 'process';
 
export async function GET(request) {
   const posts = [
    {
      title: "Building Scalable React Applications",
      excerpt:
        "Learn the best practices for structuring and scaling React applications as your team and codebase grows.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "Architecture", "Best Practices"],
      slug: "building-scalable-react-applications",
    },
  ]

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website showcasing projects and blog posts with dark mode support and smooth animations.",
      image: "https://i.ibb.co/NcPkCbb/portf.png",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "Password Manager",
      description:
        "A Reliable Password Manager which stores you passwords in localstorage so that it wont get out of your devices.",
      image: "https://i.ibb.co/V0wSRcwm/Screenshot-2025-06-15-at-9-28-42-PM.png",
      tags: ["React.js", "Lord Icons", "Tailwind CSS"],
      github: "https://github.com/lsahmed/passwd",
      demo: "https://passwd-lac.vercel.app",
      featured: true,
    },
    {
      title: "Django Project with CRUD Functionality. [Contrail]",
      description:
      "With Contrail, users can create, read, update, and delete tweets. Each…Contrail is a simple web app for posting tweets, built with Django. With Contrail, users can create, read, update, and delete tweets. Each tweet can include a title, description, and an optional image. The app also has a strong focus on secure user authentication to keep accounts safe.",
      image: "https://i.ibb.co/V0wSRcwm/Screenshot-2025-06-15-at-9-28-42-PM.png",
      tags: ["Django", "SQL(via orm)", "Bootstrap" ,"Tailwind CSS", "Vercel"],
      github: "https://github.com/lsahmed/passwd",
      featured: false,
    },

  ]

  return NextResponse.json({posts, projects});
}