"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me..</SectionHeading>
      <p className="mb-3">
        A dedicated Software Engineer with over 1.5 years of experience in{" "}
        <span className="font-semibold">Full Stack Development </span>,
        specializing in{" "}
        <span className="font-semibold">Java, JavaScript, and TypeScript.</span>
        Proficient in{" "}
        <span className="font-semibold">frameworks/technologies</span> such as{" "}
        <span className="font-semibold">
          MEARN, NextJs, Spring, NodeJs, Angular, and React
        </span>
        .At Capgemini, I engineered robust{" "}
        <span className="font-semibold">APIs, microservices</span>, and
        implemented various third-party APIs.
      </p>
      <p>
        I have hands-on experience with{" "}
        <span className="font-semibold">databases</span> like{" "}
        <span className="font-semibold">
          MySQL, MongoDB, and PostgreSQL, and tools such as Git, Docker, and
          Cloudflare Workers
        </span>
        . My work involves creating microservices with{" "}
        <span className="font-semibold">
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
