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
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "./context/LanguageContext";

// Importing language flags
import usaFlag from "./assets/shared/icons8-usa-50.png";
import deFlag from "./assets/shared/De-flag.png";

function App() {
  const location = useLocation();

  const { i18n } = useTranslation();
  const [showLang, setShowLang] = useState(false);

  const { language, setLanguage, switchLanguage } = useContext(LanguageContext);

  const handleLangFocus = () => {
    setShowLang(true);
  };
  const handleLangBlur = () => {
    setShowLang(false);
  };

  useEffect(() => {
    if (!window.localStorage.getItem("language")) {
      window.localStorage.setItem("language", "en");
      setLanguage("en");
    } else {
      setLanguage(window.localStorage.getItem("language"));
      i18n.changeLanguage(language);
    }
  }, [i18n, language, setLanguage]);

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
      {/* Language switcher button */}
      <div
        className="absolute top-5 right-5 p-3 z-50 cursor-pointer border border-borderColor bg-designColor bg-opacity-10 text-textColor"
        onClick={() => setShowLang(!showLang)}
        onMouseLeave={handleLangBlur}
        onFocus={handleLangFocus}
        onBlur={handleLangBlur}
      >
        {language === "en" ? (
          <span className="flex items-center font-bold gap-1.5 text-lg">
            <img src={usaFlag} alt="usa flag" className="w-6 h-6" />
            EN
          </span>
        ) : language === "de" ? (
          <span className="flex items-center font-bold gap-1.5 text-lg">
            <img src={deFlag} alt="usa flag" className="w-6 h-6" />
            De
          </span>
        ) : (
          ""
        )}
        <ul
          className={`absolute z-50 left-0 top-[101%] flex-col bg-designColor bg-opacity-10 opacity-0 py-1.5 text-nowrap bg-globalColor8 border-t-2 border-t-globalColor0 border-opacity-80 transition rounded-sm cursor-default shadow-2xl ${
            showLang
              ? "translate-y-0 opacity-100 flex opacity-1 pointer-events-auto"
              : "-translate-y-6 opacity-0 pointer-events-none"
          }`}
        >
          <li>
            <button
              onClick={() => switchLanguage("en")}
              className="flex items-center font-bold gap-2 px-3 my-2 hover:text-globalColor0 transition-all"
            >
              <img src={usaFlag} alt="usa flag" className="w-6 h-6" />
              EN
            </button>
          </li>
          <li>
            <button
              onClick={() => switchLanguage("de")}
              className="flex items-center font-bold gap-2 px-3 my-2 hover:text-globalColor0 transition-all"
            >
              <img src={deFlag} alt="usa flag" className="w-6 h-6" />
              De
            </button>
          </li>
        </ul>
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
