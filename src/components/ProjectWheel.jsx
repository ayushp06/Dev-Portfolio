import React, { useState, useEffect, useRef, useCallback } from 'react'
import projects from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import './ProjectWheel.css'

const VISIBLE_SLOTS = [-1, 0, 1] // above center, center, below center

function getSlotProps(slot) {
  // slot: -1 = above, 0 = center, 1 = below
  if (slot === 0) {
    return { scale: 1, opacity: 1, translateY: 0, zIndex: 10 }
  }
  if (Math.abs(slot) === 1) {
    return { scale: 0.78, opacity: 0.55, translateY: slot * 230, zIndex: 5 }
  }
  return { scale: 0.6, opacity: 0, translateY: slot * 350, zIndex: 1 }
}

export default function ProjectWheel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const wheelRef = useRef(null)
  const accumulatedDelta = useRef(0)
  const lastScrollTime = useRef(0)
  const total = projects.length

  const navigate = useCallback(
    (dir) => {
      if (animating) return
      setAnimating(true)
      setActiveIndex((prev) => (prev + dir + total) % total)
      setTimeout(() => setAnimating(false), 420)
    },
    [animating, total]
  )

  useEffect(() => {
    const el = wheelRef.current
    if (!el) return

    const onWheel = (e) => {
      e.preventDefault()
      const now = Date.now()
      // Throttle to one navigation per 400ms
      if (now - lastScrollTime.current < 400) return
      accumulatedDelta.current += e.deltaY
      if (Math.abs(accumulatedDelta.current) > 30) {
        const dir = accumulatedDelta.current > 0 ? 1 : -1
        navigate(dir)
        accumulatedDelta.current = 0
        lastScrollTime.current = now
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [navigate])

  // Touch support
  const touchStart = useRef(null)
  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientY
  }
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return
    const delta = touchStart.current - e.changedTouches[0].clientY
    if (Math.abs(delta) > 40) navigate(delta > 0 ? 1 : -1)
    touchStart.current = null
  }

  return (
    <div
      className="wheel-outer"
      ref={wheelRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="wheel-hint">
        <span className="wheel-hint-arrow">↑</span>
        <span className="wheel-hint-label">scroll</span>
        <span className="wheel-hint-arrow">↓</span>
      </div>

      <div className="wheel-stage">
        {VISIBLE_SLOTS.map((slot) => {
          const idx = (activeIndex + slot + total) % total
          const project = projects[idx]
          const { scale, opacity, translateY, zIndex } = getSlotProps(slot)
          const isCenter = slot === 0

          return (
            <div
              key={`slot-${slot}`}
              className="wheel-card-wrapper"
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity,
                zIndex,
                transition: 'transform 0.42s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.42s ease',
                pointerEvents: isCenter ? 'auto' : 'none',
              }}
            >
              <ProjectCard project={project} isActive={isCenter} />
            </div>
          )
        })}
      </div>

      <div className="wheel-dots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`wheel-dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => {
              if (!animating) {
                setAnimating(true)
                setActiveIndex(i)
                setTimeout(() => setAnimating(false), 420)
              }
            }}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
