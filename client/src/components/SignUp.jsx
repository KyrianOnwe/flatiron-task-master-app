import React, { useState } from 'react'
import {Form} from '../styled/Form'
import {useNavigate} from 'react-router-dom'

function SignUp() {
    const [name, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [login, setLogin] = useState('')
    const [errors, setErrors] = useState([])

    const history = useNavigate

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name, 
            password
        }
        fetch('/users', {
            method: "POST", 
            headers:{'Content-Tye':'application/json'},
            body:JSON.stringify(user)
        })
            .then(res =>{
                if(res.ok){
                    res.json().then(user => {
                        history.push(`/users/${user.id}`)
                    })
                } else {
                    res.json().then(json => setErrors(Object.entries(json.errors)))
                }
            })

    }
    console.log(login)
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
        {/* <input type='submit' value="Sign up" onClick/> */}
        <input type='submit' value="Sign up" onClick={() => setLogin(true)} /> 
    </Form>
    {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}

    </>
  )
}

export default SignUp 