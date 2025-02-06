export default function ProjectCard({ title, description, link }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={link} className="text-blue-500 hover:underline">View Project</a>
      </div>
    )
  }