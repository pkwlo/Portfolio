import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-5rem)] snap-start snap-always flex flex-col justify-center pt-6 pb-6 md:pb-16"
    >
      <div className="mx-auto max-w-4xl w-full px-6 md:px-8">
        <p className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-text)] mb-2">
          Hi I'm Patricia.
        </p>
        <p className="text-lg font-medium text-[var(--color-accent)] mb-6">
          Software Developer
        </p>
        <div className="space-y-4 max-w-2xl">
          <p className="text-[var(--color-text-muted)] leading-relaxed">
          I'm a full-stack software developer focused on building scalable, user-centered web applications. I enjoy <span className="text-[var(--color-accent)] font-bold">turning complex ideas into intuitive experiences</span>, working across both frontend and backend systems using technologies like <span className="text-[var(--color-accent)] font-bold">React, TypeScript, Python, Java, and modern cloud tools</span>.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Check out{' '}
            <a 
                href="/PatriciaLoResume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] underline font-bold transition-colors"
            >
                my resume
            </a>{' '}
            or keep scrolling to learn more about me!
        </p>
        </div>
        </div>
    </motion.section>
  );
}
