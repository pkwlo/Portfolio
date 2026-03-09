import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-16 md:py-24"
    >
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-8 md:p-12 backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-8">
          Get in Touch
        </h2>
        <form
          action="https://formsubmit.co/d81c8b26f49a62cbbff6df820c531b8c"
          method="POST"
          className="flex flex-col gap-4 max-w-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)] transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)] transition-all"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)] transition-all resize-none"
          />
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 rounded-lg font-medium bg-[var(--color-accent)] text-white hover:opacity-90 active:opacity-95 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
