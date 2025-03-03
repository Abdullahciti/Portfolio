import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Buttons = () => {
  return (
    <div className="w-full flex">
      <a
        href="https://drive.google.com/file/d/1M6PLM665UPgakWqHGJuAY9gAn0R-3MVE/view?usp=sharing"
        download="your-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 flex justify-center items-center lg:text-lg text-sm lg:font-semibold font-light py-3 hover:text-designColor transition-all"
      >
        Download CV
        <FaCloudDownloadAlt className="text-xl mx-1.5" />
      </a>
      <span className="bg-designColor bg-opacity-10 min-h-full w-[1px]"></span>
      <a
        href="https://wa.me/4915124152234"
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 flex justify-center items-center lg:text-lg text-sm lg:font-semibold font-light py-3 hover:text-designColor transition-all"
      >
        Contact Me
        <FaWhatsappSquare className="text-xl mx-1.5" />
      </a>
    </div>
  );
};

export default Buttons;
