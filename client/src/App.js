import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import TasksList from './components/TasksList'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
// import Footer from './components/Footer';
import SignUp from './components/SignUp';
import AddAProject from './components/AddAProject';
import Logout from './components/Logout';


function App() {
  const [tasks, setTasks] = useState([])
  const [user, setUser] = useState({})
  const [projects, setProjects] = useState([])
  const [errors, setErrors] = useState(false)
  // const [cart, setCart] = useState([])


  useEffect(() => {
    fetch('/tasks')
    .then(res => {
      if(res.ok){
        res.json().then(setTasks)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  },[])

  
  useEffect(() => {
    fetch('/users')
      .then((r) => r.json())
      .then((d) => setUser(d))  
  }, [])

  useEffect(() => {
    fetch('/projects')
    .then(res => {
      if(res.ok){
        res.json().then(setProjects)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  
  }, [])

  function handleNewProject(proj){
    setProjects([...projects, proj])
    console.log(proj)
  }
  
  const {name, id} = user

  function useSetUser(data){
    setUser(data)
  }
  

  console.log(errors)
  console.log(tasks)

  const addTask = (task) => setTasks(current => [...current,task])

  const updateTask = (updatedTask) => setTasks(current => {
    return current.map(task => {
     if(task.id === updatedTask.id){
       return updatedTask
     } else {
       return task
     }
    })
  })

  const deleteTask = (id) => setTasks(current => current.filter(p => p.id !== id)) 


  if(errors) return <h1>{errors}</h1>

  return (
    <>
    <h3>{name}</h3>
    {!id ? null : <NavBar />}
    <SignUp setu={useSetUser}/> <Login setu={useSetUser}/> {!id ? null: <Logout />}
    <Routes>
      <Route path='/' element={!id ? null : <Home id={id}/>} />
      <Route path='/tasks' element={!id ? null : <TasksList tasks={tasks} setTasks={setTasks} user={user} setUser={setUser} id={id} handD={deleteTask} handC={updateTask} handM={addTask}/>} />
      <Route path='/projects' element={!id ? null : <AddAProject proj={projects}  id={id} handM={handleNewProject} />} />
    </Routes>
    </>
   
  );
}

export default App;
