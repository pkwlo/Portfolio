interface Writing {
    title: string;
    date: string;
    description: string;
    tags: string[];
    site?: string;
    link?: string;
  }
  
  export const writing: Writing[] = [
    {
      title: "Serverless Backend Architecture Guide",
      date: "Dec 2025",
      description: "A comprehensive architecture and implementation guide for a production serverless backend built with AWS CDK, covering infrastructure-as-code patterns, DynamoDB data modeling, API Gateway configuration, Cognito authentication, and modular feature constructs.",
      tags: ["AWS", "CDK", "Serverless"],
      link: "https://pkwlo.github.io/technical-writing-portfolio/aws-serverless-guide/",
    },
    {
      title: "Unity Character Movement Tutorial",
      date: "Mar 2026",
      description: "A step-by-step tutorial walking developers through implementing a player movement system using Unity's Character Controller, covering input handling, frame-rate-independent motion, jumping mechanics, and camera integration.",
      tags: ["Unity", "C#", "Game Development"],
      link: "https://pkwlo.github.io/technical-writing-portfolio/unity-movement-tutorial/",
    },
  ];