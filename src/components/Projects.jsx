import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SectionHeader from './SectionHeader'
import './Projects.css'

const projects = [
  {
    icon: 'bx-support', category: 'AI AGENT', status: 'In Production', statusType: 'live',
    title: 'AI Helpdesk Copilot',
    hud: [{ k: 'STATUS', v: 'ONLINE', ok: true }, { k: 'RESPONSE', v: '< 40s', ok: true }, { k: 'RAG', v: 'ACTIVE', ok: true }],
    desc: 'Enterprise-grade AI support assistant that automates ticket analysis, solution recommendation, and workflow execution across Freshdesk and Zoho Desk.',
    features: ['Ticket Auto-Analysis', 'RAG Knowledge Base', '40s Response Time'],
    tech: ['Python', 'LangChain', 'LangGraph', 'AWS Lambda', 'Qdrant', 'FastAPI'],
    featured: true,
  },
  {
    icon: 'bx-microphone', category: 'VOICE AI', status: 'In Production', statusType: 'live',
    title: 'RAG Voice Agent',
    hud: [{ k: 'VOICE', v: 'ON', ok: true }, { k: 'STT', v: 'WHISPER', ok: true }, { k: 'RAG', v: 'LIVE', ok: true }],
    desc: 'Intelligent voice assistant powered by RAG — real-time speech-to-text, context-aware responses, and natural voice interaction for enterprise and education workflows.',
    features: ['Voice & Text', 'RAG Pipeline', 'Real-Time STT'],
    tech: ['Python', 'LangChain', 'Whisper', 'FastAPI', 'RAG', 'AWS'],
    featured: false,
  },
  {
    icon: 'bx-book-open', category: 'RAG SYSTEM', status: 'Published', statusType: 'pub',
    title: 'AI Education Copilot',
    hud: [{ k: 'LANG', v: 'TA + EN', ok: true }, { k: 'MODE', v: 'VOICE', ok: true }, { k: 'RAG', v: 'ON', ok: true }],
    desc: 'Intelligent educational assistant using RAG for syllabus-based Q&A, bilingual Tamil & English support, and automated question bank generation.',
    features: ['Tamil & English', 'Voice & Text', 'Question Bank'],
    tech: ['Python', 'LangChain', 'Vector Search', 'RAG'],
    featured: false,
  },
  {
    icon: 'bx-shield-alt-2', category: 'NLP / CV', status: 'Open Source', statusType: 'oss',
    title: 'Offensive Memes Classifier',
    hud: [{ k: 'OCR', v: 'READY', ok: true }, { k: 'NLP', v: '94.2%', ok: true }, { k: 'API', v: 'LIVE', ok: true }],
    desc: 'NLP-powered content moderation platform that detects offensive meme content using OCR, machine learning, and text classification.',
    features: ['OCR Extraction', 'Content Detection', 'FastAPI Backend'],
    tech: ['Python', 'OCR', 'NLP', 'FastAPI', 'SQL'],
    featured: false,
  },
  {
    icon: 'bx-task', category: 'FULL STACK', status: 'Completed', statusType: 'done',
    title: 'Efficient Task Tracker',
    hud: [{ k: 'AUTH', v: 'SECURE', ok: true }, { k: 'RBAC', v: 'ON', ok: true }, { k: 'DB', v: 'SQL', ok: true }],
    desc: 'Robust task management app with secure authentication, role-based access control, full CRUD operations, and relational database integration.',
    features: ['Role-Based Access', 'CRUD Ops', 'Relational DB'],
    tech: ['Java', 'Hibernate', 'JSP', 'SQL', 'Maven'],
    featured: false,
  },
]

function Card({ p, i }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 })

  const onMove = e => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <motion.article
      ref={ref}
      className={`proj-card${p.featured ? ' featured' : ''}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      initial={{ opacity: 0, y: 70, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ y: -12 }}
    >
      <div className="proj-hud">
        <div className="proj-hud-grid">
          {p.hud.map((h, hi) => (
            <motion.div
              key={h.k}
              className={`hud-cell${h.ok ? ' ok' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 + hi * 0.08 }}
            >
              <span className="hud-k">{h.k}</span>
              <motion.span
                className="hud-v"
                animate={h.ok ? { opacity: [0.7, 1, 0.7] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {h.v}
              </motion.span>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="hud-scan"
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
        />
      </div>

      <div className="proj-meta">
        <span className="proj-cat">{p.category}</span>
        <span className={`proj-status ${p.statusType}`}>{p.status}</span>
      </div>

      <motion.div className="proj-icon" whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>
        <i className={`bx ${p.icon}`} />
      </motion.div>
      <h3>{p.title}</h3>
      <p className="proj-desc">{p.desc}</p>
      <ul className="proj-feats">
        {p.features.map((f, fi) => (
          <motion.li
            key={f}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 + fi * 0.06 }}
          >
            <i className="bx bx-check" />{f}
          </motion.li>
        ))}
      </ul>
      <div className="proj-tech">
        {p.tech.map((t, ti) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 + ti * 0.04, type: 'spring' }}
            whileHover={{ y: -3, scale: 1.05 }}
          >
            {t}
          </motion.span>
        ))}
      </div>
      <div className="proj-links">
        <motion.a href="#" className="plink" whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <i className="bx bxl-github" /> Code
        </motion.a>
        <motion.a
          href="#"
          className={`plink plink-live${p.featured ? ' plink-gold' : ''}`}
          whileHover={{ y: -4, scale: 1.05, boxShadow: '0 0 28px rgba(232,184,75,0.45)' }}
          whileTap={{ scale: 0.97 }}
        >
          <i className="bx bx-link-external" /> Live Demo
        </motion.a>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <SectionHeader tag="What I've Built" title="Featured" highlight="Projects" />
      <div className="proj-grid">
        {projects.map((p, i) => <Card key={p.title} p={p} i={i} />)}
      </div>
    </section>
  )
}
