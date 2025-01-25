import MainTitle from "./MainTitle.jsx";
import ProjectCard from "./Projects/ProjectCard.jsx";
import blogWebsite from "../../../assets/projects/Redux-Blog-website.png";
import studentsApp from "../../../assets/projects/students-app.png";
import estate from "../../../assets/projects/estate.png";
import templateJs from "../../../assets/projects/template-js.png";
import eCommerce from "../../../assets/projects/e-commerce.png";
import weatherApp from "../../../assets/projects/weather-app.png";
import starwood from "../../../assets/projects/starwood.png";
import citiApp from "../../../assets/projects/citizen-x-website.png";
import tunesStore from "../../../assets/projects/store-simple.png";
import kasper from "../../../assets/projects/kasper.png";
import bondi from "../../../assets/projects/bondi.png";

const Projects = () => {
  return (
    <>
      <MainTitle title={"Recent"} subTitle={"Projects"} />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6">
        <ProjectCard
          image={starwood}
          title={"Starwood"}
          category={"Website"}
          link={"https://www.starwood.sa/"}
          linkGit={"https://github.com/Abdullahciti"}
        />
        <ProjectCard
          image={studentsApp}
          title={"Students Dashboard"}
          category={"Website"}
          link={"https://students-app-2025-q6th.vercel.app/"}
          linkGit={"https://github.com/Abdullahciti/Students-app-2025"}
        />
        <ProjectCard
          image={blogWebsite}
          title={"Blog/Posts"}
          category={"Website"}
          link={"https://blog-website-rosy-tau.vercel.app/"}
          linkGit={"https://github.com/Abdullahciti/blog-website"}
        />
        <ProjectCard
          image={estate}
          title={"Estate II"}
          category={"Website"}
          link={"https://estate-ii.vercel.app/"}
          linkGit={"https://github.com/Abdullahciti/Estate-II"}
        />
        <ProjectCard
          image={eCommerce}
          title={"CitizneX E-commerce"}
          category={"Website"}
          link={"https://citizen-x-website.vercel.app/"}
          linkGit={"https://github.com/Abdullahciti/CitizenX-Website"}
        />
        <ProjectCard
          image={weatherApp}
          title={"Weather App"}
          category={"App"}
          link={"https://weather-app-ochre-rho.vercel.app/"}
          linkGit={"https://github.com/Abdullahciti/weather-app"}
        />
        <ProjectCard
          image={citiApp}
          title={"Citizen-x"}
          category={"Website"}
          link={"https://abdullahciti.github.io/TopC-Website.github.io/"}
          linkGit={"https://github.com/Abdullahciti/TopC-Website.github.io"}
        />
        <ProjectCard
          image={templateJs}
          title={"Vanilla-Js Template"}
          category={"Website"}
          link={"https://abdullahciti.github.io/Special-Template-JS/"}
          myGrad={"from-blue-800 via-blue-600 to-blue-200"}
          linkGit={"https://github.com/Abdullahciti/Special-Template-JS"}
        />
        <ProjectCard
          image={kasper}
          title={"Kasper Template"}
          category={"Website"}
          link={"https://abdullahciti.github.io/Kasper-Website/"}
          linkGit={"https://github.com/Abdullahciti/Kasper-Website"}
        />
        <ProjectCard
          image={bondi}
          title={"Bondi Theme"}
          category={"Website"}
          link={"https://abdullahciti.github.io/bondi-with-Bootstrap/"}
          linkGit={"https://github.com/Abdullahciti/bondi-with-Bootstrap"}
          myGrad={"from-gray-600 via-gray-600 to-blue-200"}
        />
      </div>
    </>
  );
};

export default Projects;
