// import avatar from "../../assets/shared/Mein Bewerbungsbild.png";
import avatar from "../../assets/shared/Mein_Bewerbungsbild-removebg-preview.png";
import Buttons from "./leftside/Buttons";
import SocialIcons from "./leftside/SocialIcons";
import MyText from "./leftside/Typewriter";

const LeftSide = () => {
  return (
    <div className="flex flex-col bg-bodyColor rounded-md w-96">
      <div className="h-full w-full overflow-hidden bg-transparent brightness-50">
        <img
          src={avatar}
          alt="avatat pic"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-between items-center h-fit gap-6 mt-10">
        <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-titleFont font-bold w-fit mx-auto">
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
