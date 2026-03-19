import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Connect', href: '/#connect' },
  { label: 'Dev Blog', href: '/blog' },
]

export default function NavTop() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false)
    if (location.pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  }

  const linkClass = (href: string) =>
    `text-md font-medium transition-colors duration-200 ${
      href === '/blog' && location.pathname.startsWith('/blog')
        ? 'text-[var(--color-navbar-text)]'
        : 'text-[var(--color-navbar-text)] hover:text-[var(--color-navbar-text-hover)]'
    }`

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--color-navbar-bg)]"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-6 md:py-6 md:px-8">
        <Link
          to='/'
          onClick={(e) => {
            setMenuOpen(false);
            if (location.pathname === '/') {
              e.preventDefault();
              const container = document.querySelector('.scroll-container');
              container?.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.replaceState(null, '', '/');
            }
          }}
          className="text-xl font-semibold tracking-tight text-[var(--color-navbar-text)] hover:text-[var(--color-navbar-text-hover)] transition-colors"
        >
          Patricia's Portfolio
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={linkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1 text-[#d4b896] hover:text-[#e6beae] transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-[#d4b896]/20"
          >
            <div className="flex flex-col gap-4 px-6 py-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={linkClass(item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
