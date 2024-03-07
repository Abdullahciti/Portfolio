import Details from "./About/Details";
import Introducing from "./About/Introducing";


const About = () => {
  return (
    <div className="about-content grid grid-cols-2 p-5">
      {/* Introducing myself */}
      <div className="w-full borderRight">
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
