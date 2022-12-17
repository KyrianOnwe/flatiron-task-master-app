import React from 'react'
import Tasks from './Tasks'

function TasksContainer({ tasks, handD, handC, id, admin, usErr }) {
  // console.log(tasks)
  return (
    <div className='tasks-container'>
         <table>
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Due date</th>
              <th>Status</th>
              <th>Action</th>
              {admin ? <th>User Name</th> : null}
              <th>Project Name</th>
              <th>Project Due Date</th>
            </tr>
          </thead>
          <tbody>            
              {tasks.map((t) => <Tasks key={t.id} id={t.id} task={t.title} dd={t.due_date} status={t.status} handD={handD} handC={handC} usname={t.user.name} admin={admin} projName={t.project.title} projDD={t.project.due_date} usErr={usErr} />)}
          </tbody>
        </table>

    </div>
  )
}

export default TasksContainer