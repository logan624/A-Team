import {useState, useContext} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AddUser = () => {
    const [Username, setUsername] = useState('');
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Password, setPassword] = useState('');
    const [AccountType, setAccountType] = useState('User'); //set to User without asking from user 
    const [BirthDate, setBirthDate] = useState('');
    const [Email, setEmail] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [Phone_Number, setPhone_Number] = useState('');
    const [Address ,setAddress] = useState('');
    const [StartDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));// set to current date witout asking user
    const [EndDate, setEndDate] = useState(null);// set to null
    const navigate = useNavigate();
    const [usernameError, setUsernameError] = useState('');
    //const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});

    const validationSchema = yup.object().shape({
        Username: yup.string().required("Username is required"),
        Firstname: yup.string().required("Firstname is required"),
        Lastname: yup.string().required("Lastname is required"),
        Password: yup
          .string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters"),
        BirthDate: yup.string().required("BirthDate is required"),
        Email: yup
          .string()
          .email("Invalid email format")
          .required("Email is required"),
        City: yup.string().required("City is required"),
        State: yup.string().required("State is required"),
        Phone_Number: yup
          .string()
          .required("Phone number is required")
          .matches(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/, "Invalid phone number format"),
        Address: yup.string().required("Address is required"),
      });
    
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ mode: "onBlur", resolver: yupResolver(validationSchema) });

      const checkUsernameExists = async (username) => {
        try {
          const response = await axios.post("http://localhost:5000/users/check-username", {
            username,
          });
          return response.data.exists;
        } catch (error) {
          console.error("Error checking username:", error);
          return false;
        }
      };
    const saveUser = async () => {
      setUsernameError('');

      const exists = await checkUsernameExists(Username);

      if (exists) {
        setUsernameError("The username already exists, please choose a different one.");
        return;
      }
        await axios.post('http://localhost:5000/users/signup', {
            username : Username,
            firstName : Firstname,
            lastName : Lastname,
            password : Password,
            accountType: AccountType,
            birthDate : BirthDate,
            email : Email,
            city : City,
            state : State,
            phoneNum : Phone_Number,
            streetAddress: Address,
            accountStartDate : StartDate,
            accountEndDate : EndDate
        });
        navigate('/Login');
        return true;
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
            <form onSubmit={handleSubmit(saveUser)} className={"col-md-6 mx-auto"}>
                <h1 className={"text-center"}>Sign Up</h1>
                <hr/>
                <Form.Label>Enter a Username:</Form.Label>
                <input type={"text"} className={"form-control"} id={"Username"} name={"Username"}
                {...register('Username', {
                    required: true
                })}
                placeholder={"BobisCool21"}
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
            />
            
            {errors.Username && (
              <small style={{ color: "red" }}>{errors.Username.message}</small>
            )}
            {/* Display the usernameError message if it exists */}
            {usernameError && (
              <small style={{ color: "red" }}>{usernameError}</small>
            )}
            <>
             <br />
            </>

            <Form.Label>Firstname:</Form.Label>
           <input type={"text"} className={"form-control"} id={"Firstname"} name={"Firstname"}
                {...register('Firstname', {
                    required: true     
                })}
                placeholder={"Alex"}
                value={Firstname}
                onChange={(e) => setFirstname(e.target.value)}
                //autoFocus
            />
            
            {errors.Firstname && (
              <small style={{ color: "red" }}>{errors.Firstname.message}</small>
            )}
            <>
             <br />
            </>

            <Form.Label>Lastname:</Form.Label>
            <input type={"text"} className={"form-control"} id={"Lastname"} name={"Lastname"}
                {...register('Lastname', {
                    required: true
                })}
                placeholder={"Hoy"}
                value={Lastname}
                onChange={(e) => setLastname(e.target.value)}
               // autoFocus
            />

            {errors.Lastname && (
              <small style={{ color: "red" }}>{errors.Lastname.message}</small>
            )}
            <>
             <br />
            </>

            <Form.Label>Password:</Form.Label>
            <input type={"text"} className={"form-control"} id={"Password"} name={"Password"}
                {...register('Password', {
                    required: true
                })}
                //placeholder={"Hoy"}
                //type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}

            />

            {errors.Password && (
              <small style={{ color: "red" }}>{errors.Password.message}</small>
            )}
            <>
             <br />
            </>

            <Form.Label>Birthday:</Form.Label>
            <input type={"text"} className={"form-control"} id={"Birthdate"} name={"BirthDate"}
                {...register('BirthDate', {
                    required: true
                })}
                placeholder={"ex: YYYY-MM-DD"}
                value={BirthDate}
                onChange={(e) => setBirthDate(e.target.value)}
            />

            {errors.BirthDate && (
              <small style={{ color: "red" }}>{errors.BirthDate.message}</small>
            )}
            <>
             <br />
            </>
            
                    {/* Email */}
        <Form.Label>Email:</Form.Label>
        <input
          type={"email"}
          className={"form-control"}
          id={"Email"}
          name={"Email"}
          {...register("Email", {
            required: true
          })}
          placeholder={"example@email.com"}
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {errors.Email && (
            <small style={{ color: "red" }}>{errors.Email.message}</small> 
        )}
        <>
         <br />
        </>

        {/* City */}
        <Form.Label>City:</Form.Label>
        <input
          type={"text"}
          className={"form-control"}
          id={"City"}
          name={"City"}
          {...register("City", {
            required: true
          })}
          placeholder={"New York"}
          value={City}
          onChange={(e) => setCity(e.target.value)}
          //autoFocus
        />

        {errors.City && (
            <small style={{ color: "red" }}>{errors.City.message}</small> 
        )}
        <>
         <br />
        </>
        {/* State */}
        <Form.Label>State:</Form.Label>
        <input
          type={"text"}
          className={"form-control"}
          id={"State"}
          name={"State"}
          {...register("State", {
            required: true,
            pattern: {
                value: /^[a-zA-Z]{2}$/,
                message: "Please enter a valid state abbreviation",
            },
          })}
          maxLength={2}
          placeholder={"NY"}
          value={State}
          
          onChange={(e) => setState(e.target.value)}
        />
        
        {errors.State && (
            <small style={{ color: "red" }}>{errors.State.message}</small> 
        )}
        <>
         <br />
        </>

        {/* Phone Number */}
        <Form.Label>Phone Number:</Form.Label>
        <input
          type={"text"}
          className={"form-control"}
          id={"Phone_Number"}
          name={"Phone_Number"}
          {...register("Phone_Number", {
            required: true,
          })}
          placeholder={"(123)-456-7890"}
          value={Phone_Number}
          onChange={(e) => setPhone_Number(e.target.value)}
         // autoFocus
        />

        {errors.Phone_Number && (
            <small style={{ color: "red" }}>{errors.Phone_Number.message}</small> 
        )}
        <>
         <br />
        </>

        {/* Address */}
        <Form.Label>Address:</Form.Label>
        <input
          type={"text"}
          className={"form-control"}
          id={"Address"}
          name={"Address"}
          {...register("Address", {
            required: true
          })}
          placeholder={"123 Main St"}
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {errors.Address && (
            <small style={{ color: "red" }}>{errors.Address.message}</small> 
        )}
        <>
         <br />
        </>
            
               
                <div className={"text-center"}>
                        <button className={"btn btn-secondary me-2"}>Sign Up</button>
                    <Link to={"/"} className={"btn btn-secondary"}>Cancel</Link>
                </div>
            </form>
        </main>
    )
}

export default AddUser;