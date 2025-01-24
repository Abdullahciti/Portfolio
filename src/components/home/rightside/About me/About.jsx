import Details from "./About/Details";
import Introducing from "./About/Introducing";

const About = () => {
  return (
    <div className="grid md:grid-cols-11 mt-1.5 grid-cols-1 border border-borderColor">
      {/* Introducing myself */}
      <div className="lg:col-span-5 col-span-full lg:mb-0 mb-8 p-5">
        <Introducing />
      </div>
      <div className="lg:col-span-1 col-span-full lg:flex items-center justify-center">
        <span className="block lg:h-full h-[1px] lg:w-[1px] w-full bg-textColor opacity-10"></span>
      </div>
      <div className="lg:col-span-5 col-span-full p-5">
        <Details />
      </div>
    </div>
  );
};

export default About;
