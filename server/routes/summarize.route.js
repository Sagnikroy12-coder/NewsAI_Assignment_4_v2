import express from 'express';
import { summarizeText } from '../controllers/summarize.controller.js';

const router = express.Router();

router.post('/', summarizeText);

export default router;