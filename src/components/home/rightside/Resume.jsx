import MainTitle from "./MainTitle";
import ResmueData from "./Resume/ResumaData";
import SkillsData from "./Resume/SkillsData";

const Resume = () => {
    return ( 
        <section id="resume" className="pb-5">
            <MainTitle title={"My"} subTitle={"Resume"} />
            <ResmueData />
            <MainTitle title={"My"} subTitle={"Skills"} />
            <SkillsData />
        </section>
     );
}
 
export default Resume;