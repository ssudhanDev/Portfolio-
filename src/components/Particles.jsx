import { useEffect, useRef } from 'react'

export default function Particles() {
  const ref = useRef()
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d')
    let W, H, pts = [], raf

    const resize = () => {
      W = c.width  = window.innerWidth
      H = c.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const r = (a, b) => Math.random() * (b - a) + a
    class P {
      reset() { this.x=r(0,W); this.y=r(0,H); this.rad=r(.5,2); this.vx=r(-.3,.3); this.vy=r(-.4,-.05); this.a=r(.1,.5) }
      constructor(){ this.reset() }
      update() { this.x+=this.vx; this.y+=this.vy; if(this.y<-5||this.x<-5||this.x>W+5) this.reset() }
      draw() { ctx.beginPath(); ctx.arc(this.x,this.y,this.rad,0,Math.PI*2); ctx.fillStyle=`rgba(0,229,255,${this.a})`; ctx.fill() }
    }
    for(let i=0;i<90;i++) pts.push(new P())

    const draw = () => {
      ctx.clearRect(0,0,W,H)
      pts.forEach(p=>{ p.update(); p.draw() })
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy)
        if(d<110){ ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.strokeStyle=`rgba(0,229,255,${.05*(1-d/110)})`; ctx.lineWidth=.5; ctx.stroke() }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={ref} style={{ position:'fixed',top:0,left:0,width:'100%',height:'100%',zIndex:0,pointerEvents:'none' }} />
}
