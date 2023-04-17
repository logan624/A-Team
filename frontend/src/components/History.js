import React, { useState, useEffect, useContext } from 'react';
import AuthContext from './AuthContext';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBTypography } from 'mdb-react-ui-kit';
import './BbayCSS/fonts.css';

const History = () => {
  const { username , password:authPassword} = useContext(AuthContext);
  const [history, setHistory] = useState([]);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response =await axios.get(`http://localhost:5000/api/view-history/${username}`)
        setHistory(response.data);
      } catch (error) {
        console.error('Error fetching view history:', error);
      }
    };

    if (username) {
      fetchHistory();
    }
  }, [username]);
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
    <Container>
        <MDBTypography variant="h1" className="text-center my-4 freeline-font">Past Transactions</MDBTypography>
        <div className="d-flex flex-wrap justify-content-center">
          {history.map((item, index) => (
            <MDBCard key={index} className="m-3" style={{ width: '20rem' }}>
              <MDBCardBody>
                <MDBCardTitle className="text-center">
                  <strong>{item.name}</strong>
                </MDBCardTitle>
                <ul>
                  <li>
                    <strong>Category:</strong> {item.category}
                  </li>
                  <li>
                    <strong>Transaction Date:</strong> {item.transactDate}
                  </li>
                  <li>
                    <strong>Price:</strong> {item.bidPrice}
                  </li>
                </ul>
              </MDBCardBody>
            </MDBCard>
          ))}
        </div>
        <div className="d-flex flex-wrap justify-content-center">
        <Link to={'/view-history'} className="btn btn-secondary">Cancel</Link>
        </div>
      </Container>
    </main>
  );
};

export default History;
