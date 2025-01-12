import { Roboto } from "next/font/google";
import * as motion from "motion/react-client";

const roboto = Roboto({ weight: "700" });

export default function IntroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        type: "spring",
        bounce: 0.5,
      }}
    >
      <div className={roboto.className}>
        <h1 className="text-6xl lg:text-8xl font-extrabold">Hey! I'm</h1>
        <h1 className="text-6xl lg:text-8xl font-extrabold">Julio Aguero</h1>
        <p className="text-xl">Software Developer</p>
      </div>
    </motion.div>
  );
}