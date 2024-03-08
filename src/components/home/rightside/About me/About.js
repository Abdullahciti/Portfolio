import Details from "./About/Details";
import Introducing from "./About/Introducing";


const About = () => {
  return (
    <div className="about-content grid md:grid-cols-2 p-5 grid-cols-1">
      {/* Introducing myself */}
      <div className="w-full md:borderRight hidden md:block">
        <Introducing />
      </div>
      <div className="w-full borderBottom md:hidden">
        <Introducing />
      </div>
      {/* My Infromation */}
      <div className="w-full">
        <Details />
      </div>
    </div>
  );
};

export default About;
