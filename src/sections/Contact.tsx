import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen snap-start snap-always flex flex-col justify-center px-6 md:px-8"
    >
      <div className="mx-auto max-w-4xl w-full">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[#e6beae] p-8 md:p-12 backdrop-blur-sm w-full flex flex-col items-center text-center">
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
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[#eee4e1] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[#ecf8f8] focus:border-[#ecf8f8] transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[#eee4e1] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[#ecf8f8] focus:border-[#ecf8f8] transition-all"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[#eee4e1] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[#ecf8f8] focus:border-[#ecf8f8] transition-all resize-none"
          />
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 rounded-lg font-medium bg-[#b2967d] text-[#ecf8f8] hover:bg-[#9d8369] active:opacity-95 transition-colors"
          >
            Send Message
          </button>
        </form>
        </div>
      </div>
    </motion.section>
  );
}
