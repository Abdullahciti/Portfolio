// Components
import ServicesContent from "./services/ServicesContent";

// Icons
import { FaCode } from "react-icons/fa"; // Replace with a relevant icon
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";

const Services = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 mb-3">
      {/* Start Frontend Development */}
      <ServicesContent
        icon={<FaCode />}
        header={"Frontend Development"}
        paragraph={
          "I specialize in crafting clean, user-friendly, and responsive front-end experiences using technologies like React, JavaScript, and CSS."
        }
        border={"border-b border-b-borderColor"}
      />
      {/* Start JavaScript Development */}
      <ServicesContent
        icon={<SiJavascript />}
        header={"JS Development"}
        paragraph={
          "I have a strong command of JavaScript, including ES6+ features, and I use it to build dynamic and interactive web applications."
        }
        border={"border-b border-b-borderColor"}
      />
      {/* Start React Development */}
      <ServicesContent
        icon={<SiReact />}
        header={"React Development"}
        paragraph={
          "I leverage the power of React to build reusable UI components and create efficient and scalable web applications."
        }
      />
      {/* Start Redux Development */}
      <ServicesContent
        icon={<SiRedux />}
        header={"Redux Development"}
        paragraph={
          "I implement Redux to manage application state effectively, ensuring predictable and maintainable data flow."
        }
      />
    </div>
  );
};

export default Services;
