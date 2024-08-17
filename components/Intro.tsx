"use client";

import { useActiveSectionContext } from "@/context/ActiveSection";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsGithub, BsTwitterX } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const {setActiveSection, setLastClick} = useActiveSectionContext();

  // here we made customeHooks in Hooks.ts from the below reusable-Hooks from every page...

  // const {ref, inView} = useInView();

  // useEffect(()=>{
  //   if(inView && Date.now()- lastClick > 1000){
  //     setActiveSection("Home");
  //   }
  // }, [inView, setActiveSection, lastClick])

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-32"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <Image
              src="/me1.png"
              alt="me"
              width="192"
              height="192"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <div className="mt-4 mb-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{
            type: "spring",
          }}
          className="text-2xl sm:text-3xl"
        >
          <span className="font-bold"> Hello, I'am </span>{" "}
          <span className="font-bold">Aman Kumar Anand. </span>
          I'am a <span className="font-bold">Full Stack Engineer</span>/
          <span className="font-bold">Freelancer </span>
          with <span className="font-bold">2 years</span> of expericence. i
          enjoy building
          <span className="font-bold"> websites and apps.</span>
        </motion.h1>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
         onClick={()=>{
          setActiveSection("Contact");
          setLastClick(Date.now());
         }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-3 transition" />
        </Link>
        <a
          className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/20"
          href="/CV.pdf"
          download
        >
          Download resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="group bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/20"
          href="https://github.com/Venomaman"
          target="_blank"
        >
          <BsGithub className="opacity-80 group-hover:opacity-100 group-hover:scale-125 transition" />
        </a>
        <a
          className="group bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/20"
          href="https://x.com/aman_and_anand"
          target="_blank"
        >
          <BsTwitterX className="opacity-80 group-hover:opacity-100 group-hover:scale-125 transition" />
        </a>
      </motion.div>
    </section>
  );
}
