import { Typewriter } from "react-simple-typewriter";

const MyText = () => {
  return (
    <p className="w-fit mx-auto lg:text-xl text-sm font-semibold text-designColor">
      <span>
        <Typewriter
          words={["React Developer", "Frontend Developer"]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </p>
  );
};

export default MyText;
