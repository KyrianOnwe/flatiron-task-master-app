import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout({ deleteUser, user, sstart }) {
  const hist = useNavigate()
    function logout(){
        fetch('/logout', {
            method: 'DELETE'
        })                
    }

    function both(){
      console.log(user)
      logout()
      console.log('deleted')
      console.log(user)
      hist('/')
      console.log('redirected')
      deleteUser()
      console.log(user)
      sstart(false)
      
      
    }
  return (
    <div>
        <button onClick={both}>Logout</button>
    </div>
  )
}

export default Logout