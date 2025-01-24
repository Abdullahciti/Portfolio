import avatar from "../../../assets/shared/Mein_Bewerbungsbild-removebg-preview.png";
import Buttons from "../leftside/Buttons";
import SocialIcons from "../leftside/SocialIcons";
import MyText from "../leftside/Typewriter";

const LeftSideSm = () => {
  return (
    <div className="grid lg:grid-cols-1 grid-cols-2 bg-bodyColor">
      <div className="flex flex-col col-span-2">
        <div className="flex items-center">
          <div className=" basis-2/4 h-full overflow-hidden md:w-full bg-transparent brightness-50">
            <img
              src={avatar}
              alt="avatat pic"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col basis-2/4">
            <h2 className="lg:text-4xl text-3xl md:text-2xl font-titleFont font-bold w-fit mx-auto">
              Abdullah Arafa
            </h2>
            <MyText />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-6">
          <SocialIcons />
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default LeftSideSm;
