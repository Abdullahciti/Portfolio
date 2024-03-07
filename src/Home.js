// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "./components/home/Navbar";
import LeftSide from "./components/home/LeftSide";
import AboutMe from "./components/home/rightside/AboutMe";
import Resume from "./components/home/rightside/Resume";
import Projects from "./components/home/rightside/Projects";
import Messages from "./components/home/rightside/Messages";
import Contact from "./components/home/rightside/Contact";
import Call from "./components/home/rightside/Call";
import { useState } from "react";

const Home = () => {
  const [show, setShow] = useState(false);
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [message, setMessage] = useState(false);
  const [contact, setContact] = useState(false);
  const [call, setCall] = useState(false);
  return (
    <div className="w-[85%] h-[85%] bg-transparent flex items-start justify-between relative z-50">
      <div className="w-16 h-96">
        <Navbar
          show={show}
          trueShow={() => {
            setShow(true);
          }}
          falseShow={() => {
            setShow(false);
          }}
          about={about}
          toggleAbout={() => {
            setAbout(true);
            setResume(false);
            setProjects(false);
            setMessage(false);
            setContact(false);
            setCall(false);
          }}
          resume={resume}
          toggleResume={() => {
            setAbout(false);
            setResume(true);
            setProjects(false);
            setMessage(false);
            setContact(false);
            setCall(false);
          }}
          projects={projects}
          toggleProjects={() => {
            setAbout(false);
            setResume(false);
            setProjects(true);
            setMessage(false);
            setContact(false);
            setCall(false);
          }}
          message={message}
          toggleMessage={() => {
            setAbout(false);
            setResume(false);
            setProjects(false);
            setMessage(true);
            setContact(false);
            setCall(false);
          }}
          contact={contact}
          toggleContact={() => {
            setAbout(false);
            setResume(false);
            setProjects(false);
            setMessage(false);
            setContact(true);
            setCall(false);
          }}
          call={call}
          toggleCall={() => {
            setAbout(false);
            setResume(false);
            setProjects(false);
            setMessage(false);
            setContact(false);
            setCall(true);
          }}
        />
      </div>
      <div className="w-[94%] h-[75vh] bg-transparent flex items-center rounded-xl">
        {/* Start Left Side */}
        <div className="w-5/12 h-full bg-bodyColor rounded-xl">
          <LeftSide />
        </div>
        {/* Start Right Side */}
        <div className="w-8/12 h-[95%] bg-bodyColor ">
          <div className="w-full h-full overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#646464]">
            {/* Start About Me */}
            {about && <AboutMe />}
            {resume && <Resume />}
            {projects && <Projects />}
            {message && <Messages />}
            {contact && <Contact />}
            {call && <Call />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
