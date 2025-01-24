const ResumeCard = ({ status, date, lastDate, header, place, paragraph }) => {
  return (
    <div className="">
      {status === true ? (
        <h1 className="bg-[#3f3c2e] w-fit py-1 px-2 ml-5 mt-3 text-designColor border-designColor border-[1px] rounded-sm">
          {date}
        </h1>
      ) : (
        <h1 className="bg-transparent w-fit py-1 px-2 ml-5 mt-3 text-[#999] border-zinc-600 border-[1px] rounded-sm">
          {date}
        </h1>
      )}
      <div className="flex flex-col gap-3 borderBottom mx-6 py-3">
        <h3 className="font-semibold underline underline-offset-4">{header}</h3>
        <p>{place}</p>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
