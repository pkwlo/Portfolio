interface Project {
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
    title: "CrocsList",
    date: "Oct 2025 - Dec 2025",
    description: "An online marketplace web application for buying and selling used clothing items.",
    tags: ["Python", "React", "TypeScript", "JavaScript", "HTML", "CSS",  "AWS"],
    github: "https://github.com/pkwlo/crocsList",
  },
  {
    title: "Website Revamp",
    date: "Jun - Sept 2025",
    description: "Modernized Equity Group's website with a new frontend design and features, an integrated admin dashboard for self management, and AWS hosting.",
    tags: ["PHP", "Laravel","Blade", "SCSS"],
    site: "https://www.equitygroup.com.hk/en_gb",
    image: "./src/assets/images/projects/equitysite2.png",
    imageAlt: "Equity Group Website Revamp",
  },
  {
    title: "iPatrol+",
    date: "May 2025",
    description: "Real time patrol tracking app created for the KOMCPC (Kerrisdale Oakridge Marpole Community Policing Centre) and is currently used by volunteer patrollers accross the lower mainland.",
    tags: ["React Native", "Expo"],
    site: "https://apps.apple.com/ca/app/ipatrol-plus/id6746059052",
  },
  {
    title: "MH Wilds Handbook",
    date: "May 2025",
    description: "A hunting handbook to the monsters in Monster Hunter Wilds to let you quickly find their locations and log any crowns you collect. Also incorporates steam API to show the latest news and updates for the game.",
    tags: ["Kotlin", "Android Studio"],
    github: "https://github.com/pkwlo/MH-Wilds-Handbook",
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