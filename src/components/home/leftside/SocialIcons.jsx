import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaMessage,
  FaTwitter,
} from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const SocialIcons = () => {
  return (
    <div className="w-fit mx-auto social-icons">
      <ul className="flex gap-1.5">
        <li>
          <a
            className="text-2xl w-10 h-10 flex justify-center items-center rounded-md hover:bg-[#6f42c1] hover:text-[#161b22]"
            href="https://github.com/Abdullahciti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            className="text-2xl w-10 h-10 flex justify-center items-center rounded-md hover:bg-[#0e76a8]"
            href="https://www.linkedin.com/in/abdullahciti/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin />
          </a>
        </li>
        <li>
          <a
            className="text-2xl w-10 h-10 flex justify-center items-center rounded-md hover:bg-[#0088cc]"
            href="mailto:abullahciti@gmx.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMessage />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
