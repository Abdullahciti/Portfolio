import { avatar } from "../../../assets/Index";
import Buttons from "../leftside/Buttons";
import SocialIcons from "../leftside/SocialIcons";
import MyText from "../leftside/Typewriter";
import MainTitle from "../rightside/MainTitle";

const PersonalInfo = () => {
  return (
    <section id="presonal-info lg:hidden block">
        <MainTitle title={"Personal"} subTitle={"Info"} />
      {/* Start Image-Box */}
      <div className="image-box w-full justify-center items-center p-5 overflow-hidden max-h-[408px] my-5">
        <img
          loading="prioity"
          src={avatar}
          alt=""
          className="max-w-full opacity-100 scale-[1.1] -translate-x-1 duration-300 w-[500px] h-[900px] object-none"
        />
      </div>
      <div className="content w-full h-[50%] mt-12">
        <h2 className="text-4xl font-titleFont font-bold w-fit mx-auto">
          Abdullah Arafa
        </h2>
        <MyText /> {/* here is my Type Writer Text  */}
        <div className="w-fit mx-auto social-icons mb-8">
          <SocialIcons />
        </div>
        <div className="buttons">
          <Buttons />
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
