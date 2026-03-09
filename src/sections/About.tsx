import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen snap-start snap-always flex flex-col justify-center px-6 md:px-8"
    >
      <div className="mx-auto max-w-4xl w-full">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[#e6beae] p-8 md:p-12 backdrop-blur-sm">
        <p className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-text)] mb-2">
          Patricia
        </p>
        <p className="text-lg font-medium text-[var(--color-accent)] mb-6">
          Software Developer
        </p>
        <div className="space-y-4 max-w-2xl">
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Hi! I'm a software developer with a passion for creating efficient and scalable applications. I enjoy working on projects that challenge me to learn new technologies and improve my skills.
          </p>
          {/* <p className="text-[var(--color-text-muted)] leading-relaxed">
            Before becoming a software developer, I worked in health care for over 10 years. I became interested in dev work as a hobby through my passion for gaming and decided to pursue it professionally.
          </p> */}
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            When I'm not working on personal projects, I enjoy playing video games, doing digital art, building legos and model kits, and playing guitar. I'm also a big fan of anime and manga and it seems like my list of hobbies is always growing!
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            I'm currently working on a game called Apothecary Understudy, you can see my progress on my <Link to="/blog">dev blog</Link>.
          </p>
        </div>
        </div>
      </div>
    </motion.section>
  );
}
