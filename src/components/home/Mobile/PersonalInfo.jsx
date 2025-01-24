import { avatar } from "../../../assets/shared/Capture.png";
import SocialIcons from "../leftside/SocialIcons";
import MyText from "../leftside/Typewriter";
import MainTitle from "../rightside/MainTitle";

// Motoin
import { motion } from "framer-motion";

const PersonalInfo = () => {
  return (
    <section id="presonal-info" className="lg:hidden block min-h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex h-full flex-col justify-between items-start"
      >
        <MainTitle title={"Personal"} subTitle={"Info"} />
        {/* Start Image-Box */}
        <div className="overflow-hidden bg-black max-h-[408px] min-h-[408px]">
          <img
            loading="prioity"
            src={avatar}
            alt=""
            className="max-w-full opacity-100 scale-[1.1] duration-300 min-h-[900px] object-none"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-between items-start mt-10">
          <h2 className="text-4xl font-titleFont font-bold w-fit mx-auto">
            Abdullah Arafa
          </h2>
          <MyText /> {/* here is my Type Writer Text  */}
          <SocialIcons />
        </div>
      </motion.div>
    </section>
  );
};

export default PersonalInfo;
