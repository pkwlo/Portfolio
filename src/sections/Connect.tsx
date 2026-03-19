import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import { socialLinks } from "../data/links";

const iconMap = { LinkedIn: Linkedin, GitHub: Github, Email: Mail };

export default function Connect() {
  return (
    <motion.section
      id="connect"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-5rem)] snap-start snap-always flex flex-col justify-center pt-6 pb-6 md:pb-16"
    >
      <div className="mx-auto max-w-4xl w-full px-6 md:px-8 flex flex-col items-center">
        <p className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-text)] mb-6">
          Get in Touch
        </p>
        <form
          action="https://formsubmit.co/d81c8b26f49a62cbbff6df820c531b8c"
          method="POST"
          className="flex flex-col gap-4 max-w-md w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all resize-none"
          />
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 rounded-lg font-medium bg-[var(--color-navbar-bg)] text-[var(--color-navbar-text)] hover:bg-[var(--color-accent-hover)] active:opacity-95 transition-colors"
          >
            Send Message
          </button>
          <div className="flex items-center justify-center gap-6 pt-8 mt-4">
            {socialLinks.map(({ href, label }) => {
              const Icon = iconMap[label as keyof typeof iconMap];
              return (
              <a
                key={label}
                href={href}
                {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                aria-label={label}
              >
                <Icon className="size-6" />
              </a>
            );
            })}
          </div>
        </form>
      </div>
    </motion.section>
  );
}
