import MainTitle from "./MainTitle";
import About from "./About me/About";
import Services from "./About me/Services";
import LeftSideSm from "../Mobile/LeftSideSm";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation("about");

  return (
    // Start Main About Me
    <section id="about" className="lg:mb-0 mb-6">
      {/* Start About */}
      <MainTitle title={t("title")} subTitle={t("subTitle")} />
      <About />
      {/* Start Services */}
      <MainTitle title={t("altTitle")} subTitle={t("altSubTitle")} />
      <Services />
    </section>
  );
};

export default AboutMe;
