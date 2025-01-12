"use client";

import React, { JSX, useRef } from "react";
import ProjectCards from "./ProjectCards";
import { animate, motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  image: string;
  projectUrl: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "QuickStop",
    type: "Android Application",
    description:
      "Developed an Expo React Native Android application that allows users to submit and view sales events in their area from other users.",
    image: "/projectpics/qscombinedpic.png",
    projectUrl: "https://cs1.txwes.edu/~jaguero2/seniorproj/",
    technologies: ["Expo", "React Native", "Firebase", "TypeScript"],
  },
  {
    id: 2,
    title: "School Event Submission System",
    type: "Website",
    description:
      "Created a website that allows university students to post events related to various clubs and activities on campus.",
    projectUrl:
      "https://cs1.txwes.edu/~ajgraham/csc4341/term_project/index.html",
    image: "/projectpics/seo.png",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
  },
];

const ProjectsSection: React.FC = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div id="projects" ref={ref} className="grid gap-8 px-8 py-16 pt-24 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold">My Projects 💻</h2>
      </motion.div>

      <ul className="grid gap-8 md:grid-cols-2 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            <ProjectCards
              title={project.title}
              type={project.type}
              description={project.description}
              projectURL={project.projectUrl}
              imgURL={project.image}
              technologies={project.technologies}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
