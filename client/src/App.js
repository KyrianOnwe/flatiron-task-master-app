import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import TasksList from './components/TasksList'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <>        
    {/* <Header /> */}
    <NavBar />
    
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path ="/tasks" element={<TasksList />} /> 
      {/* <Route path= "/todos/search" element={<Search us={us} std={settodos} handD={handleDelete} handC={handleComplete} user={user} setUser={setUser}utodos={utodos} setUtodos={setUtodos}/>} />
      <Route path="/user/new" element={<MakeUser users={us} setusers={setusers} />} />   */}
    </Routes> 
    <Footer/>     
         
  </>  
  );
}

export default App;
