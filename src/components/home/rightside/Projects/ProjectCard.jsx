import { FaGithubSquare } from "react-icons/fa";

const ProjectCard = ({ image, title, category, link, linkGit, myGrad }) => {
  return (
    <div className="relative group">
      <div className="w-full relative flex flex-col my-6 md:mb-6 md:mt-0 items-center justify-center md:borderBottom md:py-10 md:px-5 pb-3">
        <div className="w-full h-96 flex items-center justify-center  mb-3 md:my-0 overflow-hidden rounded-lg group">
          <img
            className="h-full w-full object-contain"
            src={image}
            alt="cardImage"
          />
        </div>
        {/* Start Content */}
        <div className="w-fit mx-auto flex flex-col items-center justify-center z-10">
          <h1 className="font-titleFont text-lg font-semibold text-gray-400 mt-5 group-hover:text-gray-300 duration-300 transition-all">
            {title}
          </h1>
          <p
            className={
              link
                ? "text-base text-gray-400 mt-2 mb-1"
                : "text-base text-gray-400 -mt-1"
            }
          >
            {category}
          </p>
          {link ? (
            <div className="flex gap-5 items-center justify-center">
              <a
                className="text-designColor hover:decoration-designColor hover:underline hover:decoration-2 text-lg duration-300"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                Demo Link
              </a>
              <a
                className="text-designColor hover:decoration-designColor hover:underline hover:decoration-2 text-lg duration-300"
                href={linkGit}
                target="_blank"
                rel="noreferrer"
              >
                <span className=" text-black text-4xl hover:text-textColor duration-300">
                  <FaGithubSquare />
                </span>
              </a>
            </div>
          ) : (
            <p>Incoming...</p>
          )}
        </div>
      </div>
      <div
        className={`absolute transition-all w-full h-0 group-hover:h-full left-0 top-1/2 group-hover:top-0 group-hover:bg-gradient-to-t from-designColor via-yellow-600 to-yellow-200 opacity-5 rounded-lg duration-700`}
      ></div>
    </div>
  );
};

export default ProjectCard;
