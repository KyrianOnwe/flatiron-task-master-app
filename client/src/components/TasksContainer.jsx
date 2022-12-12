import React from 'react'
import Tasks from './Tasks'

function TasksContainer({ tasks, handD, handC, id, admin, usErr }) {
  return (
    <div className='tasks-container'>
         <table>
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Due date</th>
              <th>Status</th>
              <th>Action</th>
              {admin ? <th>User ID</th> : null}
            </tr>
          </thead>
          <tbody>            
              {tasks.map((t) => <Tasks key={t.id} id={t.id} task={t.title} dd={t.due_date} status={t.status} handD={handD} handC={handC} usid={t.user_id} admin={admin} usErr={usErr} />)}
          </tbody>
        </table>

    </div>
  )
}

export default TasksContainer