import { useTranslation } from "react-i18next";
import MainTitle from "./MainTitle";
import ResmueData from "./Resume/ResumaData";
import SkillsData from "./Resume/SkillsData";

const Resume = () => {

  const {t} = useTranslation("resume")

  return (
    <section id="resume" className="lg:mb-0 mb-5">
      <MainTitle title={t("title")} subTitle={t("subTitle")} />
      <ResmueData />
      <MainTitle title={"My"} subTitle={"Skills"} />
      <SkillsData />
    </section>
  );
};

export default Resume;
