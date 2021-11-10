import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import virginlogo from '../assets/img/virginLogo.png';

const navbar = () => {
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
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default navbar
