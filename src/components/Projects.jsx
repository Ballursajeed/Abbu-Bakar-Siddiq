import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: "Scalable E-commerce Platform",
      description: "TypeScript-powered MERN stack e-commerce app with user authentication, cart management, and admin dashboards. Integrated Stripe API for secure payments.",
      demo: "https://e-commerce-app-six-plum.vercel.app",
      github: "https://github.com/Ballursajeed/E-Commerce-App"
    },
    {
      title: "Dynamic Blogging Platform",
      description: "Implemented secure user authentication, CRUD operations for blogs with rich-text editing, and user interaction features. Used Redux for state management.",
      demo: "https://blog-app-client-ks4w.onrender.com/",
      github: "https://github.com/Ballursajeed/Blog-App"
    },
    {
      title: "Real-Time Messaging App",
      description: "Developed real-time messaging functionality using Socket.IO. Implemented secure user authentication with JWT tokens and created an intuitive UI with React.js.",
      demo: "https://chat-app-client-h8ym.onrender.com/",
      github: "https://github.com/Ballursajeed/chat-app"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
                  <FaExternalLinkAlt size={18} className="mr-1" /> Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
                  <FaGithub size={18} className="mr-1" /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Projects;

