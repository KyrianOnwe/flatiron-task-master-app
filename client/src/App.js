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
import Header from './components/Header';


function App() {
  const [tasks, setTasks] = useState([])
  const [user, setUser] = useState({})
  const [projects, setProjects] = useState([])
  const [errors, setErrors] = useState([])
  const [userProjs, setUserProjs] = useState([])
  const [isNewUser, setIsNewUser] = useState(false)
  const [start, setstart] = useState(false)
  const [isAdmin, setisAdmin] = useState(false)
  const [currentUser, setcurrentUser] = useState()

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
    fetch('/auth')
      .then(res => {
        if(res.ok){
          res.json().then(useSetUser)
        } 
      }      
      )
  },[])

  // if(!user) return <Auth setu={useSetUser} usnewusr={useSetIsNewUser} newUser={isNewUser} useSetUser={useSetUser} usErr={useSetErrors} />
  



  // console.log(tasks)
  useEffect(() => {
    if(start && isAdmin){
      setcurrentUser(user)}
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

  function clearErrorMessage(){
    setErrors([])
  }

  console.log(userProjs)
  function setAll(i){
    setTasks([...i.tasks])
    setUserProjs([...i.projects])
  }
  // console.log(userProjs)
  // console.log(tasks)

  function useSetIsNewUser(){
    setIsNewUser(!isNewUser)

  }
  
  function handleNewProject(proj){
    setProjects([...projects, proj])
    // console.log(proj)
  }
  
 

  function useSetUser(data){
    setstart(!start)
    setUser(data)
    setisAdmin(data.admin)    
  }
  

  // console.log(errors)
  // console.log(tasks)

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

  function useSetErrors(data){
    console.log(data)
    if(data.errors){
      let errorCont = Object.entries(data.errors)
      console.log(errorCont)
      if(errorCont.length < 2){
        let error2 = Object.entries(data.errors)
        console.log(error2)
        setErrors(error2)
        setTimeout(() => {
        clearErrorMessage()
        }, 10000);
      } else {
        let error2 = errorCont.map(erC => Object.entries(erC))
        console.log(error2)
        setErrors(error2)
        setTimeout(() => {
        clearErrorMessage()
        }, 10000);
      }
      let error2 = errorCont.map(error => Object.entries(error))
      setErrors(error2)
      setTimeout(() => {
        clearErrorMessage()
        }, 10000);
    } else {
      let error1 = Object.entries(data.error)
      setErrors(error1)
      setTimeout(() => {
        clearErrorMessage()
        }, 10000);
    }
    
  }


  // if(errors) return <h1>{errors}</h1>

  function deleteUser(){
    // console.log('deleted user')
    setUser({})
  }

  return (
    <>
    <Header />
    <h3>{user.name}</h3>
    {!start ? null : <NavBar deleteUser={deleteUser} user={user} admin={isAdmin} start={start} sstart={setstart} />}
    {!start ? <Auth setu={useSetUser} usnewusr={useSetIsNewUser} newUser={isNewUser} useSetUser={useSetUser} usErr={useSetErrors} /> : null} 
    <Routes>
      <Route path='/' element={!start ? null : <Home admin={isAdmin} id={user.id}/>} />
      <Route path='/tasks' element={!start ? null : <TasksList tasks={tasks} setTasks={setTasks} user={user} setUser={setUser} id={user.id} handD={deleteTask} handC={updateTask} handM={addTask} admin={isAdmin} usErr={useSetErrors} cUser={currentUser}/>} />
      <Route path='/projects' element={!isAdmin ? null : <ProjectPage proj={projects}  id={user.id} handM={handleNewProject} usErr={useSetErrors} />} />

      
    </Routes>

    {errors?errors.map(e => <div key={e[0]}>{e[0] +': ' + e[1]}</div>):null}

    <Footer />
    </>
   
  );
}

export default App;
