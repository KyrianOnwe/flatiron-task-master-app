import React from 'react'
import AddAProject from './AddAProject'
import ProjectsContainer from './ProjectsContainer'

function ProjectPage({ proj,  id, handM, usErr }) {

  return (
    <div>
        <AddAProject proj={proj} handM={handM} id={id} usErr={usErr} />
        <ProjectsContainer proj={proj}/>
    </div>
  )
}

export default ProjectPage