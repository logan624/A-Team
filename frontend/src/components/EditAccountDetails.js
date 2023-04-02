import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as yup from "yup";


const EditAccountDetails = () => {
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({ description: '' });

  const [loading, setLoading] = useState(true);
  const { username: authUsername, password: authPassword } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const validationSchema = yup.object().shape({
    firstName: yup.string().required("Firstname is required"),
    lastName: yup.string().required("Lastname is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    phoneNum: yup
      .string()
      .required("Phone number is required")
      .matches(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/, "Invalid phone number format"),
    streetAddress: yup.string().required("Address is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit", resolver: yupResolver(validationSchema) });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${authUsername}`);
        setUser(response.data);
  
        const profileResponse = await axios.get(`http://localhost:5000/profile/get-description/${authUsername}`);
        setProfile(profileResponse.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
  
    fetchUserDetails();
  }, [authUsername]);

  const handleUpdate = async () => {
    await axios.put(`http://localhost:5000/users/update-account-details/${authUsername}`, user);
    await axios.put(`http://localhost:5000/profile/update-description/${authUsername}`, { description: profile.description || '' });

    navigate("/Account");
  };
  

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
      <h1 className={"text-center"}>Edit Account Details</h1>
      <Form onSubmit={handleSubmit(handleUpdate)} noValidate>
        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            defaultValue={profile.description || ""}
            onChange={(e) => setProfile({ ...profile, description: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="firstName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              {...register("firstName")}
              defaultValue={user.firstName || ""}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
            {errors.firstName && (
              <small style={{ color: "red" }}>{errors.firstName.message}</small>
            )}
          </Form.Group>

          <Form.Group controlId="lastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              {...register("lastName")}
              defaultValue={user.lastName || ""}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
            {errors.lastName && (
              <small style={{ color: "red" }}>{errors.lastName.message}</small>
            )}
          </Form.Group>

          {/* ... */}

          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="text"
              {...register("password")}
              defaultValue={user.password || ""}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            {errors.password && (
              <small style={{ color: "red" }}>{errors.password.message}</small>
            )}
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="text"
              {...register("email")}
              defaultValue={user.email || ""}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            {errors.email && (
              <small style={{ color: "red" }}>{errors.email.message}</small>
            )}
          </Form.Group>

          <Form.Group controlId="Phone">
            <Form.Label>Phone:</Form.Label>
            <Form.Control
              type="text"
              {...register("phoneNum")}
              defaultValue={user.phoneNum || ""}
              onChange={(e) => setUser({ ...user, phoneNum: e.target.value })}
            />
            {errors.phoneNum && (
              <small style={{ color: "red" }}>{errors.phoneNum.message}</small>
            )}
        </Form.Group>

        <Form.Group controlId="address">
            <Form.Label>Address:</Form.Label>
            <Form.Control
              type="text"
              {...register("streetAddress")}
              defaultValue={user.streetAddress || ""}
              onChange={(e) => setUser({ ...user, streetAddress: e.target.value })}
            />
            {errors.streetAddress && (
              <small style={{ color: "red" }}>{errors.streetAddress.message}</small>
            )}
        </Form.Group>   

        <Form.Group controlId="state">
          <Form.Label>State:</Form.Label>
          <Form.Control
            type="text"
            {...register("state")}
            defaultValue={user.state || ""}
            onChange={(e) => setUser({ ...user, state: e.target.value})}
          />
            {errors.state && (
              <small style={{ color: "red" }}>{errors.state.message}</small>
            )}
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City:</Form.Label>
          <Form.Control
            type="text"
            {...register("city")}
            defaultValue={user.city || ""}
            onChange={(e) => setUser({ ...user, city: e.target.value})}
          />
            {errors.city && (
              <small style={{ color: "red" }}>{errors.city.message}</small>
            )}
        </Form.Group>

        <div className={"text-center"}>
        <button
              type="submit"
              className={"btn btn-secondary me-2"}
              //disabled={!isValid}
            >
              Update Account Details
            </button>

                  <Link to={"/Account"} className={"btn btn-secondary"}>Cancel</Link>
                  {/* {error && <div className="alert alert-danger">{error}</div>} */}
                </div>
        </Form>
    </Container>
    </main>
  );
};

export default EditAccountDetails;
