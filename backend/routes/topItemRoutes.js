import express from "express";

import {getTopItemRecs} from "../controller/topItemRecs";

const router = express.Router();

router.get('/top_items', getTopItemRecs);

export default router;
