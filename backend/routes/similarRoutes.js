import express from "express";

import {getSimilarRecs} from "../controller/similarRecs.js";

const router = express.Router();

router.get('/user_similar_recs', getSimilarRecs);

export default router;
