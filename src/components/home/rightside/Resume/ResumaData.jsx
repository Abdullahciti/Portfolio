import { PiBagSimpleFill } from "react-icons/pi";
import AltTitle from "../AltTitle";
import { IoSchool } from "react-icons/io5";
import ResumeCard from "./ResumeCard";

const ResmueData = () => {
  return (
    <div className="grid grid-cols-1">
      {/* Start Experience */}
      <AltTitle icon={<PiBagSimpleFill />} title={"Experience"} />
      <ResumeCard
        status={true}
        date={"01/2025 - Present"}
        header={"Frontend Web Development"}
        place={"Self-directed Learning"}
        paragraph={
          "I am currently actively engaged in self-directed learning, focusing on enhancing my frontend development skills. I am building and deploying React.js projects, leveraging technologies like JavaScript, HTML, CSS, and libraries such as Redux. These projects, hosted on platforms like GitHub and Vercel, demonstrate my ability to translate technical concepts into functional and user-friendly web applications."
        }
      />
      {/* Start Education */}
      <AltTitle icon={<IoSchool />} title={"Education"} />
      <ResumeCard
        status={""}
        date={"09/2013 - 06/2016"}
        header={"Secondary School"}
        place={"6th October School, Giza, Egypt"}
        paragraph={
          "I graduated with a focus on Mathematics, developing strong problem-solving and analytical skills."
        }
      />
      <ResumeCard
        status={""}
        date={"09/2016 - 06/2021"}
        header={"University Preparatory Course"}
        place={"Ivan Franko National University of Lviv, Ukraine"}
        paragraph={
          "I pursued a Studienkolleg program, preparing me for university studies in Germany."
        }
      />
      <ResumeCard
        status={""}
        date={"09/2017 - 03/2022"}
        header={"Civil Engineering"}
        place={"Lviv Polytechnic National University, Ukraine"}
        paragraph={
          "I began my studies in Civil Engineering at Lviv Polytechnic National University, Ukraine."
        }
      />
      <ResumeCard
        status={""}
        date={"10/2022 - 04/2024"}
        header={"B2 German Language Course"}
        place={"Volkshochschule Göppingen, Germany"}
        paragraph={
          "I successfully completed a B2 German language course, enhancing my language proficiency and communication skills."
        }
      />
      <ResumeCard
        status={""}
        date={"05/2022 - 01/2025"}
        header={"Self-directed Web Development Studies"}
        place={"Online Courses, YouTube Tutorials, and Documentation"}
        paragraph={
          "I dedicated myself to self-directed study, focusing on web development through online courses, YouTube tutorials, and in-depth documentation. I gained a strong foundation in web development technologies, including HTML, CSS, JavaScript, and React.js."
        }
      />
    </div>
  );
};

export default ResmueData;
