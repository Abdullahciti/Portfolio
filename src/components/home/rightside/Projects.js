import MainTitle from "./MainTitle";
import ProjectCard from "./Projects/ProjectCard.js";
import {
    projectOne,
    projectTwo,
    projectThree,
    projectFour,
    projectFive,
    projectSix,
    projectSeven,
    projectNine,
    projectEight,
    projectTen, 
} from "../../../assets/Index.js"

const Projects = () => {
  return (
    <div>
      <MainTitle title={"Recent"} subTitle={"Projects"} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-10">
        <div className="px-6">
          <ProjectCard
            image={projectOne}
            title={"CitizneX Website"}
            category={"Website"}
            link={"https://citizen-x-website.vercel.app/"}
            myGrad={"from-blue-600 via-blue-600 to-blue-200"}
            linkGit={"https://github.com/Abdullahciti/CitizenX-Website"}
          />
          <ProjectCard
            image={projectThree}
            title={"Estate II"}
            category={"Website"}
            link={"https://estate-ii.vercel.app/"}
            myGrad={"from-blue-600 via-blue-600 to-blue-200"}
            linkGit={"https://github.com/Abdullahciti/Estate-II"}
          />
          <ProjectCard
            image={projectFive}
            title={"Weather App"}
            category={"App"}
            link={"https://weather-app-ochre-rho.vercel.app/"}
            myGrad={"from-green-600 via-green-600 to-green-200"}
            linkGit={"https://github.com/Abdullahciti/weather-app"}
          />
          <ProjectCard
            image={projectSeven}
            title={"Mobile Application"}
            category={"app"}
            myGrad={"from-gray-600 via-gray-600 to-blue-200"}
          />
          <ProjectCard
            image={projectNine}
            title={"Discord Bot"}
            category={"Python"}
            myGrad={"from-blue-600 via-blue-600 to-blue-200"}
          />
        </div>
        <div className="px-6">
          <ProjectCard
            image={projectTwo}
            title={"TopC"}
            category={"Website"}
            link={"https://abdullahciti.github.io/TopC-Website.github.io/"}
            myGrad={"from-blue-600 via-blue-600 to-blue-200"}
            linkGit={"https://github.com/Abdullahciti/TopC-Website.github.io"}
          />
          <ProjectCard
            image={projectFour}
            title={"My Tunes"}
            category={"Webesite"}
            link={"https://abdullahciti.github.io/My-tunes/"}
            myGrad={"from-red-600 via-red-600 to-red-200"}
            linkGit={"https://github.com/Abdullahciti/TopC-Website.github.io"}
          />
          <ProjectCard
            image={projectSix}
            title={"Kasper"}
            category={"Website"}
            link={"https://abdullahciti.github.io/Kasper-Website/"}
            myGrad={"from-blue-600 via-blue-600 to-blue-200"}
            linkGit={"https://github.com/Abdullahciti/Kasper-Website"}
          />
          <ProjectCard
            image={projectEight}
            title={"Bondi"}
            category={"Website"}
            link={"https://abdullahciti.github.io/bondi-with-Bootstrap/"}
            linkGit={"https://github.com/Abdullahciti/bondi-with-Bootstrap"}
            myGrad={"from-gray-600 via-gray-600 to-blue-200"}
          />
          <ProjectCard
            image={projectTen}
            title={"Js-Template"}
            category={"Website"}
            link={"https://abdullahciti.github.io/Special-Template-JS/"}
            myGrad={"from-blue-800 via-blue-600 to-blue-200"}
            linkGit={"https://github.com/Abdullahciti/Special-Template-JS"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
