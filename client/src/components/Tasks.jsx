import React from 'react'

function Tasks({ task, dd, status, id, handD, handC}) {

    function completed(){
        fetch(`/task/completed/${id}`, {
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

      <td><button onClick={completed}>Complete</button><button onClick={handleDelete}>Delete</button></td>
    </tr>
  )
}

export default Tasks