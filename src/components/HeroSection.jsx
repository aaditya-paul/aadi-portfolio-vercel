import React from "react";
import Me from "../assets/mee.png";
import {motion} from "motion/react";
import "../styles/textDrawing.css";
function HeroSection() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen w-screen bg-black">
      <div className="w-full h-full text-white flex flex-col lg:flex-row justify-center items-center">
        <motion.div
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            type: "spring",
            stiffness: 200,
          }}
          initial={{scale: 0}}
          animate={{scale: 1}}
          className="  z-20 h-fit w-fit rounded-full ring-4 ring-orange-400 "
        >
          <img
            className=" md:w-[350px] md:h-[350px] w-[150px] h-[150px] rounded-full object-cover"
            src={Me}
          ></img>
        </motion.div>
        <div className=" flex flex-col items-center p-16 md:p-24 gap-5">
          <div>
            <div
              style={{
                textShadow: "oklch(0.75 0.183 55.934) 0.15vw 0.15vw",
              }}
              className=" animated-text pr-5 md:text-[64px] text-[30px] font-playwrite font-medium  "
            >
              Hello There!{" "}
            </div>{" "}
          </div>
          <motion.div className="  md:text-[36px] text-[18px] text-center md:text-right font-ubuntu">
            <motion.span
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{
                delay: 1,
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              I&apos;m Aaditya Paul,
            </motion.span>
            <br></br>
            <motion.span
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{
                delay: 1.6,
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              a Full-Stack Developer,<br></br>{" "}
            </motion.span>
            <motion.span
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{
                delay: 2.2,
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              Hailing from West Bengal, India.
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{
          delay: 2.8,
          duration: 0.6,
          ease: "easeInOut",
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        onClick={() => {
          window.scrollBy(0, window.innerHeight);
        }}
        className=" cursor-pointer text-white p-4 font-playwrite animate-bounce "
      >
        scroll down to learn more ↓
      </motion.div>
    </div>
  );
}

export default HeroSection;
