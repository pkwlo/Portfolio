import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Python",
  "Django",
  "Git",
  "Docker",
  "AWS",
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-16 md:py-24"
    >
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-12">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.02 }}
            className="px-4 py-2 text-sm font-medium rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/50 text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-muted)] transition-all duration-200"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}
