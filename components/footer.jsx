import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-black dark:bg-white rounded-sm flex items-center justify-center mr-3">
                  <span className="text-white dark:text-black font-bold text-sm">ER</span>
                </div>
                <span className="text-gray-900 dark:text-white font-semibold">Ahmed </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-md">
                Computer Science student passionate about learning new technologies and building innovative web applications.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/lsahmed"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                target="_blank"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Ahmedradnor"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                target="_blank"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/lsahmed"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:md.ahmed701153@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                target="_blank"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Ahmed . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
