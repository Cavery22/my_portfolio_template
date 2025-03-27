// src/pages/Resume.jsx
import DownloadResume from '../components/DownloadResume'; // if you have this component
// OR use buttons directly if you prefer

const Resume = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Resume</h1>
      
      <p className="text-lg text-gray-700 mb-8 text-center">
        Here's a quick overview of my technical skills, certifications, and experience. You can also download or view my full resume below.
      </p>

      {/* Resume Download + View Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <a
          href="/Cozy_Avery_Resume.pdf"
          download="Cozy_Avery_Resume.pdf"
          className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Download Resume
        </a>
        <a
          href="/Cozy_Avery_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-500 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-50 transition"
        >
          View Resume
        </a>
      </div>

      {/* Technical Skills */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frontend</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React, Tailwind CSS, Bootstrap</li>
            <li>Responsive Design & Accessibility</li>
            <li>Figma (UX/UI Design)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Backend / Full Stack</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Node.js, Express</li>
            <li>MongoDB, MySQL</li>
            <li>REST APIs, CRUD</li>
            <li>Authentication & Stripe API</li>
          </ul>
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tools & Platforms</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Git, GitHub, GitHub Copilot</li>
            <li>ChatGPT for Dev Support</li>
            <li>Linux, Ubuntu, MacOS, Windows</li>
            <li>Cloud: AWS (basic), Netlify, Vercel</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Google IT Automation with Python</li>
            <li>Google UX Design Certificate</li>
            <li>NPower Full Stack Developer Program</li>
          </ul>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Soft Skills</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          Strong communicator • Team player • Detail-oriented • Fast learner • Creative problem solver • Organized & self-motivated
        </p>
      </div>
    </section>
  );
};

export default Resume;
