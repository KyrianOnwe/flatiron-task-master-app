import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

function Auth({ setu, usnewusr, newUser, useSetUser, usErr }) {
  return (
    <div>
        {!newUser ? <Login setu={setu} usErr={usErr} /> : <SignUp useSetUser={useSetUser} usErr={usErr} />}

        <button onClick={usnewusr}>{newUser ? `Log in` : `Sign up!`}</button>
    </div>
  )
}

export default Auth