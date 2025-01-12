"use client"; // Must be the first line

import React from "react";
import { motion } from "framer-motion";
import SkillCards from "./SkillCards";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { SiCplusplus, SiFirebase, SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IconType } from "react-icons";

const iconComponents: Record<string, IconType> = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: FaJs,
  react: FaReact,
  nodejs: FaNodeJs,
  mysql: GrMysql,
  java: FaJava,
  cplusplus: SiCplusplus,
  firebase: SiFirebase,
  typeScript: SiTypescript,
};

interface SkillTab {
  id: number;
  name: string;
  icon: string;
}

const skillsData: SkillTab[] = [
  { id: 1, name: "HTML", icon: "html5" },
  { id: 2, name: "CSS", icon: "css3" },
  { id: 3, name: "JavaScript", icon: "javascript" },
  { id: 4, name: "React", icon: "react" },
  { id: 5, name: "Node.js", icon: "nodejs" },
  { id: 6, name: "MySQL", icon: "mysql" },
  { id: 7, name: "Java", icon: "java" },
  { id: 8, name: "C++", icon: "cplusplus" },
  { id: 9, name: "Firebase", icon: "firebase" },
];

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection: React.FC = () => {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div id="skills" className="px-8 py-16 pt-24">
      <div className="flex mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold"> My Skills ⚙️</h2>
        </motion.div>
      </div>

      <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skillsData.map((skill, index) => (
          <motion.li
            key={skill.id}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <SkillCards name={skill.name} icon={iconComponents[skill.icon]} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;
