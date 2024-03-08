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
            title={"Responive Website"}
            category={"Html & Css"}
          />
          <ProjectCard
            image={projectThree}
            title={"Responive Website"}
            category={"Html & Css"}
          />
          <ProjectCard
            image={projectFive}
            title={"Responive Website"}
            category={"Html & Css"}
          />
        </div>
        <div className="px-6">
          <ProjectCard
            image={projectFour}
            title={"Blog Webesite"}
            category={"Webesite"}
          />
          <ProjectCard
            image={projectOne}
            title={"Blog Webesite"}
            category={"Webesite"}
          />
          <ProjectCard
            image={projectSix}
            title={"Blog Webesite"}
            category={"Webesite"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
