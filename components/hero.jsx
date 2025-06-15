export default function Hero() {
  return (
    <section className="container mx-auto px-6 pt-32 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Computer Science student
            <br />& aspiring developer
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            I'm Ethan , a Computer Science student passionate about building exceptional digital
            experiences. Currently learning modern web technologies and working on innovative projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Learn more about me
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              View my work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
