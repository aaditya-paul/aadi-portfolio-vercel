import React from "react";
import Email from "../../public/assets/email.svg";
import LIN from "../../public/assets/linkedIn.svg";
import GH from "../../public/assets/github.svg";
import INSTA from "../../public/assets/insta.svg";
import BENTO from "../../public/assets/bento.svg";
import Footer from "./footer";
import {motion} from "framer-motion";
function Contact() {
  const contact = [
    {
      title: "Email",
      icon: Email,
      url: "mailto:aadityapaul2006@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: LIN,
      url: "https://www.linkedin.com/in/aaditya-paul/",
    },
    {
      title: "GitHub",
      icon: GH,
      url: "https://github.com/aaditya-paul/",
    },
    {
      title: "Instagram",
      icon: INSTA,
      url: "https://www.instagram.com/__the.frustrated.guy__/",
    },
    {
      title: "Bento",
      icon: BENTO,
      url: "https://bento.me/aaditya-paul",
    },
  ];
  return (
    <div className="relative h-full w-full bg-black">
      <div className="absolute bottom-0 md:left-[-20%] -left-[50%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,164,0,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 md:right-[-20%] -right-[50%] md:top-[-10%] top-[70%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,164,0,.15),rgba(255,255,255,0))]"></div>
      <div className=" flex flex-col h-screen w-screen text-white mb-24">
        <motion.div
          className=" underline underline-offset-8 text-3xl md:text-[48px] font-poppins text-center md:text-right md:mx-48 lg:mx-64 md:my-16 lg:my-24 mx-5 my-12 "
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
        >
          Reach Me Out
        </motion.div>
        <div className="lg:justify-center lg:items-center flex flex-col lg:flex-row gap-5 md:gap-5 lg:gap-12 h-full md:h-full">
          {contact.map((contact, index) => (
            <motion.a
              initial={{scale: 0, opacity: 0}}
              whileInView={{scale: 1, opacity: 1}}
              viewport={{once: true}}
              transition={{
                delay: 0.1 * index,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="px-12 md:px-24 lg:px-0 z-20"
              key={index}
              href={contact.url}
              target="_blank"
            >
              <div className=" hover:border-orange-400 transition-all ease-in rounded-2xl lg:-mt-36 lg:px-12 px-5 py-5 mx-5 md:py-4 border-white border flex flex-col items-center">
                <img
                  src={contact.icon}
                  className="w-[50px] h-[50px] border-white"
                ></img>
                <div className="text-lg font-fira-code">{contact.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
