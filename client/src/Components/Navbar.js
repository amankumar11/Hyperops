import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import virginlogo from '../assets/img/virginLogo.png';

const HyperopsNavbar = () => {

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

    useEffect(( () => {
        fetchProfile();
    }),[])


    return (
        <div>
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
                    <Nav.Link href="#booking">Book</Nav.Link>
                    <Nav.Link href="#schedule">Schedule</Nav.Link>
                    <Nav.Link  style = {{transform: "translate(500%,0px)", fontWeight:"bold"}}  >Hi, {userName}</Nav.Link>
                </Nav>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default HyperopsNavbar
