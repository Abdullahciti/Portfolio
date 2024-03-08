import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faComments,
  faEnvelope,
  // faPhone,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Handynavbar = (props) => {
  return (
    <ul className="bg-bodyColor rounded-xl flex w-fit mx-auto my-4">
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
        onClick={props.toggleMessage}
        className="text-2xl text-textColor hover:text-designColor mx-4 py-3"
      >
        <FontAwesomeIcon icon={faComments} />
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
