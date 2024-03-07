const GetInTouch = () => {
  return (
    <div className="grid grid-cols-9">
      {/* Start Left Side */}
      <div className="col-span-4 p-6">
        <ul className="w-full flex flex-col justify-between items-center px-4 gap-3">
          <li className="w-full flex justify-between items-center borderBottom py-3">
            <span className=" bg-designColor text-black text-lg rounded-md px-2 font-semibold">
              Address:
            </span>
            <span className="pr-2 w-[155px]">Geislingen, Germany</span>
          </li>
          <li className="w-full flex justify-between items-center borderBottom py-3">
            <span className=" bg-designColor text-black text-lg rounded-md px-2 font-semibold">
              Phone
            </span>
            <span className="pr-2 w-[155px]">+491635345412</span>
          </li>
        </ul>
      </div>
      {/* Manual Border */}
      <div className="col-span-1 h-full w-full flex items-center justify-center pb-5">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      {/* Start Right Side */}
      <div className="col-span-4 p-6">
        <ul className="w-full flex flex-col justify-between items-center px-4 gap-3">
          <li className="w-full flex justify-between items-center borderBottom py-3">
            <span className=" bg-designColor text-black text-lg rounded-md px-2 font-semibold">
              Email:
            </span>
            <span className="pr-2 w-[150px]">abdullahciti@gmx.de</span>
          </li>
          <li className="w-full flex justify-between items-center borderBottom py-3">
            <span className=" bg-designColor text-black text-lg rounded-md px-2 font-semibold">
              Job:
            </span>
            <span className="pr-2 w-[150px]">Full Time</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetInTouch;