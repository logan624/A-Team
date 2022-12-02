import db from "../config/database.js";

const top_items = await db.query("SELECT * FROM ITEM");

export default top_items;
