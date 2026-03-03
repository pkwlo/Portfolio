import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div 
      // 1. Initial state (Hidden and 20px lower)
      initial={{ opacity: 0, y: 20 }}
      // 2. Animate to this state when it enters the screen
      whileInView={{ opacity: 1, y: 0 }}
      // 3. Settings for the scroll trigger
      viewport={{ once: false, amount: 0.3 }}
      // 4. How the animation feels (duration and smoothing)
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="about p-6 flex flex-col text-center bg-black/40 rounded-lg shadow-md"
    >
        <p className="text-5xl font-semibold mb-5">PATRICIA</p>
        <p className="text-2xl font-semibold">Software Developer</p>
        <p className="mt-4 w-3/4 ml-auto mr-auto">
            Hi! I'm a software developer new grad with a passion for creating efficient and scalable applications. I enjoy working on projects that challenge me to learn new technologies and improve my skills.
        </p>
        <p className="mt-4 w-3/4 ml-auto mr-auto">Before becoming a software developer, I worked in health care for over 10 years. I became interested in dev work as a hobby through my passion for gaming and decided to pursue it professionally.</p>
    </motion.div>
  );
}