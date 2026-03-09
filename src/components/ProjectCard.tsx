import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  site?: string;
  github?: string;
}

export default function ProjectCard({ title, description, tags, site, github }: ProjectProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-surface-elevated)]/50"
    >
      <h3 className="mb-3 text-xl font-semibold tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium rounded-md bg-[var(--color-accent-muted)] text-[var(--color-accent)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {site && (
          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="View live site"
          >
            <ExternalLink size={16} />
            <span>Live</span>
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="View on GitHub"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}
