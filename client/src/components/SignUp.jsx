import React, { useState } from 'react'
import {Form} from '../styled/Form'
// import {useNavigate} from 'react-router-dom'

function SignUp({ useSetUser }) {
    const [name, setUsername] = useState('')
    const [password, setpassword] = useState('')
    // const [login, setLogin] = useState('')
    const [errors, setErrors] = useState([])
    const [admin, setAdmin] = useState(false)
    // const [whatev, setWhatev]= useState({})
    // const [take, setTake] = useState({})
    let holder 

    // const history = useNavigate
    function useWorkGoddamint(data){
        holder = {...data}
        console.log(holder)
        useSetUser(holder)                
        setUsername('')
        setpassword('')
        setAdmin(false)
        // console.log(whatev)
        
    }

    // function useSetTake(info){
    //     setTake(info)   
    //     useWorkGoddamint()
    // }

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
                    res.json().then(useWorkGoddamint
                    )
                }else{
                    res.json().then((data) => setErrors(data.errors))
                }
            })
            // .then((data) => setu(data))

            // console.log(whatev)

    }
    // function checkForErrors(data){
    //     data.ok ? data.json() : setErrors(data)
    // }
    // console.log(login)
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
        {/* <input type='submit' value="Sign up" onClick/> */}
        <input type='submit' value="Sign up" /> 
    </Form>
    {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}

    </>
  )
}

export default SignUp 