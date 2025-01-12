"use client";

import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div id="about" className="py-16 gap-8 pt-24 px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=""
      >
        <h2 className="text-4xl md:text-6xl font-bold pb-4">About Me 🛸</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className=""
      >
        <p className="text-lg md:text-xl text-gray-700">
          Hi, I’m Julio Aguero Fernandez, a recent graduate with a B.S. in
          Computer Science from Texas Wesleyan University. I am a striving
          software developer who is always looking to learn new things and take
          on new challenges. I enjoy traveling, reading, and playing video
          games. Welcome to my portfolio, feel free to check out some of my
          projects, or reach out to me.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
