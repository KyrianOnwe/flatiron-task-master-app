import React, { useState } from 'react'
import {Form} from '../styled/Form'

function SignUp({ useSetUser, usErr }) {
    const [name, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [admin, setAdmin] = useState(false)
    let holder 

    function useWorkGoddamint(data){
        holder = {...data}
        useSetUser(holder)                
        setUsername('')
        setpassword('')
        setAdmin(false)
        
    }

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name, 
            password,
            admin
        }
        fetch('/users', {
            method: "POST", 
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
            .then(res => {
                if(res.ok){
                    res.json().then(useWorkGoddamint)
                }else{
                    res.json().then(usErr)
                }
            })

    }
  return (
    <>
    <Form onSubmit={onSubmit} >
        <label>
            Username 
            <br />
            <input type='text' value={name} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password  
            <br />
            <input type='password' value={password} onChange={(e) => setpassword(e.target.value)} />
        </label>
        <label>
            Adminisrator?  
            <br />
            <input type='text' value={admin} onChange={(e) => setAdmin(e.target.value)} />
        </label>
        <input type='submit' value="Sign up" /> 
    </Form>

    </>
  )
}

export default SignUp 