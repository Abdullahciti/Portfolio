const GetInTouch = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between border border-borderColor py-6">
      {/* Start Left Side */}
      <ul className="w-full flex flex-col justify-between items-center px-4 gap-3 border-r border-borderColor">
        <li className="w-full flex justify-between items-center lg:border-none border border-borderColor lg:p-0 py-6 pl-5">
          <span className=" bg-designColor text-black text-lg rounded-md px-2 font-semibold">
            Address:
          </span>
          <span className="pr-2 basis-2/4">Geislingen, DE</span>
        </li>
        <li className="w-full flex justify-between items-center lg:border-none border border-borderColor lg:p-0 py-6 pl-5">
          <span className=" bg-designColor text-black text-lg rounded-md px-2 font-semibold">
            Phone
          </span>
          <span className="pr-2 basis-2/4">+491512412234</span>
        </li>
      </ul>
      {/* Start Right Side */}
      <ul className="w-full flex flex-col justify-between items-center px-4 gap-3 border-l border-borderColor">
        <li className="w-full flex justify-between items-center lg:border-none border border-borderColor lg:py-0 py-6 pl-5">
          <span className=" bg-designColor text-black text-lg rounded-md px-2 font-semibold">
            Email:
          </span>
          <span className="pr-2 basis-2/4">abdullahciti@gmx.de</span>
        </li>
        <li className="w-full flex justify-between items-center lg:border-none border border-borderColor lg:p-0 py-6 pl-5">
          <span className=" bg-designColor text-black text-lg rounded-md px-2 font-semibold">
            Job:
          </span>
          <span className="pr-2 basis-2/4">Seeking New Challenges</span>
        </li>
      </ul>
    </div>
  );
};

export default GetInTouch;
