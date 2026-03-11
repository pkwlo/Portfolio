import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  date: string;
  description: string;
  tags: string[];
  site?: string;
  github?: string;
  event?: string;
  image?: string;
  imageAlt?: string;
}

export default function ProjectCard({ title, date, description, tags, site, github, event, image, imageAlt }: ProjectProps) {
  return (
    <article className={`rounded-xl bg-[#fff4f0] overflow-hidden flex gap-0 ${image ? "flex-col sm:flex-row" : "p-6"}`}>
      <div className={image ? "flex-1 min-w-0 p-6" : ""}>
        <h3 className="mb-3 text-xl font-semibold tracking-tight text-[var(--color-text)]">
          {title}
        </h3>
        <p className="mb-1 text-sm text-[var(--color-text-muted)] italic">
          {date}
        </p>
        <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#ecf8f8] text-[var(--color-text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[#ecf8f8] hover:underline underline-offset-2 px-2 py-1 -mx-2 -my-1 rounded transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {site && (
            <a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[#ecf8f8] hover:underline underline-offset-2 px-2 py-1 -mx-2 -my-1 rounded transition-colors"
              aria-label="View live site"
            >
              <ExternalLink size={16} />
              <span>Live</span>
            </a>
          )}
          {event && (
            <a
              href={event}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[#ecf8f8] hover:underline underline-offset-2 px-2 py-1 -mx-2 -my-1 rounded transition-colors"
              aria-label="View event"
            >
              <ExternalLink size={16} />
              <span>Event</span>
            </a>
          )}
        </div>
      </div>
      {image && (
        <div className="flex-1 min-w-0">
          <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
        </div>
      )}
    </article>
  );
}
