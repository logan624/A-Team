 // export const getAllItems = async (req, res) => {
//     try {
//         const items = await item.findAll({
//             where: { sellerID:"Jeremy_wade31" } //can i import username signed in here instead?
//           });
//         res.json(items);
//     } catch (error) {
//         res.json({message: error.message});
//     }
// }
        // Access the sellerID (authUsername) from the req.query object
        //const sellerID = req.query.sellerID;

        // Filter items based on the sellerID
// export const getAllItems = async (req, res) => {
//     try {

//         const items = await item.findAll({
//             where: { sellerID: req.query.sellerID }
//         });
//         console.log("Fetched items:", items);

//         res.json(items);
//     } catch (error) {
//         res.json({message: error.message});
//     }
// }
 import item from "../model/itemModel.js";

 export const getAllItems = async (req, res) => {
    try {
      const items = await item.findAll();
      console.log("Fetched items:", items);
  
      res.json(items);
    } catch (error) {
      res.json({ message: error.message });
    }
  };


export const getAllItemsForUser = async (req, res) => {
    try {
        const sellerID = req.query.sellerID;
        console.log("Request query:", req.query);

        if (!sellerID) {
            res.status(400).json({message: "Missing sellerID parameter"});
            return;
        }

        const items = await item.findAll({
            where: { sellerID: sellerID }
        });
        console.log("Fetched items:", items);

        res.json(items);
    } catch (error) {
        res.json({message: error.message});
    }
};




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
