import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

function Auth({ setu, usnewusr, newUser, useSetUser }) {
  return (
    <div>
        {!newUser ? <Login setu={setu} /> : <SignUp useSetUser={useSetUser} />}

        <button onClick={usnewusr}>{newUser ? `Log in` : `Sign up!`}</button>
    </div>
  )
}

export default Auth