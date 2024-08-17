import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated",
    location: "Punjab, Jalandhar",
    description:
      "I completed my Bachelor's Degree in Computer Science and Software Engineering at the Lovely Professional University Jalandhar(LPU).",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Intern(Full-Stack Developer)",
    location: "Navi Mumbai, Maharastra",
    description:
      "I worked as a java full-stack developer for 6 months as an intern in Capgemini. where I worked on MICROSERVICES based projet.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan'2022 - Jun'2022",
  },
  {
    title: "Full-Stack Developer/Freelancer",
    location: "Navi Mumbai, Maharastra",
    description:
      "I am working as a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Jun'2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Spring Boot",
  "Spring REST",
  "Microservices",
  "Hibernate",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Bootstrap",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "MySQL",
  "Redux",
  "Zod",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Framer Motion",
] as const;