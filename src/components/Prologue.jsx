"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Me from "../assets/mee.png";
import { useRouter } from "next/navigation";

export default function Prologue() {
  const router = useRouter();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const photoRef = useRef(null);
  const taglineRef = useRef(null);
  const metaRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Name types in
      tl.fromTo(
        titleRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 1.2 },
        0.4,
      );

      // 2. Subtitle fades
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.2,
      );

      // 3. Photo reveals with scale
      tl.fromTo(
        photoRef.current,
        { scale: 0.6, opacity: 0, filter: "blur(20px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1 },
        0.6,
      );

      // 4. Tagline staggers in letter by letter
      const taglineEl = taglineRef.current;
      if (taglineEl) {
        const text = taglineEl.textContent;
        taglineEl.innerHTML = "";
        text.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.display = "inline-block";
          span.style.opacity = "0";
          span.style.transform = "translateY(20px)";
          taglineEl.appendChild(span);
        });
        gsap.set(taglineEl, { opacity: 1 });
        tl.to(
          taglineEl.children,
          {
            opacity: 1,
            y: 0,
            duration: 0.04,
            stagger: 0.03,
            ease: "power2.out",
          },
          1.6,
        );
      }

      // 5. Meta info
      tl.fromTo(
        metaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        2.0,
      );

      // 6. CTA
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        2.3,
      );

      // 7. Scroll indicator
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        2.8,
      );

      // Pulse scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
        delay: 3,
      });

      // Parallax the photo on scroll
      gsap.to(photoRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const techStack = ["React", "Next.js", "Node.js", "TypeScript"];

  return (
    <section
      ref={sectionRef}
      id="prologue"
      className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24"
      style={{ zIndex: 2 }}
    >
      {/* Ambient glows */}
      <div className="absolute top-[10%] left-[-10%] h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] md:h-[600px] md:w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(244,187,68,.08),transparent)] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(244,187,68,.05),transparent)] pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16 w-full max-w-6xl">
        {/* Photo */}
        <div
          ref={photoRef}
          className="relative shrink-0"
          style={{ opacity: 0 }}
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#f4bb44]/30 to-transparent blur-xl animate-pulse" />
            <Image
              src={Me}
              alt="Aaditya Paul"
              width={350}
              height={350}
                className="relative w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] rounded-full object-cover object-[55%_30%] border-2 border-[#f4bb44]/30"
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 sm:space-y-5 max-w-2xl">
          {/* Name */}
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-poppins font-bold text-white"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            Aaditya <span className="text-[#f4bb44]">Paul</span>
          </h1>

          {/* Subtitle */}
          <div
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-2xl font-ubuntu font-light text-gray-400 tracking-wide"
            style={{ opacity: 0 }}
          >
            Full-Stack Developer
          </div>

          {/* Tagline */}
          <div
            ref={taglineRef}
            className="text-lg sm:text-xl md:text-3xl font-poppins font-medium text-white/90 leading-relaxed"
            style={{ opacity: 0 }}
          >
            I build things that matter.
          </div>

          {/* Meta */}
          <div ref={metaRef} className="space-y-3" style={{ opacity: 0 }}>
            <p className="text-sm sm:text-base font-fira-code text-gray-500">
              📍 Based in West Bengal, India
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#f4bb44]/10 border border-[#f4bb44]/25 rounded-full text-xs font-fira-code text-[#f4bb44]/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-3 pt-4 w-full sm:w-auto"
            style={{ opacity: 0 }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("missions")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 bg-[#f4bb44] text-black font-fira-code font-semibold rounded-full hover:shadow-[0_0_25px_rgba(244,187,68,0.4)] transition-all duration-300 text-sm cursor-pointer"
            >
              View My Work →
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("signal")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 border border-[#f4bb44]/40 text-[#f4bb44] font-fira-code rounded-full hover:bg-[#f4bb44]/10 transition-all duration-300 text-sm cursor-pointer"
            >
              Let's Connect
            </button>
            <button
              onClick={() => router.push("/resume")}
              className="px-6 py-3 border border-white/20 text-white/60 font-fira-code rounded-full hover:border-white/40 hover:text-white/80 transition-all duration-300 text-sm cursor-pointer"
            >
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex md:flex-col items-center gap-2 cursor-pointer"
        style={{ opacity: 0 }}
        onClick={() =>
          document
            .getElementById("origin")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-[#f4bb44]/60 font-fira-code text-xs tracking-[0.3em]  uppercase hidden md:block">
          Begin the journey
        </span>
        <span className="text-[#f4bb44]/60 font-fira-code text-xs tracking-[0.3em]  uppercase md:hidden block">
          Scroll Down
        </span>
        <span className="text-[#f4bb44]/80 text-xl">↓</span>
      </div>
    </section>
  );
}
