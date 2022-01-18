import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
import '../../assets/css/loginRegister.css';
import Logo from '../../assets/img/virginLogo.png';

const Register = () => {

    const history = useHistory();

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

    const register = () =>{
        const {name, email, password, reEnterPassword} = user
        if(name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:5000/register", user)
            .then(res => {
                alert(res.data.message)
                history.push("/login")
            })
            
        }else{
            alert("Invalid input");
        }
        
    }

    return (
        <div className='registerPage'>
            <div className='bootPageL'>

            </div>
            <div className='bootPageR'>
                <div className='registerform'>
                    <img src={Logo} width='200px'></img>
                    <h1>BANDRA-KURLA PORTAL</h1>
                    <input className="forminput" type="text" name="name" value={user.name} placeholder='Your Name' onChange={handleChange}></input>
                    <input className="forminput" type="text" name="email" value={user.email} placeholder='Your Email' onChange={handleChange}></input>
                    <input className="forminput" type="password" name="password" value={user.password} placeholder='Your Password' onChange={handleChange}></input>
                    <input className="forminput" type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter Password' onChange={handleChange}></input>
                    <button className='btn'>
                        <div className='button' onClick={register}>Register</div>
                    </button>
                    <div>or</div>
                    <button className='btn'>
                        <div className='button' onClick={() => history.push("/login")}>Login</div>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default Register
