const MainTitle = ({ title, subTitle }) => {
  return (
    <div className="w-full borderBottom py-5 px-10 group">
      <h1 className="relative z-20 font-titleFont text-white text-3xl font-bold w-fit">
        <span className=" text-designColor">{title}</span> {subTitle}
        <span className="absolute w-6 h-6 bg-gradient-to-t from-designColor to-gray-600 -left-2 bottom-0 z-10 opacity-10 rounded-full group-hover:left-[92%] duration-700"></span>
      </h1>
    </div>
  );
};

export default MainTitle;
