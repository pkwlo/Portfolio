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
      className="py-16 md:py-24"
    >
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-12">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            tags={project.tags}
            site={project.site}
            github={project.github}
          />
        ))}
      </div>
    </motion.section>
  );
}
