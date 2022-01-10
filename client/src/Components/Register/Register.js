import React from 'react'
import { useState } from 'react'

const Register = () => {

    const [user, setuser] = useState({
        name: "",
        email: "", 
        password: "", 
        reEnterPassword: ""
    })

    const handleChange=(e)=>{
        const { name, value } = e.target
        setuser({
            ...user,
            [name]: value
        })
    }

    return (
        <div>
            {console.log(user)}
            <input type="text" name="name" value={user.name} placeholder='Your Name' onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder='Your Email' onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder='Your Password' onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter Password' onChange={handleChange}></input>
            <div className='button'>Register</div>
            <div>or</div>
            <div className='button'>Login</div>
        </div>
    )
}

export default Register
