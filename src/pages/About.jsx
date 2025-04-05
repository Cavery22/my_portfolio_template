import { NavLink } from 'react-router-dom';
import avatar from '../assets/avatar.jpg';
import background from '../assets/background.webp';

const About = () => {
  return (
    <main className="pt-20 bg-white min-h-screen">
      <section
        className="relative py-20 px-6 bg-cover bg-center animate-fade-in min-h-screen"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-70 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <img
            src={avatar}
            alt="Cozy Avery avatar"
            className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover mx-auto mb-6 shadow-md"
          />

          <h2 className="text-3xl font-bold text-blue-600 mb-6">About Me</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I'm Cozy — a passionate frontend developer with a love for building user-friendly, engaging interfaces. I recently completed an intensive full-stack development program through NPower, where I learned how to bring design and functionality together.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Outside of tech, I'm a proud mom who enjoys traveling, staying active, and exploring new places with my daughter. My mission is to create accessible and joyful digital experiences.
          </p>

          <NavLink
            to="/resume"
            className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            View My Resume
          </NavLink>
        </div>
      </section>

      {/* Scroll test section (optional) */}
      <section className="py-20 text-center">
        <h3 className="text-xl text-gray-600"></h3>
        <p className="text-gray-500"></p>
      </section>
    </main>
  );
};

export default About;

