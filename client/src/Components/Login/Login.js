import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
import '../../assets/css/loginRegister.css';
import Logo from '../../assets/img/virginLogo.png';

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
        <div className='loginPage'>
            <div className='bootPageL'>
                
            </div>
            <div className='bootPageR'>
                <div className='loginform'>
                    {/* {console.log(user)} */}
                    <img src={Logo} width='200px'></img>
                    <h1>BANDRA-KURLA PORTAL</h1>
                    <input className="forminput" type="text" name="email" value={user.email} placeholder='Enter your Email' onChange={ handleChange }></input>
                    <input class="forminput" type="password" name="password" value={user.password} placeholder='Enter your Password' onChange={ handleChange }></input>
                    <button className="btn">
                        <div className='button' onClick={login}>Login</div>
                    </button>
                    <div>or</div>
                    <button className="btn">
                        <div className='button' onClick={() => history.push("/register")}>Register</div>
                    </button>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Login
