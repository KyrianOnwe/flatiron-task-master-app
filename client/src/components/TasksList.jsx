import React from 'react'
import TasksContainer from './TasksContainer'
import MakeTasks from './MakeTask'

function TasksList({ tasks, setTasks, users, id, admin, usErr }) {

    function handleDelete(ida){
      const newTodos = tasks.filter((t) => t.id !== ida)
      setTasks(newTodos)
    }
  
    function handleComplete(info){
      let completeTodo = tasks.find((t) => t.id === info.id)
      completeTodo = info
      let leftTodos = tasks.filter((t) => t.id !== info.id)
      setTasks([...leftTodos, completeTodo])   
    }

    function handleCreateTask(info){
      setTasks([...tasks, info])
    }

  return (
    <div>
      {!id ? null : <MakeTasks us={users} handM={handleCreateTask} usErr={usErr} />}
      <TasksContainer tasks={tasks} handC={handleComplete} handD={handleDelete} admin={admin} usErr={usErr} />
    </div>
  )
}

export default TasksList