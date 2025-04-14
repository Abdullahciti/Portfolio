import { FaEnvelope, FaSuitcase, FaUser } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";
import ManualNavLink from "./ManualNavLink";
import { useTranslation } from "react-i18next";

const NavMenu = ({ showMenu }) => {

  const {t} = useTranslation("navbar")

  return (
    <ul
      className={`bg-bodyColor rounded-xl w-full transition-all ${
        showMenu
          ? "absolute top-20 opacity-100"
          : "absolute top-10 opacity-0 pointer-events-none"
      }`}
    >
      <ManualNavLink path={"/about"} name={t("about")} icon={<FaUser />} />
      <ManualNavLink
        path={"/resume"}
        name={t("resume")}
        icon={<PiReadCvLogoFill />}
      />
      <ManualNavLink
        path={"/projects"}
        name={t("projects")}
        icon={<FaSuitcase />}
      />
      <ManualNavLink
        path={"/contact"}
        name={t("email")}
        icon={<FaEnvelope />}
      />
    </ul>
  );
};

export default NavMenu;
