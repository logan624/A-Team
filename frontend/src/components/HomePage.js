import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const HomePage = () => {
    return (
        <main>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar>
                        <span class="logo">
                            <a href="/Home">
                                <img src={require('../logo_bbay.png')}  height="33" width="120" alt="B-Bay Logo"/>
                            </a>
                        </span>
                    </Navbar>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Item Registration" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="List">Item List</NavDropdown.Item>
                        <NavDropdown.Item href="add">
                            Add Item
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link>User Account Management</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h1>HomePage</h1>
        </main>
    )
}

export default HomePage;
