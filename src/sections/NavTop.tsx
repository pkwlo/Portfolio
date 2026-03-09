import { motion } from 'framer-motion'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function NavTop() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 py-6 mb-4 border-b border-[var(--color-border)] backdrop-blur-md bg-[var(--color-bg)]/80 -mx-6 px-6 md:-mx-8 md:px-8"
    >
      <a href="#" className="text-xl font-semibold tracking-tight text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">
        PL
      </a>
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
