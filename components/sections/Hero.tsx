"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiResearchgate, SiPeerlist } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import Lottie from "lottie-react";
import profileAnimation from "@/components/assets/Cute Tiger.json";

export default function Hero() {
  const fullName = "Hi, I'm Akhi Ketu Chakma";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    const isComplete = typedName.length === fullName.length;
    const timeout = setTimeout(
      () => {
        setTypedName(isComplete ? "" : fullName.slice(0, typedName.length + 1));
      },
      isComplete ? 5000 : 70,
    );

    return () => clearTimeout(timeout);
  }, [typedName, fullName]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Transparent Tiger Profile Animation */}
        <div className="flex justify-center">
          <div className="h-44 w-44 bg-transparent md:h-56 md:w-56">
            <Lottie
              animationData={profileAnimation}
              loop
              autoplay
              aria-label="Animated tiger profile illustration"
              className="h-full w-full select-none bg-transparent pointer-events-none"
              rendererSettings={{
                preserveAspectRatio: "xMidYMid meet",
              }}
              style={{
                backgroundColor: "transparent",
              }}
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-2">
          <h1
            aria-label={fullName}
            className="min-h-[1.2em] text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            {typedName}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Student - Computer Science
          </p>
        </div>

        {/* Bio */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Trying to build a better web experience with modern technologies and
          best practices.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-1.5">
          {/* GitHub */}
          <a
            href="https://github.com/AkhiKetu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="Github"
            className=" group relative p-2.5 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-125 transform-gpu"
          >
            <FaGithub size={25} />
            <span className="pointer-events-none invisible absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 scale-95 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-xs font-medium text-background opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              GitHub
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/akhi-ketu-chakma-520b083a5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className=" group relative p-2.5 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-125 transform-gpu"
          >
            <FaLinkedinIn size={25} />
            <span className="pointer-events-none invisible absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 scale-95 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-xs font-medium text-background opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              LinkedIn
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:akhiketu2003@gmail.com"
            aria-label="Email"
            className=" group relative p-2.5 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-125 transform-gpu"
          >
            <FaEnvelope size={25} />
            <span className="pointer-events-none invisible absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 scale-95 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-xs font-medium text-background opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              akhiketu2003@gmail.com
            </span>
          </a>

          {/* ResearchGate */}
          <a
            href="https://www.researchgate.net/profile/Akhi-Chakma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ResearchGate"
            className="group relative p-2.5 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-125 transform-gpu"
          >
            <SiResearchgate size={25} />
            <span className="pointer-events-none invisible absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 scale-95 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-xs font-medium text-background opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              ResearchGate
            </span>
          </a>
          {/* Phone */}
          <a
            href="tel:+880-1894852404"
            aria-label="Phone"
            className="group relative p-2.5 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-125 transform-gpu"
          >
            <FiPhoneCall size={25} />
            <span className="pointer-events-none invisible absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 scale-95 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-xs font-medium text-background opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              +880-1894852404
            </span>
          </a>
          {/* Peerlist */}
          <a
            href="https://peerlist.io/akhiketu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Peerlist"
            className="group relative p-2.5 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-125 transform-gpu"
          >
            <SiPeerlist size={22} />
            <span className="pointer-events-none invisible absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 scale-95 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-xs font-medium text-background opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              Peerlist
            </span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8 animate-bounce">
          <p className="text-lg text-muted-foreground">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
}
