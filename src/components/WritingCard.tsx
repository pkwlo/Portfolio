import { ExternalLink } from 'lucide-react';

interface WritingProps {
  title: string;
  date: string;
  description: string;
  tags: string[];
  site?: string;
  link?: string;
}

export default function WritingCard({ title, date, description, tags, site, link }: WritingProps) {
  return (
    <article className="overflow-hidden flex flex-col justify-center h-[300px]">
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
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:underline underline-offset-2 px-2 py-1 -mx-2 -my-1 rounded transition-colors"
            aria-label="Read article"
          >
            <ExternalLink size={16} />
            <span>Read</span>
          </a>
        )}
        {site && (
          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:underline underline-offset-2 px-2 py-1 -mx-2 -my-1 rounded transition-colors"
            aria-label="View live site"
          >
            <ExternalLink size={16} />
            <span>Live</span>
          </a>
        )}
      </div>
    </article>
  );
}
