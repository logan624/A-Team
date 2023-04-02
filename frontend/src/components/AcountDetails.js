import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import AuthContext  from "./AuthContext";

const AccountDetails = () => {
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({ description: '' });
  const [loading, setLoading] = useState(true);
  const { username: authUsername, password: authPassword } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

const handleDelete = async () => {
  if (window.confirm("Are you sure you want to delete your account?")) {
    const inputPassword = window.prompt("Please enter your password to confirm:");

    if (inputPassword === authPassword) {
      // Call the API to delete the user account
      await axios.delete(`http://localhost:5000/users/${authUsername}`);
      logout();
      navigate("/");
    } else {
      window.alert("Incorrect password. Account deletion was not performed.");
    }
  }
};

  useEffect(() => {
    // Fetch user details
    const fetchUserDetails = async () => {
      // Replace this with the actual API call to fetch user details by username
      const response = await axios.get(`http://localhost:5000/users/${authUsername}`);
      setUser(response.data);
      const profileResponse = await axios.get(`http://localhost:5000/profile/get-description/${authUsername}`);
      setProfile(profileResponse.data);

      setLoading(false);
    };

    fetchUserDetails();
  }, [authUsername]);

  const handleUpdate = async () => {
    // Call the API to update user details
    await axios.put(`http://localhost:5000/users/update-account-details/${authUsername}`, user);
    navigate("/");
  };

const validatePassword = () => {
    let confirmation = window.confirm("Are you sure you would like to be redirected to the Profit Estimation page?");

    if (confirmation)
    {
        let password = window.prompt("Please Enter your Password");

        if (password === authPassword)
        {
            navigate('/Profits');

        }
        else {
            window.alert("Password Incorrect");
        }
    }
    else
    {

    }
}
const validateUserPassword = () => {
    let confirmation = window.confirm("Are you sure you would like to Edit your Account details?");

    if (confirmation)
    {
        let password = window.prompt("Please Enter your Password");

        if (password === authPassword)
        {
            navigate('/edit-account-details');

        }
        else {
            window.alert("Password Incorrect");
        }
    }
    else
    {

    }
}

  if (loading) {
    return <div>Loading...</div>;
  }

  return (

    <main>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar>
                    <span className="logo">
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
                    <button onClick={logout}  className="btn btn-secondary">Logout</button>

                </Container>
            </Navbar>
            <Container>
        <h1 className="text-center my-4">Account Details</h1>
        <Card>
          <Card.Header>Username</Card.Header>
          <Card.Body>
            <Card.Text>{user.username}</Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-4">
          <Card.Header>Personal Details</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Name:</strong> {user.firstName} {user.lastName}
              <br></br>
              <strong>Description: </strong>{profile.description}
            </ListGroup.Item>
          </ListGroup>
        </Card>

        <Card className="mt-4">
          <Card.Header>Contact Information</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Email:</strong> {user.email}
              <br></br>
              <strong>Phone: </strong> {user.phoneNum}
            </ListGroup.Item>
          </ListGroup>
        </Card>

        <Card className="mt-4">
          <Card.Header>Address</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Street Address: </strong> {user.streetAddress}
              <br></br>
              <strong>State: </strong> {user.state}
              <br></br>
              <strong>City: </strong> {user.city}             
            </ListGroup.Item>
          </ListGroup>
        </Card>

        <div className="d-flex justify-content-center mt-4">
          <Button
            variant="primary"
            onClick={() => validateUserPassword()} 
            className={"btn btn-secondary me-2"}
          >
            Edit Account Details
          </Button>
          <Button  type = "button"onClick={handleDelete}className={"btn btn-secondary me-2"}>
            Delete Account
          </Button>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Link to="/">Cancel</Link>
        </div>
      </Container>
    </main>
  );
};

export default AccountDetails;
