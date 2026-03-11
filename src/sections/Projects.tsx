import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
};

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + projects.length) % projects.length);
  };

  const project = projects[index];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen snap-start snap-always flex flex-col justify-center px-6 md:px-8"
    >
      <div className="mx-auto max-w-4xl w-full">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[#e6beae] p-8 md:p-12 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-12">
            Projects
          </h2>

          <div className="flex items-center gap-4">
            <button
              onClick={() => paginate(-1)}
              className="shrink-0 p-2 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[#ecf8f8]/50 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="size-6" />
            </button>

            <div className="flex-1 overflow-hidden relative min-h-[200px]">
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
                  <ProjectCard
                    title={project.title}
                    date={project.date}
                    description={project.description}
                    tags={project.tags}
                    site={project.site}
                    github={project.github}
                    event={project.event}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={() => paginate(1)}
              className="shrink-0 p-2 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[#ecf8f8]/50 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, i) => (
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
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
