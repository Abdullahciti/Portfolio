const Details = () => {
  return (
    <ul className="w-full flex flex-col justify-between items-center px-4 gap-3 my-6 md:my-0">
      <li className="w-full flex justify-between items-center">
        <span className=" bg-designColor text-black text-lg rounded-md px-2 font-semibold">
          Age:
        </span>
        <span className="basis-2/6">25</span>
      </li>
      <li className="w-full flex justify-between items-center">
        <span className=" bg-designColor text-black text-lg rounded-md px-2 font-semibold">
          Status:
        </span>
        <span className="basis-2/6">Building the Web</span>
      </li>
      <li className="w-full flex justify-between items-center">
        {" "}
        <span className=" bg-designColor text-black text-lg rounded-md px-2 font-semibold">
          Residence:
        </span>
        <span className="basis-2/6">Germany</span>
      </li>
      <li className="w-full flex justify-between items-center">
        {" "}
        <span className=" bg-designColor text-black text-lg rounded-md px-2 font-semibold">
          Nationality:
        </span>
        <span className="basis-2/6">Egyptian</span>
      </li>
    </ul>
  );
};

export default Details;
