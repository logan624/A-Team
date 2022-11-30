import average_profit_rec from "../model/profitEstimationModel.js";

export const getProfitEstimation = async (req, res) => {
    try {
        res.json(average_profit_rec);
    } catch (error) {
        res.json(error);
    }
}
