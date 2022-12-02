import db from "../config/database.js";

export const top_items_per_user = await db.query(
    "SELECT item.category, COUNT(item.itemID) AS itemsBought FROM transaction,bid,item WHERE transaction.bidID = bid.bidID AND bid.itemID = item.itemID GROUP BY item.category;");
