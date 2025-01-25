import React from "react";
import "../styles/textDrawing.css";
import {motion} from "motion/react";
function About() {
  return (
    <div className=" min-w-screen min-h-fit md:min-h-screen text-white flex flex-col md:gap-12 gap-5  py-24 px-5 md:px-12 lg:px-48 md:py-16">
      <motion.div
        // initial={{opacity: 0}}
        initial={false}
        whileInView={{
          // opacity: 1,
          clipPath: "inset(0 0 0 0)", // To reveal the text gradually from left to right
          transition: {duration: 1.5, ease: "easeInOut"},
        }}
        viewport={{once: true}}
        style={{
          textShadow: "oklch(0.75 0.183 55.934) 0.15vw 0.15vw",
          display: "inline-block", // Ensure element respects the clipping path animation
          // opacity: 0, // Start with the text hidden
          clipPath: "inset(0 100% 0 0)", // Initially hide the text (clip from right side)
        }}
        className=" text-3xl  md:text-[48px] font-poppins font-medium underline underline-offset-8"
      >
        ABOUT
      </motion.div>
      <motion.div
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        viewport={{once: true}}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className=" text-lg font-fira-code leading-8 md:leading-10 line-clamp-[12] md:line-clamp-[15] md:text-justify lg:line-clamp-none"
      >
        Hi, I&apos;m{" "}
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          Aaditya Paul
        </span>
        , a passionate
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          {" "}
          Full Stack Developer{" "}
        </span>
        with a knack for creating efficient, scalable, and visually appealing
        web applications. With hands-on experience in
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          {" "}
          Next.js,{" "}
        </span>
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          {" "}
          React,{" "}
        </span>
        and
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          {" "}
          Node.js,{" "}
        </span>
        I specialize in building responsive interfaces and dynamic backends
        tailored to user needs. Over the years, I&apos;ve worked on diverse
        projects ranging from
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          {" "}
          task management tools{" "}
        </span>
        to
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          {" "}
          gesture-recognition systems{" "}
        </span>
        , showcasing my ability to merge innovative ideas with cutting-edge
        technology. My expertise in
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          {" "}
          Firebase,{" "}
        </span>
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          {" "}
          MongoDB,{" "}
        </span>
        and CSS frameworks like
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          {" "}
          Tailwind CSS{" "}
        </span>
        allows me to deliver robust and engaging digital experiences. Beyond
        technical skills, I thrive in collaborative environments, having led
        teams to successfully execute projects that prioritize
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          {" "}
          performance, usability,{" "}
        </span>
        and
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          {" "}
          functionality.
        </span>{" "}
        I&apos;m also a strong advocate for
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          {" "}
          learning{" "}
        </span>
        and continuously challenge myself to explore new technologies and
        techniques to enhance my craft. When I&apos;m not coding, I enjoy
        participating in
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          {" "}
          hackathons,{" "}
        </span>
        brainstorming new ideas, and sharing knowledge with fellow developers.
        Feel free to explore my portfolio and connect with me to discuss
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          {" "}
          opportunities, projects,{" "}
        </span>
        or just
        <span
          style={{
            color: "#f4bb44",
          }}
        >
          {" "}
          geek out about tech!
        </span>
      </motion.div>
    </div>
  );
}

export default About;
