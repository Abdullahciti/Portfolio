import { useTranslation } from "react-i18next";

const Introducing = () => {

  const {t} = useTranslation("about")

  return (
    <>
      <h2 className="text-xl font-semibold text-zinc-300 mb-3">
        {t("para")}
      </h2>
      <p className="text-zinc-400 font-light">
        {t("desc")}      </p>
    </>
  );
};

export default Introducing;
