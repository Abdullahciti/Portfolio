import AltTitle from "../AltTitle";
import { GiMoebiusTriangle } from "react-icons/gi";
import { GrFlagFill } from "react-icons/gr";
import SkillsCard from "./SkillsCard";
import { MdDone } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";

const SkillsData = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col border border-borderColor">
      {/* Start Design */}
      <div className="basis-1/2 border-r border-borderColor px-6">
        <AltTitle icon={<GiMoebiusTriangle />} title={"Technical Skills"} />
        <SkillsCard status={true} skill={"Web Development"} fill={"w-10/12"} />
        <SkillsCard
          status={true}
          skill={"Database Management"}
          fill={"w-4/6"}
        />
        <SkillsCard status={true} skill={"SPA Applications"} fill={"w-4/6"} />
        <SkillsCard status={true} skill={"UX"} fill={"w-4/5"} />
        {/* Start Coding */}
        <AltTitle icon={<FaLaptopCode />} title={"Coding"} />
        <SkillsCard status={true} skill={"JavaScript"} fill={"w-10/12"} />
        <SkillsCard status={true} skill={"React.js"} fill={"w-10/12"} />
        <SkillsCard status={true} skill={"Redux-Toolkit"} fill={"w-10/12"} />
        <SkillsCard status={true} skill={"Node.js"} fill={"w-9/12"} />
      </div>
      {/* Start Languages */}
      <div className="basis-1/2 border-l border-borderColor px-6">
        <AltTitle icon={<GrFlagFill />} title={"Languages"} />
        <SkillsCard status={"skill"} skill={"Arabic"} fill={"w-full"} />
        <SkillsCard status={true} skill={"Deutsch"} fill={"w-4/5"} />
        <SkillsCard status={true} skill={"English"} fill={"w-10/12"} />
        <SkillsCard status={true} skill={"Ukranian"} fill={"w-4/5"} />
        {/* Start Knowledge */}
        <AltTitle icon={<GiGiftOfKnowledge />} title={"Knowledge"} />
        <div className="h-fit my-auto">
          <SkillsCard
            status={false}
            icon={<MdDone />}
            skill={"React States Managment"}
          />
          <SkillsCard
            status={false}
            icon={<MdDone />}
            skill={"Website Hosting"}
          />
          <SkillsCard
            status={false}
            icon={<MdDone />}
            skill={"Git and version control"}
          />
          <SkillsCard status={false} icon={<MdDone />} skill={"SEO - SPA"} />
          <SkillsCard
            status={false}
            icon={<MdDone />}
            skill={"Transitions - Animation"}
          />
          <SkillsCard
            status={false}
            icon={<MdDone />}
            skill={"Website Hosting"}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsData;
