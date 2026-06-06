import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeader from './SectionHeader'
import PhotographyGallery from './PhotographyGallery'
import './Skills.css'

const cats = [
  { icon: 'bx-brain', title: 'AI & Machine Learning',
    items: ['Large Language Models (LLMs)', 'Agentic AI Systems', 'Retrieval-Augmented Generation', 'LangChain', 'LangGraph', 'Prompt Engineering', 'Vector Embeddings', 'Ollama'] },
  { icon: 'bx-code-block', title: 'Programming',
    items: ['Python', 'Java', 'JavaScript', 'HTML5', 'CSS3', 'SQL'] },
  { icon: 'bx-server', title: 'Backend Development',
    items: ['FastAPI', 'REST APIs', 'Serverless Architecture', 'Authentication Systems', 'Microservices', 'System Design'] },
  { icon: 'bx-data', title: 'Databases',
    items: ['Qdrant', 'FAISS', 'DynamoDB', 'SQL Databases', 'Vector Databases'] },
  { icon: 'bxl-aws', title: 'Cloud & DevOps',
    items: ['AWS Lambda', 'API Gateway', 'Amazon S3', 'Amazon Bedrock', 'AWS CodeBuild / CodePipeline', 'Git & GitHub', 'CI/CD', 'DevOps'] },
  { icon: 'bx-edit-alt', title: 'Prompt Engineering',
    items: ['Prompt Design', 'Chain-of-Thought', 'Few-Shot Learning', 'Output Parsing', 'Agent Prompts', 'Evaluation & Testing'] },
]

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
}
const listItem = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
}

function Card({ cat, i }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className="skill-card"
      initial={{ opacity: 0, y: 60, rotateX: 12 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{
        y: -10,
        scale: 1.02,
        borderColor: 'rgba(0,229,255,0.35)',
        boxShadow: '0 20px 60px rgba(0,229,255,0.12)',
      }}
    >
      <motion.div
        className="skill-glow"
        animate={inView ? { opacity: [0.3, 0.6, 0.3] } : {}}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
      />
      <div className="skill-head">
        <motion.i
          className={`bx ${cat.icon}`}
          animate={inView ? { rotate: [0, 5, -5, 0] } : {}}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
          whileHover={{ scale: 1.2, rotate: -12 }}
        />
        <h3>{cat.title}</h3>
      </div>
      <motion.ul variants={listVariants} initial="hidden" animate={inView ? 'show' : 'hidden'}>
        {cat.items.map(item => (
          <motion.li key={item} variants={listItem} whileHover={{ x: 8, color: 'var(--text)' }}>
            <motion.i
              className="bx bxs-chevron-right"
              whileHover={{ x: 4 }}
            />
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

export default function Skills() {
  const wrapRef = useRef()
  const inView = useInView(wrapRef, { once: true, margin: '-40px' })

  return (
    <section className="skills" id="skills" ref={wrapRef}>
      <SectionHeader tag="What I Know" title="My" highlight="Skills" />

      <motion.div
        className="skills-grid"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {cats.map((c, i) => (
          <Card key={c.title} cat={c} i={i} />
        ))}
      </motion.div>

      <PhotographyGallery />
    </section>
  )
}
