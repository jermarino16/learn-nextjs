import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/150",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 2,
    name: "Project 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/150",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    name: "Project 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/150",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Check out my latest projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <main className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Projects</h1>
          <div className="mb-8">
            <label htmlFor="search" className="font-bold mr-4">
              Search:
            </label>
            <input
              type="text"
              id="search"
              className="border border-gray-400 px-2 py-1 rounded-lg w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <li
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-lg font-bold mb-4">{project.name}</h2>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.id}`}>
                    <div className="block bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm uppercase tracking-wide rounded-lg px-4 py-2">
                      View Project
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
