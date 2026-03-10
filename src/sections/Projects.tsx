import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
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
          <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            date={project.date}
            description={project.description}
            tags={project.tags}
            site={project.site}
            github={project.github}
            event={project.event}
          />
        ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
