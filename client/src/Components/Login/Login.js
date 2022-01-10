import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [user, setuser] = useState({
        email: "", 
        password: ""
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
            <input type="text" name="email" value={user.email} placeholder='Enter your Email' onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder='Enter your Password' onChange={ handleChange }></input>
            <div className='button'>Login</div>
            <div>or</div>
            <div className='button'>Register</div>
        </div>
    )
}

export default Login
