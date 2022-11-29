import item from "../model/itemModel.js";
import user from "../model/userModel.js";
import transaction from "../model/transactionModel.js";
import bid from "../model/bidModel.js";

export const getCategoricalRecs = async (req, res) => {
    try {
        const items = await item.findAll();
        const bids = await bid.findAll();
        const users = await user.findAll();
        const transactions = await transaction.findAll();
        // res.json(items);

        topCategories = sequelize.query(
            "SELECT item.category, COUNT(item.itemID)" + 
            "FROM transaction,bid,item" + 
            "WHERE transaction.bidID = bid.bidID AND bid.itemID = item.itemID" +
                  "bid.username = 'Jeremy_wade31'" +
            "GROUP BY item.category"
        );

        res.json(items);

        //find a users transaction history
        
        // find the category of each item in the transaciton histroy

        //have a category array, and incremenet each category when found in the transaction
        
        // Ex. CatArray: {"Electronics" : 4, "Men's Clothing" : 2, "H"}

        // sort cat array by largest

        // return first category

        // look for top 3 selling items in the category

        //Find the top items sold in each category

    } catch (error) {
        // res.json({message: error.message});
    }
}
