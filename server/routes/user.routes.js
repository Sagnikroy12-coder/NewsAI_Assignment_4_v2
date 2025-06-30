import express from 'express';
import { getUserProfile, saveArticle, getSavedArticles } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/:userId', getUserProfile);
router.post('/:userId/articles', saveArticle);
router.get('/:userId/articles', getSavedArticles);

export default router;