import React from 'react'
import Info from '../Components/AdminSection/Info';
import UserTable from '../Components/AdminSection/UserTable';
import Footer from '../Components/Footer';
import HyperopsNavbar from '../Components/Navbar';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import URL from '../URL';
const AdminPage = () => {

    const [loggedIn,setLoggedIn] = useState(null);
    const fetchProfile = () =>{

        fetch(`${URL}/users/me/`,{
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
            <Info/>
            <UserTable/>
            <Footer/>
        </div>
    )
}

export default AdminPage
