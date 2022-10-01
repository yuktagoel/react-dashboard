import React from 'react'

function Card() {
  return (
    <div className="project-card">
    <div className="project-title">Super Project</div>
    <div className="project-desc">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
      laborum quo similique repellendus. Nobis repudiandae
      cupiditate
    </div>
    <div className="action-icon">
      <i className="fa-sharp fa-solid fa-star"></i>
      <i className="fa-sharp fa-solid fa-eye"></i>
      <i className="fa-sharp fa-solid fa-code-fork"></i>
    </div>
  </div>
  )
}

export default Card