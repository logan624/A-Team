import express from "express";
import { getAllUsers, getUserById, login } from "../controller/users.js";

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the users route');
});

router.get('/:username', getUserById);
// Add the Login route to handle POST requests
router.post('/login', login);

export default router;

