// import { FaTrophy } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { GiTargetPrize } from "react-icons/gi";


import FunCard from "./Fun Fact/FunCard";

const FunFact = ({porjectCount = 13}) => {
    return ( 
        <div className="min-w-full px-0 grid grid-cols-2 pb-1">
            <FunCard icon={<GiTargetPrize />} desc={`${porjectCount} Finished Projects`} />
            <FunCard icon={<FaCode />} desc={"250 Hours of coding"} />
        </div>
     );
}
 
export default FunFact;