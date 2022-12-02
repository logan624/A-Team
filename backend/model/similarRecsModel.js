import db from "../config/database.js";

const similar_user_recs = await db.query("SELECT * FROM ITEM");

export default similar_user_recs;
