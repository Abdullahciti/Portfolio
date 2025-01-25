import { FaGithubSquare } from "react-icons/fa";

const ProjectCard = ({ image, title, category, link, linkGit, bgColor }) => {
  return (
    <div className="group border-b border-borderColor">
      <div className="w-full relative flex flex-col my-6 md:mb-6 md:mt-0 items-center justify-center md:borderBottom md:py-10 md:px-5 pb-3">
        {link ? (
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            className="w-full h-64 relative flex items-center justify-center overflow-hidden rounded-lg group"
          >
            <img
              className={`h-full w-full object-contain group-hover:rotate-1 group-hover:scale-110 z-10 cursor-pointer transition-all duration-300 ${
                bgColor ? bgColor : ""
              }`}
              src={image}
              alt="cardImage"
            />
            <div
              className={`absolute transition-all w-full h-0 group-hover:h-full left-0 top-1/2 group-hover:top-0 group-hover:bg-gradient-to-t from-designColor via-yellow-600 to-white opacity-5 rounded-lg duration-700`}
            ></div>
          </a>
        ) : (
          <div className="w-full h-64 relative flex items-center justify-center overflow-hidden rounded-lg group">
            <img
              className={`h-full w-full object-contain group-hover:rotate-1 group-hover:scale-110 z-10 cursor-pointer transition-all duration-300 ${
                bgColor ? bgColor : ""
              }`}
              src={image}
              alt="cardImage"
              title="this is undergoing!"
            />
            <div
              className={`absolute transition-all w-full h-0 group-hover:h-full left-0 top-1/2 group-hover:top-0 group-hover:bg-gradient-to-t from-designColor via-yellow-600 to-white opacity-5 rounded-lg duration-700`}
            ></div>
          </div>
        )}
        {/* Start Content */}
        <div className="flex flex-col text-center text-gray-400 mt-3">
          <h1 className="text-lg font-semibold group-hover:text-gray-300 duration-300 transition-all">
            {title}
          </h1>
          <p>{category}</p>
          <a
            className="text-2xl w-fit mx-auto"
            href={linkGit}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare className="hover:text-gray-300 transition-all mt-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
