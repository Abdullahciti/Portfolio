const ServicesContent = ({ icon, header, paragraph, border }) => {
  return (
    <div className="col-span-1 flex flex-col items-center justify-center gap-2 py-4 border border-borderColor">
      <span className="text-yellow-300 my-2 text-3xl">{icon}</span>
      <h2 className="md:text-xl text-md font-semibold">{header}</h2>
      <p className="w-11/12 mx-auto text-center text-zinc-400 font-light">
        {paragraph}
      </p>
    </div>
  );
};

export default ServicesContent;
