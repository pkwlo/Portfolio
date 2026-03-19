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
    description: "Team N Squared's submission to Red Team Hack's Find My Force Hackathon 2026 where we won third place. Uses a trained machine learning model to classify RF signals to determine if they are friendly, hostile, or civilian devices.",
    tags: ["Python", "React", "TypeScript", "Machine Learning"],
    github: "https://github.com/pkwlo/find-my-force",
    event: "https://redteamhack.ca/events/vancouver-ubc",
  },
  {
    title: "CrocsList",
    date: "Oct 2025 - Dec 2025",
    description: "An online marketplace web application for buying and selling used clothing items and hosted on AWS via Amplify. Features include a user authentication system, a product listing system, a shopping cart, and a payment system.",
    tags: ["Python", "React", "TypeScript", "AWS", "API Gateway"],
    github: "https://github.com/pkwlo/crocsList",
  },
  {
    title: "Website Revamp",
    date: "Jun - Sept 2025",
    description: "Modernized Equity Group's website with a new frontend design and features, an integrated admin dashboard for self management, and AWS hosting.",
    tags: ["PHP", "Laravel","Blade", "SCSS"],
    site: "https://www.equitygroup.com.hk/en_gb",
    image: "/images/projects/equitysite2.png",
    imageAlt: "Equity Group Website Revamp",
  },
  {
    title: "iPatrol+",
    date: "May 2025",
    description: "Real time iOS patrolling app created for the KOMCPC (Kerrisdale Oakridge Marpole Community Policing Centre) to use on their patrols. It is currently used by volunteer patrollers accross the lower mainland.",
    tags: ["React Native", "Expo", "iOS"],
    site: "https://apps.apple.com/ca/app/ipatrol-plus/id6746059052",
  },
  {
    title: "MH Wilds Handbook",
    date: "May 2025",
    description: "An Android app that serves as a hunting handbook for Monster Hunter Wilds. It lists information about monsters, their habitats, and allows hunters to log notes and crowns collected. It incorporates the Steam API to show the latest news and updates for the game.",
    tags: ["Android", "Kotlin", "Android Studio", "API"],
    github: "https://github.com/pkwlo/MH-Wilds-Handbook",
  },
  {
    title: "HSR Relic Planner",
    date: "May 2024 - Sep 2024",
    description: "A full-stack planning tool for the mobile game Honkai Star Rail. My first solo project as a developer with the purpose of learning React while doing something I enjoy.",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    site: "https://hsr-relic-planner.vercel.app/",
    github: "https://github.com/pkwlo/hsr-relic-planner",
    image: "/images/projects/hsr.png",
    imageAlt: "HSR Relic Planner",
  },
];