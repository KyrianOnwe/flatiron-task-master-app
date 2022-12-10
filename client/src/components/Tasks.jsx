import React from 'react'

function Tasks({ task, dd, status, id, handD, handC, usid, admin }) {

    function completed(){
        fetch(`/tasks/${id}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            completed: true,
            status: `Done-Completed.`
          }),
        })
        .then((r) => r.json())
        .then((data) => handC(data))
      }
      
      function handleDelete(){
        fetch(`/tasks/${id}`,{method: "DELETE"})
          .then((r) => r.json())
          .then(() => handD(id))
      }
      
    
  return (
    <>
    <tr>
      <td>
        {task}
      </td>
      <td>
        {dd}
      </td>
      <td>
        {status}       
      </td>      

      <td><button onClick={completed}>Complete</button>{!admin ? null : <button onClick={handleDelete}>Delete</button>}</td>

      {admin ? <td>
        {usid}       
      </td> : null}

    </tr>
    </>
  )
}

export default Tasks