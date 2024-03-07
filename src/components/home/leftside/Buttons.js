import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";

const Buttons = () => {
  return (
    <div className="w-full flex justify-between rounded-b-2xl overflow-hidden">
      <a
        href="https://abdullahciti.github.io/Lebenslauf/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[50%] flex justify-center items-center text-xl font-bold py-3 hover:bg-[rgb(0,0,0,0.3)] hover:text-designColor borderTop rounded-bl-2xl"
      >
        Download CV
        <FaCloudDownloadAlt className="ml-2" />
      </a>
      <a
        href="tel:+491635345412"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[50%] flex justify-center items-center text-xl font-bold py-3 hover:bg-[rgb(0,0,0,0.3)] hover:text-designColor borderTop borderLeft rounded-br-2xl"
      >
        Contact Me
        <MdWifiCalling3 className="ml-2" />
      </a>
    </div>
  );
};

export default Buttons;
