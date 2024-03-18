const ProjectCard = ({ image, title, category, link }) => {
  return (
    <div>
      <div className="w-full flex flex-col my-6 md:mb-6 md:mt-0 items-center justify-center md:borderBottom md:py-10 md:px-5">
        <div className="w-fit h-auto  flex items-center justify-center relative mb-3 md:my-0 overflow-hidden cursor-pointer rounded-lg group">
          <img className="shadow-2xl md:w-full md:h-full max-w-[250px] max-h-[250px]" src={image} alt="cardImage" />
          <div className="absolute w-full h-full left-0 top-0 hover:bg-gradient-to-t from-green-600 via-green-600 to-green-200 opacity-20 duration-300"></div>
        </div>
        <div className="content-box w-full flex flex-col items-center justify-center">
          <h1 className="font-titleFont text-lg font-semibold text-[#ccc] mt-5 hover:text-[#e2e2e2] duration-300">{title}</h1>
          <p className="text-base text-gray-400 -mt-1">{category}</p>
          {link ? <a className="text-designColor hover:decoration-designColor hover:underline hover:decoration-2 text-lg duration-300" href={link} target="_blank" rel="noreferrer" >Visit</a> : <p>Incoming...</p>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
