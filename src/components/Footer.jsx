import { motion } from 'framer-motion'
import './Footer.css'

const socials = [
  { icon:'bxl-linkedin', href:'https://linkedin.com/in/shanmuga-sudhan-k' },
  { icon:'bxl-github',   href:'https://github.com' },
  { icon:'bx-envelope',  href:'mailto:ssudhan051@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="f-logo"><span>S</span>udhan</p>
        <p className="f-roles">AI Engineer</p>
        <div className="f-socials">
          {socials.map(s => (
            <motion.a key={s.icon} href={s.href} target="_blank" rel="noreferrer"
              whileHover={{ y:-3, scale:1.12, borderColor:'var(--cyan)', color:'var(--cyan)', boxShadow:'var(--gcyan)' }}>
              <i className={`bx ${s.icon}`} />
            </motion.a>
          ))}
        </div>
        <p className="f-copy">&copy; 2026 Shanmuga Sudhan K. All rights reserved.</p>
      </div>
    </footer>
  )
}
