import React, { useState } from 'react'
// import ProjectsContainer from './ProjectsContainer';

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
                <form className="project-builder" onSubmit={submitProject}>
                    <input type="text" name="title" placeholder="Project Title" value={newProject.title} onChange={useSetNewProject} />
                    <input type="text" name="due_date" placeholder="Due Date" value={newProject.due_date} onChange={useSetNewProject} />

                    <button type="submit">Done!</button>
                </form>

            </div>
          )
}

export default AddAProject