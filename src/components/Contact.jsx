import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from './SectionHeader'
import './Contact.css'

const info = [
  { icon:'bx-envelope',  label:'Email',    val:'ssudhan051@gmail.com',          href:'mailto:ssudhan051@gmail.com' },
  { icon:'bx-phone',     label:'Phone',    val:'+91 95974 51201',               href:'tel:+919597451201' },
  { icon:'bxl-linkedin', label:'LinkedIn', val:'linkedin.com/in/shanmuga-sudhan-k', href:'https://linkedin.com/in/shanmuga-sudhan-k' },
  { icon:'bx-map',       label:'Location', val:'Salem, Tamil Nadu, India',      href:null },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const ref = useRef()
  const inView = useInView(ref, { once:true, margin:'-80px' })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); e.target.reset() }, 3000)
  }

  return (
    <section className="contact" id="contact">
      <SectionHeader
        tag="Get In Touch"
        title="Let's Build"
        highlight="Together"
        sub="Have an AI project in mind? Let's create intelligent solutions that make a real difference."
      />
      <div ref={ref} className="contact-grid">
        <motion.div className="contact-info"
          initial={{ opacity:0, x:-60 }} animate={inView ? {opacity:1,x:0} : {}}
          transition={{ duration:.7, ease:[.4,0,.2,1] }}>
          {info.map((c,i) => (
            <motion.div key={c.label} className="info-card"
              initial={{ opacity:0, x:-40 }} animate={inView ? {opacity:1,x:0} : {}}
              transition={{ delay:.1+i*.1 }}
              whileHover={{ x:6, borderColor:'rgba(0,229,255,.3)', boxShadow:'0 6px 26px rgba(0,229,255,.09)' }}>
              <motion.i className={`bx ${c.icon}`} whileHover={{ scale:1.12, rotate:-5 }} />
              <div>
                <h4>{c.label}</h4>
                {c.href
                  ? <a href={c.href} target={c.href.startsWith('http')?'_blank':undefined} rel="noreferrer">{c.val}</a>
                  : <p>{c.val}</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.form className="contact-form" onSubmit={handleSubmit}
          initial={{ opacity:0, x:60 }} animate={inView ? {opacity:1,x:0} : {}}
          transition={{ duration:.7, delay:.15, ease:[.4,0,.2,1] }}>
          <input type="text"  placeholder="Your Name"    required />
          <input type="email" placeholder="Your Email"   required />
          <input type="text"  placeholder="Subject" />
          <textarea rows={5}  placeholder="Your Message" required />
          <motion.button type="submit" className={`btn ${sent ? 'btn-sent' : 'btn-gold'}`}
            whileHover={!sent ? { scale:1.03 } : {}} whileTap={{ scale:.97 }}>
            {sent ? <><i className="bx bx-check" /> Message Sent!</> : <><i className="bx bx-send" /> Send Message</>}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
