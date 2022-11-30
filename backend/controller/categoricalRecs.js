import {top_categories, top_user_categories} from "../model/categoriesModel.js";

export const getTopCategories = async (req, res) => {
    try {
        res.json(top_categories[0]);
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
