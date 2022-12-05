import {useState, useEffect} from "react";
import axios from "axios";
// import {Link} from "react-router-dom";
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
    const [categorical_recs, setCategoricalRecs] = useState([]);
    const getCategoricalRecs = async () => {
        const response = await axios.get(`http://localhost:5000/categorical/recommendations/Jeremy_wade31`);
        setCategoricalRecs(response.data);
    }
    
    // const [similarRecs, setSimilarRecs] = useState([]);
    // const getSimilarRecs = async () => {
    //     const similar_recs = await axios.get(`http://localhost:5000/similar/recommendations/jeremy_wade31`);
    // }
    // const [topItemRecs, setTopItemRecs] = useState([]);
    // const getTopItemRecs = async () => {
    //     const top_items = await axios.get(`http://localhost:5000/top_item_recommendations`);
    // }
    useEffect(() => {
        getCategoricalRecs().then(m => console.log("Successfully retrieved the items!"));
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <h1>${categorical_recs[0].name}</h1> */}
            {categorical_recs.map((categorical_rec) => (
                <MDBCard>
                <MDBCardImage src='' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>${categorical_rec.name}</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn>Button</MDBBtn>
                </MDBCardBody>
                </MDBCard>
            ))}
        </main>
    )
}

export default HomePage;
