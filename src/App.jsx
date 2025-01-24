import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import RoundOne from "./components/RoundDesigns/RoundOne";
import RoundTwo from "./components/RoundDesigns/RoundTwo";
import RoundThree from "./components/RoundDesigns/RoundThree";
import RoundFour from "./components/RoundDesigns/RoundFour";
import RoundFive from "./components/RoundDesigns/RoundFive";
import Navbar from "./components/home/Navbar";
import Handynavbar from "./components/home/Mobile/Handynavbar";
import LeftSide from "./components/home/LeftSide";

function App() {
  const location = useLocation();

  return (
    <div className="max-w-full h-screen flex justify-center xl:items-center xl:pt-0 pt-4 relative text-textColor bg-black overflow-hidden">
      {/* Animation */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
      {/* App => home */}
      <div className="relative w-9/12 flex h-5/6 overflow-hidden">
        <div className="xl:basis-4/12 xl:w-fit basis-5/6 h-5/6 my-auto lg:flex hidden">
          <Navbar />
          <div className="flex w-full mx-2">
            <LeftSide />
          </div>
        </div>
        {/* Start Right Side */}
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full bg-bodyColor rounded-md xl:basis-full basis-full overflow-y-auto scroll-m-8
            [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-[#646464]
            [&::-webkit-scrollbar-thumb]:rounded-md"
        >
          <AnimatePresence>
            <Outlet />
          </AnimatePresence>
        </motion.div>
      </div>
      <Handynavbar />
    </div>
  );
}

export default App;
