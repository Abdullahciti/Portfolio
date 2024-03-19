
import { FaGithubSquare } from "react-icons/fa";

const ProjectCard = ({ image, title, category, link, linkGit, myGrad }) => {
  return (
    <div className="">
      <div className="w-full relative flex flex-col my-6 md:mb-6 md:mt-0 items-center justify-center md:borderBottom md:py-10 md:px-5 pb-3">
        <div className="w-fit h-auto  flex items-center justify-center  mb-3 md:my-0 overflow-hidden rounded-lg group">
          <img
            className="shadow-2xl md:w-full md:h-full max-w-[250px] max-h-[250px] pt-3 md:pt-0"
            src={image}
            alt="cardImage"
          />
        </div>
        <div className="content-box w-fit mx-auto flex flex-col items-center justify-center z-10">
          <h1 className="font-titleFont text-lg font-semibold text-[#ccc] mt-5 hover:text-[#e2e2e2] duration-300">
            {title}
          </h1>
          <p className={link ? "text-base text-gray-400 mt-2 mb-1" : "text-base text-gray-400 -mt-1"}>{category}</p>
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
                <span className=" text-black text-4xl hover:text-gradient"><FaGithubSquare /></span>
              </a>
            </div>
          ) : (
            <p>Incoming...</p>
          )}
        </div>
        <div
          className={`absolute w-full h-full left-0 top-0 hover:bg-gradient-to-t ${myGrad} opacity-20 rounded-lg`}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard;
