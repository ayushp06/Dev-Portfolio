import React, { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const nameRef = useRef(null)
  const descRef = useRef(null)
  const lineRef = useRef(null)
  const tagsRef = useRef(null)

  useEffect(() => {
    const els = [lineRef.current, nameRef.current, descRef.current, tagsRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(18px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 120 + i * 140)
    })
  }, [])

  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-line" ref={lineRef} />
        <h1 className="hero-name" ref={nameRef}>
          Ayush Pandejee
        </h1>
        <p className="hero-desc" ref={descRef}>
          Aerospace Engineering 
          &amp; Information Sciences
          and Technology
          <span className="hero-school">Penn State University</span>
        </p>
      </div>
    </div>
  )
}
