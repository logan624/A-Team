import React, { useState, useEffect, useContext } from 'react';
import {Link, useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthContext  from "./AuthContext";
import './styles.css';

const ViewHistory = () => {
  const { password: authPassword} = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const validatePassword = () => {
    let confirmation = window.confirm("Are You Sure You'd Like to Go to Profit Estimation?");

    if (confirmation) {
      let password = window.prompt("Please Enter your Password");

      if (password === authPassword) {
        navigate('/Profits');
      } else {
        window.alert("Password Incorrect");
      }
    } else {

    }
  }


  return (
    <main>
                    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <Navbar>
                <span class="logo">
                    <a href="/">
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Nav>
            <Nav className="me-auto">
                <NavDropdown title="User Account Management" id="collasible-nav-dropdown">
                <NavDropdown.Item href="login">Login</NavDropdown.Item>
                <NavDropdown.Item href="signup">Sign Up</NavDropdown.Item>
                <NavDropdown.Item href="Account">Account Details</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
            <button onClick={() => validatePassword()} className={"btn btn-secondary"}>Profit Estimation</button>
            </Nav>
            <Nav>
            &nbsp;
            </Nav>
            </Navbar.Collapse>
            <button onClick={logout} className="btn btn-secondary">Logout</button>

        </Container>
        
    </Navbar>
        <div className="buttons-container">
            <Link to={'/view-bids'} className="btn btn-secondary btn-lg">Current Bids</Link>
            <div className="spacer"></div>
            <Link to={'/transaction-history'} className="btn btn-secondary btn-lg">Past Transactions</Link>
        </div>
    </main>
  );
};

export default ViewHistory;
