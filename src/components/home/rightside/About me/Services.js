
// Components
import ServicesContent from "./services/ServicesContent";

// Icons
import { FaEarthAmericas } from "react-icons/fa6";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { ImUserTie } from "react-icons/im";

const Services = () => {
  return (
    <div className="services flex flex-col bg-bodyColor p-8">
      {/* start Services Content */}
      <div className="grid md:grid-cols-2 grid-cols-1 mb-3 pb-3 gap-5">
        {/* Start Web Development */}
        <ServicesContent
          icon={<FaEarthAmericas />}
          header={"Web Development"}
          paragraph={
            "We specialize in expert web development solutions, let's turn your vision into reality."
          }
          />
         {/* Start Web Design */}
        <ServicesContent
          icon={<MdOutlineDesignServices />        }
          header={"Web Design"}
          paragraph={
            "Transforming Your Dreams into Reality: Let Our Team's Inspiration Elevate Your Web Development & Design Vision"
          }
          />
        {/* Start Mobile Design */}
        <ServicesContent
          icon={<MdOutlineMobileFriendly />}
          header={"Mobile Design"}
          paragraph={
            "Driving your mobile aspirations forward with our expertise and creativity."
          }
        />
        {/* Start Latest News */}
        <ServicesContent
          icon={<ImUserTie />}
          header={"Stay Updated"}
          paragraph={
            "Elevate Your Web Development & Design Vision with Our Team's Inspiration"
          }
        />
      </div>
    </div>
  );
};

export default Services;
