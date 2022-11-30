import React from 'react'

function Logout(id) {
    function logout(){
        fetch('/logout', {
            method: 'DELETE'
        })
    }
  return (
    <div>
        {!id ? null : <button onClick={logout}>Logout</button>}
    </div>
  )
}

export default Logout