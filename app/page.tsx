import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  const projects = [
    { 
      title: "E-commerce Site",
      description: "A full-stack shopping platform built with Next.js",
      link: "#"
    },
    {
      title: "Blog Platform",
      description: "Content management system for writers",
      link: "#"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <section id="about" className="mb-20">
        <div className="flex items-center gap-8">
          <img 
            src="/images/avatar.png" 
            alt="Profile" 
            className="w-32 h-32 rounded-full"
          />
          <div>
            <h2 className="text-4xl font-bold mb-4">Hi, I'm John Doe</h2>
            <p className="text-gray-600 text-lg">
              Full-stack developer specializing in modern web applications.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section id="contact" className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-lg">
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Your email"
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <textarea 
              placeholder="Message"
              className="w-full p-3 border rounded-lg h-32"
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}