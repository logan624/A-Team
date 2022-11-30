import top_items from "../model/topItemsModel.js";

export const getTopItemRecs = async (req, res) => {
    try {
        res.json(top_items);
    } catch (error) {
        res.json(error);
    }
}
