import React, { useEffect, useState } from "react";
import { HandThumbDownIcon } from "@heroicons/react/24/outline";
import { HandRaisedIcon } from "@heroicons/react/24/outline";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import "./App.css";

import profileImage from "./1711643214041.jpg";
import profile from "./profile.png";
import AnimatedLine from "./AnimatedLine";

import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdPhoneMissed } from "react-icons/md";

import Navbar from "./Navbar";
import Layout from "./Layout";
import FlipCard from "./Flipcard";
import Footer from "./Footer";
import DotCursor from "./DotCrusor";

import Frentend from "./frentend.jpg";
import Backend from "./backenddeveloper.png";
import Fullstack from "./fullstack.webp";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const roles = ["Manoj Kandhula", "Full Stack Developer"];
  const [index, setIndex] = useState(0);

  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const [prevHours, setPrevHours] = useState("00");
  const [prevMinutes, setPrevMinutes] = useState("00");

  useEffect(() => {
    // 1. Trigger animation after 1 second
    const animationTimeout = setTimeout(
      () => setIsVisible(true),
      1000
    );

    // 2. Session Timer
    const updateTime = () => {
      const now = new Date();

      const hr = String(now.getHours()).padStart(2, "0");
      const min = String(now.getMinutes()).padStart(2, "0");
      const sec = String(now.getSeconds()).padStart(2, "0");

      if (min !== minutes) setPrevMinutes(minutes);
      if (hr !== hours) setPrevHours(hours);

      setHours(hr);
      setMinutes(min);
      setSeconds(sec);
    };

    // 3. Role Rotator
    const roleInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => {
      clearTimeout(animationTimeout);
      clearInterval(roleInterval);
      clearInterval(interval);
    };
  }, [hours, minutes, roles.length]);

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="scroll-smooth">
          <Navbar />
          <Layout />
          <DotCursor />
        </div>

        {/* =========================================================
            MAIN PAGE
        ========================================================== */}
        <section
          className="
            min-h-screen
            px-4 sm:px-6 md:px-10 lg:px-16
            pt-24 md:pt-28
            pb-12
            bg-[#0a0a23]
          "
        >
          {/* =======================================================
              HOME
          ======================================================== */}
          <section id="home" className="scroll-mt-28">
            {/* Hero Section */}
            <div
              className="
                w-full
                max-w-7xl
                mx-auto
                bg-black/30
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-6 sm:p-8 md:p-12 lg:p-16
                flex flex-col md:flex-row
                gap-8 md:gap-12
                shadow-2xl
                overflow-hidden
                relative
              "
            >
              {/* Left Column */}
              <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-5">
                  Hi, I’m{" "}
                  <span
                    key={index}
                    className="
                      inline-block
                      bg-gradient-to-r
                      from-cyan-400
                      to-indigo-500
                      bg-clip-text
                      text-transparent
                      animate-flip-clean
                      transition-all
                      duration-1000
                    "
                  >
                    {roles[index]}
                  </span>{" "}
                  <HandRaisedIcon className="w-8 h-8 text-cyan-400 inline-block wave origin-[70%_70%] ml-1" />
                </h1>

                <p className="text-white/70 text-base leading-relaxed font-serif mb-6">
                  I’m a Full-Stack Developer with 1.5+ years of hands-on
                  experience building responsive, scalable, and user-friendly
                  web applications. I specialize in JavaScript, React.js,
                  Node.js, Express.js, REST APIs, SQL, and MongoDB, with
                  experience creating modern interfaces using Tailwind CSS.
                  I focus on writing clean, maintainable code, developing
                  efficient backend services, and delivering reliable
                  end-to-end web solutions. I’m currently looking for an
                  opportunity where I can contribute to real-world projects,
                  strengthen my technical expertise, and grow as a Full-Stack
                  Developer.
                </p>

                <button
                  onClick={() =>
                    window.open(
                      "https://manoj-resume.vercel.app/",
                      "_blank"
                    )
                  }
                  className="
                    bg-white/10
                    text-white
                    text-sm
                    border border-white/20
                    rounded-full
                    px-5 py-2.5
                    backdrop-blur-md
                    hover:bg-white/20
                    transition
                    duration-200
                    w-fit
                  "
                >
                  View Resume App
                </button>

                {/* Social Links */}
                <div className="flex flex-row flex-wrap gap-4 mt-5">
                  <a
                    href="https://www.instagram.com/im_manoj_06/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-6 h-7 text-cyan-400 hover:scale-110 transition" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/kandhula-manoj-kumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-7 text-cyan-400 hover:scale-110 transition" />
                  </a>

                  <a
                    href="https://github.com/manojcoders"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithubSquare className="w-6 h-7 text-cyan-400 hover:scale-110 transition" />
                  </a>

                  <a
                    href="mailto:kandhulamanojkumar663@gmail.com"
                    aria-label="Send Email"
                    title="Send Email"
                    className="inline-flex items-center"
                  >
                    <HiOutlineMailOpen className="w-6 h-7 text-cyan-400 wave hover:scale-110 transition" />
                  </a>

                  <a
                    href="tel:+919491779518"
                    aria-label="Call"
                  >
                    <MdPhoneMissed className="w-6 h-7 text-cyan-400 hover:scale-110 transition" />
                  </a>
                </div>
              </div>

              {/* Right Column - Profile */}
              <div className="flex-1 flex items-center justify-center relative min-h-[260px]">
                <div
                  className="
                    absolute
                    w-72 h-72
                    rounded-full
                    bg-gradient-to-br
                    from-cyan-400
                    via-indigo-500
                    to-pink-500
                    opacity-30
                    blur-[120px]
                    z-0
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    w-44 h-44
                    rounded-full
                    p-[6px]
                    bg-white/10
                    backdrop-blur-md
                    border border-white/20
                    shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                    hover:scale-105
                    transition-transform
                    duration-300
                  "
                >
                  <img
                    src={profileImage}
                    alt="Manoj"
                    className="
                      w-full
                      h-full
                      rounded-full
                      object-cover
                      border-2
                      border-white/10
                      shadow-inner
                    "
                  />
                </div>
              </div>
            </div>
          </section>

          {/* =======================================================
              RESUME + SKILLS
          ======================================================== */}
          <div
            className="
              w-full
              max-w-7xl
              mx-auto
              mt-10 md:mt-12
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            "
          >
            {/* Resume */}
            <div className="flex flex-col items-start justify-center gap-4 p-4 md:p-6">
              <h3 className="text-white text-lg font-semibold flex items-center gap-2">
                Resume
                <HandThumbDownIcon className="w-4 h-4 text-cyan-400 wave" />
              </h3>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    bg-white/10
                    text-white
                    text-sm
                    border border-white/20
                    rounded-full
                    px-5 py-2
                    backdrop-blur-md
                    hover:bg-white/20
                    transition
                  "
                >
                  View Resume
                  <ArrowRightEndOnRectangleIcon className="h-5 w-5 text-cyan-400" />
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="
                    flex items-center gap-2
                    bg-white/10
                    text-white
                    text-sm
                    border border-white/20
                    rounded-full
                    px-5 py-2
                    backdrop-blur-md
                    hover:bg-white/20
                    transition
                  "
                >
                  Download Resume
                  <ArrowRightEndOnRectangleIcon className="h-5 w-5 text-cyan-400" />
                </a>
              </div>
            </div>

            {/* Skills */}
            <div
              className="
                bg-white/5
                backdrop-blur-lg
                border border-white/10
                rounded-2xl
                p-6 md:p-8
                shadow-xl
              "
            >
              <h3 className="text-white text-md font-semibold mb-4">
                Skill Set
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "Tailwind",
                  "ReactJS",
                  "Node.js",
                  "MongoDB",
                  "MySQL",
                  "SPFx",
                  "PHP",
                  "CSS",
                  "AWS",
                  "VPC",
                  "EC2",
                  "S3",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      text-white
                      text-xs md:text-sm
                      px-4 py-1.5
                      rounded-full
                      bg-white/10
                      border border-white/20
                      hover:bg-white/20
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* =======================================================
              ABOUT
          ======================================================== */}
          <section
            id="about"
            className="scroll-mt-28"
          >
            <div
              className="
                w-full
                max-w-7xl
                mx-auto
                mt-20 md:mt-24
                px-2 sm:px-4 md:px-0
                flex
                flex-col
                md:flex-row
                items-center
                md:items-start
                gap-8 md:gap-12
              "
            >
              {/* Image */}
              <div className="flex justify-center md:justify-start md:w-1/2">
                <div
                  className="
                    inline-flex
                    bg-white/5
                    backdrop-blur-lg
                    border border-white/10
                    rounded-2xl
                    shadow-xl
                    p-1
                  "
                >
                  <img
                    src={profile}
                    alt="Manoj"
                    className="
                      w-[250px]
                      h-[250px]
                      md:w-[300px]
                      md:h-[300px]
                      object-cover
                      rounded-2xl
                    "
                  />
                </div>
              </div>

              {/* About Text */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-green-300 text-2xl font-semibold mb-4">
                  About Me
                </h2>

                <p
                  className={`
                    text-white/70
                    text-md
                    leading-relaxed
                    font-serif
                    transition-all
                    duration-700
                    ease-in-out
                    transform
                    ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }
                  `}
                >
                  I'm a passionate full-stack web developer focused on
                  building responsive and user-friendly applications.
                  <br />
                  I work extensively with React for the frontend and Node.js
                  for the backend.
                  <br />
                  My strength lies in creating clean UI/UX using Tailwind CSS
                  and modern web standards.
                  <br />
                  I enjoy solving real-world problems with scalable,
                  maintainable code.
                  <br />
                  I believe in writing readable, reusable, and efficient code.
                  <br />
                  Currently, I'm exploring cloud deployment and optimizing
                  performance across stacks.
                </p>
              </div>
            </div>
          </section>

          {/* =======================================================
              ANIMATED LINE
          ======================================================== */}
          <div
            className="
              w-full
              max-w-7xl
              mx-auto
              mt-10 md:mt-14
              px-4 sm:px-6 md:px-8
              flex
              flex-col
              items-center
            "
          >
            <AnimatedLine />
          </div>

          {/* =======================================================
              TIME + SUMMARY
          ======================================================== */}
          <section className="w-full max-w-7xl mx-auto mt-2 md:mt-6">
            <div
              className="
                flex
                flex-col
                md:flex-row
                items-stretch
                gap-6
              "
            >
              {/* Timer */}
              <div
                className="
                  w-full
                  md:w-1/2
                  backdrop-blur-lg
                  border border-gray-300/70
                  rounded-2xl
                  shadow-xl
                  p-6 md:p-8
                "
              >
                <h2 className="text-3xl font-bold mb-6 text-center text-white">
                  🕓 Time
                </h2>

                <div className="flex gap-4 flex-wrap justify-center font-serif">
                  <FlipCard
                    value={hours}
                    label="Hours"
                    animate={hours !== prevHours}
                  />

                  <FlipCard
                    value={minutes}
                    label="Minutes"
                    animate={minutes !== prevMinutes}
                  />

                  <FlipCard
                    value={seconds}
                    label="Seconds"
                    animate={false}
                  />
                </div>
              </div>

              {/* Summary */}
              <div
                className="
                  w-full
                  md:w-1/2
                  bg-white
                  bg-opacity-10
                  text-white
                  p-6 md:p-8
                  rounded-2xl
                  shadow-xl
                  flex
                  flex-col
                  justify-center
                "
              >
                <h1 className="font-bold text-xl text-green-300 mb-3">
                  Summary
                </h1>

                <p className="font-serif leading-relaxed text-white/90">
                  Full-stack developer with professional experience at{" "}
                  <strong>VulcanTechs</strong>, specializing in building
                  modern web applications using <strong>React</strong>,{" "}
                  <strong>Node.js</strong>, <strong>MongoDB</strong>, and{" "}
                  <strong>MySQL</strong>. Proficient in developing and
                  customizing <strong>SharePoint</strong> solutions using{" "}
                  <strong>PnP JS</strong>, with a focus on scalable
                  architecture, API integration, and seamless user experience.
                </p>
              </div>
            </div>
          </section>

          {/* =======================================================
              CAREER
          ======================================================== */}
          <section
            id="career"
            className="scroll-mt-28 mt-20 md:mt-24"
          >
            <div
              className="
                w-full
                max-w-7xl
                mx-auto
                px-2 sm:px-4 md:px-0
                flex
                flex-col
                items-center
                gap-8
              "
            >
              <h2 className="text-3xl font-bold text-center text-green-300">
                Career
              </h2>

              {/* Career Cards */}
              <div
                className="
                  w-full
                  grid
                  grid-cols-1
                  md:grid-cols-3
                  gap-6 md:gap-8
                "
              >
                {/* Frontend */}
                <div
                  className="
                    relative
                    group
                    w-full
                    h-72
                    rounded-2xl
                    overflow-hidden
                    bg-white/10
                    backdrop-blur-lg
                    border border-white/20
                    shadow-lg
                  "
                >
                  <img
                    src={Frentend}
                    alt="Frontend Developer"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/65
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-500
                      flex
                      flex-col
                      justify-center
                      items-center
                      p-6
                    "
                  >
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      Frontend Developer
                    </h3>

                    <p className="text-white text-center font-serif leading-relaxed">
                      Specialized in React, Tailwind, Frameworks and UI/UX
                      designs for modern web apps.
                    </p>
                  </div>
                </div>

                {/* Backend */}
                <div
                  className="
                    relative
                    group
                    w-full
                    h-72
                    rounded-2xl
                    overflow-hidden
                    bg-white/10
                    backdrop-blur-lg
                    border border-white/20
                    shadow-lg
                  "
                >
                  <img
                    src={Backend}
                    alt="Backend Developer"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/65
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-500
                      flex
                      flex-col
                      justify-center
                      items-center
                      p-6
                    "
                  >
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      Backend Developer
                    </h3>

                    <p className="text-white text-center font-serif leading-relaxed">
                      Expert in Node.js, Laravel, RESTful APIs, PHP and
                      database design.
                    </p>
                  </div>
                </div>

                {/* Full Stack */}
                <div
                  className="
                    relative
                    group
                    w-full
                    h-72
                    rounded-2xl
                    overflow-hidden
                    bg-white/10
                    backdrop-blur-lg
                    border border-white/20
                    shadow-lg
                  "
                >
                  <img
                    src={Fullstack}
                    alt="Full Stack Developer"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/65
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-500
                      flex
                      flex-col
                      justify-center
                      items-center
                      p-6
                    "
                  >
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      Full Stack Developer (AWS Deployment)
                    </h3>

                    <p className="text-white text-center font-serif leading-relaxed">
                      Builds full applications using React, Node.js, APIs,
                      MySQL and MongoDB.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                PROJECTS
            ====================================================== */}
            <h2 className="text-2xl font-bold mt-16 mb-6 text-green-300">
              Projects
            </h2>

            <div
              className="
                w-full
                max-w-7xl
                mx-auto
                px-2 sm:px-4 md:px-0
              "
            >
              <div
                className="
                  w-full
                  grid
                  grid-cols-1
                  md:grid-cols-3
                  gap-6 md:gap-8
                "
              >
                {/* Project 1 */}
                <div
                  className="
                    group
                    w-full
                    min-h-[280px]
                    p-6
                    rounded-2xl
                    bg-white/10
                    backdrop-blur-lg
                    border border-white/20
                    shadow-lg
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-white
                      mb-4
                      group-hover:scale-105
                      transition-transform
                      duration-300
                    "
                  >
                    Competency Skills (Ford Company)
                  </h3>

                  <p className="text-white/90 text-sm leading-relaxed max-h-40 overflow-y-auto scrollbar-thin font-serif">
                    Developed SPFx solutions at Ford to enhance SharePoint-based
                    competency assessments and internal workflows. Integrated
                    dynamic list handling and modern React components for
                    improved usability and efficiency.
                  </p>
                </div>

                {/* Project 2 */}
                <div
                  className="
                    group
                    w-full
                    min-h-[280px]
                    p-6
                    rounded-2xl
                    bg-white/10
                    backdrop-blur-lg
                    border border-white/20
                    shadow-lg
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-white
                      mb-4
                      group-hover:scale-105
                      transition-transform
                      duration-300
                    "
                  >
                    H360 (In Patient & Outpatient)
                  </h3>

                  <p className="scrollbar-hover text-white/90 text-sm leading-relaxed max-h-40 overflow-y-auto font-serif transition-all duration-300">
                    H360 is a comprehensive hospital management system designed
                    to streamline patient care, appointments, billing, and
                    reporting. It integrates various modules like inpatient,
                    outpatient, diagnostics, and pharmacy for seamless
                    healthcare operations. The system supports dynamic file
                    uploads (PDF/images), digital signatures, and printable
                    medical summaries. Built using PHP, jQuery, and MySQL, H360
                    improves hospital efficiency and enhances patient
                    experience.
                  </p>
                </div>

                {/* Project 3 */}
                <div
                  className="
                    group
                    w-full
                    min-h-[280px]
                    p-6
                    rounded-2xl
                    bg-white/10
                    backdrop-blur-lg
                    border border-white/20
                    shadow-lg
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-white
                      mb-4
                      group-hover:scale-105
                      transition-transform
                      duration-300
                    "
                  >
                    Qutone Ceramic (AWS Deployment)
                  </h3>

                  <p className="text-white/90 text-sm leading-relaxed max-h-40 overflow-y-auto scrollbar-thin font-serif">
                    Deployed the backend application on AWS EC2 and connected
                    using PuTTY through the private IP via SSM/Session Manager.
                    Configured secure server access without exposing public IPs,
                    improving security and isolation inside the VPC. Set up
                    Node.js backend, Nginx, and required services on EC2 using
                    SSH access through PuTTY. Integrated S3 buckets for storing
                    static files and optimized bucket access policies. Managed
                    VPC, subnets, IAM roles, and security groups to ensure
                    secure and scalable application deployment.
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                EDUCATION
            ====================================================== */}
            <h2 className="text-2xl font-bold mt-16 mb-6 text-green-300">
              Education
            </h2>

            <div className="w-full max-w-7xl mx-auto flex justify-center">
              <div
                className="
                  rounded-xl
                  p-6 md:p-8
                  w-full
                  max-w-xl
                  text-center
                  shadow-lg
                  bg-white/5
                  border border-white/10
                  backdrop-blur-lg
                "
              >
                <h3 className="text-2xl font-semibold text-white font-serif">
                  Rajah RSRK Ranga Rao College
                </h3>

                <p className="text-gray-400 mt-3 font-serif">
                  Mathematics, Statistics, Computer Applications (B.Sc)
                </p>

                <p className="mt-4 text-green-300 font-medium font-serif">
                  Grade: 7.00
                </p>

                <p className="text-gray-500 mt-1 font-serif">
                  Bobbili
                </p>
              </div>
            </div>
          </section>

          {/* =======================================================
              EXPERIENCE
          ======================================================== */}
          <section
            id="experience"
            className="scroll-mt-28 mt-16 md:mt-20"
          >
            <h2 className="text-2xl font-bold mb-6 text-green-300">
              Experience
            </h2>

            <div
              className="
                w-full
                max-w-7xl
                mx-auto
                flex
                flex-col
                md:flex-row
                items-stretch
                justify-center
                gap-8
              "
            >
              {/* Junior Software Developer */}
              <div
                className="
                  group
                  border
                  border-gray-700
                  rounded-xl
                  p-6
                  w-full
                  md:max-w-md
                  text-center
                  shadow-lg
                  min-h-[230px]
                  flex
                  flex-col
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold
                    text-white
                    mb-4
                    group-hover:scale-105
                    transition-transform
                    duration-300
                  "
                >
                  Junior Software Developer
                </h3>

                <div
                  className="
                    text-gray-300
                    text-sm
                    leading-relaxed
                    font-serif
                    flex-1
                  "
                >
                  <p className="text-gray-400">
                    June (2024) – Out (2024) (5 months)
                  </p>

                  <p className="mt-2 text-green-300 font-medium">
                    VulcanTechs (Goprayan)
                  </p>

                  <p className="mt-4">
                    Worked on web development using HTML, CSS, PHP, MySQL, and
                    JavaScript.
                  </p>
                </div>
              </div>

              {/* Full Stack Developer */}
              <div
                className="
                  group
                  border
                  border-gray-700
                  rounded-xl
                  p-6
                  w-full
                  md:max-w-md
                  text-center
                  shadow-lg
                  min-h-[230px]
                  flex
                  flex-col
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold
                    text-white
                    mb-4
                    group-hover:scale-105
                    transition-transform
                    duration-300
                  "
                >
                  Full Stack Developer (MERN Stack)
                </h3>

                <div
                  className="
                    text-gray-300
                    text-sm
                    leading-relaxed
                    font-serif
                    flex-1
                    overflow-y-auto
                    scrollbar-thin
                    scrollbar-thumb-gray-600
                    scrollbar-track-transparent
                  "
                >
                  <p className="text-gray-400">
                    Out (2025) – Feb (2026)
                  </p>

                  <p className="mt-2 text-green-300 font-medium">
                    VulcanTechs (Goprayan)
                  </p>

                  <p className="mt-4">
                    <strong>Project:</strong> Ford Company (assisting in Ford
                    projects) – React projects
                  </p>

                  <p className="mt-2">
                    H360 Project (March – July), testing and development.
                  </p>

                  <p className="mt-2">
                    <strong>Project:</strong> Qutone (Oct–Nov) – Managed
                    end-to-end AWS infrastructure setup and application
                    deployment.
                  </p>

                  <p className="mt-2">
                    <strong>Project:</strong> Bistro Bill (Dec–Feb) – A web
                    application built using React and Angular for efficient
                    user interaction.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
