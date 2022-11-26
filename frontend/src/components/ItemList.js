import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

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
            <table className={"table table-hover table-striped"} aria-label={"Items table"}>
                <h1>Item List</h1>
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
