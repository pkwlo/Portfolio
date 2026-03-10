interface Project {
  title: string;
  date: string;
  description: string;
  tags: string[];
  site?: string;
  github?: string;
  event?: string;
}

export const projects: Project[] = [
  {
    title: "Find My Force",
    date: "Mar 2026",
    description: "Team N Squared's submission to Red Team Hack's Find My Force Hackathon 2026 where we won third place.",
    tags: ["Python", "React", "TypeScript", "Machine Learning"],
    github: "https://github.com/pkwlo/find-my-force",
    event: "https://redteamhack.ca/events/vancouver-ubc",
  },
  {
    title: "Website Revamp",
    date: "Jun - Sept 2025",
    description: "Modernized Equity Group's website with a new frontend design and features, an integrated admin dashboard for self management, and AWS hosting.",
    tags: ["PHP", "Laravel", "SCSS"],
    site: "https://www.equitygroup.com.hk/en_gb",
  },
  {
    title: "iPatrol+",
    date: "May 2025",
    description: "Real time patrol tracking app created for the KOMCPC (Kerrisdale Oakridge Marpole Community Policing Centre) and is currently used by volunteer patrollers accross the lower mainland.",
    tags: ["React", "Expo"],
    site: "https://apps.apple.com/ca/app/ipatrol-plus/id6746059052",
  },
  {
    title: "HSR Relic Planner",
    date: "May 2024 - Sep 2024",
    description: "A full-stack planning tool for the mobile game Honkai Star Rail. My first solo project as a developer with the purpose of learning React while doing something I enjoy.",
    tags: ["React", "TypeScript", "MongoDB"],
    site: "https://hsr-relic-planner.com",
    github: "https://hsr-relic-planner.vercel.app/",
  },
];