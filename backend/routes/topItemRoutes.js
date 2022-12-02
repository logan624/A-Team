import express from "express";

import {getTopItemRecs} from "../controller/topItemRecs.js";

const router = express.Router();

router.get('/top_item_recommendations', getTopItemRecs);

export default router;
