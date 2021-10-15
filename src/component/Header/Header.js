import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    // Active Button style
    const activeStyle = {
        fontWeight: "bold",
        color: "#1a0267"
    };

    return (
        <div>
            {/* ================ Start Header Area =================  */}

            <Navbar bg="light" expand="lg" >
                {/* fixed="top" */}
                <Container>
                    <Navbar.Brand href="#">Shikkhangon e-Learning</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to="home" activeStyle={activeStyle} className="navStyle px-3">Home</NavLink>
                            <NavLink to="courses" activeStyle={activeStyle} className="navStyle px-3">Courses</NavLink>
                            <NavLink to="about" activeStyle={activeStyle} className="navStyle px-3">About</NavLink>
                            <NavLink to="contact" activeStyle={activeStyle} className="navStyle px-3">Contact Us</NavLink>
                        </Nav>
                    </Navbar.Collapse >
                </Container >
            </Navbar >

            {/* ================ End Header Area =================  */}
        </div >
    );
};

export default Header;