import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const skills: { name: string; icon: ComponentType<{ className?: string }> }[] = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL", icon: SiPostgresql },
  { name: "Python", icon: SiPython },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: FaAws },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen snap-start snap-always flex flex-col justify-center px-6 md:px-8"
    >
      <div className="mx-auto max-w-4xl w-full">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[#e6beae] p-8 md:p-12 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-12">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
        {skills.map(({ name, icon: Icon }, idx) => (
          <motion.span
            key={name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.02 }}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md bg-[#eee4e1] text-[var(--color-text-muted)] border border-[var(--color-border)]"
          >
            <Icon className="size-5 shrink-0" />
            {name}
          </motion.span>
        ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
