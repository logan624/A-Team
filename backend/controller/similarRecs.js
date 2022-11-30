import similar_user_recs from "../model/similarRecsModel.js";

export const getSimilarRecs = async (req, res) => {
    try {
        res.json(similar_user_recs);
    } catch (error) {
        res.json(error);
    }
}
