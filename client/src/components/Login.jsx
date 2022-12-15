import React, {useState} from 'react'
import {Form} from '../styled/Form'

function Login({setu, usErr}) {
    const [formData, setFormData] = useState({
        name:'',
        password:''
    })

    const {name, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name,
            password
        }        
       
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
          if(res.ok){
            res.json().then(setu)
          } else {
            res.json().then(usErr)
          }
        })      
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

      }

        return (
        <> 
        <Form onSubmit={onSubmit}>
        <label>
          Username
          </label>
        <input type='text' name='name' value={name} onChange={handleChange} />
    
        <label>
          Password
          </label>
        <input type='password' name='password' value={password} onChange={handleChange} />
       
        <input type='submit' value='Log in!' />
      </Form>
        </>
    )
}

export default Login