import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Login = ({setloginuser}) => {

    const history = useHistory();

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

    const login = () =>{
        axios.post("http://localhost:5000/login", user)
        .then(res => {
            alert(res.data.message)
            setloginuser(res.data.user)
            history.push("/")
        });
    }

    return (
        <div>
            {/* {console.log(user)} */}
            <input type="text" name="email" value={user.email} placeholder='Enter your Email' onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder='Enter your Password' onChange={ handleChange }></input>
            <div className='button' onClick={login}>Login</div>
            <div>or</div>
            <div className='button' onClick={() => history.push("/register")}>Register</div>
        </div>
    )
}

export default Login
