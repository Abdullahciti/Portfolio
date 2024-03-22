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
            "I craft dynamic and responsive websites from start to finish, tailored to your needs."
          }
        />
        {/* Start Web Design */}
        <ServicesContent
          icon={<MdOutlineDesignServices />}
          header={"Vision Realization"}
          paragraph={
            "Bringing your digital vision to life: let our web development expertise realize your online goals!"
          }
        />
        {/* Start Mobile Design */}
        <ServicesContent
          icon={<MdOutlineMobileFriendly />}
          header={"Custom Web Applications"}
          paragraph={
            "Driving your mobile aspirations forward with our expertise and creativity."
          }
        />
        {/* Start Latest News */}
        <ServicesContent
          icon={<ImUserTie />}
          header={"Maintenance and Support"}
          paragraph={
            "continuous maintenance and support to keep your website performing smoothly and securely."
          }
        />
      </div>
    </div>
  );
};

export default Services;
