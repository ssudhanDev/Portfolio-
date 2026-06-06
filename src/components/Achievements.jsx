import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeader from './SectionHeader'
import './Achievements.css'

const achievements = [
  {
    icon: '🏆',
    title: 'UiPath RPA Hackathon',
    badge: '2nd Prize',
    badgeType: 'gold',
    desc: 'Developed intelligent automation bots for spam detection and automated certificate generation using UiPath RPA technologies — competing against top developers nationally.',
    tags: ['UiPath', 'RPA', 'Automation'],
  },
  {
    icon: '💰',
    title: 'AI Education Copilot',
    badge: 'Cash Prize Winner',
    badgeType: 'cash',
    desc: 'Built an intelligent educational assistant with RAG, bilingual Tamil & English support, and automated question generation — recognized with a cash prize for innovation and impact.',
    tags: ['RAG', 'LangChain', 'Education', 'AI'],
  },
]

function AchCard({ ach, i }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      className="ach-card"
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.75, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8, scale: 1.01, boxShadow: '0 24px 70px rgba(232,184,75,0.16)' }}
    >
      <motion.div
        className="ach-icon"
        animate={{ rotate: [0, -6, 6, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
      >
        {ach.icon}
      </motion.div>
      <div className="ach-body">
        <h3>{ach.title}</h3>
        <span className={`ach-badge ${ach.badgeType}`}>{ach.badge}</span>
        <p>{ach.desc}</p>
        <div className="ach-tags">
          {ach.tags.map(t => (
            <motion.span key={t} whileHover={{ y: -2, scale: 1.05 }}>{t}</motion.span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <SectionHeader tag="Recognition" title="My" highlight="Achievements" />
      <div className="ach-grid">
        {achievements.map((a, i) => (
          <AchCard key={a.title} ach={a} i={i} />
        ))}
      </div>
    </section>
  )
}
