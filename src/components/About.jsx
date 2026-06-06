import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import profileImg from '../assets/profile.png'
import SectionHeader from './SectionHeader'
import './About.css'

const stats = [
  { val: '1+', label: 'Years Experience' },
  { val: '4+', label: 'Projects Built' },
  { val: '40s', label: 'Response Time' },
]
const tags = ['LangChain','LangGraph','AWS','FastAPI','RAG','LLMs','Qdrant']

function FadeIn({ children, delay=0, direction='up' }) {
  const ref = useRef()
  const inView = useInView(ref, { once:true, margin:'-80px' })
  const from = direction==='left' ? {x:-60,opacity:0,filter:'blur(6px)'} : direction==='right' ? {x:60,opacity:0,filter:'blur(6px)'} : {y:50,opacity:0,filter:'blur(6px)'}
  return (
    <motion.div ref={ref} initial={from} animate={inView ? {x:0,y:0,opacity:1,filter:'blur(0px)'} : from}
      transition={{ duration:.75, delay, ease:[.4,0,.2,1] }}>
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section className="about" id="about">
      <SectionHeader tag="Get To Know" title="About" highlight="Me" />
      <div className="about-grid">
        <FadeIn direction="left">
          <div className="about-img-wrap">
            <motion.div className="about-img-box"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}>
              <motion.img src={profileImg} alt="Shanmuga Sudhan K"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
              <div className="img-overlay" />
            </motion.div>
            <div className="stats-row">
              {stats.map(s => (
                <motion.div key={s.val} className="stat-card"
                  whileHover={{ y:-5, boxShadow:'0 12px 40px rgba(232,184,75,.18)' }}>
                  <h3>{s.val}</h3>
                  <p>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn direction="right" delay={0.15}>
          <div className="about-text">
            <h3>AI Engineer &amp; <span></span></h3>
            <p>I'm <strong>Shanmuga Sudhan K</strong>, an AI Engineer specializing in Agentic AI, Large Language Models,
              Retrieval-Augmented Generation (RAG), and scalable cloud-based solutions.</p>
            <p>Currently, I build AI-driven enterprise applications that integrate with platforms such as
              Freshdesk and Zoho Desk — helping organizations automate support operations and dramatically
              improve response efficiency.</p>
            <p>My expertise spans AI workflow orchestration, vector databases, backend development, cloud
              deployment, and intelligent automation systems. I transform complex business challenges into
              practical AI solutions that deliver measurable impact.</p>
            <div className="tag-row">
              {tags.map(t => (
                <motion.span key={t} whileHover={{ y:-3, boxShadow:'0 4px 16px rgba(0,229,255,.18)' }}>{t}</motion.span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
