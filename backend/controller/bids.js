import bid from "../model/bidModel.js";

export const getAllBids = async (req, res) => {
    try {
        const bids = await bid.findAll();
        res.json(bids);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getBidById = async (req, res) => {
    try {
        const bidToSend = await bid.findAll({
            where: {bidID: req.params.bidID}
        });
        res.json(bidToSend[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}