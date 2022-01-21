import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HyperopsNavbar from '../Components/Navbar';
import Landing from '../Components/Landing';
import Booking from '../Components/BookingSection/Booking';
import Schedule from '../Components/ScheduleSection/Schedule';
import { Redirect } from 'react-router-dom';

const ClientPage = () => {

    const [loggedIn,setLoggedIn] = useState(null);
    const [user,setUser] = useState({
        name:"",
        email:""
    })
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
                        console.log(data)
                        setUser({
                            name:data.name,
                            email:data.email
                        })
                  });
               }
              else{
                  setLoggedIn(<Redirect to ="/"/>);
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
            {loggedIn}
            <HyperopsNavbar/>
            <Landing/>
            <Booking name = {user.name} email = {user.email}/>
            <Schedule/>
        </div>
    )
}

export default ClientPage
