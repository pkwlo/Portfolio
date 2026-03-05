import { ExternalLink, Github, type LucideIcon } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  site?: string;
  github?: string;
}

const iconMap: { [key: string]: LucideIcon } = {
  github: Github,
  externalLink: ExternalLink,
};

export default function ProjectCard({ title, description, tags, site, github }: ProjectProps) {
  const links = [];
  if (site) links.push("externalLink");
  if (github) links.push("github");
  console.log(links);

  return (
    <div className="project-card max-w-sm p-6 bg-black/50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">{title}</h5>
      <p className="mb-3 font-normal text-gray-100">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded">
            {tag}
          </span>
        ))} 
      </div>

      <div className="flex gap-4">
        {links.map(link => {
          const IconComponent = iconMap[link];
          return (
            <span key={link} className="text-gray-100 hover:text-gray-500 transition-colors">
              <a href={link === "externalLink" ? site : github} target="_blank" rel="noopener noreferrer">
                {IconComponent && <IconComponent size={20} />}
              </a>
            </span>
          );
        })} 
      </div>
    </div>
  );
}
