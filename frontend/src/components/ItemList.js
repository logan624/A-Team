import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const getItems = async () => {
        const response = await axios.get(`http://localhost:5000/items`);
        setItems(response.data);
    }
    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:5000/items/${id}`);
        await getItems();
    }
    useEffect(() => {
        getItems().then(m => console.log("Successfully retrieved the items!"));
    }, []);
    return (
        <main>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <table className={"table table-hover table-striped"} aria-label={"Items table"}>
                <h1 style={{textAlign: "center"}}>Item List</h1>
                <thead>
                </thead>
                <tbody>
                <tr>
                    <th scope={"col"}>Name</th>
                    <th scope={"col"}>Category</th>
                    <th scope={"col"}>Subcategory</th>
                    <th scope={"col"}>Use</th>
                    <th scope={"col"}>Seller ID</th>
                    <th scope={"col"}>Buy-Now Price</th>
                    <th scope={"col"}>Delete</th>
                </tr>
                {items.map((item) => (
                    <tr key={item.itemID}>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.subcategory}</td>
                        <td>{item.use}</td>
                        <td>{item.sellerID}</td>
                        <td>{item.buyNowPrice}</td>
                        <td>
                            <button onClick={() => deleteItem(item.itemID)} className={"btn btn-secondary"}
                                    aria-label={`Delete ${item.name}`}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={"text-center"}>
                <Link to={'/add'} className={"btn btn-secondary"}>Add Item</Link>
            </div>
        </main>
    )
}

export default ItemList;
