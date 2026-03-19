import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Connect from "../sections/Connect";
import Hero from "../sections/Hero";
import Writing from "../sections/Writing";
const SECTIONS = ["hero", "about", "projects", "connect"] as const;

export default function Home() {
  const [visibleSection, setVisibleSection] = useState<string>("hero");

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && SECTIONS.includes(hash as (typeof SECTIONS)[number])) {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
            break;
          }
        }
      },
      { threshold: 0.3 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const currentIndex = SECTIONS.indexOf(visibleSection as (typeof SECTIONS)[number]);
  const nextIndex = (currentIndex + 1) % SECTIONS.length;
  const nextSection = SECTIONS[nextIndex];
  const isLastSection = nextIndex === 0;

  return (
    <div className="scroll-container bg-gradient-mesh fixed top-14 md:top-20 inset-x-0 bottom-0 overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
      <a
        href={`#${nextSection}`}
        className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex-col items-center gap-1 text-[#ECF8F8]/90 hover:text-[#fff4f0] transition-colors"
        aria-label={isLastSection ? "Scroll to top" : "Scroll down"}
      >
        <span className="text-xs font-medium">
          {isLastSection ? "Back to top" : "Scroll"}
        </span>
        {isLastSection ? (
          <ChevronUp className="size-6 animate-bounce" />
        ) : (
          <ChevronDown className="size-6 animate-bounce" />
        )}
      </a>
      <main className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Writing />
        <Connect />
      </main>
    </div>
  );
}
