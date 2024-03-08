import RoundOne from "./components/RoundDesigns/RoundOne";
import RoundTwo from "./components/RoundDesigns/RoundTwo";
import RoundThree from "./components/RoundDesigns/RoundThree";
import RoundFour from "./components/RoundDesigns/RoundFour";
import RoundFive from "./components/RoundDesigns/RoundFive";
import Home from "./Home"

import "./index.css"


function App() {
  return (
    <div className="w-full relative text-textColor bg-black overflow-hidden h-screen">
      <div className="h-full md:flex z-20 md:max-w-screen-2xl flex-row justify-center md:items-center md:lg:mx-auto">
        <Home />
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-10 hidden md:block">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
    </div>
  );
}

export default App;
