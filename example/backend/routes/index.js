import express from "express";

import {getAllUniversities, createUniversity, getUniversityById, updateUniversity, deleteUniversity} from "../controller/universities.js";

const router = express.Router();

router.get('/', getAllUniversities);
router.get('/:id', getUniversityById);
router.post('/', createUniversity);
router.patch('/:id', updateUniversity);
router.delete('/:id', deleteUniversity);

export default router;
