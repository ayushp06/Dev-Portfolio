import React, { useState, useEffect, useRef, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import projects from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import './ProjectWheel.css'

export default function ProjectWheel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  const wheelOuterRef = useRef(null)
  const accumulatedDelta = useRef(0)
  const scrollLockRef = useRef(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: 'y',
    align: 'center',
    loop: true,
  })

  const onSelect = useCallback((api) => {
    setActiveIndex(api.selectedScrollSnap())
  }, [])

  const scrollByDirection = useCallback(
    (direction) => {
      if (!emblaApi || scrollLockRef.current) return
      scrollLockRef.current = true
      if (direction > 0) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollPrev()
      }
      // Synced with CSS transition duration (0.45s)
      window.setTimeout(() => {
        scrollLockRef.current = false
      }, 450)
    },
    [emblaApi]
  )

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect(emblaApi)
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    const el = wheelOuterRef.current
    if (!el || !emblaApi) return

    const onWheel = (e) => {
      e.preventDefault()
      
      // If we are currently locked, ignore the wheel input
      if (scrollLockRef.current) {
        accumulatedDelta.current = 0
        return
      }

      accumulatedDelta.current += e.deltaY
      if (Math.abs(accumulatedDelta.current) > 30) {
        scrollByDirection(accumulatedDelta.current > 0 ? 1 : -1)
        accumulatedDelta.current = 0
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [emblaApi, scrollByDirection])

  return (
    <div className="wheel-outer" ref={wheelOuterRef}>
      <div className="wheel-hint">
        <span className="wheel-hint-arrow">↑</span>
        <span className="wheel-hint-label">scroll</span>
        <span className="wheel-hint-arrow">↓</span>
      </div>

      <div className="wheel-stage">
        <div className="wheel-viewport" ref={emblaRef}>
          <div className="wheel-container">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`wheel-slide ${index === activeIndex ? 'is-selected' : ''}`}
              >
                <div className="wheel-card-shell">
                  <ProjectCard project={project} isActive={index === activeIndex} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wheel-dots">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`wheel-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => onDotButtonClick(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
