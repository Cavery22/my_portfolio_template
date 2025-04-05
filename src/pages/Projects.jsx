import { FaGithub } from "react-icons/fa6";
import foodOrderingAppImage from "../assets/food-ordering-app.jpg";
import weatherAppImage from "../assets/weather-app.jpg.png";
import htmlTeamPageImage from "../assets/html-team-page.png";
import cssEmailClientImage from "../assets/css-email-client.png";
import todoListImage from "../assets/todo-cli.png";
import bookstoreImage from "../assets/book-store.png";

const myProjects = [
  {
    title: 'Capstone Project: Full Stack Food Ordering App',
    description:
      'A full-stack food ordering platform built with React, Node.js, Express, and MongoDB. Includes user authentication, admin dashboard, and Stripe payment integration.',
    image: foodOrderingAppImage,
    repositoryLink: 'https://github.com/Cavery22/mern-food-delivery-app',
  },
  {
    title: 'React Weather App',
    description:
      'A responsive weather dashboard using OpenWeatherMap API. Built with React Hooks, styled for clean UI, and supports real-time city search.',
    image: weatherAppImage,
    repositoryLink: 'https://github.com/Cavery22/Weather-App-Template',
  },
  {
    title: 'IT Team Member Page',
    description:
      'Simple HTML form that captures and displays IT team member info using a structured table. Features include input fields for name, role, and email.',
    image: htmlTeamPageImage,
    repositoryLink: 'https://github.com/Cavery22/Path2tech_html_assignment',
  },
  {
    title: 'CSS Email Client Mockup',
    description:
      'An email client UI mockup featuring a sidebar, inbox layout, and a compose section. Fully styled using CSS with responsive layout.',
    image: cssEmailClientImage,
    repositoryLink: 'https://github.com/Cavery22/Webpage',
  },
  {
    title: 'JavaScript CLI TODO List',
    description:
      'Command-line based TODO list application using Node.js. Allows users to add, delete, and mark tasks as complete, with a live task counter.',
    image: todoListImage,
    repositoryLink: 'https://github.com/Cavery22/JavaProject',
  },
  {
    title: 'Bookstore DOM App',
    description:
      'Interactive bookstore app that fetches book data from an external API. Features adding, displaying, and deleting books with DOM manipulation.',
    image: bookstoreImage,
    repositoryLink: 'https://github.com/darielamv/DOM-Project-_Group-4',
  },
];

const Projects = () => {
  return (
    <main className="projects-container px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-10 text-center">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {myProjects.map((project) => (
          <section
            key={project.title}
            className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Title & Description */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-3 text-sm sm:text-base">
              {project.description}
            </p>

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
