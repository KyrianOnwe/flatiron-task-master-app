import React from 'react'

function Home({ admin }) {
  return (
    <div>{admin ? "Welcome, Task Master!  Please proceed to creating projects and tasks for your minions to complete!" : "Welcome to you Task Master!  Click on 'Tasks' to see what tasks and projects you have been assigned to."}</div>
  )
}

export default Home