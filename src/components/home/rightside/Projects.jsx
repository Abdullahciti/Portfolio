import MainTitle from "./MainTitle.jsx";
import ProjectCard from "./Projects/ProjectCard.jsx";
import estate from "../../../assets/projects/estate.png";
import templateJs from "../../../assets/projects/template-js.png";
import eCommerce from "../../../assets/projects/e-commerce.png";
import weatherApp from "../../../assets/projects/weather-app.png";
import discordApp from "../../../assets/projects/discord-app.png";
import citiApp from "../../../assets/projects/citizen-x-website.png";
import tunesStore from "../../../assets/projects/store-simple.png";
import kasper from "../../../assets/projects/kasper.png";
import bondi from "../../../assets/projects/bondi.png";

const Projects = () => {
  return (
    <>
      <MainTitle title={"Recent"} subTitle={"Projects"} />
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mx-0 mx-1">
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
          image={discordApp}
          title={"Discord Bot"}
          category={"Python"}
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
          title={"Js-Template"}
          category={"Website"}
          link={"https://abdullahciti.github.io/Special-Template-JS/"}
          myGrad={"from-blue-800 via-blue-600 to-blue-200"}
          linkGit={"https://github.com/Abdullahciti/Special-Template-JS"}
        />
        <ProjectCard
          image={tunesStore}
          title={"My Tunes"}
          category={"Webesite"}
          link={"https://abdullahciti.github.io/My-tunes/"}
          myGrad={"from-red-600 via-red-600 to-red-200"}
          linkGit={"https://github.com/Abdullahciti/TopC-Website.github.io"}
        />
        <ProjectCard
          image={kasper}
          title={"Kasper"}
          category={"Website"}
          link={"https://abdullahciti.github.io/Kasper-Website/"}
          linkGit={"https://github.com/Abdullahciti/Kasper-Website"}
        />
        <ProjectCard
          image={bondi}
          title={"Bondi"}
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
