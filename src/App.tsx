import { useEffect, useState } from 'react'
import './App.css'
import { ChevronDown, ChevronUp } from 'lucide-react'
import About from './sections/About'
import Projects from './sections/Projects'
import NavTop from './sections/NavTop'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

const SECTIONS = ['about', 'projects', 'skills', 'contact'] as const

function App() {
  const [visibleSection, setVisibleSection] = useState<string>('about')
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null
    return stored ?? 'dark'
  })

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id)
            break
          }
        }
      },
      { threshold: 0.5 }
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const currentIndex = SECTIONS.indexOf(visibleSection as (typeof SECTIONS)[number])
  const nextIndex = (currentIndex + 1) % SECTIONS.length
  const nextSection = SECTIONS[nextIndex]
  const isLastSection = nextIndex === 0

  return (
    <div className="scroll-container bg-gradient-mesh h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
      <NavTop theme={theme} onThemeToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      <a
        href={`#${nextSection}`}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
        aria-label={isLastSection ? 'Scroll to top' : 'Scroll down'}
      >
        <span className="text-xs font-medium">{isLastSection ? 'Back to top' : 'Scroll'}</span>
        {isLastSection ? (
          <ChevronUp className="size-6 animate-bounce" />
        ) : (
          <ChevronDown className="size-6 animate-bounce" />
        )}
      </a>
      <main className="flex flex-col">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
