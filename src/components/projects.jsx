import React from "react";
import {motion} from "motion/react";
import SU from "../../public/preview/shiksha.jpg";
import CB from "../../public/preview/clever.jpg";
import WTT from "../../public/preview/wtt.jpg";
import MB from "../../public/preview/mb.jpg";
import UPX from "../../public/preview/upx.jpg";
import CG from "../../public/preview/cg.jpg";
function Projects() {
  const achievements = [
    {
      title: "Shiksha UI",
      description:
        "Delivered a responsive landing page with server-side rendering, optimizing performance for improved SEO and user engagement.",
      date: "Jun 2023",
      url: "https://github.com/aaditya-paul/shikhsha-ui",
      img: SU,
    },
    {
      title: "Clever Books",
      description:
        "Crafted a modern one-page UI mockup using Next.js and Tailwind CSS, receiving positive feedback for its design aesthetics and usability.",
      date: "Jun 2024",
      url: "https://github.com/aaditya-paul/clever-books",
      img: CB,
    },
    {
      title: "Task Tracker",
      description:
        "Designed a cutting-edge workflow management tool that integrates GitHub, providing admins seamless access to code repositories and task assignments.",
      date: "Sep 2024",
      url: "https://github.com/aaditya-paul/WTT",
      img: WTT,
    },

    {
      title: "Meal Buddy",
      description:
        "Created a detailed UI prototype for an online food delivery platform, focusing on responsive and visually appealing design.",
      date: "Apr 2023",
      url: "https://github.com/aaditya-paul/meal-buddy",
      img: MB,
    },
    {
      title: "Upexperiment",
      description:
        "Built a user-friendly blogging platform with seamless device adaptability, ensuring an optimal viewing experience across all screens.",
      date: "Mar 2023",
      url: "https://github.com/aaditya-paul/upexperiment",
      img: UPX,
    },
    {
      title: "Cogni Glove",
      description:
        "Developed a gesture-recognition hand glove using AI and WebSockets, capable of interpreting sign language and performing tasks based on recognized gestures.",
      date: "May 2024",
      url: "https://github.com/aaditya-paul/cogni-glove",
      img: CG,
    },
  ];

  return (
    <div className="relative h-full w-full bg-black">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="  min-h-screen min-w-screen flex flex-col gap-12 items-center py-24  text-white ">
        <motion.div
          className=" font-poppins text-2xl md:text-5xl lg:text-[48px] z-20"
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
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            clipPath: "inset(0 100% 0 0)", // Initially hide the text (clip from right side)
          }}
        >
          Showcase Of Excellence
        </motion.div>
        <div>
          <div className="bg-transparent text-white min-h-screen py-5 md:py-10 px-6">
            {/* <h1 className="text-4xl font-bold text-center text-white mb-8">
              Journey of Excellence
            </h1> */}
            <div className="relative max-w-5xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute w-1 bg-gradient-to-b from-amber-500 to-orange-500 h-full left-1/2 transform -translate-x-1/2"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {achievements.map((achievement, index) => (
                  <motion.a
                    href={achievement.url}
                    target="_blank"
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                    initial={{
                      translateX: index % 2 === 0 ? -100 : 100,
                      opacity: 0,
                      scale: 0,
                    }}
                    whileInView={{translateX: 0, opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                  >
                    {/* Connector Dots */}
                    <div
                      className={`absolute w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full border-4 border-gray-900 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -top-[25px] `}
                    ></div>

                    {/* Content */}
                    <div
                      className={`bg-black z-20 p-6 rounded-lg shadow-[0px_0px_15px_5px_rgba(255,255,255,0.1)] md:max-w-md lg:max-w-lg ${
                        index % 2 === 0 ? "ml-6" : "mr-6"
                      }`}
                    >
                      <div className="">
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold text-orange-400">
                            {achievement.title}
                          </h2>
                          <p className="text-lg md:text-lg lg:text-md text-gray-300 mt-2">
                            {achievement.description}
                          </p>
                          <code className="text-sm text-gray-500 mt-4 block">
                            <a href={achievement.url} target="_blank">
                              {achievement.url}
                            </a>
                          </code>
                          <span className="text-sm text-gray-500 mt-4 block">
                            {achievement.date}
                          </span>
                        </div>
                        <div className="h-full w-full flex justify-center items-center mt-5">
                          <img
                            src={achievement.img}
                            alt="Project"
                            className=" h-full w-full object-cover "
                          />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
