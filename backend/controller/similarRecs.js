import similar_user_recs from "../model/similarRecsModel.js";

export const getAllSimilarRecs = async (req, res) => {
    try {
        const recs = await similar_user_recs.findAll(); 

        res.json(recs);
    } catch (error) {
        res.json(error);
    }
}

export const getSimilarRecsPerUser = async (req, res) => {
    try {
        const recs_per_user = await similar_user_recs.findAll({
            where: { username: req.params.username },
            limit: 3
        }); 

        res.json(recs_per_user);
    } catch (error) {
        res.json(error);
    }
}
