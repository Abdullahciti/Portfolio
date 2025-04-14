import { PiBagSimpleFill } from "react-icons/pi";
import AltTitle from "../AltTitle";
import { IoSchool } from "react-icons/io5";
import ResumeCard from "./ResumeCard";
import { useTranslation } from "react-i18next";

const ResmueData = () => {
  const { t } = useTranslation("resume");

  return (
    <div className="grid grid-cols-1">
      {/* Start Experience */}
      <AltTitle icon={<PiBagSimpleFill />} title={"Experience"} />
      <ResumeCard
        status={true}
        date={`01/2025 - ${t("present")}`}
        header={t("resume1")} // "Frontend Web Development"
        place={t("place1")} // "Self-directed Learning"
        paragraph={t("resume1desc")} // Frontend dev description
      />
      <ResumeCard
        status={""}
        date={"05/2022 - 01/2025"}
        header={t("resume2")} // "Secondary School" (from your JSON, but adjusted below)
        place={t("place2")} // "Self-directed Learning" (adjusted below)
        paragraph={t("resume2desc")} // Self-directed learning desc (adjusted below)
      />

      {/* Start Education */}
      <AltTitle icon={<IoSchool />} title={"Education"} />
      <ResumeCard
        status={""}
        date={"09/2013 - 06/2016"}
        header={t("resume3")} // New key for Secondary School
        place={t("place3")} // New key for place
        paragraph={t("resume3desc")} // New key for description
      />
      <ResumeCard
        status={""}
        date={"09/2016 - 06/2021"}
        header={t("resume4")} // New key for University Preparatory Course
        place={t("place4")} // New key for place
        paragraph={t("resume4desc")} // New key for description
      />
      <ResumeCard
        status={""}
        date={"09/2017 - 03/2022"}
        header={t("resume5")} // New key for Civil Engineering
        place={t("place5")} // New key for place
        paragraph={t("resume5desc")} // New key for description
      />
      <ResumeCard
        status={""}
        date={"10/2022 - 04/2024"}
        header={t("resume6")} // New key for B2 German Language Course
        place={t("place6")} // New key for place
        paragraph={t("resume6desc")} // New key for description
      />
    </div>
  );
};

export default ResmueData;