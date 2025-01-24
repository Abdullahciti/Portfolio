const AltTitle = ({ icon, title }) => {
  return (
    <h1 className="borderBottom w-[90%] mx-5 py-4 text-start font-medium text-lg flex justify-start items-center gap-2 uppercase">
      <span className="flex items-center text-designColor">{icon}</span>
      {title}
    </h1>
  );
};

export default AltTitle;
