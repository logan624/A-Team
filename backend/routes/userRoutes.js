import express from "express";

import {getAllUsers, getUserById} from "../controller/users.js";

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:username', getUserById);

export default router;
