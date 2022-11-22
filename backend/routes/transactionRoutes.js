import express from "express";

import {getAllTransactions, getTransactionById} from "../controller/transactions.js";

const router = express.Router();

router.get('/', getAllTransactions);
router.get('/:transactionID', getTransactionById);

export default router;
