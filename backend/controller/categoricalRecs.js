import {categorical_recommendations} from "../model/categoriesModel.js";

export const getCategoricalRecsPerUser = async (req, res) => {
    try {
        const user_specific_recs = await categorical_recommendations.findAll({
            where: { username: req.params.username },
            limit: 3
          });
        res.json(user_specific_recs);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getCategoricalRecs = async (req, res) => {
    try {
        const recs = await categorical_recommendations.findAll();
        res.json(recs);
    } catch (error) {
        res.json({message: error.message});
    }
}
