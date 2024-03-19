import MainTitle from "./MainTitle";
import About from "./About me/About";
import Services from "./About me/Services";

const AboutMe = () => {
  return (
    // Start Main About Me
    <section id="about">
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
