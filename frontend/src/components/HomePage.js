import {useState, useEffect, useContext} from "react";
import axios from "axios";
// import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthContext from "./AuthContext";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';

const HomePage = () => {
    const navigate = useNavigate();
    const [categorical_recs, setCategoricalRecs] = useState([]);
    const { username: authUsername, password, authPassword } = useContext(AuthContext);
    const { logout } = useContext(AuthContext);
    const getCategoricalRecs = async () => {
        const response = await axios.get(`http://localhost:5000/categorical/recommendations/${authUsername}`);
        setCategoricalRecs(response.data);
    }
    
    const [similar_recs, setSimilarRecs] = useState([]);
    const getSimilarRecs = async () => {
        const response_two = await axios.get(`http://localhost:5000/similar/recommendations/${authUsername}`);
        setSimilarRecs(response_two.data);
    }

    const [top_item_recs, setTopItemRecs] = useState([]);
    const getTopItemRecs = async () => {
        const response_three = await axios.get(`http://localhost:5000/top_item_recommendations`);
        setTopItemRecs(response_three.data);
    }

    const validatePassword = () => {
        let confirmation = window.confirm("Are you sure you would like to be redirected to the Profit Estimation page?");

        if (confirmation)
        {
            let password = window.prompt("Please Enter your Password");

            if (password === "password")
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

    useEffect(() => {
        getCategoricalRecs().then(m => console.log("Successfully retrieved the categorical recommendations!"));
        getSimilarRecs().then(m => console.log("Successfully retrieved the similar recommendations!"));
        getTopItemRecs().then(m => console.log("Successfully retrieved the top item recommendations!"));
    }, []);
    console.log(JSON.stringify(categorical_recs));
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
                    <button onClick={logout}  className="btn btn-secondary">Logout</button>
                </Container>
            </Navbar>
            <h1 style={{marginLeft:"17%", marginRight:"17%", fontSize:"200%", marginTop:".4em", color:"DarkSlateGrey"}}>
                Based off your top category, we thought you might like:
            </h1>
            <div class = "row" style={{ marginLeft:"5.5em"}}>
                {categorical_recs.map((categorical_rec) => (
                    <MDBCard style={{ width: "21rem", borderRadius:'10px', marginRight: ".75em", marginLeft: "1em"}}>
                    <MDBCardBody>
                        <MDBCardTitle>Name: {categorical_rec.name}</MDBCardTitle>
                        <MDBCardText>Seller: {categorical_rec.sellerID}</MDBCardText>
                        <MDBCardText>Use: {categorical_rec.use}</MDBCardText>
                        <MDBCardText>Category: {categorical_rec.category}</MDBCardText>
                        <MDBCardText>Price: {categorical_rec.buyNowPrice}</MDBCardText>
                        <MDBBtn>View Item</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                ))}
            </div>
                <h1 style={{marginLeft:"33%", marginRight:"32%", fontSize:"200%", marginTop:".4em", color:"DarkSlateGrey"}}>
                    People Like You Also Bought:
                </h1>
                <div class = "row" style={{marginLeft:"5.5em"}}>
                {similar_recs.map((similar_rec) => (
                    <MDBCard style={{ width: "21rem", borderRadius:'10px', marginRight: ".75em", marginLeft: "1em"}}>
                    <MDBCardBody>
                        <MDBCardTitle>Name: {similar_rec.name}</MDBCardTitle>
                        <MDBCardText>Seller: {similar_rec.sellerID}</MDBCardText>
                        <MDBCardText>Use: {similar_rec.use}</MDBCardText>
                        <MDBCardText>Category: {similar_rec.category}</MDBCardText>
                        <MDBCardText>Price: {similar_rec.buyNowPrice}</MDBCardText>
                        <MDBBtn>View Item</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                ))}
            </div>
                <h1 style={{marginLeft:"20%", marginRight:"20%", fontSize:"200%", marginTop:".4em", color:"DarkSlateGrey"}}>
                    Join the Bandwagon! <small>Shop the hottest items on B-Bay!</small>
                </h1>
                <div class ="row" style={{marginLeft:"5.5em", paddingBottom:"2em"}}>
                    {top_item_recs.map((top_item_rec) => (
                        <MDBCard style={{ width: "21rem", borderRadius:'10px', marginRight: ".75em", marginLeft: "1em"}}>
                            <MDBCardBody>
                                <MDBCardTitle>Name: {top_item_rec.name}</MDBCardTitle>
                                <MDBCardText>Seller: {top_item_rec.sellerID}</MDBCardText>
                                <MDBCardText>Use: {top_item_rec.use}</MDBCardText>
                                <MDBCardText>Category: {top_item_rec.category}</MDBCardText>
                                <MDBCardText>Price: {top_item_rec.buyNowPrice}</MDBCardText>
                                <MDBBtn>View Item</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    ))}
            </div>
        </main>
    )
}

export default HomePage;
