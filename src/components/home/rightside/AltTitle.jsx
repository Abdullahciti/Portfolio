const AltTitle = ({ icon, title }) => {
  return (
    <h1 className="py-4 font-medium text-lg flex justify-start items-center gap-2 uppercase">
      <span className="flex items-center text-designColor">{icon}</span>
      {title}
    </h1>
  );
};

export default AltTitle;
