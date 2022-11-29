import React, { useState, useEffect } from 'react'
import TasksContainer from './TasksContainer'
import MakeTasks from './MakeTask'

function TasksList() {
    const [tasks, setTasks] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
      fetch('/tasks')
        .then((r) => r.json())
        .then((data) => setTasks(data))
    }, [])

    useEffect(() => {
      fetch('/users')
        .then((r) => r.json())
        .then((d) => setUsers(d))  
    }, [])
    
  
    // useEffect(() => {
    //   fetch('http://localhost:9292/todos')
    //     .then((r) => r.json())
    //     .then((data) => console.log(data))
    // }, [])
  
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
      <MakeTasks us={users} handM={handleCreateTask} />
      <TasksContainer tasks={tasks} handC={handleComplete} handD={handleDelete} />
    </div>
  )
}

export default TasksList