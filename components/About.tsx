"use client";

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.8);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me..</SectionHeading>
      <p className="mb-3 font-light">
        A dedicated <span className="font-extrabold text-slate-600">Software Engineer/Freelancer</span> with over 1.5+ years of experience in{" "}
        <span className="font-bold text-slate-600">Full Stack Development </span>,
        specializing in{" "}
        <span className="font-bold text-slate-600">
          Java, JavaScript, and TypeScript.{" "}
        </span>
        Proficient in{" "}
        <span className="font-bold text-slate-600">frameworks/technologies</span> such as{" "}
        <span className="font-bold text-slate-600">
          MEARN, NextJs, Spring, NodeJs, Angular, and React
        </span>
      </p>
      <p className="font-light">
        I have hands-on experience with{" "}
        <span className="font-bold text-slate-600">databases</span> like{" "}
        <span className="font-bold text-slate-600">
          MySQL, MongoDB, and PostgreSQL, and tools such as Git, Docker, and
          Cloudflare Workers
        </span>
        . My work involves creating microservices with{" "}
        <span className="font-bold text-slate-600">
          Spring Boot, Spring Security, and Spring Cloud API Gateway, ensuring
          secure and efficient data management{" "}
        </span>
        . I also have experience with Hibernate, JPA, and Prisma ORM for
        database interactions. My passion lies in developing scalable, efficient
        applications and continuously learning new technologies to stay ahead in
        the field.
      </p>
    </motion.section>
  );
}
