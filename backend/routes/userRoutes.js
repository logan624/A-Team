import express from "express";
import { getAllUsers, getUserById, login, signup, checkUsername, deleteUser, updateAccountDetails } from "../controller/users.js";

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the users route');
});

router.get('/:username', getUserById);
// Add the Login route to handle POST requests
router.post('/login', login);

router.post('/signup', signup);

//router.post('/', );

// Add the new route for checking if a username exists
router.post('/check-username', checkUsername);

router.delete('/:username', deleteUser);

router.put('/update-account-details/:username', updateAccountDetails);

export default router;


