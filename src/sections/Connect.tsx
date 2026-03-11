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
      className="min-h-screen snap-start snap-always flex flex-col justify-center px-6 md:px-8 pt-6 pb-6 md:pb-16"
    >
      <div className="mx-auto max-w-4xl w-full">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[#e6beae] p-5 sm:p-8 md:p-12 backdrop-blur-sm w-full flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-8">
          Get in Touch
        </h2>
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
            className="w-full px-4 py-3 rounded-lg bg-[#fff4f0] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[#ecf8f8] focus:border-[#ecf8f8] transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-[#fff4f0] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[#ecf8f8] focus:border-[#ecf8f8] transition-all"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-[#fff4f0] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[#ecf8f8] focus:border-[#ecf8f8] transition-all resize-none"
          />
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 rounded-lg font-medium bg-[#b2967d] text-[#ecf8f8] hover:bg-[#9d8369] active:opacity-95 transition-colors"
          >
            Send Message
          </button>
          <div className="flex items-center justify-center gap-6 pt-8 mt-4]">
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
      </div>
    </motion.section>
  );
}
