import MainTitle from "./MainTitle";
import ProjectCard from "./Projects/ProjectCerd";
import {
    projectOne,
    projectTwo,
    projectThree,
    projectFour,
    projectFive,
    projectSix, 
} from "../../../assets/Index.js"

const Projects = () => {
  return (
    <div>
      <MainTitle title={"Recent"} subTitle={"Projects"} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-10">
        <div className="px-6">
          <ProjectCard
            image={projectTwo}
            title={"CitizneX Website"}
            category={"React.js"}
            link={"https://citizen-x-website.vercel.app/"}
          />
          <ProjectCard
            image={projectThree}
            title={"Estate II"}
            category={"React & Routing"}
            link={"https://estate-ii.vercel.app/"}
          />
          <ProjectCard
            image={projectFive}
            title={"Weather App"}
            category={"Vue.js & Tailwind"}
            link={"https://weather-app-ochre-rho.vercel.app/"}
          />
          <ProjectCard
            image={projectFive}
            title={"Mobile App"}
            category={"Angular"}
          />
          <ProjectCard
            image={projectFive}
            title={"Discord Bot"}
            category={"Python"}
          />
        </div>
        <div className="px-6">
          <ProjectCard
            image={projectFour}
            title={"TopC Simple Wesite"}
            category={"Html & Css and JavaScript"}
            link={"https://abdullahciti.github.io/TopC-Website.github.io/"}
          />
          <ProjectCard
            image={projectOne}
            title={"My Tunes"}
            category={"Webesite"}
            link={"https://abdullahciti.github.io/My-tunes/"}
          />
          <ProjectCard
            image={projectSix}
            title={"Kasper Webesite"}
            category={"Website"}
            link={"https://abdullahciti.github.io/Kasper-Website/"}
          />
          <ProjectCard
            image={projectSix}
            title={"Node Server"}
            category={"Server"}
          />
          <ProjectCard
            image={projectSix}
            title={"Js Template"}
            category={"JavaScript"}
            link={"https://abdullahciti.github.io/Special-Template-JS/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
