import { FaEnvelope, FaSuitcase, FaUser } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";

import { Link } from "react-router-dom";

const Handynavbar = () => {
  return (
    <ul className="bg-bodyColor lg:hidden absolute top-full mt-5 left-1/2 -translate-x-1/2 rounded-md flex cursor-pointer justify-evenly w-full py-3">
      <li className="w-fit">
        <Link to="/" className="block mx-4 text-3xl">
          <FaUser />
        </Link>
      </li>
      <li className="w-fit">
        <Link to="/resume" className="block mx-4 text-3xl">
          <PiReadCvLogoFill />
        </Link>
      </li>
      <li className="w-fit">
        <Link to="/projects" className="block mx-4 text-3xl">
          <FaSuitcase />
        </Link>
      </li>
      <li className="w-fit">
        <Link to="/contact" className="block mx-4 text-3xl">
          <FaEnvelope />
        </Link>
      </li>
    </ul>
  );
};

export default Handynavbar;
