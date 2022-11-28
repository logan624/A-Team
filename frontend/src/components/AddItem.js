import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import Dropdown from 'react-bootstrap/Dropdown';

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
        navigate('/');
    }
    return (
        <main>
            <form onSubmit={handleSubmit(saveItem)} className={"col-md-6 mx-auto"}>
                <h1 className={"text-center"}>Add Item</h1>
                <hr/>
                <label htmlFor={"item_name"}>Item Name:</label>
                <input type={"text"} className={"form-control"} id={"item_name"} name={"item_name"}
                       {...register('item_name', {required: true})} placeholder={"Nike Air Force One's"}
                       value={item_name}
                       onChange={(e) => setItemName(e.target.value)} autoFocus
                />
                {errors.category?.type === 'required' && <small>The item name is required</small>}
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Category
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item></Dropdown.Item>
                        <Dropdown.Item></Dropdown.Item>
                        <Dropdown.Item></Dropdown.Item>
                        <Dropdown.Item></Dropdown.Item>
                        <Dropdown.Item></Dropdown.Item>
                        <Dropdown.Item></Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
                {/* <input type={"text"} className={"form-control"} id={"category"} name={"category"}
                       {...register('category', {required: true})} placeholder={""}
                       value={category} onChange={(e) => setCategory(e.target.value)}
                /> */}
                {errors.category?.type === 'required' && <small>The category is required.</small>}
                <label htmlFor={"subcategory"}>Subcategory:</label>
                <input type={"text"} className={"form-control"} id={"subcategory"} name={"subcategory"}
                       {...register('subcategory', {required: true})} placeholder={""}
                       value={subcategory} onChange={(e) => setSubcategory(e.target.value)}
                />
                {errors.use?.type === 'required' && <small>The subcategory is required</small>}
                <label htmlFor={"use"}>Use:</label>
                <input type={"text"} className={"form-control"} id={"use"} name={"use"}
                       {...register('use', {required: true})} placeholder={"Ex: SD"}
                       value={use} onChange={(e) => setUse(e.target.value)}
                />
                <label htmlFor={"buy_now_price"}>Buy Now Price:</label>
                <input type={"text"} className={"form-control"} id={"buy_now_price"} name={"buy_now_price"}
                       {...register('buy_now_price', {required: true})} placeholder={"Ex: $65.00"}
                       value={buy_now_price} onChange={(e) => setBuyNowPrice(e.target.value)}
                />
                {errors.buy_now_price?.type === 'required' && <small>The buy now price is required</small>}
                <div className={"text-center"}>
                    <button className={"btn btn-secondary me-2"}>Add Item</button>
                    <Link to={"/"} className={"btn btn-secondary"}>Cancel</Link>
                </div>
            </form>
        </main>
    )
}

export default AddItem;
