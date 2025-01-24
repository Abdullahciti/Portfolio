import MainTitle from "./MainTitle";
import About from "./About me/About";
import Services from "./About me/Services";
import LeftSideSm from "../Mobile/LeftSideSm";

const AboutMe = () => {
  return (
    // Start Main About Me
    <section id="about">
      <div className="xl:hidden block">
        <LeftSideSm />
      </div>
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
