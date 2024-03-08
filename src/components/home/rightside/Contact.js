import MainTitle from "./MainTitle";
import GetInTouch from "./Contact/GetInTouch";

const Contact = () => {
  return (
    <section id="contact">
      <MainTitle title={"Get"} subTitle={"In Touch"} />
      <GetInTouch />
      <div className="mt-10">
        <MainTitle title={"Send"} subTitle={"Messages"} />
        <div className="px-10">
          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center md:gap-10">
            <input
              required
              className="outline-none bg-transparent w-full border-[1px] border-[#9999992f] rounded-md md:my-6 mt-4 mb-2 px-3 py-2"
              type="text"
              placeholder="Name"
            />
            <input
              required
              className="outline-none bg-transparent w-full border-[1px] border-[#9999992f] rounded-md md:my-6 mt-2 mb-4  px-3 py-2"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="w-full">
            <textarea
              required
              placeholder="Feel free to send me a message"
              className="w-full h-44 max-h-full resize-none bg-transparent outline-none border-[1px] mb-3 px-3 py-2 border-[#9999992f] rounded-md"
            ></textarea>
          </div>
          <div className="w-full flex items-end justify-end">
            <input
              className="bg-designColor border-none rounded-md md:px-28 px-10 text-black text-lg font-semibold mt-3 mb-8 cursor-pointer duration-300 hover:bg-[#c9d549]"
              type="submit"
              value={"Send"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
