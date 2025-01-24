// import avatar from "../../assets/shared/Mein Bewerbungsbild.png";
import avatar from "../../assets/shared/Mein_Bewerbungsbild-removebg-preview.png";
import Buttons from "./leftside/Buttons";
import SocialIcons from "./leftside/SocialIcons";
import MyText from "./leftside/Typewriter";

const LeftSide = () => {
  return (
    <div className="flex w-full flex-col justify-between bg-bodyColor rounded-md">
      <div className="h-4/6 lg:w-5/6 w-2/4 mx-auto mt-auto overflow-hidden bg-transparent brightness-50 opacity-75">
        <img
          src={avatar}
          alt="avatat pic"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-between items-center h-fit gap-6 mt-10">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-titleFont font-bold w-fit mx-auto">
          Abdullah Arafa
        </h2>
        <MyText />
        <SocialIcons />
        <Buttons />
      </div>
    </div>
  );
};

export default LeftSide;
