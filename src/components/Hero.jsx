import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'
import profileImg from '../assets/profile.png'
import ScrollMouse from './ScrollMouse'
import './Hero.css'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const slideUp = {
  hidden: { opacity: 0, y: 50, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
}
const slideLeft = {
  hidden: { opacity: 0, x: -70 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
}
const slideRight = {
  hidden: { opacity: 0, x: 70, scale: 0.9 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] } },
}


export default function Hero() {
  const el = useRef()
  useEffect(() => {
    const t = new Typed(el.current, {
      strings: ['AI Engineer', 'Python Backend Developer'],
      typeSpeed: 55, backSpeed: 35, backDelay: 1500, loop: true, showCursor: false,
    })
    return () => t.destroy()
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-bg-orb hero-orb-1" />
      <div className="hero-bg-orb hero-orb-2" />

      <motion.div className="hero-content" variants={stagger} initial="hidden" animate="show">
        <motion.div className="status-pill" variants={slideLeft}
          animate={{ boxShadow: ['0 0 0 rgba(232,184,75,0)', '0 0 20px rgba(232,184,75,0.25)', '0 0 0 rgba(232,184,75,0)'] }}
          transition={{ duration: 2.5, repeat: Infinity }}>
          <motion.span className="status-dot"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }} />
          AI_AGENT: ONLINE
        </motion.div>

        <motion.p className="greeting" variants={slideLeft}>Hello, I'm</motion.p>
        <motion.h1 className="hero-name shimmer-text" variants={slideLeft}>
          Shanmuga Sudhan K
        </motion.h1>
        <motion.h3 className="hero-role" variants={slideLeft}>
          I'm a <span ref={el} className="typed-slot" /><span className="cursor-blink">|</span>
        </motion.h3>
        <motion.p className="hero-intro" variants={slideUp}>
          I build AI-powered applications that automate business workflows using Large Language Models,
          Agentic AI systems, RAG pipelines, and cloud-native architectures.
        </motion.p>

        <motion.div className="hero-social" variants={slideUp}>
          {[
            { icon: 'bxl-linkedin', href: 'https://linkedin.com/in/shanmuga-sudhan-k' },
            { icon: 'bxl-github', href: 'https://github.com' },
            { icon: 'bx-envelope', href: 'mailto:ssudhan051@gmail.com' },
            { icon: 'bx-phone', href: 'tel:+919597451201' },
          ].map((s, i) => (
            <motion.a
              key={s.icon}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.08, type: 'spring', stiffness: 260 }}
              whileHover={{ scale: 1.18, y: -5, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className={`bx ${s.icon}`} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="hero-btns" variants={slideUp}>
          <motion.a href="#" className="btn btn-gold" whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }}>
            <i className="bx bx-download" /> Download Resume
          </motion.a>
          <motion.a
            href="#projects"
            className="btn btn-outline"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.96 }}
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            <i className="bx bx-code-alt" /> View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-outline"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.96 }}
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            <i className="bx bx-message-dots" /> Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div className="hero-img-wrap" variants={slideRight} initial="hidden" animate="show">
        <motion.div
          className="ai-core"
          animate={{ scale: [1, 1.06, 1], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="orbit-ring" />
        <motion.div
          className="glow-ring"
          animate={{ boxShadow: ['0 0 40px rgba(0,229,255,0.2)', '0 0 80px rgba(232,184,75,0.35)', '0 0 40px rgba(0,229,255,0.2)'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <motion.img
            src={profileImg}
            alt="Shanmuga Sudhan K"
            className="profile-img"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        </motion.div>
      </motion.div>

      <ScrollMouse />
    </section>
  )
}
