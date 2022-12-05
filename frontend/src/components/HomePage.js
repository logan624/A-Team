import {useState, useEffect} from "react";
import axios from "axios";
// import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
    const getCategoricalRecs = async () => {
        const response = await axios.get(`http://localhost:5000/categorical/recommendations/Jeremy_wade31`);
        setCategoricalRecs(response.data);
    }
    
    const [similar_recs, setSimilarRecs] = useState([]);
    const getSimilarRecs = async () => {
        const response_two = await axios.get(`http://localhost:5000/similar/recommendations/jeremy_wade31`);
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
                        <Nav.Link>User Account Management</Nav.Link>
                    </Nav>
                    <Nav>
                        <button onClick={() => validatePassword()} className={"btn btn-secondary"}>Profit Estimation</button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h1 style={{marginLeft:"17%", marginRight:"17%", fontSize:"200%", marginTop:".4em", color:"DarkSlateGrey"}}>
                Based off your top category, we thought you might like:
            </h1>;
            <div class = "row" style={{ marginLeft:"5.5em"}}>
                {categorical_recs.map((categorical_rec) => (
                    <MDBCard style={{ width: "21rem", borderRadius:'10px', marginRight: ".75em", marginLeft: "1em"}}>
                    <MDBCardImage src='' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>{categorical_rec.name}</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn>Button</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                ))}
            </div>
                <h1 style={{marginLeft:"33%", marginRight:"32%", fontSize:"200%", marginTop:".4em", color:"DarkSlateGrey"}}>
                    People Like You Also Bought:
                </h1>;
                <div class = "row" style={{marginLeft:"5.5em"}}>
                {similar_recs.map((similar_rec) => (
                    <MDBCard style={{ width: "21rem", borderRadius:'10px', marginRight: ".75em", marginLeft: "1em"}}>
                    <MDBCardImage src='' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>{similar_rec.name}</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn>Button</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                ))}
            </div>
                <h1 style={{marginLeft:"20%", marginRight:"20%", fontSize:"200%", marginTop:".4em", color:"DarkSlateGrey"}}>
                    Join the Bandwagon! <small>Shop the hottest items on B-Bay!</small>
                </h1>;
                <div class ="row" style={{marginLeft:"5.5em", paddingBottom:"2em"}}>
                    {top_item_recs.map((top_item_rec) => (
                        <MDBCard style={{ width: "21rem", borderRadius:'10px', marginRight: ".75em", marginLeft: "1em"}}>
                            <MDBCardImage src='' position='top' alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle>{top_item_rec.name}</MDBCardTitle>
                                <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn>Button</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    ))}
            </div>
        </main>
    )
}

export default HomePage;
