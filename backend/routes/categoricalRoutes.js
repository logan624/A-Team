import express from "express";

import {getCategoricalRecs} from "../controller/categoricalRecs.js";

const router = express.Router();

router.get('/top_categories', getCategoricalRecs);

export default router;

// import express from "express";

// import {getAllUsers, getUserById} from "../controller/users.js";

// const router = express.Router();

// router.get('/', getAllUsers);
// router.get('/:username', getUserById);

// export default router;
