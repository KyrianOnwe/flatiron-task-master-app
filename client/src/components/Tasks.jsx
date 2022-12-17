import React from 'react'

function Tasks({ task, dd, status, id, handD, handC, usname, projName, projDD, admin, usErr }) {
  console.log(task)
  console.log(projName)

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
        .then((r) => {
          if(r.ok){
            r.json().then(handC)
          } else {
            r.json().then(usErr)
          }
        })
      }
      
      function handleDelete(){
        fetch(`/tasks/${id}`,{method: "DELETE"})
          .then((r) => r.json())
          .then(handD(id))
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
        {usname}       
      </td> : null}
      <td>
        {projName}
      </td>
      <td>
        {projDD}
      </td>

    </tr>
    </>
  )
}

export default Tasks