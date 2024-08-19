"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { animate, delay, motion } from "framer-motion";
import { once } from "events";

const fadeInAnimationVarients= {
    initial:{
        opacity:0,
        y:50,
    },
    animate:(index:number)=> ({
        opacity:1,
        y:0,
        transition:{
            delay:0.02 * index,
        }
    })
};

export default function Skills() {

const { ref } = useSectionInView("Skills", 0.1);    
  return (
    <section  ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My skills..</SectionHeading>
      <div>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li key={index} className="bg-white border border-black/[0.1] px-5 py-3 rounded-xl hover:bg-slate-200 shadow-md dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
            variants={fadeInAnimationVarients}
            initial="initial"
            whileInView="animate"
            // viewport={{
            //   once:true,
            // }}
            custom={index}
            >{skill}</motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
