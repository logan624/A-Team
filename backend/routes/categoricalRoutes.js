import express from "express";

import {getCategoricalRecs, getCategoricalRecsPerUser} from "../controller/categoricalRecs.js";

const router = express.Router();

router.get('/recommendations', getCategoricalRecs);
router.get('/recommendations/:username', getCategoricalRecsPerUser);

export default router;
