import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <div id='navbar'>
    <ul>
        <li><Link to="/">Home</Link></li>          
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to='/users/new'>Sign Up</Link></li>
        <li><Link to='/login'>Login</Link></li>

    </ul>
    
</div>
</>
  )
}

export default NavBar