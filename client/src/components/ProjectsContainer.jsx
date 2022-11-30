import React from 'react'

function ProjectsContainer({ proj }) {
  return (
    <div>
        {proj.map((p) => <p>{p.title}</p>)}
    </div>
  )
}

export default ProjectsContainer