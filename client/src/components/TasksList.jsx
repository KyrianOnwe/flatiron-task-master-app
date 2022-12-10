import React from 'react'
import TasksContainer from './TasksContainer'
import MakeTasks from './MakeTask'

function TasksList({ tasks, setTasks, users, id, admin }) {

    function handleDelete(id){
      const newTodos = tasks.filter((t) => t.id !== id)
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
      {!id ? null : <MakeTasks us={users} handM={handleCreateTask} />}
      <TasksContainer tasks={tasks} handC={handleComplete} handD={handleDelete} admin={admin} />
    </div>
  )
}

export default TasksList