import express from "express";
import { getDescription, updateProfileDescription } from "../controller/profile.js";

const router = express.Router();

router.get('/get-description/:username', getDescription);
router.put('/update-description/:username', updateProfileDescription);

export default router;


