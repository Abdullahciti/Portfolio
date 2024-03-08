import MainTitle from "./MainTitle";
import TechCard from "./UsedTechnologies/TechCard.js";

import {
  react,
  tailwind,
  vercel,
  github,
  cmder,
  javascript,
} from "../../../assets/Index.js";

const UsedTechs = () => {
  return (
    <div>
      <MainTitle title={"Used"} subTitle={"Technologies"} />
      <div className="w-full grid grid-cols-2">
        <div className="px-6">
          <TechCard
            image={javascript}
            date={"1995"}
            status={"Introdueced"}
            title={"Brendan Eich"}
            category={
              "JavaScript is used for creating interactive websites, server-side development with Node.js, and building cross-platform mobile apps and games."
            }
          />
          <TechCard
            image={tailwind}
            date={"2017"}
            status={"released"}
            title={
              "Adam Wathan"
            }
            category={
              "Vercel is a cloud platform for static sites and serverless functions."
            }
          />
          <TechCard
            image={vercel}
            date={"2015"}
            status={"released"}
            title={"Guillermo Rauch"}
            category={"Tailwind Css, a Css Framework utility."}
          />
        </div>
        <div className="px-6">
          <TechCard
            image={react}
            date={"2011"}
            status={"Developed"}
            title={"Jordan Walke"}
            category={"JavaScript Library for building use interfaces."}
          />
          <TechCard
            image={cmder}
            date={"2013"}
            status={"Released"}
            title={"Samuel Vasko"}
            category={"Cmder is a console emulator for Windows."}
          />
          <TechCard
            image={github}
            date={"2008"}
            status={"Founded"}
            title={"Tom Preston-Werner"}
            category={
              "Github is a web-based platform for hosting managing Git Repositories."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default UsedTechs;
