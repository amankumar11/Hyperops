import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import virginlogo from '../assets/img/virginLogo.png';
import { Redirect } from 'react-router-dom';

const HyperopsNavbar = () => {

    const [redirect,setRedirect] = useState(null);
    const [userName,setUserName] = useState(null);
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
                            setUserName(data.name);
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

    const logOutHandler = () => {
        fetch(`http://localhost:5000/users/logout`,{
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
                setRedirect(<Redirect to = "/"></Redirect>)
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
            {redirect}
            <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                <img
                    src={virginlogo}
                    width="130"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link style={{marginTop:"15px"}} href="#booking">Book</Nav.Link>
                    <Nav.Link style={{marginTop:"15px"}} href="#schedule">Schedule</Nav.Link>
                    <Nav.Link  style = {{marginTop:"15px",transform: "translate(330%,0px)", fontWeight:"bold"}}  >Hi, {userName}</Nav.Link>
                    <Nav.Link  style = {{transform: "translate(530%,0px)"}} > <button style={{color:"white",borderRadius:"25px", backgroundColor:"#742CDC",padding:"10px",width:"100px", borderColor:"#742CDC"}} onClick={() => logOutHandler()} >Log Out </button> </Nav.Link>.
                </Nav>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default HyperopsNavbar
