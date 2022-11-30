import express from "express";

import {getProfitEstimation} from "../controller/profitEstimation.js";

const router = express.Router();

router.get('/', getProfitEstimation);

export default router;
