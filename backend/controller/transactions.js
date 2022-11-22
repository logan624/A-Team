import transaction from "../model/transactionModel.js";

export const getAllTransactions = async (req, res) => {
    try {
        const transactions = await transaction.findAll();
        res.json(transactions);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getTransactionById = async (req, res) => {
    try {
        const transactionToSend = await transaction.findAll({
            where: {transactionID: req.params.transactionID}
        });
        res.json(transactionToSend[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}