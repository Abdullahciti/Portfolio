// Motoin
import { motion } from "framer-motion";

import Navbar from "./components/home/Navbar";
import LeftSide from "./components/home/LeftSide";
import AboutMe from "./components/home/rightside/AboutMe";
import Resume from "./components/home/rightside/Resume";
import Projects from "./components/home/rightside/Projects";
import Messages from "./components/home/rightside/UsedTechs";
import Contact from "./components/home/rightside/Contact";

import { useState } from "react";
import Handynavbar from "./components/home/Mobile/Handynavbar";
import PersonalInfo from "./components/home/Mobile/PersonalInfo";

const Home = () => {
  const [show, setShow] = useState(true);
  const [left, setLeft] = useState(false);
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [message, setMessage] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <div className="relative z-50 w-[85%] h-[85%] bg-transparent flex flex-col md:flex-row md:items-start md:justify-between">
      {/* Navbar from md Screens */}
      <div className="lg:w-16 lg:h-96 w-20 h-[85vh] hidden md:block">
        <Navbar
          // Toggle Navbar
          show={show}
          trueShow={() => {
            setShow(true);
          }}
          falseShow={() => {
            setShow(true);
          }}
          // Switch between navbar Components
          left={left}
          toggleLeft={() => {
            setLeft(true)
            setAbout(false);
            setResume(false);
            setProjects(false);
            setMessage(false);
            setContact(false);
          }}
          about={about}
          toggleAbout={() => {
            setLeft(false)
            setAbout(true);
            setResume(false);
            setProjects(false);
            setMessage(false);
            setContact(false);
          }}
          resume={resume}
          toggleResume={() => {
            setLeft(false)
            setAbout(false);
            setResume(true);
            setProjects(false);
            setMessage(false);
            setContact(false);
          }}
          projects={projects}
          toggleProjects={() => {
            setLeft(false)
            setAbout(false);
            setResume(false);
            setProjects(true);
            setMessage(false);
            setContact(false);
          }}
          message={message}
          toggleMessage={() => {
            setLeft(false)
            setAbout(false);
            setResume(false);
            setProjects(false);
            setMessage(true);
            setContact(false);
          }}
          contact={contact}
          toggleContact={() => {
            setLeft(false)
            setAbout(false);
            setResume(false);
            setProjects(false);
            setMessage(false);
            setContact(true);
          }}
        />
      </div>
      <div className="bg-transparent flex flex-row items-center md:rounded-xl md:w-[94%] lg:h-[75vh] md:h-[85vh] w-full h-full">
        {/* Start Left Side */}
        <div className="h-full bg-bodyColor rounded-xl w-5/12 hidden lg:block">
          <LeftSide />
        </div>
        {/* Start Right Side */}
        <div className="w-full lg:w-8/12 lg:h-[95%] md:h-full h-[80vh] bg-bodyColor md:overflow-hidden md:rounded-lg rounded-lg">
          <div className="w-full h-full overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#646464]">
            {/* Start Personal info hidden from md screens! */}
            {left && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {" "}
                <PersonalInfo />{" "}
              </motion.div>
            )}
            {/* Start About Me */}
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {" "}
                <AboutMe />{" "}
              </motion.div>
            )}
            {/* Start Resume */}
            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {/* Start My projects */}
            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}
            {/* Start message Me */}
            {message && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Messages />
              </motion.div>
            )}
            {/* Start contact Me */}
            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* Navbar for sm Screens */}
      <div className="md:hidden block w-full h-auto">
        <Handynavbar // Switch between navbar Components
          left={left}
          toggleLeft={() => {
            setLeft(true)
            setAbout(false);
            setResume(false);
            setProjects(false);
            setMessage(false);
            setContact(false);
          }}
          about={about}
          toggleAbout={() => {
            setLeft(false)
            setAbout(true);
            setResume(false);
            setProjects(false);
            setMessage(false);
            setContact(false);
          }}
          resume={resume}
          toggleResume={() => {
            setLeft(false)
            setAbout(false);
            setResume(true);
            setProjects(false);
            setMessage(false);
            setContact(false);
          }}
          projects={projects}
          toggleProjects={() => {
            setLeft(false)
            setAbout(false);
            setResume(false);
            setProjects(true);
            setMessage(false);
            setContact(false);
          }}
          message={message}
          toggleMessage={() => {
            setLeft(false)
            setAbout(false);
            setResume(false);
            setProjects(false);
            setMessage(true);
            setContact(false);
          }}
          contact={contact}
          toggleContact={() => {
            setLeft(false)
            setAbout(false);
            setResume(false);
            setProjects(false);
            setMessage(false);
            setContact(true);
          }}
        />
      </div>
    </div>
  );
};

export default Home;
