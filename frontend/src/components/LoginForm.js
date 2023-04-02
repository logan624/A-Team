import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import AuthContext from "./AuthContext";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const { username: authUsername, setUsername: setAuthUsername, password: authPassword, setPassword: setAuthPassword } = useContext(AuthContext);

  useEffect(() => {
    console.log('Auth username changed:', authUsername);
  }, [authUsername]);

  useEffect(() => {
    console.log('Auth password changed:', authPassword);
  }, [authPassword]);

  // Add this useEffect to check for a saved username in localStorage
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    if (savedUsername && savedPassword) {
      setAuthUsername(savedUsername);
      setAuthPassword(savedPassword);
    }
  }, [setAuthUsername, setAuthPassword]);

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
        setAuthUsername(username);
        setAuthPassword(password);
        console.log("LoginForm.js authUsername:", authUsername);

        const { from } = location.state || { from: { pathname: "/" } };
        navigate(from.pathname);
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error(error);
      setError("Login failed. Please check your credentials.");
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Nav>
              <Nav className="me-auto">
                <NavDropdown title="User Account Management" id="collasible-nav-dropdown">
                <NavDropdown.Item href="login">Login</NavDropdown.Item>
                <NavDropdown.Item href="signup">Sign Up</NavDropdown.Item>
              </NavDropdown>
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
                <div className={"text-center"}>
                  <button type="submit" className={"btn btn-secondary me-2"}>
                    Login
                  </button>
                  <Link to={"/"} className={"btn btn-secondary"}>Cancel</Link>
                  {error && <div className="alert alert-danger">{error}</div>}
                </div>
              </Form>
            </main>
          );
          
          }
          
          export default LoginForm;
          

