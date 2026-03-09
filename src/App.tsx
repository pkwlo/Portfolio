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
      <NavTop />
      <a
        href={`#${nextSection}`}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 text-[#ECF8F8]/90 hover:text-[#EEE4E1] transition-colors"
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
