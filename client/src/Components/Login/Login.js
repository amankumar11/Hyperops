import React from 'react'
import { useState , useEffect } from 'react'
import axios from "axios";
import { Redirect, useHistory } from 'react-router-dom';
import '../../assets/css/loginRegister.css';
import Logo from '../../assets/img/virginLogo.png';
import Footer from '../Footer';

const Login = ({}) => {

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
    const [loggedIn,setLoggedIn] = useState(null);
    const login = () =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
                'email':user.email,
                'password':user.password
            }),  
            credentials: "include"
            };
            fetch(`http://localhost:5000/login/localUser`, requestOptions )
                    .then(async response => {
                        if(response.ok){
                            response.json().then(data => {
                                console.log(data);
                                if(data.user.name !== undefined)
                                {
                                    setLoggedIn(<Redirect to="/client"></Redirect>);
                                }
                                
                            });
                            
                         }
                        else{
                            alert("Invalid Credentials, Please Try Again !")
                            throw response.json();
                        }
                      })
                      .catch(async (error) => {
                        const errorMessage = await error;
                        console.log(errorMessage);
                      })
    }


    const fetchProfile = () =>{

        fetch(`http://localhost:5000/users/me/`,{
            method:"GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Cache': 'no-cache'
            },
            credentials: 'include'
          })
          .then(async response => {
              if(response.ok){
                  
                  response.json().then(data => {
                  
                    if(data.name !== undefined)
                    {
                       
                        setLoggedIn(<Redirect to="/client"></Redirect>);
                    }
                  });
               }
              else{
                  throw response.json();
              }
            })
            .catch(async (error) => {
              const errorMessage = await error;
                console.log(errorMessage);
            })
    }

    useEffect(( () => {
        fetchProfile();
    }),[])
   
    return (
        <div>
        <div className='loginPage'>
           {loggedIn}
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
                        <div className='button' onClick={() => login()}>Login</div>
                    </button>
                    <div>or</div>
                    <button className="btn">
                        <div className='button' onClick={() => history.push("/register")}>Register</div>
                    </button>
                </div>
            </div>
        </div>
        
            <Footer/>
        </div>
    )
}

export default Login
