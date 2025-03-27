import { FaDownload } from "react-icons/fa";

const DownloadResume = () => {
  return (
    <a
      href="/Cozy_Avery_Resume.pdf"
      download="Cozy_Avery_Resume.pdf"
      className="flex items-center text-gray-800 hover:text-blue-700 transition font-semibold"
    >
      <p className="mr-2">Download Resume</p>
      <FaDownload />
    </a>
  );
};

export default DownloadResume;


