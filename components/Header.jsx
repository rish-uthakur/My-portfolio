export default function Header() {
    return (
      <header className="bg-gray-900 text-white p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
  }