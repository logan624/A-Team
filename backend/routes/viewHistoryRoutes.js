import express from 'express';
import { getViewHistory, getCurrentBids } from '../controller/viewHistory.js';

const router = express.Router();

router.get('/view-history/:username', getViewHistory);
router.get('/current-bids/:username', getCurrentBids);

export default router;
