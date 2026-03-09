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
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#2c1810] backdrop-blur-md bg-[#2c1810]"
    >
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 py-6 px-6 md:px-8">
        <a href="#" className="text-xl font-semibold tracking-tight text-[#d4b896] hover:text-[#e6beae] transition-colors">
          PL
        </a>
        <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-[#d4b896] hover:text-[#e6beae] transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
        </div>
      </div>
    </motion.nav>
  )
}
