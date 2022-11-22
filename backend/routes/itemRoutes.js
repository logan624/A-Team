import express from "express";

import {getAllItems, createItem, getItemById, deleteItem} from "../controller/items.js";

const router = express.Router();

router.get('/', getAllItems);
router.get('/:itemID', getItemById);
router.post('/', createItem);
router.delete('/:itemID', deleteItem);

export default router;
