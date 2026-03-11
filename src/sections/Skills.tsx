import { useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IoLogoCss3 } from "react-icons/io5";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiPhp,
  SiKotlin,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiNestjs,
  SiLaravel,
  SiTailwindcss,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiDocker,
  SiPostman,
  SiGit,
  SiFigma,
  SiJira,
  SiLinux,
} from "react-icons/si";
import { FaAws, FaJava, FaWindows, FaDatabase, FaBolt } from "react-icons/fa";

type Skill = {
  name: string;
  icon?: ComponentType<{ className?: string }>;
};

const skillCategories: { category: string; items: Skill[] }[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "SQL", icon: FaDatabase },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: IoLogoCss3 },
      { name: "PHP", icon: SiPhp },
      { name: "Kotlin", icon: SiKotlin },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Nest.js", icon: SiNestjs },
      { name: "Laravel", icon: SiLaravel },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "jQuery", icon: SiJquery },
      { name: "AJAX", icon: FaBolt },
    ],
  },
  {
    category: "Databases & Cloud Services",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
      { name: "AWS", icon: FaAws },
    ],
  },
  {
    category: "Systems & DevOps",
    items: [
      { name: "Windows", icon: FaWindows },
      { name: "Linux", icon: SiLinux },
      { name: "Docker", icon: SiDocker },
      { name: "Postman", icon: SiPostman },
      { name: "Git", icon: SiGit },
      { name: "Figma", icon: SiFigma },
      { name: "Jira", icon: SiJira },
    ],
  },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
};

export default function Skills() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + skillCategories.length) % skillCategories.length);
  };

  const { category, items } = skillCategories[index];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen snap-start snap-always flex flex-col justify-center px-6 md:px-8 pt-6 pb-6 md:pb-16"
    >
      <div className="mx-auto max-w-4xl w-full">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[#e6beae] p-5 sm:p-8 md:p-12 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-8 md:mb-12">
            Skills
          </h2>

          <div className="flex items-center gap-1 sm:gap-3 min-h-[200px] sm:min-h-[250px]">
            <button
              onClick={() => paginate(-1)}
              className="shrink-0 p-2 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[#ecf8f8]/50 transition-colors"
              aria-label="Previous category"
            >
              <ChevronLeft className="size-5 sm:size-7" />
            </button>

            <div className="flex-1 min-w-0 overflow-hidden relative min-h-[200px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--color-text)] mb-5 text-center">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                    {items.map(({ name, icon: Icon }) => (
                      <div
                        key={name}
                        className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 size-16 sm:size-20 rounded-lg bg-[#fff4f0] text-[var(--color-text-muted)]"
                      >
                        {Icon && <Icon className="size-5 sm:size-7 shrink-0" />}
                        <span className="text-[9px] sm:text-[10px] font-medium leading-tight text-center px-0.5 sm:px-1">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={() => paginate(1)}
              className="shrink-0 p-2 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[#ecf8f8]/50 transition-colors"
              aria-label="Next category"
            >
              <ChevronRight className="size-5 sm:size-7" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {skillCategories.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`size-2.5 rounded-full transition-colors ${
                  i === index
                    ? "bg-[var(--color-text)]"
                    : "bg-[var(--color-text-muted)]/40 hover:bg-[var(--color-text-muted)]"
                }`}
                aria-label={`Go to category ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
