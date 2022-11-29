import React, { useState } from 'react'
import OptionsT from './OptionsT';

const MakeTasks = ({ us, handM }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    due_date: "",
    user_id: "",
    project_id: "",
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
      user_id: "",
      project_id: "",
      status: "Assigned, not started",
      completed: false,
    })
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
      .then((r) => r.json())
      .then((data) => handM(data))
      .then(() => resetTaskAdder())
  }

  return (
    <div>
        <form className="tasks-holder" onSubmit={submitTask}>
            <input type="text" name="title" placeholder="Task" value={newTask.title} onChange={useSetNewTask} />
            <input type="text" name="due_date" placeholder="Due Date" value={newTask.due_date} onChange={useSetNewTask} />
            <label>
              <select name="user_id" value={newTask.user_id} onChange={useSetNewTask}>
                <OptionsT us={us}/>
              </select>
            </label>
            <input type="text" name="assigned_by" placeholder="Assigner" value={newTask.assigned_by} onChange={useSetNewTask} />
            <button type="submit">Done!</button>
        </form>
    </div>
  )
}
export default MakeTasks