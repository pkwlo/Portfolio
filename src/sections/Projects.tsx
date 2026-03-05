import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
    
export default function Projects() {
    return (
        <>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="projects p-6 ">
                <p className="text-5xl font-semibold mb-5 flex justify-center">Projects</p>
                <div className="flex flex-row flex-wrap gap-5 justify-center">
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
            </motion.div>
        </>
    );
}