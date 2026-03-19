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
    <article className={`h-[600px] rounded-xl overflow-hidden flex gap-0 ${image ? "flex-col sm:flex-row" : "flex-col justify-center p-6"}`}>
      <div className={image ? "flex-1 min-w-0 p-6" : ""}>
      {image && (
        <div className="flex-1 min-w-0">
          <img src={image} alt={imageAlt} className="h-[400px] w-full object-cover object-top mb-6 rounded-xl" />
        </div>
      )}
        <h3 className="mb-3 text-xl font-semibold tracking-tight text-[var(--color-accent)]">
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
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-[var(--color-navbar-bg)] text-[var(--color-navbar-text)]"
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
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-highlight)] hover:underline underline-offset-2 px-2 py-1 -mx-2 -my-1 rounded transition-colors"
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
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-highlight)] hover:underline underline-offset-2 px-2 py-1 -mx-2 -my-1 rounded transition-colors"
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
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-highlight)] hover:underline underline-offset-2 px-2 py-1 -mx-2 -my-1 rounded transition-colors"
              aria-label="View event"
            >
              <ExternalLink size={16} />
              <span>Event</span>
            </a>
          )}
        </div>
      </div>
      {/* {image && (
        <div className="flex-1 min-w-0">
          <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
        </div>
      )} */}
    </article>
  );
}
