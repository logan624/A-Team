import db from "../config/database.js";

export const top_items_per_category = await db.query(
    "SELECT item.category, COUNT(item.itemID) AS itemsBought FROM transaction,bid,item WHERE transaction.bidID = bid.bidID AND bid.itemID = item.itemID GROUP BY item.category;");

export const top_user_categories = await db.query("SELECT temp.username, temp.category FROM (SELECT user.username, item.category, COUNT(item.itemID) AS itemsBought FROM transaction,bid,item,user WHERE transaction.bidID = bid.bidID AND bid.itemID = item.itemID AND user.username = bid.username AND bid.itemID GROUP BY user.username, item.category) as temp WHERE temp.itemsBought = (SELECT MAX(temp2.itemsBought) FROM (SELECT user.username, item.category, COUNT(item.itemID) AS itemsBought FROM transaction,bid,item,user WHERE transaction.bidID = bid.bidID AND bid.itemID = item.itemID AND user.username = bid.username AND bid.itemID GROUP BY user.username, item.category) as temp2);");
