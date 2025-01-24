import { useEffect, useRef, useState } from "react";
import NavMenu from "../navbar/NavMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowMenu(false);
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
      className="h-4/6 md:flex hidden flex-col items-center relative"
      ref={menuRef}
    >
      {/* Main Icon Navbar */}
      {showMenu ? (
        <div
          onClick={() => setShowMenu(false)}
          className="bg-bodyColor rounded-xl w-16 h-16 mb-2 flex flex-col gap-2 justify-center px-2 cursor-pointer group"
        >
          <span className="h-[2px] bg-designColor w-full transition-all"></span>
          <span className="h-[2px] bg-designColor w-full transition-all"></span>
          <span className="h-[2px] bg-designColor w-full transition-all"></span>
        </div>
      ) : (
        <div
          onClick={() => setShowMenu(true)}
          className="bg-bodyColor rounded-xl w-16 h-16 mb-2 flex flex-col gap-2 justify-center px-2 cursor-pointer group"
        >
          <span className="h-[2px] w-3/4 bg-textColor bg-opacity-75 group-hover:bg-designColor group-hover:w-full transition-all"></span>
          <span className="h-[2px] w-1/3 bg-textColor bg-opacity-75 group-hover:bg-designColor group-hover:w-full transition-all"></span>
          <span className="h-[2px] w-2/4 bg-textColor bg-opacity-75 group-hover:bg-designColor group-hover:w-full transition-all"></span>
        </div>
      )}
      {/* Navbar menu */}
      <NavMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
