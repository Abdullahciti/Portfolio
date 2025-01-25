import AltTitle from "../AltTitle";
import { GiMoebiusTriangle } from "react-icons/gi";
import { GrFlagFill } from "react-icons/gr";
import SkillsCard from "./SkillsCard";
import { MdDone } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";


const SkillsData = () => {
  return (
    <div className="w-full grid md:grid-cols-9 grid-cols-1 border border-borderColor">
      {/* Start Design */}
      <div className="col-span-4">
        <AltTitle icon={<GiMoebiusTriangle />} title={"Technical Skills"} />
        <SkillsCard status={true} skill={"Web Development"} fill={"w-[85%]"} />
        <SkillsCard status={true} skill={"Web Design"} fill={"w-[90%]"} />
        <SkillsCard
          status={true}
          skill={"Mobile Application"}
          fill={"w-[80%]"}
        />
        <SkillsCard status={true} skill={"UX"} fill={"w-[75%]"} />
        {/* Start Coding */}
        <AltTitle icon={<FaLaptopCode />} title={"Coding"} />
        <SkillsCard status={true} skill={"JavaScript"} fill={"w-[92%]"} />
        <SkillsCard status={true} skill={"TypeScript"} fill={"w-[92%]"} />
        <SkillsCard status={true} skill={"React"} fill={"w-[88%]"} />
        <SkillsCard status={true} skill={"Vue"} fill={"w-[84%]"} />
      </div>
      {/* Start Manual Border */}
      <div className="col-span-1 h-full w-full md:flex hidden items-center justify-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      {/* Start Languages */}
      <div className="md:col-span-4">
        <AltTitle icon={<GrFlagFill />} title={"Languages"} />
        <SkillsCard status={"skill"} skill={"Arabic"} fill={"w-[100%]"} />
        <SkillsCard status={true} skill={"Deutsch"} fill={"w-[88%]"} />
        <SkillsCard status={true} skill={"English"} fill={"w-[87%]"} />
        <SkillsCard status={true} skill={"Ukranian"} fill={"w-[82%]"} />
        {/* Start Knowledge */}
          <AltTitle icon={<GiGiftOfKnowledge />} title={"Knowledge"} />
        <div className="mt-5 mb-10">
          <SkillsCard
            status={false}
            icon={<MdDone />}
            skill={"Website Hosting"}
          />
          <SkillsCard
            status={false}
            icon={<MdDone />}
            skill={"Ios & Andriod apps"}
          />
          <SkillsCard
            status={false}
            icon={<MdDone />}
            skill={"Create Logo Design"}
          />
          <SkillsCard
            status={false}
            icon={<MdDone />}
            skill={"Website Hosting"}
          />
          <SkillsCard
            status={false}
            icon={<MdDone />}
            skill={"Clean Code"}
          />
          <SkillsCard
            status={false}
            icon={<MdDone />}
            skill={"Work Long!"}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsData;
