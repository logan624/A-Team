import item from "../model/itemModel.js";

//  NOTE: Jeremy_wade31 is the default user in this
//        application
export const getAllItems = async (req, res) => {
    try {
        const items = await item.findAll({
           // where: { sellerID: "Jeremy_wade31"}
          });
        res.json(items);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getItemById = async (req, res) => {
    try {
        const itemToSend = await item.findAll({
            where: {itemID: req.params.itemID}
        });
        res.json(itemToSend[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const createItem = async (req, res) => {
    try {
        await item.create(req.body);
        res.json({message: "Item Created"});
    } catch (error) {
        res.json({message: error.message});
    }
}

export const deleteItem = async (req, res) => {
    try {
        await item.destroy({
                where: {itemID: req.params.itemID}
            });
        res.json({message: "Item Destroyed"});
    } catch (error) {
        res.json({message: error.message});

    }
}
