interface Project {
  title: string;
  description: string;
  tags: string[];
  site?: string;
  github?: string;
  event?: string;
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
  {
    title: "Find My Force",
    description: "Team N Squared's submission to Red Team Hack's Find My Force Hackathon 2026 where we won third place.",
    tags: ["Python", "React", "TypeScript", "Machine Learning"],
    github: "https://github.com/pkwlo/find-my-force",
    event: "https://redteamhack.ca/events/vancouver-ubc",
  },
];