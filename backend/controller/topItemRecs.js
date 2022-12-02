import top_items from "../model/topItemsModel.js";

export const getTopItemRecs = async (req, res) => {
    try {
        const recommended_items = await top_items.findAll();
        res.json(recommended_items);
    } catch (error) {
        res.json(error);
    }
}
