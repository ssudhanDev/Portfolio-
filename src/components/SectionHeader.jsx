import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
}

export default function SectionHeader({ tag, title, highlight, sub }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="section-header"
      variants={container}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <motion.span className="section-tag" variants={item}>{tag}</motion.span>
      <motion.h2 className="section-title" variants={item}>
        {title} {highlight && <span>{highlight}</span>}
      </motion.h2>
      {sub && <motion.p className="section-sub" variants={item}>{sub}</motion.p>}
    </motion.div>
  )
}
