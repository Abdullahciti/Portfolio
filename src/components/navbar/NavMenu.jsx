import { FaEnvelope, FaSuitcase, FaUser } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";
import ManualNavLink from "./ManualNavLink";

const NavMenu = ({ showMenu }) => {
  return (
    <ul
      className={`bg-bodyColor rounded-xl w-full transition-all ${
        showMenu
          ? "absolute top-20 opacity-100"
          : "absolute top-10 opacity-0 pointer-events-none"
      }`}
    >
      <ManualNavLink path={"/about"} name={"About"} icon={<FaUser />} />
      <ManualNavLink
        path={"/resume"}
        name={"Resume"}
        icon={<PiReadCvLogoFill />}
      />
      <ManualNavLink
        path={"/projects"}
        name={"Projects"}
        icon={<FaSuitcase />}
      />
      <ManualNavLink
        path={"/contact"}
        name={"Email Me"}
        icon={<FaEnvelope />}
      />
    </ul>
  );
};

export default NavMenu;
