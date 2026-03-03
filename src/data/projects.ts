interface Project {
  title: string;
  description: string;
  tags: string[];
  site?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "HSR Relic Planner",
    description: "A full-stack planning tool for Honkai Star Rail.",
    tags: ["React", "TypeScript", "MongoDB"],
    site: "https://hsr-relic-planner.com",
    github: "https://hsr-relic-planner.vercel.app/",
  },
  {
    title: "Equity Website",
    description: "Modernized website for a financial services company.",
    tags: ["PHP", "Laravel"],
    site: "https://www.equitygroup.com.hk/en_gb",
  },
];