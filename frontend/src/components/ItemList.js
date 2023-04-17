import {useState, useEffect,useContext} from "react"; 
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthContext  from "./AuthContext";
import './BbayCSS/fonts.css';


const ItemList = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const { username: authUsername, password: authPassword } = useContext(AuthContext);
    const { logout } = useContext(AuthContext);

    

    //console.log("Username in ItemList:", auth);
    const getItems = async () => {
        
            //const response = await axios.get(`http://localhost:5000/items`);

       const response = await axios.get(`http://localhost:5000/items?sellerID=${authUsername}`);
       console.log("Items received by the frontend:", response.data);

      setItems(Array.isArray(response.data) ? response.data : []);
      //setItems(response.data);

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

            if (password === authPassword)
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


    useEffect(() => {
        
        getItems().then(m => console.log("Successfully retrieved the items!"));
    }, []);
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
                        <NavDropdown.Item href="View-History">History</NavDropdown.Item>
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
            <h1 className={"text-center freeline-font"}>Item List</h1>
            <table className={"table table-hover table-striped"} aria-label={"Items table"}>
                
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
            <p>Logged in user: {authUsername}</p>
        </main>
    )
}

export default ItemList;
