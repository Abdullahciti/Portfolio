import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faEnvelope,
  faPersonChalkboard,
  // faPhone,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { GrTechnology } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";

const Navbar = (props) => {
  const [isHoverd, setIsHoverd] = useState(true);
  const windowRef = useRef(null);

  const handleClickOutside = (event) => {
    if (windowRef.current && !windowRef.current.contains(event.target)) {
      setIsHoverd(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    // Navbar Start
    <div
      className="navbar flex flex-col items-center justify-center"
      ref={windowRef}
    >
      {/* Main Icon Navbar */}
      <button
        className="bg-bodyColor rounded-xl w-[60px] h-[60px] mb-2"
        onMouseOver={() => setIsHoverd(true)}
      >
        {isHoverd ? (
          <span className="w-full text-2xl h-full rounded-xl flex flex-col items-center justify-center p-3 cursor-pointer group">
            <div className="flex flex-col gap-1.5">
              <span className="w-[30px] h-[2px] inline-block translate-x-0 bg-designColor transition-all duration-300"></span>
              <span className="w-[30px] h-[2px] inline-block bg-designColor transition-all duration-300"></span>
              <span className="w-[30px] h-[2px] inline-block translate-x-0 bg-designColor transition-all duration-300"></span>
            </div>
          </span>
        ) : (
          <span className="w-full text-2xl h-full rounded-xl flex flex-col items-center justify-center p-3 cursor-pointer group">
            <div className="flex flex-col overflow-hidden gap-1.5">
              <span className="w-[30px] h-[2px] inline-block bg-textColor -translate-x-2 group-hover:translate-x-0 group-hover:bg-designColor transition-all duration-300"></span>
              <span className="w-[30px] h-[2px] inline-block bg-textColor group-hover:bg-designColor transition-all duration-300"></span>
              <span className="w-[30px] h-[2px] inline-block bg-textColor -translate-x-4 group-hover:translate-x-0 group-hover:bg-designColor transition-all duration-300"></span>
            </div>
          </span>
        )}
      </button>

      {props.show && (
        // {/* Start Other Navbar Icons */}
        <ul
          onMouseOver={props.trueShow}
          className="bg-bodyColor rounded-xl flex flex-col md:justify-evenly lg:justify-between w-[60px] sm:h-full lg:h-[350px] lg:py-2 lg:m-1"
        >
          <li
            onClick={props.toggleLeft}
            className="relative w-full text-2xl hover:text-designColor rounded-t-xl flex items-center justify-center p-3 mb-1 cursor-pointer group lg:hidden"
          >
            <FontAwesomeIcon icon={faPersonChalkboard} />
            <span className="absolute font-semibold text-lg w-[176px] text-center uppercase bg-designColor text-black translate-x-24 z-50 group-hover:translate-x-28 opacity-0 group-hover:opacity-100 duration-300 rounded-2xl px-1">
              Presonal Info
            </span>
          </li>
          <li
            onClick={props.toggleAbout}
            className="relative w-full text-2xl hover:text-designColor rounded-t-xl flex items-center justify-center p-3 mb-1 cursor-pointer group"
          >
            <FontAwesomeIcon icon={faUser} />{" "}
            <span className="absolute font-semibold text-lg w-[112px] text-center uppercase bg-designColor text-black translate-x-10 z-50 group-hover:translate-x-20 opacity-0 group-hover:opacity-100 duration-300 rounded-2xl px-1">
              About
            </span>
          </li>
          <li
            onClick={props.toggleResume}
            className="relative w-full text-2xl hover:text-designColor flex flex-col items-center justify-center p-3 my-1 cursor-pointer group"
          >
            <FontAwesomeIcon icon={faAddressBook} />
            <span className="absolute font-semibold text-lg w-[112px] text-center uppercase bg-designColor text-black translate-x-10 z-50 group-hover:translate-x-20 opacity-0 group-hover:opacity-100 duration-300 rounded-2xl px-1">
              Resume
            </span>
          </li>
          <li
            onClick={props.toggleProjects}
            className="relative w-full text-2xl hover:text-designColor flex flex-col items-center justify-center p-3 my-1 cursor-pointer group"
          >
            <FontAwesomeIcon icon={faSuitcase} />
            <span className="absolute font-semibold text-lg w-[140px] text-center uppercase bg-designColor text-black translate-x-10 z-50 group-hover:translate-x-24 opacity-0 group-hover:opacity-100 duration-300 rounded-2xl px-1">
              Projects
            </span>
          </li>
          <li
            onClick={props.toggleTech}
            className="relative hidden w-full text-2xl hover:text-designColor flex-col items-center justify-center p-3 my-1 cursor-pointer group"
          >
            <GrTechnology />
            <span className="absolute font-semibold text-lg w-[172px] text-center uppercase bg-designColor text-black translate-x-18 z-50 group-hover:translate-x-28 opacity-0 group-hover:opacity-100 duration-300 rounded-2xl px-1">
              Technologies
            </span>
          </li>
          <li
            className="relative w-full text-2xl hover:text-designColor rounded-b-xl flex flex-col items-center justify-center p-3 mt-1 cursor-pointer group"
            onClick={props.toggleContact}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="absolute font-semibold text-lg w-[140px] text-center uppercase bg-designColor text-black translate-x-10 z-50 group-hover:translate-x-24 opacity-0 group-hover:opacity-100 duration-300 rounded-2xl px-1">
              Email Me
            </span>
          </li>
          {/* <li
            className="relative w-full text-2xl hover:text-designColor rounded-b-xl flex flex-col items-center justify-center p-3 mt-1 cursor-pointer group"
            onClick={props.toggleCall}
          >
            <FontAwesomeIcon icon={faPhone} />
            <span className="absolute font-semibold text-lg w-[172px] text-center uppercase bg-designColor text-black translate-x-10 z-50 group-hover:translate-x-28 opacity-0 group-hover:opacity-100 duration-300 rounded-2xl px-1">
              Contact Me
            </span>
          </li> */}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
