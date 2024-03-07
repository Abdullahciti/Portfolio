import { PiBagSimpleFill } from "react-icons/pi";
import AltTitle from "../AltTitle";
import { IoSchool } from "react-icons/io5";
import ResumeCard from "./ResumeCard";

const ResmueData = () => {
  return (
    <div className="w-full grid grid-cols-9">
      {/* Start Experiance */}
      <div className="col-span-4 px-4 pl-6">
        <AltTitle icon={<PiBagSimpleFill />} title={"Experience"} />
        <ResumeCard
          status={true}
          date={2024}
          lastDate={"Present"}
          header={"Frontend Web Development"}
          place={"Self-Employed"}
          paragraph={
            "As a frontend web developer, I am passionate about crafting engaging and user-friendly interfaces. I specialize in HTML, CSS, and JavaScript, and I continually explore new technologies to enhance my skills and stay updated with industry trends."
          }
        />
        <ResumeCard
          status={""}
          date={2023}
          lastDate={2024}
          header={"Problem Solving and Logic"}
          place={"Independent Study"}
          paragraph={
            "I have dedicated time to honing my problem-solving skills and logical thinking abilities. Through independent study and practice, I tackle challenging problems with creativity and precision, seeking efficient solutions and expanding my analytical capabilities."
          }
        />
        <ResumeCard
        status={""}
        date={2022}
        lastDate={2023}
        header={"Introduction to JavaScript"}
        place={"Self-Study"}
        paragraph={"I embarked on my journey with JavaScript, starting with the fundamentals and gradually building my proficiency. Through self-directed study and practice, I gained a solid understanding of JavaScript syntax, data types, and basic programming concepts. I worked on beginner-level projects to apply my knowledge and reinforce my learning, laying a strong foundation for future endeavors in web development."}
        />

        <ResumeCard
          status={""}
          date={2020}
          lastDate={2021}
          header={"HTML & CSS Proficiency"}
          place={"Self-Directed Study"}
          paragraph={
            "I dedicated myself to mastering HTML and CSS, refining my ability to create visually stunning and responsive web designs. Through self-directed study and hands-on projects, I honed my skills in front-end development, ensuring that I deliver high-quality and aesthetically pleasing websites."
          }
        />
      </div>
      {/* Manual Border */}
      <div className="col-span-1 h-full w-full flex items-center justify-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      {/* Start Education */}
      <div className="col-span-4 px-4 pl-6">
        <AltTitle icon={<IoSchool />} title={"Education"} />
        <ResumeCard
          status={""}
          date={"2023"}
          lastDate={"2024"}
          header={"German B2"}
          place={"Vhs Göppingen"}
          paragraph={
            "Ich beherrsche jetzt die deutsche Sprache fließend und kann mich besser ausdrücken."
          }
        />
        <ResumeCard
          status={""}
          date={"2022"}
          lastDate={"2023"}
          header={"German from A1 to B1"}
          place={"Vhs Geislingen"}
          paragraph={
            "ich konnte damals einfache Gespräche führen sowie über alltägliche Themen sprechen."
          }
        />
        <ResumeCard
          status={""}
          date={2022}
          lastDate={2016}
          header={"Civil Engineering"}
          place={"University"}
          paragraph={
            "I studied for my Bachelor's degree in Civil Engineering at Lviv, Ukraine."
          }
        />
        <ResumeCard
          status={""}
          date={2013}
          lastDate={2016}
          header={"Math"}
          place={"High School"}
          paragraph={
            "I`ve a strong foundation in mathematical principles and problem-solving skills."
          }
        />
      </div>
    </div>
  );
};

export default ResmueData;
