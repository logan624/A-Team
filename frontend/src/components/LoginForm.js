import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called");
    try {
      // Validate the username and password
      if (!username || !password) {
        setError('Please enter both a username and password');
        return;
      }
      
      const response = await axios.post('http://localhost:5000/users/login', {
        username,
        password,
      });
      console.log(response);
      if (response.status === 200) {
        setError("");
        setAuthenticated(true);
        navigate('/');
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };
  

  

  

  const validatePassword = () => {
    let confirmation = window.confirm(
      "Are You Sure You'd Like to Go to Profit Estimation?"
    );

    if (confirmation) {
      let password = window.prompt('Please Enter your Password');

      if (password === 'password') {
        navigate('/Profits');
      } else {
        window.alert('Password Incorrect');
      }
    } else {
      // Do nothing
    }
  };

  return (
    <main>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar>
            <span class="logo">
              <a href="/">
                <img
                  src={require('../logo_bbay.png')}
                  height="33"
                  width="120"
                  alt="B-Bay Logo"
                />
              </a>
            </span>
          </Navbar>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Item Registration"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="List">Item List</NavDropdown.Item>
                <NavDropdown.Item href="add">Add Item</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link>User Account Management</Nav.Link>
            </Nav>
            <Nav>
              <button
                onClick={() => validatePassword()}
                className={'btn btn-secondary'}
              >
                Profit Estimation
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1 className={'text-center'}>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <button type="submit" className={'btn btn-primary'}>
          Login
        </button>
      </Form>
    </main>
  );
}

export default LoginForm;
