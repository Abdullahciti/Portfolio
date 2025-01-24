const ServicesContent = ({icon, header, paragraph}) => {
  return (
        <div className="w-full flex flex-col items-center justify-center gap-2 py-4 borderBottom borderLeft borderTop borderRight">
          <span className="text-yellow-300 my-2 text-3xl">
            {icon}
          </span>
          <h2 className="text-2xl font-semibold">{header}</h2>
          <p className="max-w-[85%] mx-auto text-center text-zinc-400">
            {paragraph}
          </p>
        </div>
  );
};

export default ServicesContent;
