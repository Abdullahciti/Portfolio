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
import HomeMobile from "./HomeMobile";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Animation */}
      <div className="absolute top-0 left-0 max-w-screen h-full z-0">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
      <div
        className="lg:w-full h-screen flex justify-center lg:items-center lg:pt-0 pt-4 text-textColor bg-black overflow-y-scroll
    [&::-webkit-scrollbar]:w-3
            [&::-webkit-scrollbar-thumb]:bg-[#646464]
            [&::-webkit-scrollbar-thumb]:rounded-md"
      >
        {/* App => home */}
        <div className="relative container w-8/12 lg:flex lg:flex-row flex-col h-5/6">
          <div className="lg:flex gap-1.5 basis-5/12 hidden">
            <Navbar />
            <div className="flex w-full shadow-lg z-10">
              <LeftSide />
            </div>
          </div>
          {/* Start Right Side */}
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative lg:block hidden px-8 bg-bodyColor rounded-md my-5 basis-7/12 overflow-y-auto
            [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-[#646464]
            [&::-webkit-scrollbar-thumb]:rounded-md"
          >
            <AnimatePresence>
              <Outlet />
            </AnimatePresence>
          </motion.div>
          <HomeMobile />
        </div>
        <Handynavbar />
      </div>
    </>
  );
}

export default App;
