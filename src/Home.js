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
    <div className="relative z-50 w-[85%] h-[85%] bg-transparent flex items-start justify-between">
      <div className="lg:w-16 h-[85vh] overflow-y-scroll overflow-x-hidden lg:h-96 w-20 relative z-[120202151156]">
        <Navbar
        // Toggle Navbar
          show={show}
          trueShow={() => {
            setShow(true);
          }}
          falseShow={() => {
            setShow(false);
          }}
          // Switch between navbar Components
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
      <div className="bg-transparent flex flex-row items-center rounded-xl w-[94%] lg:h-[75vh] h-[85vh]">
        {/* Start Left Side */}
        <div className="h-full bg-bodyColor rounded-xl w-5/12 hidden lg:block">
          <LeftSide />
        </div>
        {/* Start Right Side */}
        <div className="w-full lg:w-8/12 lg:h-[95%] h-full bg-bodyColor ">
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
