import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'


const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Dev Blog', href: '/blog' },
]

export default function NavTop() {
  const location = useLocation()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if we are already on the home page and clicking a hash link
    if (location.pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Optional: Update the URL without refreshing
        window.history.pushState(null, '', href);
      }
    }
    // If we are on /blog and click /#about, the default <Link> behavior 
    // will take us to the home page, which is correct.
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#2c1810] backdrop-blur-md bg-[#2c1810]"
    >
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 py-6 px-6 md:px-8">
        <Link to="/" className="text-xl font-semibold tracking-tight text-[#d4b896] hover:text-[#e6beae] transition-colors">
          PL
        </Link>
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              // ADD THIS LINE BELOW:
              onClick={(e) => handleClick(e, item.href)} 
              className={`text-sm font-medium transition-colors duration-200 ${
                item.href === '/blog' && location.pathname.startsWith('/blog')
                  ? 'text-[#e6beae]'
                  : 'text-[#d4b896] hover:text-[#e6beae]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
