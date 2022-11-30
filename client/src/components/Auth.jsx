import React, { useState } from 'react'

function Auth() {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [login, setLogin] = useState('')
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username, 
            password
        }
        fetch('/user', {
            method: "POST", 
            headers:{'Content-Tye':'application/json'},
            body:JSON.stringify(user)
        })
            .then(res =>{
                if(res.ok){
                    res.json().then(setCurentUser)
                } else {
                    res.json().then(e => setErrors(Object.entries(e.error).flat()))
                }
            })

    }
  return (
    <>
    <Form onSubmit={onSubmit} >
        <label>
            Username 
            <br />
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password  
            <br />
            <input type='password' value={password} onChange={(e) => setpassword(e.target.value)} />
        </label>
        <input type='submit' value="Sign up" />
        <input type='submit' value="Login" onClick={() => setLogin(true)} /> 
    </Form>
    </>
  )
}

export default Auth