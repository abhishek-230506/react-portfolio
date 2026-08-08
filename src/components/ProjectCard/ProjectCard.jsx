import React from 'react'
import './ProjectCard.css'

function ProjectCard({ title, description, tech }) {
  return (
    <article className="project-card">
      <div className="project-card-body">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-tags">
          {/* We map over the array of tech to create span tags */}
          {tech.map((t, index) => (
            <span key={index} className="tag">
              {t}
            </span>
          ))}
        </div>

        <button className="btn btn-primary">
          View Project
        </button>
      </div>
    </article>
  )
}

export default ProjectCard