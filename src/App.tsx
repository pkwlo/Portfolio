import './App.css'
import About from './sections/About'
import Projects from './sections/Projects'
import NavTop from './sections/NavTop'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="bg-gradient-mesh min-h-screen w-full">
      <main className="flex flex-col mx-auto max-w-4xl px-6 py-8 md:px-8 md:py-12">
        <NavTop />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
