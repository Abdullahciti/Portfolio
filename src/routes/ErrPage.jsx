// Motoin
import { motion } from "framer-motion";

// import Home from "./Home";
import { Link } from "react-router-dom";

import RoundOne from "../components/RoundDesigns/RoundOne";
import RoundTwo from "../components/RoundDesigns/RoundTwo";
import RoundThree from "../components/RoundDesigns/RoundThree";
import RoundFour from "../components/RoundDesigns/RoundFour";
import RoundFive from "../components/RoundDesigns/RoundFive";
import LeftSide from "../components/home/LeftSide";

function ErrPage() {
  return (
    <div className="w-full relative text-textColor bg-black overflow-hidden h-screen z-50">
      {/* App => home */}
      <div className="h-full flex z-20 max-w-screen-2xl flex-row justify-center items-center mx-auto">
        <LeftSide />
        {/* Start Right Side */}
        <div className="w-full lg:w-8/12 lg:h-[95%] md:h-full h-[80vh] bg-bodyColor md:overflow-hidden md:rounded-lg rounded-lg">
          <div className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#646464]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full min-h-full flex justify-center items-center relative z-50"
            >
              <div className="w-full min-h-full flex justify-center items-center relative z-50">
                <h1 className="text-textColor">sorry, there`s no such path!</h1>
                <div className="block">
                  Please go back to{" "}
                  <Link
                    className="text-designColor text-xl underline cursor-pointer"
                    to="/"
                  >
                    Home
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Animation */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
    </div>
  );
}

export default ErrPage;
