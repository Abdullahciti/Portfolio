// import { FaTrophy } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { GiTargetPrize } from "react-icons/gi";

import FunCard from "./Fun Fact/FunCard";

const FunFact = ({ projectsCount = 13 }) => {
  return (
    <div className="min-w-full grid grid-cols-2 p-8 gap-5">
      <FunCard
        icon={<GiTargetPrize />}
        desc={`${projectsCount} Finished Projects`}
      />
      <FunCard icon={<FaCode />} desc={"250 Hours of coding"} />
    </div>
  );
};

export default FunFact;
