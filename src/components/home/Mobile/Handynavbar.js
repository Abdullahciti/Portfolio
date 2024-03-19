import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GrTechnology } from "react-icons/gr"
import {
  faAddressBook,
  faEnvelope,
  faPersonChalkboard,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Handynavbar = (props) => {
  return (
    <ul className="bg-bodyColor rounded-xl flex mx-auto my-4 cursor-pointer justify-evenly w-full">
      <li
        onClick={props.toggleLeft}
        className="text-2xl text-textColor hover:text-designColor mx-4 py-3"
      >
        <FontAwesomeIcon icon={faPersonChalkboard} />
      </li>
      <li
        onClick={props.toggleAbout}
        className="text-2xl text-textColor hover:text-designColor mx-4 py-3"
      >
        <FontAwesomeIcon icon={faUser} />{" "}
      </li>
      <li
        onClick={props.toggleResume}
        className="text-2xl text-textColor hover:text-designColor mx-4 py-3"
      >
        <FontAwesomeIcon icon={faAddressBook} />
      </li>
      <li
        onClick={props.toggleProjects}
        className="text-2xl text-textColor hover:text-designColor mx-4 py-3"
      >
        <FontAwesomeIcon icon={faSuitcase} />
      </li>
      <li
        onClick={props.toggleTech}
        className="text-2xl hidden text-textColor hover:text-designColor mx-4 py-3"
      >
        <GrTechnology className="translate-y-1.5" />
      </li>
      <li
        className="text-2xl text-textColor hover:text-designColor mx-4 py-3"
        onClick={props.toggleContact}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </li>
    </ul>
  );
};

export default Handynavbar;
