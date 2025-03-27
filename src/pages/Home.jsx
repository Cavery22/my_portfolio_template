import { NavLink } from "react-router-dom";
import background from "../assets/background.webp";
import avatar from "../assets/avatar.jpg";

const fullName = "Cozy Avery";
const personalQuote =
  "I'm a passionate Frontend Developer who loves crafting engaging, user-friendly web experiences.";

const Home = () => {
  return (
    <main className="pt-20 min-h-screen bg-white">
      {/* HERO SECTION */}
      <section
        className="relative flex flex-col justify-center items-center text-center px-4 py-20"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-white bg-opacity-70 z-0"></div>

        <div className="relative z-10 p-6 rounded-md max-w-xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Hi, I’m {fullName}</h2>

          {/* Avatar Image */}
          <img
            src={avatar}
            alt="Cozy Avery Avatar"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto mb-6 shadow-md"
          />

          <p className="text-lg text-gray-800 mb-6">{personalQuote}</p>

          <NavLink
            to="/contact"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Contact Me
          </NavLink>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Introduction</h3>
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Overview</h2>
        <p className="text-gray-700 text-lg mb-6">
          I enjoy turning creative ideas into sleek, functional interfaces—always paying attention to the little details that make a big difference. I’m also a proud mom who loves the outdoors, traveling, and exploring new adventures with my daughter.
        </p>
        <NavLink to="/about" className="text-blue-500 underline hover:text-blue-700">
          Learn More About Me
        </NavLink>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">My Works</h3>
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Projects</h2>
        <p className="text-gray-700 text-lg mb-6">
          I've worked on various hands-on projects that demonstrate my ability to build modern, functional, and user-centered web applications. From full-stack food ordering platforms to responsive weather dashboards, each project reflects my growth and attention to detail.
        </p>
        <NavLink to="/projects" className="text-blue-500 underline hover:text-blue-700">
          View Projects
        </NavLink>
      </section>

      {/* Optional extra space to ensure scrollability */}
      <div className="h-10" />
    </main>
  );
};

export default Home;
