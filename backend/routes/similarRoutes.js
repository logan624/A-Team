import express from "express";

import {getAllSimilarRecs, getSimilarRecsPerUser} from "../controller/similarRecs.js";

const router = express.Router();

router.get('/recommendations', getAllSimilarRecs);
router.get('/recommendations/:username', getSimilarRecsPerUser);

export default router;
