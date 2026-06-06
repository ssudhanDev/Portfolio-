import { motion } from 'framer-motion'

export default function ScrollMouse() {
  return (
    <motion.a
      href="#about"
      className="scroll-mouse"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}
    >
      <motion.div
        className="scroll-wheel"
        animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <span>SCROLL</span>
    </motion.a>
  )
}
