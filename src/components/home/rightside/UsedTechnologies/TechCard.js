const TechCard = ({ image, date, status, title, category }) => {
  return (
    <div>
      <div className="w-full flex flex-col my-6 md:mb-6 md:mt-0 items-center justify-center md:borderBottom md:py-10 md:px-5">
        <div className="w-fit h-auto  flex items-center justify-center relative mb-3 md:my-0 overflow-hidden cursor-pointer rounded-lg group">
          <img
            className="shadow-2xl md:w-full md:h-full max-w-[250px] max-h-[250px]"
            src={image}
            alt="cardImage"
          />
          {/* <div className="absolute w-full h-full left-0 top-0 hover:bg-gradient-to-t from-green-600 via-green-600 to-green-200 opacity-20 duration-300"></div> */}
        </div>
        <div className="content-box w-full flex flex-col items-center justify-center">
          <h1 className="bg-[#3f3c2e] w-fit mr-auto py-1 px-2 ml-5 mt-3 text-designColor border-designColor border-[1px] rounded-sm">
            {date}
          </h1>
          <h1 className="font-titleFont text-lg font-semibold text-[#ccc] mt-5 hover:text-[#e2e2e2] duration-300">
             {status} by {title}
          </h1>
          <p className="text-base text-gray-400 p-4 text-center w-full -mt-1">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
