const ProjectCard = ({ image, title, category }) => {
  return (
    <div>
      <div className="w-full h-96 flex flex-col items-center justify-center py-10 px-5">
        <div className="image-box overflow-hidden rounded-lg hover:bg-designColor group">
          <img className="w-full h-full group-hover:scale-[0.91] duration-300" src={image} alt="cardImage" />
        </div>
        <div className="content-box w-full flex flex-col items-center justify-center">
          <h1 className="mt-5 mb-3 text-[#ccc] hover:text-[#e2e2e2] duration-300">{title}</h1>
          <p className="text-gray-400">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
