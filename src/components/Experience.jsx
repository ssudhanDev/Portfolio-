import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeader from './SectionHeader'
import './Experience.css'

const points = [
  'Developed AI-powered helpdesk solutions using LangChain, LangGraph, AWS, and Vector Databases.',
  'Integrated enterprise ticketing systems including Freshdesk and Zoho Desk.',
  'Built RAG pipelines using Qdrant and FAISS for context-aware AI responses.',
  'Reduced average support response time from 15–20 minutes to under 40 seconds.',
  'Designed scalable serverless architectures using AWS Lambda and API Gateway.',
]
const tech = ['LangChain','LangGraph','AWS','Qdrant','FastAPI','Python']

export default function Experience() {
  const ref = useRef()
  const inView = useInView(ref, { once:true, margin:'-80px' })
  return (
    <section className="experience" id="experience">
      <div className="section-header">
        <span className="section-tag">My Journey</span>
        <h2 className="section-title">Work <span>Experience</span></h2>
      </div>
      <div className="timeline">
        <div className="tline-track" />
        <motion.div ref={ref} className="exp-card"
          initial={{ opacity:0, x:-80, filter:'blur(8px)' }} animate={inView ? {opacity:1,x:0,filter:'blur(0px)'} : {}}
          transition={{ duration:.8, ease:[.4,0,.2,1] }}
          whileHover={{ x: 6 }}>
          <div className="tline-dot" />
          <div className="exp-inner">
            <div className="exp-header">
              <div>
                <h3>AI Developer</h3>
                <p className="company">Supporticon Strategies Pvt. Ltd.</p>
              </div>
              <span className="exp-date">May 2025 – Present</span>
            </div>
            <ul className="exp-points">
              {points.map((p, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}>
                  {p.includes('40 seconds')
                    ? <>Reduced average support response time from 15–20 minutes to under <strong>40 seconds</strong>.</>
                    : p}
                </motion.li>
              ))}
            </ul>
            <div className="tech-row">
              {tech.map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
