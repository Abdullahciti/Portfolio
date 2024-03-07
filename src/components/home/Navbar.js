import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faComments,
  faEnvelope,
  faPhone,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    // Navbar Start
    <div
      onMouseLeave={props.falseShow}
      onClick={() => {}}
      className="navbar flex flex-col items-center justify-center"
    >
      {/* Main Icon Navbar */}
      <button
        className="bg-bodyColor rounded-xl w-[60px] h-[60px] mb-2"
        onMouseOver={props.trueShow}
      >
        <span className="w-full text-2xl h-full rounded-xl flex flex-col items-center justify-center p-3 cursor-pointer group">
          <div className="flex flex-col overflow-hidden gap-1.5">
            <span className="w-[30px] h-[2px] inline-block bg-textColor -translate-x-2 group-hover:translate-x-0 group-hover:bg-yellow-300 transition-all duration-300"></span>
            <span className="w-[30px] h-[2px] inline-block bg-textColor group-hover:bg-yellow-300 transition-all duration-300"></span>
            <span className="w-[30px] h-[2px] inline-block bg-textColor -translate-x-4 group-hover:translate-x-0 group-hover:bg-yellow-300 transition-all duration-300"></span>
          </div>
        </span>
      </button>

      {props.show && (
        // {/* Start Other Navbar Icons */}
        <ul
          onMouseOver={props.trueShow}
          className="bg-bodyColor rounded-xl flex flex-col justify-between w-[60px] h-[360px] py-2 m-1"
        >
          <li
            onClick={props.toggleAbout}
            className="relative w-full text-2xl hover:text-yellow-300 rounded-t-xl flex items-center justify-center p-3 mb-1 cursor-pointer group"
          >
            <FontAwesomeIcon icon={faUser} />{" "}
            <span className="absolute font-semibold w-[112px] text-center uppercase bg-yellow-300 text-black translate-x-10 z-50 group-hover:translate-x-20 opacity-0 group-hover:opacity-100 duration-300 rounded-2xl px-2 py-1">
              About
            </span>
          </li>
          <li
            onClick={props.toggleResume}
            className="relative w-full text-2xl hover:text-yellow-300 flex flex-col items-center justify-center p-3 my-1 cursor-pointer group"
          >
            <FontAwesomeIcon icon={faAddressBook} />
            <span className="absolute font-semibold w-[112px] text-center uppercase bg-yellow-300 text-black translate-x-10 z-50 group-hover:translate-x-20 opacity-0 group-hover:opacity-100 duration-300 rounded-2xl px-2 py-1">
              Resume
            </span>
          </li>
          <li
            onClick={props.toggleProjects}
            className="relative w-full text-2xl hover:text-yellow-300 flex flex-col items-center justify-center p-3 my-1 cursor-pointer group"
          >
            <FontAwesomeIcon icon={faSuitcase} />
            <span className="absolute font-semibold w-[140px] text-center uppercase bg-yellow-300 text-black translate-x-10 z-50 group-hover:translate-x-24 opacity-0 group-hover:opacity-100 duration-300 rounded-2xl px-2 py-1">
              Projects
            </span>
          </li>
          <li
            onClick={props.toggleMessage}
            className="relative w-full text-2xl hover:text-yellow-300 flex flex-col items-center justify-center p-3 my-1 cursor-pointer group"
          >
            <FontAwesomeIcon icon={faComments} />
            <span className="absolute font-semibold w-[112px] text-center uppercase bg-yellow-300 text-black translate-x-10 z-50 group-hover:translate-x-20 opacity-0 group-hover:opacity-100 duration-300 rounded-2xl px-2 py-1">
              Rating
            </span>
          </li>
          <li
            className="relative w-full text-2xl hover:text-yellow-300 rounded-b-xl flex flex-col items-center justify-center p-3 mt-1 cursor-pointer group"
            onClick={props.toggleContact}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="absolute font-semibold w-[140px] text-center uppercase bg-yellow-300 text-black translate-x-10 z-50 group-hover:translate-x-24 opacity-0 group-hover:opacity-100 duration-300 rounded-2xl px-2 py-1">
              Email Me
            </span>
          </li>
          <li
            className="relative w-full text-2xl hover:text-yellow-300 rounded-b-xl flex flex-col items-center justify-center p-3 mt-1 cursor-pointer group"
            onClick={props.toggleCall}
          >
            <FontAwesomeIcon icon={faPhone} />
            <span className="absolute font-semibold w-[172px] text-center uppercase bg-yellow-300 text-black translate-x-10 z-50 group-hover:translate-x-28 opacity-0 group-hover:opacity-100 duration-300 rounded-2xl px-2 py-1">
              Contact Me
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;