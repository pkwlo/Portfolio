import './App.css'
import About from './sections/About'
import Projects from './sections/Projects'
import NavTop from './sections/NavTop'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

function App() {
  return (
    /* The Wrapper: Handles the full-width background and height */
    <div className='bg-space-pattern bg-cover bg-fixed bg-bottom min-h-screen w-full '>
      <main className='flex flex-col gap-5 p-6 mx-auto max-w-5xl'>
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
