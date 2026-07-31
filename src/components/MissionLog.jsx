"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import SU from "../../public/preview/shiksha.jpg";
import CB from "../../public/preview/clever.jpg";
import WTT from "../../public/preview/wtt.jpg";
import MB from "../../public/preview/mb.jpg";
import UPX from "../../public/preview/upx.jpg";
import CG from "../../public/preview/cg.jpg";
import P2P from "../../public/preview/p2p.jpg";
import FB from "../../public/preview/FB.jpg";
import BF from "../../public/preview/BF.jpg";
import AM from "../../public/preview/AM.jpg";
import SPM from "../../public/preview/spm.jpg";
import TSK from "../../public/preview/tsk.jpg";
import GPT from "../../public/preview/gpt.jpg";
import WKC from "../../public/preview/wkc.jpg";
import RIZZ from "../../public/preview/rizz.jpeg";
import LW from "../../public/preview/lw.jpeg";
import ULT from "../../public/preview/ult.jpeg";
const missions = [
  {
    title: "FluxBit.",
    description:
      "FluxBit is a cutting-edge digital agency specializing in modern web development, digital engineering, and strategic digital marketing.",
    date: "Jul 2025",
    liveUrl: "https://fluxbit-one.vercel.app",
    img: FB,
    tech: ["UI/UX", "Web Agency", "Landing Page"],
    category: "frontend",
    featured: true,
  },
  {
    title: "Ultron",
    description:
      "A local-first multi-agent system that finds security flaws in source code — combining AST analysis, IR-based taint propagation, and specialized LLM agents.",
    date: "Jul 2026",
    githubUrl:"https://github.com/aaditya-paul/project-ultron",
    img: ULT,
    tech: ["AST", "IR", "Cybersecurity", "AI/ML"],
    category: "frontend",
    featured: true,
  },
  {
    title: "AceMind",
    description:
      "An innovative platform designed to enhance cognitive skills through personalized learning experiences and AI-driven insights.",
    date: "Aug 2025",
    liveUrl: "https://acemind-delta.vercel.app/",
    img: AM,
    tech: ["UI/UX", "Syllabus Parser", "AI"],
    category: "ai",
    featured: true,
  },
  {
    title: "Rizzlet",
    description:
      "An AI-powered texting copilot that helps you find the right words, in your voice, at the right moment.",
    date: "Feb 2026",
    githubUrl: "https://github.com/aaditya-paul/rizzlet-web",
    liveUrl: "https://rizzlet.aaditya-paul.in/",
    img: RIZZ,
    tech: ["AI", "NodeJs", "PostgreSQL", "AI/ML"],
    category: "ai",
  },
  {
    title: "LoreWeaver",
    description:
      "A research-grade storytelling engine designed to generate long-form narratives (20k+ words) with strong consistency, coherent character development, and maintained world rules.",
    date: "March 2026",
    githubUrl: "https://github.com/aaditya-paul/loreweaver",
    // liveUrl: "https://loreweaver.aaditya-paul.in/",
    img: LW,
    tech: ["AI", "Python", "SQLITE", "AI/ML", "Flutter"],
    category: "ai",
  },
  {
    title: "Whiskerknots Crochet",
    description:
      "A modern Next.js e-commerce site for Whiskerknots — a handmade crochet shop with a server-side AI chat assistant.",
    date: "Dec 2025",
    githubUrl: "https://github.com/aaditya-paul/whiskerknots-crochet",
    liveUrl: "https://whiskerknots-crochet.vercel.app/",
    img: WKC,
    tech: ["E-Commerce", "Landing Page", "AI Chatbot"],
    category: "frontend",
  },
  {
    title: "GPT WRAP",
    description:
      "Like Spotify Wrapped, but for your AI conversations. Transforms your ChatGPT export data into stunning, shareable insights.",
    date: "Dec 2025",
    githubUrl: "https://github.com/aaditya-paul/gpt-wrap",
    liveUrl: "https://gpt-wrap-psi.vercel.app/",
    img: GPT,
    tech: ["Data Analysis", "Modern Design", "AI/ML"],
    category: "ai",
  },
  {
    title: "Upexperiment",
    description:
      "A user-friendly blogging platform with seamless device adaptability, ensuring an optimal viewing experience across all screens.",
    date: "Mar 2023",
    githubUrl: "https://github.com/aaditya-paul/upexperiment",
    liveUrl: "https://upexperiment.com/",
    img: UPX,
    tech: ["React", "Responsive Design", "Blog Platform"],
    category: "fullstack",
  },
  {
    title: "Taskle",
    description:
      "A personal task management application with a handcrafted, warm, and creative UI that feels like a beautifully designed digital notebook.",
    date: "Mar 2023",
    liveUrl: "https://taskle-seven.vercel.app/",
    img: TSK,
    tech: ["Next.js", "Database", "Task Management"],
    category: "fullstack",
  },
  {
    title: "Spotify Migrater",
    description:
      "Migrate playlists, liked songs, albums, and artists between Spotify accounts.",
    date: "Oct 2025",
    githubUrl: "https://github.com/aaditya-paul/spotify-migrater",
    liveUrl: "https://spotify-migrater.vercel.app/",
    img: SPM,
    tech: ["Next.js", "Serverless", "Spotify API"],
    category: "frontend",
  },
  {
    title: "Brandfolio",
    description:
      "A platform bridging brands and creators with a data-first approach, empowering smarter partnerships and measurable growth.",
    date: "Jul 2025",
    githubUrl: "https://github.com/aaditya-paul/brandfolio",
    liveUrl: "https://brandfolio-orcin.vercel.app/",
    img: BF,
    tech: ["UI/UX", "Landing Page", "Animations"],
    category: "frontend",
  },
  {
    title: "Shiksha UI",
    description:
      "A responsive landing page with server-side rendering, optimizing performance for improved SEO and user engagement.",
    date: "Jun 2023",
    githubUrl: "https://github.com/aaditya-paul/shikhsha-ui",
    liveUrl: "https://shikhsha-ui.vercel.app",
    img: SU,
    tech: ["React", "SSR", "SEO"],
    category: "frontend",
  },
  {
    title: "Clever Books",
    description:
      "A modern one-page UI mockup using Next.js and Tailwind CSS, with positive feedback for design aesthetics and usability.",
    date: "Jun 2024",
    githubUrl: "https://github.com/aaditya-paul/clever-books",
    liveUrl: "https://clever-books-aaditya.netlify.app/",
    img: CB,
    tech: ["Next.js", "Tailwind CSS", "React"],
    category: "frontend",
  },
  {
    title: "Task Tracker",
    description:
      "A cutting-edge workflow management tool integrating GitHub, providing admins seamless access to code repositories and task assignments.",
    date: "Sep 2024",
    githubUrl: "https://github.com/aaditya-paul/WTT",
    liveUrl: "https://waiveer-task-tracker.vercel.app/",
    img: WTT,
    tech: ["React", "GitHub API", "Node.js", "MongoDB"],
    category: "fullstack",
  },
  {
    title: "Cogni Glove",
    description:
      "A gesture-recognition hand glove using AI and WebSockets, interpreting sign language and performing tasks from recognized gestures.",
    date: "May 2024",
    githubUrl: "https://github.com/aaditya-paul/cogni-glove",
    img: CG,
    tech: ["AI/ML", "WebSockets", "Python", "Arduino"],
    category: "ai",
  },
  {
    title: "Meal Buddy",
    description:
      "A detailed UI prototype for an online food delivery platform, focusing on responsive and visually appealing design.",
    date: "Apr 2023",
    githubUrl: "https://github.com/aaditya-paul/meal-buddy",
    liveUrl: "https://meal-buddy.vercel.app/",
    img: MB,
    tech: ["UI/UX", "Prototype", "Food Delivery"],
    category: "frontend",
  },
  {
    title: "P2P File Sharing",
    description:
      "A Peer-to-Peer file sharing app built with Next.js. Upload files securely, generating unique URLs for easy download.",
    date: "Jan 2025",
    githubUrl: "https://github.com/aaditya-paul/p2p-fullstack-filesharing",
    img: P2P,
    tech: ["Next.js", "Tailwind CSS", "WebRTC", "Node.js"],
    category: "fullstack",
  },
];

const categories = [
  { id: "all", name: "All Missions", icon: "🚀" },
  { id: "fullstack", name: "Full Stack", icon: "💻" },
  { id: "frontend", name: "Frontend", icon: "🎨" },
  { id: "ai", name: "AI/ML", icon: "🤖" },
];

const stats = [
  { number: "15+", label: "Missions", icon: "🚀" },
  { number: "3+", label: "Tech Domains", icon: "💻" },
  { number: "2+", label: "Years Active", icon: "⏰" },
  { number: "100%", label: "Passion", icon: "❤️" },
];

function MissionCard({ mission }) {
  return (
    <div
      className={`group bg-white/[0.02] border rounded-2xl overflow-hidden transition-all duration-500
        hover:bg-white/[0.04] hover:shadow-[0_0_50px_rgba(244,187,68,0.06)]
        ${mission.featured ? "border-[#f4bb44]/20" : "border-white/[0.06]"}`}
    >
      {/* Image */}
      <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
        <div className="mission-image absolute inset-0">
          <Image
            src={mission.img}
            alt={mission.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Featured badge */}
        {mission.featured && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 py-0.5 sm:px-3 sm:py-1 bg-[#f4bb44] text-black rounded-full text-[10px] sm:text-xs font-fira-code font-bold tracking-wider">
            ⭐ KEY MISSION
          </div>
        )}

        {/* Date overlay */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-3 sm:py-1 bg-black/60 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-fira-code text-[#f4bb44]/80 border border-[#f4bb44]/10">
          {mission.date}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-3">
        <h3 className="text-lg sm:text-xl font-poppins font-bold text-white group-hover:text-[#f4bb44] transition-colors duration-300">
          {mission.title}
        </h3>
        <p className="text-xs sm:text-sm font-fira-code text-gray-400 leading-relaxed line-clamp-2 sm:line-clamp-3">
          {mission.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {mission.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white/[0.04] border border-white/[0.08] rounded text-[10px] sm:text-xs font-fira-code text-gray-500"
            >
              {t}
            </span>
          ))}
          {mission.tech.length > 3 && (
            <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white/[0.04] border border-white/[0.08] rounded text-[10px] sm:text-xs font-fira-code text-gray-500">
              +{mission.tech.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-2 pt-1">
          {mission.liveUrl && (
            <a
              href={mission.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#f4bb44] text-black
                         rounded-lg text-[10px] sm:text-xs font-fira-code font-semibold
                         hover:shadow-[0_0_20px_rgba(244,187,68,0.3)] transition-all duration-300"
            >
              🚀 Live
            </a>
          )}
          {mission.githubUrl && (
            <a
              href={mission.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/[0.05] border border-white/10
                         text-gray-300 rounded-lg text-[10px] sm:text-xs font-fira-code
                         hover:border-white/30 hover:text-white transition-all duration-300"
            >
              📂 Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MissionLog() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Split into featured and rest
  const filteredMissions =
    selectedCategory === "all"
      ? missions
      : missions.filter((m) => m.category === selectedCategory);

  const featuredMissions = filteredMissions.filter((m) => m.featured);
  const otherMissions = filteredMissions.filter((m) => !m.featured);
  const visibleMissions = showAll ? filteredMissions : featuredMissions;
  const hasMore = otherMissions.length > 0;

  // Reset showAll when category changes
  useEffect(() => {
    setShowAll(false);
  }, [selectedCategory]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Chapter heading
      gsap.fromTo(
        headingRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Mission entries
      const entries = sectionRef.current?.querySelectorAll(".mission-entry");
      entries?.forEach((entry) => {
        gsap.fromTo(
          entry,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: entry,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      // Stats counter
      const statNumbers = sectionRef.current?.querySelectorAll(".stat-number");
      statNumbers?.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedCategory, showAll]);

  return (
    <section
      ref={sectionRef}
      id="missions"
      className="relative w-full bg-black overflow-hidden py-16 sm:py-24 md:py-32"
      style={{ zIndex: 2 }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] pointer-events-none" />
      {/* Ambient glows */}
      <div className="absolute top-[20%] left-[-10%] h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(244,187,68,.06),transparent)] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(244,187,68,.04),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 space-y-8 sm:space-y-12 text-white">
        {/* Chapter heading */}
        <div className="space-y-2 sm:space-y-3">
          <div className="text-[#f4bb44]/40 font-fira-code text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase">
            Chapter II
          </div>
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            THE <span className="text-[#f4bb44]">MISSIONS</span>
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-[#f4bb44] to-transparent" />
        </div>

        {/* Category Filters — horizontal scrollable on phone */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-fira-code text-[11px] sm:text-sm
                         transition-all duration-300 border cursor-pointer whitespace-nowrap shrink-0 ${
                           selectedCategory === cat.id
                             ? "bg-[#f4bb44] text-black border-[#f4bb44]"
                             : "bg-white/[0.03] text-gray-400 border-white/10 hover:border-[#f4bb44]/40 hover:text-[#f4bb44]"
                         }`}
            >
              <span className="mr-1">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Mission Timeline */}
        <div className="relative">
          {/* Timeline line — hidden on mobile */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#f4bb44]/30 via-[#f4bb44]/10 to-transparent hidden sm:block" />

          <div className="space-y-6 sm:space-y-10 md:space-y-14">
            <AnimatePresence mode="wait">
              {visibleMissions.map((mission) => (
                <motion.div
                  key={mission.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="mission-entry relative sm:pl-14 md:pl-24"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-[#f4bb44]/60 border-2 border-black hidden sm:block" />
                  <MissionCard mission={mission} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Show More / Show Less Button */}
          {hasMore && (
            <div className="flex justify-center pt-8 sm:pt-12">
              <button
                onClick={() => {
                  setShowAll(!showAll);
                  if (showAll) {
                    // Scroll back to missions heading when collapsing
                    document
                      .getElementById("missions")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5
                           bg-white/[0.03] border border-[#f4bb44]/20 rounded-full
                           font-fira-code text-xs sm:text-sm text-[#f4bb44]
                           hover:bg-[#f4bb44]/10 hover:border-[#f4bb44]/40
                           transition-all duration-300 cursor-pointer"
              >
                {showAll ? (
                  <>
                    Show Less
                    <span className="group-hover:-translate-y-0.5 transition-transform duration-200">
                      ↑
                    </span>
                  </>
                ) : (
                  <>
                    View {otherMissions.length} More Mission
                    {otherMissions.length > 1 ? "s" : ""}
                    <span className="group-hover:translate-y-0.5 transition-transform duration-200">
                      ↓
                    </span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Mission Debrief — Stats */}
        <div className="pt-8 sm:pt-16 space-y-6 sm:space-y-8">
          <h3 className="text-[10px] sm:text-sm font-fira-code text-[#f4bb44]/60 tracking-[0.3em] uppercase text-center">
            Mission Debrief
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-number text-center p-3 sm:p-5 bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl
                           hover:border-[#f4bb44]/20 transition-all duration-300 group"
              >
                <div className="text-lg sm:text-2xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-poppins text-[#f4bb44] font-bold">
                  {stat.number}
                </div>
                <div className="text-[10px] sm:text-xs font-fira-code text-gray-500 mt-0.5 sm:mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4 sm:pt-8">
          <p className="text-sm sm:text-lg font-fira-code text-gray-400 mb-4 sm:mb-6">
            Ready to start a new mission together?
          </p>
          <button
            onClick={() =>
              document
                .getElementById("signal")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-[#f4bb44]/10
                       border border-[#f4bb44]/30 rounded-full font-fira-code text-sm
                       hover:bg-[#f4bb44]/20 transition-all duration-300 cursor-pointer text-white"
          >
            Send a Signal <span className="text-[#f4bb44]">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
