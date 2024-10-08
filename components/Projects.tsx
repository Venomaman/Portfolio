"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
const {ref} = useSectionInView("Projects", 0.3);
  return (
    <section ref={ref} id="projects" className="scroll-mt-32 mb-28">
      <SectionHeading>My Projects..</SectionHeading>
      <div>
        {projectsData.map((projects, index) => (
          <React.Fragment key={index}>
            <Project {...projects} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}


