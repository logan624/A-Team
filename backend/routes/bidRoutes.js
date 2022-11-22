import express from "express";

import {getAllBids, getBidById} from "../controller/bids.js";

const router = express.Router();

router.get('/', getAllBids);
router.get('/:bidID', getBidById);

export default router;
