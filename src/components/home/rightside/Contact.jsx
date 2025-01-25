import MainTitle from "./MainTitle";
import GetInTouch from "./Contact/GetInTouch";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import axios from "axios";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ================= Error Messages Start here =============================
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessage, setErrMessage] = useState(false);
  // ================= Error Messages End here  ============================
  const [theMessage, setTheMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  // ================= Email Validation Start here  ============================
  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-']?\w+)*@\w+([-']?\w+)*(\.\w{2,3})+$/);
  };
  // ================= Email Validation End here  ============================

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
    setErrMessage(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!emailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!message) {
      setErrMessage(true);
    }
    if (clientName && email && emailValidation(email) && message) {
      axios.post("https://getform.io/f/panveqva", {
        name: clientName,
        email: email,
        message: message,
      });

      setTheMessage(
        `Hello dear ${clientName}, Your message has been sent successfully, Thank you for your time! `
      );

      setClientName("");
      setEmail("");
      setMessage("");
      setMessageSent(true);
    }
  };

  return (
    <section id="contact">
      <MainTitle title={"Get"} subTitle={"In Touch"} />
      <GetInTouch />
      <div className="mt-10">
        <MainTitle title={"Send"} subTitle={"Messages"} />
        {!messageSent && (
          <form
            id="form"
            action="https://getform.io/f/panveqva"
            method="POST"
            className="border border-borderColor px-10 mb-6"
          >
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center md:gap-10">
              <input
                onChange={handleName}
                value={clientName}
                className={
                  !errClientName
                    ? "outline-none focus:border-designColor bg-transparent w-full border-[1px] border-[#9999992f] rounded-md md:my-6 mt-4 mb-2 px-3 py-2"
                    : "outline-none focus:border-designColor bg-transparent w-full border-[1px] border-[#f71b1b] rounded-md md:my-6 mt-4 mb-2 px-3 py-2"
                }
                type="text"
                placeholder="Name"
              />
              <input
                onChange={handleEmail}
                value={email}
                className={
                  !errEmail
                    ? "outline-none focus:border-designColor bg-transparent w-full border-[1px] border-[#9999992f] rounded-md md:my-6 mt-2 mb-4  px-3 py-2"
                    : "outline-none focus:border-designColor bg-transparent w-full border-[1px] border-[#f71b1b] rounded-md md:my-6 mt-4 mb-2 px-3 py-2"
                }
                type="text"
                placeholder="Email Address"
              />
            </div>
            <div className="w-full">
              <textarea
                onChange={handleMessage}
                value={message}
                placeholder="Feel free to send me a message"
                className={
                  !errMessage
                    ? "w-full h-44 max-h-full resize-none bg-transparent outline-none focus:border-designColor border-[1px] mb-3 px-3 py-2 border-[#9999992f] rounded-md"
                    : "w-full h-44 max-h-full resize-none bg-transparent outline-none focus:border-designColor border-[1px] mb-3 px-3 py-2 border-[#f71b1b] rounded-md"
                }
              ></textarea>
            </div>
            <div className="w-full flex items-start justify-start">
              <button
                className="flex items-center justify-center gap-1.5 bg-designColor border-none rounded-md md:px-15 py-2 px-10 text-black text-lg font-semibold mt-3 mb-8 cursor-pointer duration-300 hover:bg-[#c9d549]"
                type="submit"
                onClick={handleSend}
              >
                Send Message
                <IoIosSend />
              </button>
            </div>
          </form>
        )}
        {messageSent && (
          <div className="py-10">
            <div className="w-full h-full flex justify-center items-center text-2xl text-designColor">
              <span className="max-w-[80%]">{theMessage}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
