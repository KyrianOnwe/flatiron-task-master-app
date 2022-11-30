import React, { useState } from 'react'
import ProjectsContainer from './ProjectsContainer';

function AddAProject({proj, handM, id}) {
    
        const [newProject, setNewProject] = useState({
            title: "",
            due_date: ""
          })
        
          function useSetNewProject(e){    
            setNewProject({
              ...newProject,
              [e.target.name]: e.target.value,
            });
          }
        
          function resetProjectAdder(){
            setNewProject({
              title: "",
              due_date: ""
            })
          }
        
          function submitProject(e){
            e.preventDefault()    
            fetch(("/projects"), {
              method: "POST", 
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(newProject)
            })
              .then((r) => r.json())
              .then((data) => handM(data))
              .then(() => resetProjectAdder())
          }
        
          return (
            <div>
                <form className="tasks-holder" onSubmit={submitProject}>
                    {!id ? null :<input type="text" name="title" placeholder="Task" value={newProject.title} onChange={useSetNewProject} />}
                    {!id ? null :<input type="text" name="due_date" placeholder="Due Date" value={newProject.due_date} onChange={useSetNewProject} />}

                    {!id ? null :<button type="submit">Done!</button>}
                </form>
                <ProjectsContainer proj={proj} id={id} />
            </div>
          )
}

export default AddAProject