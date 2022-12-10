import React from 'react'
import AddAProject from './AddAProject'
import ProjectsContainer from './ProjectsContainer'

function ProjectPage({ proj,  id, handM }) {

  return (
    <div>
        <AddAProject proj={proj} handM={handM} id={id} />
        <ProjectsContainer proj={proj}/>
    </div>
  )
}

export default ProjectPage