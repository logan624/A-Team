import {useState} from "react";
import axios from "axios";
import {isRouteErrorResponse, Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

const AddItem = () => {
    const [item_name, setItemName] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [use, setUse] = useState('');
    const [buy_now_price, setBuyNowPrice] = useState('');
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});
    const saveItem = async () => {
        await axios.post('http://localhost:5000/items', {
            name: item_name,
            category: category,
            subcategory: subcategory,
            use: use,
            buyNowPrice: buy_now_price,
            sellerID: "Jeremy_wade31"
        });
        navigate('/List');

        return true;
    }
    const validatePassword = () =>{
        let confirmation = window.confirm("Are You Sure You'd Like to Go to Profit Estimation?");

        if(confirmation)
        {
            let password = window.prompt("Please Enter your Password");

            if (password === "password")
            {
                navigate('/Profits');
               
            }
            else{
                window.alert("Password Incorrect");
            }
        }
        else
        {

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
                        <Nav.Link>User Account Management</Nav.Link>
                    </Nav>
                    <Nav>
                    <button onClick={() => validatePassword()} className={"btn btn-secondary"}>Profit Estimation</button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <form onSubmit={handleSubmit(saveItem)} className={"col-md-6 mx-auto"}>
            {/* <Form.Item
            rules = {[{  max:10, message: "length should be less then 10 letters!"}]}/>
            <Input placeholder="Username"/>
            <Form.Item/> */}
                <h1 className={"text-center"}>Add Item</h1>
                <hr/>
                <label htmlFor={"item_name"}>Item Name:</label>
                <input type={"text"} className={"form-control"} id={"item_name"} name={"item_name"}
                       {
                        //here is where i think i need to fix the character input
                        ...register('item_name', {required: true, minLength: 3, maxLength: 30, })} placeholder={"Nike Air Force One's"}
                       value={item_name}
                       onChange={(e) => setItemName(e.target.value)} autoFocus
                />
                    {errors.item_name?.type === 'required' && <small style= {{color: "red"}}> Item Name is Required</small>}
                    {errors.item_name?.type === 'minLength' && <small style= {{color: "red"}}> Item Name must be at Least 3 Characters </small>}
                    {errors.item_name?.type === 'maxLength' && <small style= {{color: "red"}}> Item Name must be Less than 30 Characters</small>}
                <Form.Group controlId="formBasicSelect">
                        <Form.Label>Category(Recommended):</Form.Label>
                        <Form.Control
                        // <input type = {"category_name"} className = {"form-control"} id={'category_name'} name = {"category_name"}/>
                        as="select"
                        value={category}    
                        onChange={e => {
                            console.log("e.target.value", e.target.value);
                            setCategory(e.target.value);
                        }}
                        >
                    <option>Select a Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Men's Clothing">Men's Clothing</option>
                    <option value="Women's Clothing">Women's Clothing</option>
                    <option value="Home Improvement">Home Improvement</option>
                    <option value="Hobbies">Hobbies</option>
                    </Form.Control>
                    </Form.Group>
                    
                    {/* {errors.category.value === "Select a Category" && <small style= {{color: "red"}}>Choose one of the other options</small>} */}


                <Form.Group controlId="formBasicSelect">

                        <Form.Label>Subcategory(Recommended):</Form.Label>
                        <Form.Control
                        as="select"
                        value={subcategory}
                        onChange={e => {
                            console.log("e.target.value", e.target.value);
                            setSubcategory(e.target.value);
                        }}
                        >
                    <option>Select a Subcategory </option>
                    <option value="Gaming">Gaming</option>
                    <option value="Audio">Audio</option>
                    <option value="TV">TV</option>
                    <option value="Computers">Computers</option>
                    <option value="Cameras">Cameras</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Outerwear">Outerwear</option>
                    <option value="Pool Wear">Pool Wear</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Sporting Goods">Sporting Goods</option>
                    <option value="Board Games">Board Games</option>
                    <option value="Tools">Tools</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Bath">Bath</option>
                    <option value="Smart Home">Smart Home</option>
                    </Form.Control>
                    </Form.Group>


                <Form.Group controlId="formBasicSelect">
                        <Form.Label>Use:</Form.Label>
                        <Form.Control
                        as="select"
                        value={use}
                        onChange={e => {
                            console.log("e.target.value", e.target.value);
                            setUse(e.target.value);
                        }}
                        >
                        {/* <option>Select a Usage</option>     */}
                        <option value="New">New</option>
                        <option value="Lightly Used">Lightly Used</option>
                        <option value="Moderatly Used">Moderatly Used</option>
                        <option value="Very Used">Very Used</option>
                        if(value.length === 0)
                        {
                            console.log("We made it")
                        }
                        </Form.Control>
                    </Form.Group>

                <label htmlFor={"buy_now_price"}>Buy Now Price:</label>
                <input type={"text"} className={"form-control"} id={"buy_now_price"} name={"buy_now_price"}
                       {...register('buy_now_price', {required: true, min: 0, validate: true})} placeholder={"Ex: 65.00"}
                       value={buy_now_price} onChange={(e) => setBuyNowPrice(e.target.value)}
                />

                {errors.buy_now_price?.type === 'required' && <small style= {{color: "red"}}> Buy Now Price is Required</small>}
                {errors.buy_now_price?.type === 'min'&& <small small style= {{color: "red"}}> Buy Now Price must be a Positive Number</small>}
                {errors.buy_now_price?.type !== 'valueAsNumber'&& <small small style= {{color: "red"}}> Buy Now Price must be a Positive Number</small>}
                {/* {errors.buy_now_price?.value === '0' && <small style= {{color: "red"}}>Choose one of the other options</small>} */}

                <div className={"text-center"}>
                        <button className={"btn btn-secondary me-2"}>Add Item</button>
                    <Link to={"/List"} className={"btn btn-secondary"}>Cancel</Link>
                </div>
            </form>
        </main>
    )
}

export default AddItem;
