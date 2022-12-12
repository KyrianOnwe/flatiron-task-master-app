import React, {useState} from 'react'
// import { useEffect } from 'react'
// import {useNavigate} from 'react-router-dom'
import {Form} from '../styled/Form'

function Login({setu, usErr}) {
    const [formData, setFormData] = useState({
        name:'',
        password:''
    })
    // const [errors, setErrors] = useState([])
    // const history = useNavigate()

    const {name, password} = formData

    // let between 

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
        // console.log(between)
        // console.log(errors)     
       
    }

    // function useSetErrors(data){
    //   // console.log(data)
    //   setErrors([...errors, data.error])
      
    // }
    // console.log(errors)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

      }

        // useEffect(() => {
        //   setErrors([])
        // }, [])

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
      {/* {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null} */}
        </>
    )
}

export default Login