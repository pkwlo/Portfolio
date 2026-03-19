import { useState } from "react";
import WritingCard from "../components/WritingCard";
import { motion, AnimatePresence } from "framer-motion";
import { writing } from "../data/writing";
import { ChevronLeft, ChevronRight } from "lucide-react";

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
};

export default function Writing() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + writing.length) % writing.length);
  };

  const item = writing[index];

  return (
    <motion.section
      id="technical-writing"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-5rem)] snap-start snap-always flex flex-col justify-center pt-6 pb-6 md:pb-16"
    >
      <div className="mx-auto max-w-4xl w-full px-6 md:px-8">
          <p className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-text)] mb-2">
            Technical Writing
          </p>

          <div className="relative">
            <button
              onClick={() => paginate(-1)}
              className="absolute -left-10 sm:-left-12 top-1/2 -translate-y-1/2 p-2 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[#ecf8f8]/50 transition-colors"
              aria-label="Previous piece"
            >
              <ChevronLeft className="size-5 sm:size-6" />
            </button>

            <div className="overflow-hidden relative min-h-[180px] sm:min-h-[200px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <WritingCard
                    title={item.title}
                    date={item.date}
                    description={item.description}
                    tags={item.tags}
                    site={item.site}
                    link={item.link}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={() => paginate(1)}
              className="absolute -right-10 sm:-right-12 top-1/2 -translate-y-1/2 p-2 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[#ecf8f8]/50 transition-colors"
              aria-label="Next piece"
            >
              <ChevronRight className="size-5 sm:size-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {writing.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`size-2.5 rounded-full transition-colors ${
                  i === index
                    ? "bg-[var(--color-text)]"
                    : "bg-[var(--color-text-muted)]/40 hover:bg-[var(--color-text-muted)]"
                }`}
                aria-label={`Go to piece ${i + 1}`}
              />
            ))}
          </div>
        </div>
    </motion.section>
  );
}
