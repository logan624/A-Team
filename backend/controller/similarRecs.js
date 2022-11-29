import item from "../model/itemModel";
import user from "../model/userModel";
import transaction from "../model/transactionModel";
import bid from "../model/bidModel";

export const similarRecs = async (req, res) => {
    try {
        const items = await item.findAll();
        const bids = await bid.findAll();
        const users = await user.findAll();
        const transactions = await transaction.findAll();
        // res.json(items);

        sequelize.query(
            "SELECT item.category, COUNT(item.itemID)" + 
            "FROM transaction,bid,item" + 
            "WHERE transaction.bidID = bid.bidID AND bid.itemID = item.itemID" +
                  "bid.username = 'Jeremy_wade31'"
            );

        //find a users transaction history
        // find the category of each item
        // Ex. CatArray: {"Electronics" : 4, "Men's Clothing" : 2, "H"}

    } catch (error) {
        // res.json({message: error.message});
    }
}
