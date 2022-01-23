import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
import '../../assets/css/loginRegister.css';
import Logo from '../../assets/img/virginLogo.png';
import Footer from '../Footer';
import { Navbar } from 'react-bootstrap';
import URL from '../../URL';

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
        if(name && email && password && (password === reEnterPassword))
        {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({
                    'name':user.name,
                    'email':user.email,
                    'password':user.password
                }),  
                credentials: "include"
                };
                fetch(`${URL}/register`, requestOptions )
                        .then(async response => {
                            if(response.ok){
                                response.json().then(data => {
                                    console.log(data);
                                    data.newUser.name !== undefined ? alert("User Registered Successfully") : alert("Error In Registering, Try Again !")
                                    history.push("/")
                                });
                                
                             }
                            else{
                                alert("Error In Registering, Try Again !")
                                throw response.json();
                            }
                          })
                          .catch(async (error) => {
                            const errorMessage = await error;
                            console.log(errorMessage);
                          })
            
        }else{
            alert("Invalid input");
        }
        
    }

    return (
        <div>
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
            <Footer/>
        </div>
    )
}

export default Register
