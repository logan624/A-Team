import {useState, useEffect} from "react"; 
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const ItemList = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const getItems = async () => {
        const response = await axios.get(`http://localhost:5000/items`);
        setItems(response.data);
    }
    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:5000/items/${id}`);
        await getItems();
    }
    const validateInputs = (item_id) =>{
        let confirmation = window.confirm("Are you sure you would like to remove this item?");

        if(confirmation)
        {
            let password = window.prompt("Please Enter your Password");

            if (password === "password")
            {
                deleteItem(item_id);
                window.alert("Item Successfully Deleted");
            }
            else{
                window.alert("Password Incorrect");
            }
        }
        else
        {

        }
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
        getItems().then(m => console.log("Successfully retrieved the items!"));
    }, []);
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
                        <Nav.Link href ="Login">User Account Management</Nav.Link>
                    </Nav>
                    <Nav>
                    <button onClick={() => validatePassword()} className={"btn btn-secondary"}>Profit Estimation</button>
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
                        <td>${item.buyNowPrice}</td>
                        <td>

                            <button onClick={() => validateInputs(item.itemID)} className={"btn btn-secondary"}
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
