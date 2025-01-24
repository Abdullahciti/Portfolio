import MainTitle from "./MainTitle";
import About from "./About me/About";
import Services from "./About me/Services";
import LeftSideSm from "../Mobile/LeftSideSm";

const AboutMe = () => {
  return (
    // Start Main About Me
    <section id="about" className="lg:mb-0 mb-6">
      {/* Start About */}
      <MainTitle title={"About"} subTitle={"Me"} />
      <About />
      {/* Start Services */}
      <MainTitle title={"My"} subTitle={"Services"} />
      <Services />
    </section>
  );
};

export default AboutMe;
