import express from "express";

import {getAllItemsForUser, createItem, getItemById, deleteItem,getAllItems} from "../controller/items.js";

const router = express.Router();

router.get('/', getAllItemsForUser);
//router.get('/', getAllItems);
router.get('/:itemID', getItemById);
router.post('/', createItem);
router.delete('/:itemID', deleteItem);

export default router;
