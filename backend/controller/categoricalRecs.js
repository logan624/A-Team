import {top_items_per_user} from "../model/categoriesModel.js";

export const getTopCategories = async (req, res) => {
    try {
        users_items = top_items_per_user.findAll({
            where: { username: "Jeremy_wade31"}
        });
        

        res.json(top_items_per_user[0], top_items_per_user[1], top_items_per_user[2]);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getTopCategoriesPerUser = async (req, res) => {
    try {
        res.json(top_user_categories[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getCategoricalRecs = async (req, res) => {
    try {
        res.json();
    } catch (error) {
        res.json({message: error.message});
    }
}
