import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

interface NavTopProps {
  theme: 'dark' | 'light'
  onThemeToggle: () => void
}

export default function NavTop({ theme, onThemeToggle }: NavTopProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] backdrop-blur-md bg-[var(--color-bg)]/80"
    >
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 py-6 px-6 md:px-8">
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
        <button
          type="button"
          onClick={onThemeToggle}
          className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-muted)] transition-colors"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </button>
        </div>
      </div>
    </motion.nav>
  )
}
