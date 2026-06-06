import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Skills       from './components/Skills'
import Experience   from './components/Experience'
import Projects     from './components/Projects'
import Achievements from './components/Achievements'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import Particles       from './components/Particles'
import ScrollProgress  from './components/ScrollProgress'
import './index.css'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Particles />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </>
  )
}
