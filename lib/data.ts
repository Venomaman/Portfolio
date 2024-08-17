import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dreamHouse from "@/public/dreamHouse.png";
import wmBlog from "@/public/wmBlog.png";
import portfolio from "@/public/portfolio.png";

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
    title: "Intern(Java Full-Stack Developer)",
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
    title: "DreamHSE",
    description:
      "I worked as a full-stack developer on this Personal project. Users can List/Find(optimized Search/multiple Filters) properties and also buy there dream house.",
    tags: ["React", "Express", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: dreamHouse,
  },
  {
    title: "Write-In-Medium",
    description:
      "A tech blog website for developer community. where people can intracts with other writers/blogs they can share any info on this site.",
    tags: ["React", "TypeScript", "Zod", "Tailwind", "Redux"],
    imageUrl: wmBlog,
  },
  {
    title: "It's Me",
    description:
      "A portfoli web app where u can follow/hire/contact me. its design with bunch of cool animation with proper details",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: portfolio,
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