import React from 'react'

function ProjectsContainer({ proj }) {
  return (
    <div>
        {proj.map((p) => <p key={p.title} >Project ID: {p.id} Project:  {p.title} Due Date: {p.due_date}</p>)}
    </div>
  )
}

export default ProjectsContainer