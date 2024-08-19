"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-4 sm:mb-8 last:mb-0"
    >
      <section
        className="bg-gray-100 max-w-full sm:max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 group-even:pl-1 sm:group-even:pl-14
    hover:bg-gray-200 transition  rounded-3xl sm:rounded-xl shadow-lg sm:shadow-md dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div className="pt-6 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:mx-w-[50%] flex flex-col h-full w-full sm:w-1/2 sm:group-even:ml-[18rem]">
          <h3 className="text:xl sm:text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-600 dark:text-white/70">
            {description}
          </p>
          <ul className="mt-4 gap-2 sm:mt-auto flex flex-wrap">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="projectImages"
          quality={95}
          className="sm:absolute sm:top-8 -right-40 w-full sm:w-[28.25rem] h-auto rounded-t-lg shadow-2xl group-even:right-[initial] sm:group-even:-left-40 
        group-hover:translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-hover:scale-[1.06]
        transition
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        "
        />
      </section>
    </motion.div>
  );
}
