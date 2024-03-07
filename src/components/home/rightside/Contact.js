import MainTitle from "./MainTitle";
import GetInTouch from "./Contact/GetInTouch";

const Contact = () => {
  return (
    <div>
      <MainTitle title={"Get"} subTitle={"In Touch"} />
      <GetInTouch />
      <div className="mt-10">
        <MainTitle title={"Send"} subTitle={"Messages"} />
        <div className="px-10">
          <div className="w-full flex justify-between items-center gap-10">
            <input
              className="bg-transparent w-full border-[1px] border-[#9999992f] rounded-md my-6 px-3 py-2"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-transparent w-full border-[1px] border-[#9999992f] rounded-md my-6 px-3 py-2"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="w-full">
            <textarea
              placeholder="Feel free to send me a message"
              className="w-full h-44 max-h-full resize-none bg-transparent outline-none border-[1px] mb-3 px-3 py-2 border-[#9999992f] rounded-md"
            ></textarea>
          </div>
          <div className="w-full flex items-end justify-end">
            <input
              className="bg-designColor border-none rounded-md px-28 text-black text-lg font-semibold mt-3 mb-8 cursor-pointer duration-300 hover:bg-[#c9d549]"
              type="submit"
              value={"Send"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
