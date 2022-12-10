import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

function NavBar({ deleteUser, user, admin, start, sstart }) {
  console.log(admin)
  return (
    <>
    <div id='navbar'>
    {!start ? null: <ul>
        <li><Link to="/">Home</Link></li>          
        <li><Link to="/tasks">Tasks</Link></li>
        {admin ? <li><Link to="/projects">Projects</Link></li> : null}
        {admin ? <li><Link to='/users/new'>Sign Up</Link></li> : null}
        <Logout deleteUser={deleteUser} user={user} sstart={sstart} />

    </ul>}
    
</div>
</>
  )
}

export default NavBar