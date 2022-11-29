import React from 'react'
import Tasks from './Tasks'

function TasksContainer({ tasks, handD, handC}) {
  return (
    <div className='tasks-container'>
         <table>
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Due date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>            
              {tasks.map((t) => <Tasks key={t.id} id={t.id} task={t.title} dd={t.due_date} status={t.status} handD={handD} handC={handC} />)}
          </tbody>
        </table>

    </div>
  )
}

export default TasksContainer