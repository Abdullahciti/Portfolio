import AboutMe from "./components/home/rightside/AboutMe";
import Projects from "./components/home/rightside/Projects";
import Contact from "./components/home/rightside/Contact";
import Resume from "./components/home/rightside/Resume";
import LeftSide from "./components/home/LeftSide";

const HomeMobile = () => {
  return (
    <div className="lg:hidden container">
      <div className="my-3">
        <LeftSide />
      </div>
      <div className="bg-bodyColor">
        <AboutMe />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default HomeMobile;
