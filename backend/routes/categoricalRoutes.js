import express from "express";

import {getTopCategories, getTopCategoriesPerUser, getCategoricalRecs} from "../controller/categoricalRecs.js";

const router = express.Router();

router.get('/top_categories', getTopCategories);
router.get('/user_top_categories', getTopCategoriesPerUser);
router.get('/user_categorical_recs', getCategoricalRecs);


export default router;
