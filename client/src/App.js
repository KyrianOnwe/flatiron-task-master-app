import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import TasksList from './components/TasksList'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import AddAProject from './components/AddAProject';
import ProjectPage from './components/ProjectPage';
import Footer from './components/Footer';
import Auth from './components/Auth';


function App() {
  const [tasks, setTasks] = useState([])
  const [user, setUser] = useState({})
  const [projects, setProjects] = useState([])
  const [errors, setErrors] = useState(false)
  const [userProjs, setUserProjs] = useState([])
  const [isNewUser, setIsNewUser] = useState(false)
  const [start, setstart] = useState(false)
  const [isAdmin, setisAdmin] = useState(false)

  useEffect(() => {
    if(start && isAdmin){
      fetch('/tasks')
        .then(res => {
          if(res.ok){
          res.json().then(setTasks)
         }else {
          res.json().then(data => setErrors(data.error))
         }
      })
    }
  },[user, start, isAdmin])

  useEffect(() => {
    if(start && isAdmin){
      fetch('/projects')
        .then(res => {
          if(res.ok){
          res.json().then(setProjects)
         }else {
          res.json().then(data => setErrors(data.error))
         }
      })
    }
  },[user, start, isAdmin])

  
  useEffect(() => {
    if(start && !isAdmin){
      fetch(`/users/${user.id}`)
      .then((r) => r.json())
      .then(() => setAll(user))
      
    }
 
  }, [user, start, isAdmin])

  console.log(userProjs)
  function setAll(i){
    setTasks([...i.tasks])
    setUserProjs([...i.projects])
  }
  console.log(userProjs)
  console.log(tasks)

  function useSetIsNewUser(){
    setIsNewUser(!isNewUser)

  }
  
  function handleNewProject(proj){
    setProjects([...projects, proj])
    console.log(proj)
  }
  
 

  function useSetUser(data){
    setstart(!start)
    setUser(data)
    setisAdmin(data.admin)    
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

  function deleteUser(){
    console.log('deleted user')
    setUser({})
  }

  return (
    <>
    <h3>{user.name}</h3>
    {!start ? null : <NavBar deleteUser={deleteUser} user={user} admin={isAdmin} start={start} sstart={setstart} />}
    {!start ? <Auth setu={useSetUser} usnewusr={useSetIsNewUser} newUser={isNewUser} useSetUser={useSetUser} /> : null} 
    <Routes>
      <Route path='/' element={!start ? null : <Home id={user.id}/>} />
      <Route path='/tasks' element={!start ? null : <TasksList tasks={tasks} setTasks={setTasks} user={user} setUser={setUser} id={user.id} handD={deleteTask} handC={updateTask} handM={addTask} admin={isAdmin} />} />
      <Route path='/projects' element={!isAdmin ? null : <ProjectPage proj={projects}  id={user.id} handM={handleNewProject} />} />

    </Routes>
    <Footer />
    </>
   
  );
}

export default App;
