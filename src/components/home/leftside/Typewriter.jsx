import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

const MyText = () => {
  const { t } = useTranslation("home");

  return (
    <p className="w-fit mx-auto lg:text-xl text-sm font-semibold text-designColor">
      <span>
        <Typewriter
          words={[`React ${t("job")}`, `Frontend ${t("job")}`]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </p>
  );
};

export default MyText;
