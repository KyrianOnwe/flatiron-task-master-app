import React, { useState } from 'react'

const MakeTasks = ({ us, handM, usErr }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    due_date: "",
    user_name: "",
    project_title: "",
    status: "Assigned",
    completed: false,
  })

  function useSetNewTask(e){    
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  }

  function resetTaskAdder(){
    setNewTask({
      title: "",
      due_date: "",
      user_name: "",
      project_title: "",
      status: "Assigned",
      completed: false,
    })
  }

  function useHandM(data){
    handM(data)
    resetTaskAdder()
  }

  function submitTask(e){
    e.preventDefault()    
    fetch(("/tasks"), {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    })
      .then((r) =>{
        if(r.ok){
          r.json().then(useHandM)
        } else {
          r.json().then(usErr)
        }
      })
  }

  return (
    <div>
        {<form className="tasks-holder" onSubmit={submitTask}>
            <input type="text" name="title" placeholder="What's the new task?" value={newTask.title} onChange={useSetNewTask} />
            <input type="text" name="due_date" placeholder="When is the task due (yyyy-mm-dd)?" value={newTask.due_date} onChange={useSetNewTask} />
            <label>
            <input type="text" name="user_name" placeholder="Who is it Assigned to?" value={newTask.user_name} onChange={useSetNewTask} />
            </label>
            <input type="text" name="project_title" placeholder="What project is it for?" value={newTask.project_title} onChange={useSetNewTask} />
            <button type="submit">Done!</button>
        </form>}
    </div>
  )
}
export default MakeTasks