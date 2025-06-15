import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Mail, Calendar } from "lucide-react"

export default function About() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Django",
    "ORM",
    "MongoDB",
    "Express.js",
    "Docker",
    "Git",
    "Figma",
  ]

  // const experience = [
  //   {
  //     company: "Tech Startup Inc.",
  //     role: "Senior Software Engineer",
  //     period: "2022 - Present",
  //     description:
  //       "Lead frontend development for a SaaS platform serving 10k+ users. Built scalable React applications and mentored junior developers.",
  //   },
  //   {
  //     company: "Digital Agency Co.",
  //     role: "Full Stack Developer",
  //     period: "2020 - 2022",
  //     description:
  //       "Developed custom web applications for clients using React, Node.js, and PostgreSQL. Collaborated with design teams to create pixel-perfect implementations.",
  //   },
  //   {
  //     company: "Freelance",
  //     role: "Web Developer",
  //     period: "2018 - 2020",
  //     description:
  //       "Built websites and web applications for small businesses and startups. Specialized in modern JavaScript frameworks and responsive design.",
  //   },
  // ]
  const experience = false

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Computer Science student currently pursuing my degree and building my skills in web development
              and software engineering.
            </p>
          </div>

          {/* Bio */}
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My journey into programming began at the age of 13 when I first wondered how computers actually work. This curiosity 
                  led me down a rabbit hole of discovery, eventually sparking my fascination with how the web operates. What started as 
                  a simple question has evolved into a deep passion for creating digital solutions that solve real-world problems. 
                  I'm currently focusing on web development technologies to strengthen my skills.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not studying or coding, you'll find me working on personal projects, learning new programming languages,
                  or exploring the latest trends in tech. I believe in learning by doing and am always excited to take on new 
                  challenges that help me grow as a developer.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm currently seeking internship opportunities where I can apply my knowledge, learn from experienced developers,
                  and contribute to meaningful projects. My goal is to become a skilled full-stack developer who can make a positive impact in the tech industry.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail className="w-5 h-5 mr-3" />
                  <span><a href="mailto://radnorethan@gmail.com">radnorethan@gmail.com</a></span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span><a href="https://linkedin.com/in/lsahmed" target="_blank">Available for Internships</a></span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          {experience ? <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-4 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-gray-300 dark:border-gray-600 rounded-full z-10"></div>

                    {/* Content */}
                    <div className="ml-16 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 w-full">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.role}</h3>
                          <p className="text-gray-600 dark:text-gray-400 font-medium">{job.company}</p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> : ""}
          
        </div>
      </main>
      <Footer />
    </div>
  )
}
