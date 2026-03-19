import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { IoLogoCss3 } from "react-icons/io5";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiPhp,
  // SiKotlin,
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
  // SiJira,
  // SiLinux,
} from "react-icons/si";
import { FaAws, 
  FaJava, 
  // FaWindows, 
  FaDatabase, 
  FaBolt } from "react-icons/fa";

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
      // { name: "Kotlin", icon: SiKotlin },
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
    category: "Tools & Technologies",
    items: [
      // { name: "Windows", icon: FaWindows },
      // { name: "Linux", icon: SiLinux },
      { name: "Docker", icon: SiDocker },
      { name: "Postman", icon: SiPostman },
      { name: "Git", icon: SiGit },
      { name: "Figma", icon: SiFigma },
      // { name: "Jira", icon: SiJira },
    ],
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-5rem)] snap-start snap-always flex flex-col justify-center pt-6 pb-6 md:pb-16"
    >
      <div className="mx-auto max-w-4xl w-full px-6 md:px-8">
        <p className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-text)] mb-2">
          About Me
        </p>
        <div className="space-y-4 max-w-2xl mt-8">
          <p className="text-[var(--color-text-muted)] leading-relaxed">
          I've been working as a full-stack software developer for <span className="text-[var(--color-accent)] font-bold">over 2 years now</span>.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
          I'm <span className="text-[var(--color-accent)] font-bold">naturally curious and love learning through building</span>, whether that's developing production web apps, experimenting with new technologies, or designing interactive systems. My current personal project, <span className="text-[var(--color-accent)] font-bold">Apothecary Understudy</span>, explores game development and systems design.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
          Outside of programming, I enjoy <span className="text-[var(--color-accent)] font-bold">video games, digital art, and exploring creative hobbies</span> that continually influence how I approach <span className="text-[var(--color-accent)] font-bold">design and problem-solving</span>.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {skillCategories.slice(0, 2).map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-sm font-semibold tracking-tight text-[var(--color-text-muted)] mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 size-16 sm:size-20 rounded-lg bg-[var(--color-navbar-bg)] text-[var(--color-navbar-text)]"
                  >
                    {Icon && <Icon className="size-5 sm:size-7 shrink-0" />}
                    <span className="text-[9px] sm:text-[10px] font-medium leading-tight text-center px-0.5 sm:px-1 text-[var(--color-navbar-text)]">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-2">
            {skillCategories.slice(2).map(({ category, items }) => (
              <div key={category}>
                <h3 className="text-sm font-semibold tracking-tight text-[var(--color-text-muted)] mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 size-16 sm:size-20 rounded-lg bg-[var(--color-navbar-bg)] text-[var(--color-navbar-text)]"
                    >
                      {Icon && <Icon className="size-5 sm:size-7 shrink-0" />}
                      <span className="text-[9px] sm:text-[10px] font-medium leading-tight text-center px-0.5 sm:px-1 text-[var(--color-navbar-text)]">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
