import * as motion from "motion/react-client";
import Image from "next/image";

export default function ProfilePic() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      <div className="mask mask-circle">
        <Image
          className="mask mask-circle"
          src="/mypicv2.jpg"
          alt="Profile Picture"
          width={500}
          height={500}
        />
      </div>
    </motion.div>
  );
}
