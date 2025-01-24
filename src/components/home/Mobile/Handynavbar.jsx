import { FaAddressBook, FaEnvelope, FaSuitcase, FaUser } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";

import { Link } from "react-router-dom";

const Handynavbar = () => {
  return (
    <ul className="bg-bodyColor lg:hidden absolute bottom-6 left-1/2 -translate-x-1/2 rounded-xl flex cursor-pointer justify-evenly w-1/2 py-3">
      <li className="w-fit">
        <Link to="/" className="text-4xl">
          <FaUser />
        </Link>
      </li>
      <li className="w-fit">
        <Link to="/resume" className="text-4xl">
          <PiReadCvLogoFill />
        </Link>
      </li>
      <li className="w-fit">
        <Link to="/projects" className="text-4xl">
          <FaSuitcase />
        </Link>
      </li>
      <li className="w-fit">
        <Link to="/contact" className="text-4xl">
          <FaEnvelope />
        </Link>
      </li>
    </ul>
  );
};

export default Handynavbar;
