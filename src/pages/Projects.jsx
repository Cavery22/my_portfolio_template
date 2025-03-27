import { FaGithub } from "react-icons/fa6";
import foodOrderingAppImage from "../assets/food-ordering-app.jpg";
import weatherAppImage from "../assets/weather-app.jpg.png";


const myProjects = [
  {
    title: 'Capstone Project: Full Stack Food Ordering App',
    description:
      'A full-stack food ordering platform built with React, Node.js, Express, and MongoDB. Includes user authentication, admin dashboard, and Stripe payment integration.',
    image: foodOrderingAppImage,
    repositoryLink: 'https://github.com/Cavery22', // Replace with real repo link when available
  },
  {
    title: 'React Weather App',
    description:
      'A responsive weather dashboard using OpenWeatherMap API. Built with React Hooks, styled for clean UI, and supports real-time city search.',
    image: weatherAppImage,
    repositoryLink: 'https://github.com/Cavery22/Weather-App-Template',
  },
];

const Projects = () => {
  return (
    <main className="projects-container px-6 py-20 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-10 text-center">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {myProjects.map((project) => (
          <section
            key={project.title}
            className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Title & Description */}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-3">{project.description}</p>

            {/* GitHub Link */}
            <div className="flex items-center gap-2 text-blue-500">
              <FaGithub />
              <a
                href={project.repositoryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                View Code on GitHub
              </a>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Projects;
