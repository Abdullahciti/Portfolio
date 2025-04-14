// Components
import { useTranslation } from "react-i18next";
import ServicesContent from "./services/ServicesContent";

// Icons
import { FaCode } from "react-icons/fa"; // Replace with a relevant icon
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";

const Services = () => {
  const { t } = useTranslation("services");

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 mb-3">
      {/* Start Frontend Development */}
      <ServicesContent
        icon={<FaCode />}
        header={t("ser1")}
        paragraph={t("ser1Desc")}
        border={"border-b border-b-borderColor"}
      />
      {/* Start JavaScript Development */}
      <ServicesContent
        icon={<SiJavascript />}
        header={t("ser2")}
        paragraph={t("ser2Desc")}
        border={"border-b border-b-borderColor"}
      />
      {/* Start React Development */}
      <ServicesContent
        icon={<SiReact />}
        header={t("ser3")}
        paragraph={t("ser3Desc")}
      />
      {/* Start Redux Development */}
      <ServicesContent
        icon={<SiRedux />}
        header={t("ser4")}
        paragraph={t("ser4Desc")}
      />
    </div>
  );
};

export default Services;
