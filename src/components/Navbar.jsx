import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const links = ['Home','About','Skills','Hobbies','Experience','Projects','Achievements','Contact']
const sectionIds = {
  home: 'home',
  about: 'about',
  skills: 'skills',
  hobbies: 'hobbies',
  experience: 'experience',
  projects: 'projects',
  achievements: 'achievements',
  contact: 'contact',
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = Object.values(sectionIds).map(id => document.getElementById(id))
      sections.forEach(s => {
        if (s && window.scrollY >= s.offsetTop - 120) {
          const label = Object.keys(sectionIds).find(key => sectionIds[key] === s.id) || s.id
          setActive(label)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const target = sectionIds[id] || id
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.header
      className={`navbar-header${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .7, ease: [.4,0,.2,1] }}
    >
      <motion.a className="logo" href="#home" onClick={e=>{ e.preventDefault(); scrollTo('home') }}
        whileHover={{ scale: 1.05 }}>
        <span>S</span>udhan
      </motion.a>

      <nav className="nav-links">
        {links.map((l,i) => (
          <motion.button key={l} className={`nav-link${active===l.toLowerCase()?' active':''}`}
            onClick={() => scrollTo(l.toLowerCase())}
            initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }}
            transition={{ delay: .1+i*.07 }}
            whileHover={{ scale:1.05 }}>
            {l}
          </motion.button>
        ))}
      </nav>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        <i className={`bx ${open ? 'bx-x' : 'bx-menu'}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu"
            initial={{ x: 240, opacity:0 }} animate={{ x:0, opacity:1 }} exit={{ x:240, opacity:0 }}
            transition={{ duration:.3 }}>
            {links.map(l => (
              <button key={l} className={`nav-link${active===l.toLowerCase()?' active':''}`}
                onClick={() => scrollTo(l.toLowerCase())}>{l}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
