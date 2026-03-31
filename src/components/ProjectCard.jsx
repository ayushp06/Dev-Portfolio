import React from 'react'
import './ProjectCard.css'

export default function ProjectCard({ project, isActive }) {
  return (
    <div className={`project-card ${isActive ? 'project-card--active' : ''}`}>
      <div className="card-header">
        <span className="card-category">{project.category}</span>
        <span className="card-year">{project.year}</span>
      </div>

      <h2 className="card-title">{project.title}</h2>
      <div className="card-divider" />
      <p className="card-desc">{project.description}</p>

      <div className="card-tags">
        {project.tags.map((tag) => (
          <span className="card-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="card-footer">
        <span className="card-cta">View Project →</span>
      </div>
    </div>
  )
}
