import { avatar } from "../../assets/Index";
import Buttons from "./leftside/Buttons";
import SocialIcons from "./leftside/SocialIcons";
import MyText from "./leftside/Typewriter";

const LeftSide = () => {
  return (
    <div className="flex flex-col relative z-20 bg-bodyColor shadow-2xl rounded-2xl group">
      {/* Start Image-Box */}
      <div className=" h-[450px] w-full overflow-hidden mb-8 rounded-b-xl">
        <img
          loading="prioity"
          src={avatar}
          alt=""
          // className="max-w-full opacity-40 group-hover:opacity-100 group-hover:-rotate-3 group-hover:scale-[1.1] group-hover:-translate-x-1 duration-300 w-[500px] h-[900px] object-none"
          className="max-w-full opacity-100 scale-[1.1] -translate-x-1 duration-300 lg:w-[500px] lg:h-[900px] object-none"
        />
      </div>
      <div className="content w-full">
        <h2 className="text-4xl font-titleFont font-bold w-fit mx-auto">
          Abdullah Arafa
        </h2>
        <MyText /> {/* here is my Type Writer Text */}
        <div className="w-fit mx-auto social-icons mb-8">
          <SocialIcons />
        </div>
        <div className="buttons">
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
