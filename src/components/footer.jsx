import React from "react";
import {motion} from "motion/react";
function Footer() {
  return (
    <div className=" md:relative md:-top-36 md:py-0 py-12 font-fira-code flex flex-col items-center justify-center text-white bg-black">
      <div>
        Made By{" "}
        <span className=" font-playwrite text-orange-300 ">Aaditya Paul.</span>
      </div>
      <div>Copyright © 2025.</div>

      <motion.a
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.95}}
        transition={{
          ease: "easeInOut",
        }}
        href="/aadi-portfolio/resume.pdf"
        target="_blank"
        // download="Aaditya-Paul-Resume.pdf" // Optional: Rename the downloaded file
        className=" animate-pulse underline underline-offset-4 py-2 cursor-pointer"
      >
        Download Resume 📁
      </motion.a>
    </div>
  );
}

export default Footer;
